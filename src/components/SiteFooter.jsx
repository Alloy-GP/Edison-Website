import React from 'react';

/* ============================================================
   Edison, Site Footer v2 (Astro-ready React island)
   ----------------------------------------------------------------
   Columns per /uploads/edison-sitemap-v3.html footer spec:

     [Brand]   [Services]   [Service Areas]   [Resources]   [Legal]
   ============================================================ */



const DEFAULT_FOOTER_COLUMNS = [
  {
    title: "Services",
    href: "/services",
    links: [
      { label: "HOA Management", href: "/services/hoa-management" },
      { label: "Condo Management", href: "/services/condo-management" },
      { label: "Single-Family HOA", href: "/services/hoa-management/single-family" },
      { label: "Townhome Associations", href: "/services/hoa-management/townhome" },
      { label: "HOA Accounting", href: "/services/hoa-accounting" },
      { label: "Covenant Enforcement", href: "/services/covenant-enforcement" },
      { label: "HOA Collections", href: "/services/hoa-collections" }
    ]
  },
  {
    title: "Service Areas",
    href: "/services/hoa-management",
    links: [
      { label: "Orlando", href: "/services/hoa-management/orlando" },
      { label: "Winter Garden", href: "/services/hoa-management/winter-garden" },
      { label: "Kissimmee", href: "/services/hoa-management/kissimmee" },
      { label: "Clermont", href: "/services/hoa-management/clermont" },
      { label: "Lake Mary", href: "/services/hoa-management/lake-mary" },
      { label: "Altamonte Springs", href: "/services/hoa-management/altamonte-springs" },
      { label: "Oviedo", href: "/services/hoa-management/oviedo" }
    ]
  },
  {
    title: "Resources",
    href: "/edison-education",
    links: [
      { label: "Edison Education", href: "/edison-education" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  {
    title: "Legal",
    href: "#",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ]
  }
];

/* ---------- Inline social icons ---------- */
function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z"/>
    </svg>
  );
}

function FooterCol({ title, href, links }) {
  return (
    <div>
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase",
        color: "var(--edison-teal)", margin: "0 0 18px"
      }}>
        <a href={href} style={{
          color: "inherit", textDecoration: "none", borderBottom: 0
        }}>{title}</a>
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0,
                   display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map((l, i) => (
          <li key={i}>
            <a href={l.href} style={{
              color: "rgba(255,255,255,.82)",
              textDecoration: "none", borderBottom: 0,
              fontFamily: "var(--font-body)", fontSize: 14,
              transition: "color 140ms"
            }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--edison-teal)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,.82)"}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteFooter({
  logoSrc = "/assets/logo-white.png",
  logoAlt = "Edison Association Management",
  homeHref = "/",
  blurb = "Professional HOA and condominium management services in Orlando, Florida. Lighting the way for community associations since 2021.",
  columns = DEFAULT_FOOTER_COLUMNS,
  contact = {
    phone: { label: "(407) 317-5252", href: "tel:4073175252" },
    address: "Orlando, Florida",
    cta: { label: "Contact Us", href: "/request-a-proposal" }
  },
  social = [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588615083028", Icon: IconFacebook },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/edison-association-management/", Icon: IconLinkedIn }
  ],
  copyright = `${new Date().getFullYear()} Edison Association Management, LLC. All rights reserved.`
}) {
  return (
    <footer style={{
      background: "var(--edison-navy)",
      color: "#fff",
      paddingTop: 72,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.06)",
      position: "relative"
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 32px",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
        gap: 40,
        alignItems: "start"
      }} className="edison-footer-grid">

        {/* Brand column */}
        <div>
          <a href={homeHref} aria-label={logoAlt} style={{ display: "inline-block", borderBottom: 0 }}>
            <img src={logoSrc} alt={logoAlt}
                 style={{ height: 50, width: "auto", display: "block", marginBottom: 20 }}/>
          </a>
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: 14, lineHeight: 1.65,
            color: "rgba(255,255,255,.78)",
            margin: "0 0 20px", maxWidth: 320
          }}>{blurb}</p>

          <div style={{
            fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.7,
            color: "rgba(255,255,255,.82)", marginBottom: 18
          }}>
            <div>{contact.address}</div>
            <a href={contact.phone.href} style={{
              color: "#fff", textDecoration: "none", borderBottom: 0, fontWeight: 700
            }}>{contact.phone.label}</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {social.map(({ label, href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                 aria-label={label}
                 style={{
                   width: 36, height: 36, borderRadius: 999,
                   background: "rgba(255,255,255,.08)",
                   border: "1px solid rgba(255,255,255,.14)",
                   color: "#fff",
                   display: "inline-flex", alignItems: "center", justifyContent: "center",
                   transition: "all 160ms",
                   textDecoration: "none", borderBottom: 0
                 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--edison-teal)";
                  e.currentTarget.style.color = "var(--edison-navy)";
                  e.currentTarget.style.borderColor = "var(--edison-teal)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,.08)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.14)";
                }}>
                <Icon/>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map((c, i) => <FooterCol key={i} {...c}/>)}
      </div>

      {/* Bottom legal strip */}
      <div style={{
        marginTop: 64,
        padding: "22px 32px",
        borderTop: "1px solid rgba(255,255,255,.12)"
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
          flexWrap: "wrap",
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "rgba(255,255,255,.55)"
        }}>
          <div>© {copyright}</div>
          <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
            <a href={contact.cta.href} style={{
              color: "var(--edison-teal)", textDecoration: "none", borderBottom: 0,
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13
            }}>{contact.cta.label} →</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .edison-footer-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
            gap: 40px !important;
          }
          .edison-footer-grid > div:first-child {
            grid-column: 1 / -1;
            max-width: 540px;
          }
        }
        @media (max-width: 640px) {
          .edison-footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .edison-footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}

export { SiteFooter };
