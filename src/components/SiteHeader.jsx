import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

/* ============================================================
   Edison Site Header v3 — mobile: full-width dropdown
   ============================================================ */

const DEFAULT_NAV = [
  {
    label: "Management",
    href: "/services",
    mega: true,
    columns: [
      {
        title: "HOA Management",
        items: [
          { label: "HOA Management", href: "/services/hoa-management", desc: "Single-family + townhome HOAs", parent: true },
          { label: "Single-Family HOA", href: "/services/hoa-management/single-family", desc: "Single-family communities" },
          { label: "Townhome Associations", href: "/services/hoa-management/townhome", desc: "Townhome HOA management" }
        ]
      },
      {
        title: "Condo Management",
        items: [
          { label: "Condo Management", href: "/services/condo-management", desc: "Florida condo associations", parent: true },
          { label: "Milestone Inspections", href: "/services/condo-management/milestone-inspections", desc: "FL SB-4D compliance" },
          { label: "Structural Integrity Reserve Study", href: "/services/condo-management/structural-integrity-reserve-study", desc: "SIRS support & engineer coordination" }
        ]
      },
      {
        title: "Across All Communities",
        items: [
          { label: "HOA Accounting", href: "/services/hoa-accounting", desc: "Budgets, reserves, banking" },
          { label: "Covenant Enforcement", href: "/services/covenant-enforcement", desc: "Dedicated enforcement department" },
          { label: "HOA Collections", href: "/services/hoa-collections", desc: "In-house delinquency & lien workflow" }
        ]
      },
      {
        feature: {
          eyebrow: "Featured",
          title: "Switching companies?",
          body: "The Edison Transition Experience handles onboarding, vendor review, and records digitization in 60-90 days.",
          cta: { label: "Learn more", href: "/solutions/switch-hoa-management-company" }
        }
      }
    ]
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Considering a Management Change", href: "/solutions/switch-hoa-management-company" },
      { label: "Self-Managed to Professional", href: "/solutions/self-managed-hoa" },
      { label: "Modern HOA Management", href: "/solutions/modern-hoa-management" }
    ]
  },
  {
    label: "Edison Education",
    href: "/edison-education",
    mega: true,
    columns: [
      {
        title: "Board governance",
        items: [
          { label: "HOA Bylaws vs CC&Rs", href: "/blog/hoa-bylaws-vs-ccrs", desc: "Governing document hierarchy" }
        ]
      },
      {
        title: "Financial Management",
        items: [
          { label: "HOA Audit Guide", href: "/blog/hoa-audit", desc: "Audit requirements + checklist" },
          { label: "HOA Reserve Study Guide", href: "/blog/hoa-reserve-study-guide", desc: "What boards need to know" }
        ]
      },
      {
        features: [
          {
            eyebrow: "Free for Boards",
            title: "Edison Education",
            body: "Certification-track courses and governance guides built for Florida HOA and condo boards.",
            cta: { label: "Explore program", href: "/edison-education" },
            mark: "/assets/Edison-Education-White.svg"
          },
          {
            theme: "light",
            eyebrow: "Resource Library",
            title: "All Articles",
            body: "Practical guides on Florida HOA law, finance, and governance, free for any board.",
            cta: { label: "Browse articles", href: "/blog" }
          }
        ]
      }
    ]
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Edison", href: "/about" },
      { label: "Meet Our Team", href: "/about/meet-our-team" },
      { label: "Meet Your Management", href: "/about/meet-your-management" },
      { label: "Testimonials", href: "/testimonials" }
    ]
  }
];

const DEFAULT_UTILITY = {
  phone: { label: "(407) 317-5252", href: "tel:4073175252" },
  hours: "M-F 9am-5pm",
  portals: [
    { label: "Estoppel Request", href: "https://www.homewisedocs.com" },
    { label: "VIVE Login", href: "https://app.getvived.com" },
    { label: "Resident Portal", href: "https://edison.cincwebaxis.com" }
  ]
};

/* ---------- Icons ---------- */
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7a2 2 0 011.72 2.03z"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconChevronDown({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ---------- Animated hamburger → X ---------- */
function AnimatedHamburger({ open }) {
  const bar = {
    position: "absolute", left: 0, right: 0, height: 2,
    background: "currentColor", borderRadius: 2,
    transition: "all 300ms cubic-bezier(.4,0,.2,1)"
  };
  return (
    <div style={{ width: 22, height: 16, position: "relative" }} aria-hidden="true">
      <span style={{
        ...bar,
        top: open ? "50%" : 0,
        transform: open ? "translateY(-50%) rotate(45deg)" : "none"
      }}/>
      <span style={{
        ...bar,
        top: "50%",
        transform: open ? "translateY(-50%) scaleX(0)" : "translateY(-50%)",
        opacity: open ? 0 : 1
      }}/>
      <span style={{
        ...bar,
        bottom: open ? "50%" : 0,
        transform: open ? "translateY(50%) rotate(-45deg)" : "none"
      }}/>
    </div>
  );
}

/* ---------- FeatureCard ---------- */
function FeatureCard({ feature, compact = false }) {
  const dark = feature.theme !== "light";
  return (
    <a href={feature.cta.href} style={{
      background: dark ? "var(--edison-navy)" : "var(--edison-teal-pale)",
      color: dark ? "#fff" : "var(--edison-navy)",
      borderRadius: 10, padding: compact ? "18px 20px" : "24px 22px",
      textDecoration: "none", borderBottom: 0,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      gap: compact ? 10 : 16,
      border: dark ? "0" : "1px solid rgba(60,200,200,.25)",
      transition: "transform 220ms var(--ease-standard), box-shadow 220ms",
      flex: compact ? "1" : undefined,
      minHeight: compact ? 0 : 220
    }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(15,29,51,.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
      <div>
        {feature.mark && (
          <img src={feature.mark} alt={feature.title} style={{ height: 26, width: "auto", display: "block", marginBottom: 16, opacity: 0.95 }}/>
        )}
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: dark ? "var(--edison-teal)" : "var(--edison-teal-dark)", marginBottom: 8
        }}>{feature.eyebrow}</div>
        {!feature.mark && (
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: compact ? 16 : 19, lineHeight: 1.25,
            color: dark ? "#fff" : "var(--edison-navy)", marginBottom: compact ? 6 : 10
          }}>{feature.title}</div>
        )}
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5,
          color: dark ? "rgba(255,255,255,.78)" : "var(--edison-text-body)"
        }}>{feature.body}</div>
      </div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
        color: dark ? "var(--edison-teal)" : "var(--edison-teal-dark)",
        display: "inline-flex", alignItems: "center", gap: 6
      }}>
        {feature.cta.label} <span aria-hidden="true">&#x2192;</span>
      </div>
    </a>
  );
}

/* ---------- Mega menu (desktop) ---------- */
function MegaMenu({ columns }) {
  return (
    <div data-mega-menu className="edison-mega-menu" style={{
      position: "absolute", top: "calc(100% + 1px)", left: "50%",
      width: "min(1200px, calc(100vw - 32px))",
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderTop: "2px solid var(--edison-teal)",
      borderRadius: "0 0 12px 12px",
      boxShadow: "0 18px 48px rgba(15,29,51,.14)",
      padding: "32px 36px",
      display: "grid", gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
      gap: 28, zIndex: 70
    }}>
      {columns.map((col, i) => col.feature ? (
        <FeatureCard key={i} feature={col.feature}/>
      ) : col.features ? (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {col.features.map((f, j) => <FeatureCard key={j} feature={f} compact={true}/>)}
        </div>
      ) : (
        <div key={i}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 16,
            paddingBottom: 10, borderBottom: "1px solid var(--border-hairline)"
          }}>{col.title}</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {col.items.map((it, j) => <MegaItem key={j} item={it}/>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MegaItem({ item }) {
  const [hover, setHover] = useState(false);
  const p = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, '') : '';
  const active = p !== '' && p === item.href.replace(/\/$/, '');
  return (
    <li>
      <a href={item.href} aria-current={active ? "page" : undefined}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           display: "block", padding: "10px 12px", borderRadius: 6,
           textDecoration: "none", borderBottom: 0,
           background: active || hover ? "var(--edison-teal-pale)" : "transparent",
           transition: "background 140ms"
         }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: item.parent ? 700 : 600, fontSize: 14.5,
          color: active || hover ? "var(--edison-teal-dark)" : "var(--edison-navy)",
          marginBottom: item.desc ? 2 : 0, transition: "color 140ms"
        }}>{item.label}</div>
        {item.desc && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.4, color: "var(--edison-gray-mid)" }}>{item.desc}</div>
        )}
      </a>
    </li>
  );
}

/* ---------- Simple dropdown (desktop) ---------- */
function SimpleDropdown({ items }) {
  return (
    <ul className="edison-simple-dropdown" style={{
      listStyle: "none", margin: 0, padding: "6px", minWidth: 260,
      background: "#fff", border: "1px solid var(--border-hairline)",
      borderTop: "2px solid var(--edison-teal)", borderRadius: "0 0 10px 10px",
      boxShadow: "0 14px 40px rgba(15,29,51,.14)",
      position: "absolute", top: "calc(100% + 1px)", left: 0, zIndex: 70
    }}>
      {items.map((it, i) => <SimpleItem key={i} item={it}/>)}
    </ul>
  );
}

function SimpleItem({ item }) {
  const [hover, setHover] = useState(false);
  const sp = typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, '') : '';
  const active = sp !== '' && sp === item.href.replace(/\/$/, '');
  return (
    <li>
      <a href={item.href} aria-current={active ? "page" : undefined}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           display: "block", padding: "11px 14px", borderRadius: 6,
           fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
           color: active || hover ? "var(--edison-teal-dark)" : "var(--edison-navy)",
           textDecoration: "none", borderBottom: 0,
           background: active || hover ? "var(--edison-teal-pale)" : "transparent",
           borderLeft: active ? "3px solid var(--edison-teal)" : "3px solid transparent",
           transition: "background 140ms, color 140ms"
         }}>
        {item.label}
      </a>
    </li>
  );
}

/* ---------- Mobile nav item (accordion) ---------- */
function MobileNavItem({ item, depth = 0, onClose }) {
  const [open, setOpen] = useState(false);
  let childItems = item.children;
  if (item.mega && item.columns) {
    childItems = item.columns
      .filter(c => !c.feature && !c.features)
      .flatMap(c => [{ heading: c.title }, ...c.items])
      .concat(item.columns.filter(c => c.feature).map(c => ({ label: c.feature.title, href: c.feature.cta.href })));
  }
  const hasChildren = childItems && childItems.length;

  return (
    <li style={{ listStyle: "none", borderBottom: depth === 0 ? "1px solid var(--border-hairline)" : "none" }}>
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {item.heading ? (
          <div style={{
            flex: 1, padding: `10px ${16 + depth * 16}px 6px`,
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--edison-teal-dark)"
          }}>{item.heading}</div>
        ) : (
          <a href={item.href}
             onClick={!hasChildren ? onClose : undefined}
             style={{
               flex: 1,
               padding: depth === 0 ? "18px 20px" : `13px ${16 + depth * 16}px`,
               fontFamily: "var(--font-display)",
               fontWeight: depth === 0 ? 700 : 500,
               fontSize: depth === 0 ? 16 : 14.5,
               color: "var(--edison-navy)",
               textDecoration: "none", borderBottom: 0,
               display: "flex", alignItems: "center"
             }}>
            {item.label}
          </a>
        )}
        {hasChildren && (
          <button onClick={() => setOpen(!open)}
                  aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
                  aria-expanded={open}
                  style={{
                    width: 56, border: 0, borderLeft: "1px solid var(--border-hairline)",
                    background: open ? "var(--edison-teal-pale)" : "transparent",
                    color: "var(--edison-navy)", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 140ms"
                  }}>
            <span style={{ transform: open ? "rotate(180deg)" : "none", display: "inline-flex", transition: "transform 240ms" }}>
              <IconChevronDown size={15}/>
            </span>
          </button>
        )}
      </div>
      {hasChildren && (
        <ul style={{
          listStyle: "none", margin: 0, padding: 0,
          background: "rgba(60,200,200,.04)",
          overflow: "hidden",
          maxHeight: open ? 1200 : 0,
          transition: "max-height 320ms cubic-bezier(.2,.8,.2,1)"
        }}>
          {childItems.map((c, i) => <MobileNavItem key={i} item={c} depth={depth + 1} onClose={onClose}/>)}
        </ul>
      )}
    </li>
  );
}

/* ---------- Desktop nav CTA ---------- */
function NavCtaButton({ href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} style={{
      display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 22px",
      background: hovered ? "var(--edison-teal-light)" : "var(--edison-teal)",
      color: "var(--edison-navy)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
      borderRadius: 8, border: 0, textDecoration: "none", borderBottom: 0,
      position: "relative", overflow: "hidden",
      boxShadow: hovered ? "0 4px 20px rgba(60,200,200,.38)" : "none",
      transform: hovered ? "translateY(-1px)" : "none",
      transition: "background 200ms ease, box-shadow 200ms ease, transform 180ms ease"
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {label}
      <span aria-hidden="true" style={{
        position: "absolute", top: 0, bottom: 0,
        left: hovered ? "110%" : "-60%", width: "45%",
        background: "linear-gradient(105deg, transparent, rgba(255,255,255,.22) 50%, transparent)",
        transform: "skewX(-18deg)",
        transition: hovered ? "left 480ms cubic-bezier(.4,0,.2,1)" : "none",
        pointerEvents: "none"
      }}/>
    </a>
  );
}

/* ============================================================
   SiteHeader
   ============================================================ */
function SiteHeader({
  logoSrc = "/assets/logo.webp",
  logoAlt = "Edison Association Management",
  homeHref = "/",
  nav = DEFAULT_NAV,
  utility = DEFAULT_UTILITY,
  cta = { label: "Request Proposal / Contact", href: "/request-a-proposal" }
}) {
  const [openIdx, setOpenIdx]       = useState(-1);
  const [hoveredIdx, setHoveredIdx] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden]         = useState(false);
  const [atTop, setAtTop]           = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const [mounted, setMounted]       = useState(false);
  const closeTimer  = useRef(null);
  const lastScrollY = useRef(0);
  const navRef       = useRef(null);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => { setCurrentPath(window.location.pathname); }, []);
  useEffect(() => {
    function onResize() { if (window.innerWidth > 1040) setMobileOpen(false); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      setAtTop(y < 8);
      if (y < 8) setHidden(false);
      else if (delta > 8)  { setHidden(true); setOpenIdx(-1); setMobileOpen(false); if (navRef.current) navRef.current.querySelectorAll('[data-nav-idx]').forEach(w => w.classList.remove('nav-is-open')); }
      else if (delta < -4) setHidden(false);
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIdx(-1);
        navRef.current.querySelectorAll('[data-nav-idx]').forEach(w => w.classList.remove('nav-is-open'));
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  /* Native mouseenter/mouseleave — direct DOM class manipulation bypasses Pastel proxy */
  useEffect(() => {
    if (!navRef.current) return;
    const allWrappers = navRef.current.querySelectorAll('[data-nav-idx]');
    const cleanups = [];
    allWrappers.forEach(wrapper => {
      const idx = parseInt(wrapper.dataset.navIdx, 10);
      const mega = wrapper.querySelector('[data-mega-menu]');
      let timer;

      const openNav = () => {
        clearTimeout(timer);
        clearTimeout(closeTimer.current);
        // Close all others, open this — pure DOM, no React state needed
        allWrappers.forEach(w => { if (w !== wrapper) w.classList.remove('nav-is-open'); });
        wrapper.classList.add('nav-is-open');
        setHoveredIdx(idx); // keep for trigger highlight color
      };
      const closeNav = () => {
        setHoveredIdx(-1);
        timer = setTimeout(() => wrapper.classList.remove('nav-is-open'), 150);
      };

      wrapper.addEventListener('mouseenter', openNav);
      wrapper.addEventListener('mouseleave', closeNav);
      if (mega) {
        mega.addEventListener('mouseenter', openNav);
        mega.addEventListener('mouseleave', closeNav);
      }
      cleanups.push(() => {
        wrapper.removeEventListener('mouseenter', openNav);
        wrapper.removeEventListener('mouseleave', closeNav);
        if (mega) {
          mega.removeEventListener('mouseenter', openNav);
          mega.removeEventListener('mouseleave', closeNav);
        }
      });
    });
    return () => cleanups.forEach(c => c());
  }, [mounted]);

  function openMenu(i) {
    clearTimeout(closeTimer.current);
    setOpenIdx(i);
    if (navRef.current) {
      navRef.current.querySelectorAll('[data-nav-idx]').forEach(w => {
        w.classList.toggle('nav-is-open', parseInt(w.dataset.navIdx) === i);
      });
    }
  }
  function scheduleClose() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenIdx(-1);
      if (navRef.current) navRef.current.querySelectorAll('[data-nav-idx]').forEach(w => w.classList.remove('nav-is-open'));
    }, 140);
  }

  /* ---- Mobile full-width dropdown panel (portal) ---- */
  const mobilePanel = mounted ? createPortal(
    <>
      {/* Backdrop — starts below header so logo + X stay unblurred */}
      <div style={{
        position: "fixed", top: 72, left: 0, right: 0, bottom: 0, zIndex: 9989,
        background: "rgba(15,29,51,.38)",
        opacity: mobileOpen ? 1 : 0,
        visibility: mobileOpen ? "visible" : "hidden",
        transition: "opacity 280ms ease, visibility 280ms"
      }} onClick={() => setMobileOpen(false)}/>

      {/* Dropdown panel — unfolds from below the header */}
      <div style={{
        position: "fixed",
        top: 72,   /* matches mobile nav row height */
        left: 0, right: 0,
        zIndex: 9990,
        background: "#fff",
        borderBottom: "2px solid var(--edison-teal)",
        boxShadow: "0 20px 56px rgba(15,29,51,.18)",
        maxHeight: "calc(100dvh - 72px)",
        overflowY: "auto",
        overscrollBehavior: "contain",
        opacity: mobileOpen ? 1 : 0,
        transform: mobileOpen ? "translateY(0)" : "translateY(-12px)",
        visibility: mobileOpen ? "visible" : "hidden",
        transition: "opacity 260ms cubic-bezier(.2,.8,.2,1), transform 300ms cubic-bezier(.2,.8,.2,1), visibility 260ms"
      }}>
        {/* Nav list */}
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {nav.map((item, i) => (
            <MobileNavItem key={i} item={item} onClose={() => setMobileOpen(false)}/>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ padding: "16px 20px 8px" }}>
          <a href={cta.href} onClick={() => setMobileOpen(false)} style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            padding: "16px 24px",
            background: "var(--edison-teal)", color: "var(--edison-navy)",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
            borderRadius: 10, textDecoration: "none", borderBottom: 0
          }}>
            {cta.label}
          </a>
        </div>

        {/* Phone */}
        <div style={{ padding: "8px 20px 16px" }}>
          <a href={utility.phone.href} style={{
            display: "flex", justifyContent: "center", alignItems: "center", gap: 10,
            padding: "14px 20px",
            background: "var(--edison-teal-pale)",
            border: "1.5px solid var(--edison-teal)",
            borderRadius: 10,
            color: "var(--edison-navy)",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
            textDecoration: "none", borderBottom: 0
          }}>
            <IconPhone/> {utility.phone.label}
          </a>
        </div>

        {/* Portal links */}
        <div style={{ padding: "0 20px 28px", display: "flex", flexDirection: "column", gap: 2 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
            letterSpacing: "0.13em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", padding: "6px 4px 8px"
          }}>Quick Links</div>
          {utility.portals.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
               style={{
                 display: "flex", alignItems: "center", justifyContent: "space-between",
                 padding: "14px 16px",
                 borderRadius: 8,
                 background: "var(--edison-teal-pale)",
                 color: "var(--edison-navy)",
                 fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
                 textDecoration: "none", borderBottom: 0,
                 marginBottom: i < utility.portals.length - 1 ? 6 : 0
               }}>
              {p.label}
              <span aria-hidden="true" style={{ fontSize: 13, opacity: 0.5 }}>&#x2197;</span>
            </a>
          ))}
        </div>
      </div>
    </>,
    document.body
  ) : null;

  return (
    <>
      {/* Spacer */}
      <div aria-hidden="true" className="edison-header-spacer"/>

      <header ref={navRef} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 320ms cubic-bezier(.4,0,.2,1)"
      }}>
        {/* Utility bar — desktop only */}
        <div className="edison-utility-bar" style={{
          background: "var(--edison-navy)", color: "rgba(255,255,255,.85)",
          fontFamily: "var(--font-body)", fontSize: 13,
          borderBottom: "1px solid rgba(255,255,255,.08)"
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto", padding: "9px 32px",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <a href={utility.phone.href} style={{
                color: "#fff", textDecoration: "none", borderBottom: 0,
                display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600
              }}>
                <IconPhone/> {utility.phone.label}
              </a>
              <span style={{ color: "rgba(255,255,255,.55)" }}>{utility.hours}</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 22, alignItems: "center" }}>
              {utility.portals.map((p, i) => (
                <li key={i}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer" style={{
                    color: "rgba(255,255,255,.85)", textDecoration: "none", borderBottom: 0,
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5,
                    letterSpacing: "0.02em", transition: "color 140ms"
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--edison-teal)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,.85)"}>
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main nav row */}
        <div style={{
          background: atTop && !mobileOpen ? "#fff" : mobileOpen ? "#fff" : "rgba(255,255,255,.82)",
          backdropFilter: atTop || mobileOpen ? "none" : "blur(20px) saturate(180%)",
          WebkitBackdropFilter: atTop || mobileOpen ? "none" : "blur(20px) saturate(180%)",
          borderBottom: mobileOpen
            ? "1px solid var(--border-hairline)"
            : atTop ? "1px solid var(--border-hairline)" : "1px solid rgba(255,255,255,.35)",
          boxShadow: atTop && !mobileOpen ? "none" : "0 2px 24px rgba(15,29,51,.10)",
          transition: "background 280ms ease, box-shadow 280ms ease",
          position: "relative"
        }}>
          <div style={{
            maxWidth: 1280, margin: "0 auto", padding: "0 24px", height: 72,
            display: "flex", alignItems: "center", gap: 20
          }}>
            {/* Logo */}
            <a href={homeHref} aria-label={logoAlt} style={{ display: "block", borderBottom: 0, flexShrink: 0 }}>
              <img src={logoSrc} alt={logoAlt} width={133} height={40} fetchpriority="high" decoding="async" style={{ height: 40, width: "auto", display: "block" }}/>
            </a>

            {/* Desktop nav */}
            <nav aria-label="Primary" className="edison-desktop-nav"
                 style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
              {nav.map((item, i) => {
                const hasMenu = item.mega || (item.children && item.children.length);
                const isOpen    = openIdx === i;
                const isHovered = hoveredIdx === i;
                const isActive  = item.href === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.href) ||
                    (item.href === "/edison-education/" && currentPath.startsWith("/blog/"));
                return (
                  <div key={i} data-nav-idx={i} style={{ position: "static" }}>
                    <div style={{ position: "relative" }}>
                      {item.mega ? (
                        <button aria-haspopup="true" aria-expanded={isOpen}
                           onClick={() => { isOpen ? scheduleClose() : openMenu(i); }}
                           style={{
                          display: "inline-flex", alignItems: "center", gap: 6,
                          padding: "26px 14px",
                          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
                          color: isOpen || isActive || isHovered ? "var(--edison-teal-dark)" : "var(--edison-navy)",
                          background: "transparent", border: 0, cursor: "pointer",
                          transition: "color 140ms"
                        }}>
                          {item.label}
                          <span style={{
                            color: isOpen || isActive || isHovered ? "var(--edison-teal-dark)" : "var(--edison-navy-50)",
                            transform: isOpen ? "rotate(180deg)" : "none",
                            transition: "transform 180ms", display: "inline-flex"
                          }}><IconChevronDown/></span>
                        </button>
                      ) : (
                        <a href={item.href}
                           aria-haspopup={hasMenu ? "true" : undefined}
                           aria-expanded={hasMenu ? isOpen : undefined}
                           onClick={hasMenu ? (e) => { e.preventDefault(); isOpen ? scheduleClose() : openMenu(i); } : undefined}
                           style={{
                             display: "inline-flex", alignItems: "center", gap: 6,
                             padding: "26px 14px",
                             fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
                             color: isOpen || isActive || isHovered ? "var(--edison-teal-dark)" : "var(--edison-navy)",
                             textDecoration: "none", borderBottom: 0,
                             cursor: hasMenu ? "pointer" : undefined,
                             transition: "color 140ms"
                           }}>
                          {item.label}
                          {hasMenu && (
                            <span style={{
                              color: isOpen || isActive || isHovered ? "var(--edison-teal-dark)" : "var(--edison-navy-50)",
                              transform: isOpen ? "rotate(180deg)" : "none",
                              transition: "transform 180ms", display: "inline-flex"
                            }}><IconChevronDown/></span>
                          )}
                        </a>
                      )}
                      {item.children && !item.mega && <SimpleDropdown items={item.children}/>}
                    </div>
                    {item.mega && <MegaMenu columns={item.columns}/>}
                  </div>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="edison-desktop-cta" style={{ flexShrink: 0 }}>
              <NavCtaButton href={cta.href} label={cta.label}/>
            </div>

            {/* Animated hamburger — always right-most, auto margin pushes it right */}
            <button
              className="edison-mobile-trigger"
              onClick={() => setMobileOpen(v => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              style={{
                display: "none", background: "transparent", border: 0,
                color: "var(--edison-navy)", cursor: "pointer",
                padding: "8px", marginLeft: "auto",
                lineHeight: 0
              }}>
              <AnimatedHamburger open={mobileOpen}/>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown panel — portal, outside header stacking context */}
      {mobilePanel}

      <style>{`
        .edison-header-spacer { height: 110px; }
        /* Mega menu — hidden by default, shown via parent .nav-is-open class */
        .edison-mega-menu {
          opacity: 0;
          pointer-events: none;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 220ms cubic-bezier(.2,.8,.2,1), transform 240ms cubic-bezier(.2,.8,.2,1);
        }
        [data-nav-idx].nav-is-open .edison-mega-menu {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        /* Simple dropdown — same pattern */
        .edison-simple-dropdown {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px);
          transition: opacity 200ms cubic-bezier(.2,.8,.2,1), transform 220ms cubic-bezier(.2,.8,.2,1);
        }
        [data-nav-idx].nav-is-open .edison-simple-dropdown {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }
        @media (max-width: 1040px) {
          .edison-desktop-nav, .edison-desktop-cta { display: none !important; }
          .edison-mobile-trigger { display: inline-flex !important; }
          .edison-utility-bar { display: none !important; }
          .edison-header-spacer { height: 72px !important; }
        }
      `}</style>
    </>
  );
}

export { SiteHeader };
