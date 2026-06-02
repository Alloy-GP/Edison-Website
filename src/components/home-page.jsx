import React from 'react';
import { BulbMark, FinalCTA, InteriorButton, InteriorEyebrow, SectionHeading, ServiceArea, TrustBadges } from '../components/interior-components';
import { BulletsWithImage } from '../components/template-sections';

/* ============================================================
   HOMEPAGE-SPECIFIC SECTIONS
   ============================================================ */

/* Responsive styles injected once at the top of the page */
const HOME_STYLES = `
  /* ---- Hero ---- */
  .hp-hero { padding: 112px 48px 0 !important; }
  .hp-hero-title { font-size: 60px !important; }
  .hp-hero-lede { font-size: 19px !important; }
  .hp-hero-cta-row { flex-direction: row !important; align-items: center !important; }
  .hp-hero-cards {
    grid-template-columns: 1fr 1fr !important;
    margin: 72px auto -100px !important;
  }
  .hp-hero-card { grid-template-columns: 180px 1fr !important; min-height: 200px !important; }
  .hp-hero-card-img { display: block !important; }

  /* ---- Services ---- */
  .hp-services { padding: 160px 48px 96px !important; }
  .hp-services-grid { grid-template-columns: repeat(3, 1fr) !important; }

  /* ---- Solutions ---- */
  .hp-solutions { padding: 88px 48px !important; }
  .hp-solutions-grid { grid-template-columns: 1fr 1fr !important; }

  /* ---- Education ---- */
  .hp-edu { padding: 88px 48px !important; }
  .hp-edu-inner { grid-template-columns: 1.15fr 1fr !important; }
  .hp-edu-posts { grid-template-columns: 1fr 1fr !important; }
  .hp-edu-right { order: 0 !important; }

  /* ---- Tablet: 640–1040px ---- */
  @media (max-width: 1040px) {
    .hp-services-grid { grid-template-columns: 1fr 1fr !important; }
    .hp-edu-inner { grid-template-columns: 1fr !important; gap: 40px !important; }
    .hp-edu-right { order: -1 !important; }
  }

  /* ---- Mobile: ≤640px ---- */
  @media (max-width: 640px) {
    .hp-hero { padding: 72px 20px 0 !important; min-height: 480px !important; }
    .hp-hero-title { font-size: 34px !important; line-height: 1.12 !important; letter-spacing: -0.01em !important; }
    .hp-hero-lede { font-size: 16px !important; margin-bottom: 24px !important; }
    .hp-hero-cta-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
    .hp-hero-cards {
      grid-template-columns: 1fr !important;
      margin: 40px auto -64px !important;
      gap: 14px !important;
    }
    .hp-hero-card { grid-template-columns: 1fr !important; min-height: 120px !important; }
    .hp-hero-card-img { display: none !important; }

    .hp-services { padding: 96px 20px 64px !important; }
    .hp-services-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

    .hp-solutions { padding: 56px 20px !important; }
    .hp-solutions-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
    .hp-solutions-card { min-height: 240px !important; }

    .hp-edu { padding: 56px 20px !important; }
    .hp-edu-inner { grid-template-columns: 1fr !important; gap: 32px !important; }
    .hp-edu-posts { grid-template-columns: 1fr !important; gap: 14px !important; }
    .hp-edu-right { order: -1 !important; }
  }
`;

function HomeHero({ eyebrow, title, lede, primary, audienceCards }) {
  return (
    <section className="hp-hero" style={{
      position: "relative",
      minHeight: 640,
      backgroundImage:
        "linear-gradient(180deg, rgba(15,29,51,.72) 0%, rgba(15,29,51,.55) 60%, rgba(15,29,51,.78) 100%), url(assets/img-community-aerial.jpg)",
      backgroundSize: "cover", backgroundPosition: "center",
      color: "#fff",
      display: "flex", flexDirection: "column"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", flex: 1,
                    display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ maxWidth: 820 }}>
          <InteriorEyebrow color="var(--edison-teal)">{eyebrow}</InteriorEyebrow>
          <h1 className="hp-hero-title" style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "16px 0 22px"
          }}>{title}</h1>
          <p className="hp-hero-lede" style={{
            fontFamily: "var(--font-body)",
            lineHeight: 1.55,
            color: "rgba(255,255,255,.9)", maxWidth: 680, margin: "0 0 32px"
          }}>{lede}</p>
          <div className="hp-hero-cta-row" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <InteriorButton variant="onDark" size="lg" href={primary.href}>{primary.label}</InteriorButton>

            {/* Google review badge */}
            <a href="https://www.google.com/maps/place/Edison+Association+Management/@28.5489,-81.3583,17z"
               target="_blank" rel="noopener noreferrer"
               style={{
                 display: "inline-flex", alignItems: "center", gap: 12,
                 background: "rgba(255,255,255,.10)",
                 backdropFilter: "blur(10px)",
                 border: "1px solid rgba(255,255,255,.18)",
                 borderRadius: 10,
                 padding: "10px 16px 10px 12px",
                 textDecoration: "none", borderBottom: 0,
                 transition: "background 180ms"
               }}
               onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,.16)"}
               onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,.10)"}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google" style={{ flexShrink: 0 }}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div style={{ display: "flex", gap: 1 }}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <div>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5,
                  color: "#fff", letterSpacing: "-0.01em"
                }}>4.9</span>
                <span style={{
                  fontFamily: "var(--font-body)", fontSize: 13,
                  color: "rgba(255,255,255,.72)", marginLeft: 6
                }}>· 120 Google Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Audience cards — overlap into next section */}
      <div className="hp-hero-cards" style={{
        maxWidth: 1200, width: "100%", margin: "0 auto",
        display: "grid",
        gap: 20,
        position: "relative", zIndex: 2
      }}>
        {audienceCards.map((c, i) => (
          <a key={i} href={c.href}
             target={c.href.startsWith('http') ? '_blank' : undefined}
             rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
             className="hp-hero-card"
             style={{
               display: "grid",
               textDecoration: "none",
               background: i === 0 ? "var(--edison-navy)" : "#fff",
               color: i === 0 ? "#fff" : "var(--edison-navy)",
               border: i === 0 ? "1px solid rgba(255,255,255,.12)" : "1px solid var(--border-hairline)",
               borderRadius: 14, overflow: "hidden",
               boxShadow: "var(--shadow-lg)",
               transition: "transform 220ms var(--ease-standard), box-shadow 220ms"
             }}
             onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
             onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}>
            <div className="hp-hero-card-img" style={{
              backgroundImage: i === 0
                ? `linear-gradient(180deg, rgba(15,29,51,.15) 0%, rgba(15,29,51,.55) 100%), url(${c.image})`
                : `url(${c.image})`,
              backgroundSize: "cover", backgroundPosition: "center"
            }}/>
            <div style={{ padding: "24px 28px",
                          display: "flex", flexDirection: "column", justifyContent: "center", gap: 12 }}>
              <InteriorEyebrow color={i === 0 ? "var(--edison-teal)" : "var(--edison-teal-dark)"}>
                {c.eyebrow}
              </InteriorEyebrow>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 20, lineHeight: 1.25,
                color: i === 0 ? "#fff" : "var(--edison-navy)",
                margin: 0
              }}>{c.title}</h3>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: i === 0 ? "var(--edison-teal)" : "var(--edison-teal-dark)",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                {c.cta} <span aria-hidden="true">&#x2192;</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services band ---------- */
function ServicesBand({ title, sub, services }) {
  return (
    <section className="hp-services" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 56px" }}>
          <InteriorEyebrow>Our Services</InteriorEyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 38, lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "12px 0 16px",
            position: "relative", paddingBottom: 18, display: "inline-block"
          }}>
            {title}
            <span style={{
              position: "absolute", left: "50%", transform: "translateX(-50%)",
              bottom: 0, width: 60, height: 3,
              background: "var(--edison-teal)", borderRadius: 2
            }}/>
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
            color: "var(--edison-text-body)", margin: "8px 0 0"
          }}>{sub}</p>
        </div>
        <div className="hp-services-grid" style={{ display: "grid", gap: 22 }}>
          {services.map((s, i) => (
            <a key={i} href={s.href} style={{
              textDecoration: "none",
              background: "#fff",
              borderRadius: 14, overflow: "hidden",
              border: "1px solid var(--border-hairline)",
              boxShadow: "var(--shadow-xs)",
              display: "flex", flexDirection: "column",
              transition: "all 220ms var(--ease-standard)"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "var(--edison-teal)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--border-hairline)";
              }}>
              <div style={{
                aspectRatio: "16 / 10",
                backgroundImage: `linear-gradient(180deg, rgba(15,29,51,0) 30%, rgba(15,29,51,.55) 100%), url(${s.image})`,
                backgroundSize: "cover", backgroundPosition: "center"
              }}/>
              <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 19, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: 0
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5,
                  color: "var(--edison-gray-mid)", margin: 0, flex: 1
                }}>{s.body}</p>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4
                }}>
                  Learn more <span aria-hidden="true">&#x2192;</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Solutions split ---------- */
function SolutionsSplit({ eyebrow, title, sub, options }) {
  return (
    <section className="hp-solutions" style={{ background: "var(--edison-teal-pale)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 48px" }}>
          <InteriorEyebrow>{eyebrow}</InteriorEyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "12px 0 14px"
          }}>{title}</h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
            color: "var(--edison-text-body)", margin: "0 auto"
          }}>{sub}</p>
        </div>
        <div className="hp-solutions-grid" style={{ display: "grid", gap: 24 }}>
          {options.map((o, i) => (
            <a key={i} href={o.href}
               className="hp-solutions-card"
               style={{
                 position: "relative",
                 display: "flex", flexDirection: "column", justifyContent: "flex-end",
                 minHeight: 360, padding: "32px 32px",
                 borderRadius: 16, overflow: "hidden",
                 textDecoration: "none",
                 backgroundImage:
                   `linear-gradient(180deg, rgba(15,29,51,.12) 0%, rgba(15,29,51,.78) 92%), url(${o.image})`,
                 backgroundSize: "cover", backgroundPosition: "center",
                 color: "#fff",
                 boxShadow: "var(--shadow-md)",
                 transition: "transform 220ms var(--ease-standard), box-shadow 220ms"
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = "translateY(-3px)";
                 e.currentTarget.style.boxShadow = "var(--shadow-lg)";
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = "translateY(0)";
                 e.currentTarget.style.boxShadow = "var(--shadow-md)";
               }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.01em",
                color: "#fff", margin: "0 0 14px"
              }}>{o.title}</h3>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                color: "var(--edison-teal)",
                display: "inline-flex", alignItems: "center", gap: 8
              }}>
                Learn More <span aria-hidden="true">&#x2192;</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Education band + 2 article cards ---------- */
function EducationBand({ title, sub, posts }) {
  return (
    <section className="hp-edu" style={{ background: "var(--bg-3, #F5F7FA)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="hp-edu-inner" style={{ display: "grid", gap: 64, alignItems: "center" }}>

          {/* Left: 2 article cards */}
          <div className="hp-edu-posts" style={{ display: "grid", gap: 18 }}>
            {posts.map((p, i) => (
              <a key={i} href={p.href} style={{
                textDecoration: "none",
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 14, overflow: "hidden",
                display: "flex", flexDirection: "column",
                boxShadow: "var(--shadow-xs)",
                transition: "all 220ms var(--ease-standard)"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <div style={{
                  aspectRatio: "4 / 3",
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover", backgroundPosition: "center"
                }}/>
                <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--edison-teal-dark)"
                  }}>{p.category}</div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 16, lineHeight: 1.3,
                    color: "var(--edison-navy)", margin: 0, flex: 1
                  }}>{p.title}</h3>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
                    color: "var(--edison-teal-dark)",
                    display: "inline-flex", alignItems: "center", gap: 5, marginTop: 4
                  }}>
                    Read article <span aria-hidden="true">&#x2192;</span>
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Right: logo + heading + text + CTA */}
          <div className="hp-edu-right" style={{ display: "flex", flexDirection: "column", gap: 0, alignItems: "flex-start" }}>
            <img
              src="/assets/Edison-Education-Full-Color.svg"
              alt="Edison Education"
              style={{ height: 48, width: "auto", display: "block", marginBottom: 24 }}
            />
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 30, lineHeight: 1.2, letterSpacing: "-0.01em",
              color: "var(--edison-navy)", margin: "0 0 16px",
              position: "relative", paddingBottom: 16, display: "inline-block"
            }}>
              {title}
              <span style={{ position: "absolute", left: 0, bottom: 0,
                             width: 52, height: 3,
                             background: "var(--edison-teal)", borderRadius: 2 }}/>
            </h2>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65,
              color: "var(--edison-text-body)", margin: "0 0 28px"
            }}>{sub}</p>
            <a href="/edison-education/" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
              color: "var(--edison-teal-dark)",
              textDecoration: "none", borderBottom: 0,
              padding: "11px 20px", borderRadius: 8,
              border: "1.5px solid var(--edison-teal-dark)",
              alignSelf: "flex-start",
              transition: "background 160ms ease, color 160ms ease"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--edison-teal-dark)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--edison-teal-dark)";
              }}>
              Explore Edison Education <span aria-hidden="true">&#x2192;</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE COMPOSITION
   ============================================================ */
function HomePage() {
  return (
    <main data-screen-label="Home">
      <style dangerouslySetInnerHTML={{ __html: HOME_STYLES }}/>

      <HomeHero
        eyebrow="Orlando, Florida · Since 2021"
        title="HOA & Condominium Management Services"
        lede="Edison Association Management provides professional HOA and condominium management services designed to support boards, protect property values, and simplify day-to-day operations."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal/" }}
        audienceCards={[
          {
            eyebrow: "For HOA & Condo Boards",
            title: "See why Central Florida boards switch to Edison.",
            cta: "Learn more",
            image: "/assets/img-inspector.jpg",
            href: "/about/"
          },
          {
            eyebrow: "For Residents & Homeowners",
            title: "Pay dues, submit requests, and access your documents.",
            cta: "Resident portal",
            image: "/assets/img-resident-portal.jpg",
            href: "https://edison.cincwebaxis.com"
          }
        ]}
      />

      <ServicesBand
        title="Condo & HOA Management Services"
        sub="From day-to-day operations to long-term planning, our management services are built to give boards confidence and residents peace of mind."
        services={[
          {
            title: "HOA Management Services",
            body: "Dedicated managers. Transparent reporting. One point of contact.",
            image: "/assets/img-13.jpg",
            href: "/services/hoa-management/"
          },
          {
            title: "Accounting & Bookkeeping",
            body: "Monthly financials, accurate budgets, and on-time collections.",
            image: "/assets/img-accounting.jpg",
            href: "/services/hoa-accounting/"
          },
          {
            title: "Covenant Enforcement",
            body: "Consistent inspections, fair enforcement, full compliance tracking.",
            image: "/assets/img-inspector.jpg",
            href: "/services/covenant-enforcement/"
          }
        ]}
      />

      <SolutionsSplit
        eyebrow="Property Types"
        title="Customized Management Solutions"
        sub="Every community is different. Whether yours is a single-family neighborhood or a high-rise condominium, Edison tailors its approach to match your association's unique needs, governing documents, and long-term goals."
        options={[
          {
            title: "Single-Family HOA Management",
            image: "/assets/img-22.jpg",
            href: "/services/hoa-management/single-family/"
          },
          {
            title: "Condominium Management",
            image: "/assets/img-21.jpg",
            href: "/services/condo-management/"
          }
        ]}
      />

      <BulletsWithImage
        eyebrow="Why Boards Choose Edison"
        title="A Management Partner Boards Can Rely On"
        image="/assets/img-11.jpg"
        bullets={[
          "Clear financial reporting and accountability",
          "Consistent communication with boards and residents",
          "Proven processes for compliance and governance",
          "Experienced leadership and responsive support"
        ]}
      />

      <TrustBadges
        eyebrow="Recognized & Accredited"
        title="Credentials You Can Verify"
        sub="Edison's leadership and team are recognized by the Orlando Business Journal, the Community Associations Institute, the Florida Community Association Journal, and the Better Business Bureau."
        badges={[
          { label: "CAI Member Company",            img: "/assets/badge-cai.png" },
          { label: "Best Place to Work",             img: "/assets/badge-bptw.png" },
          { label: "BBB Accredited Business",        img: "/assets/badge-bbb.png" },
          { label: "FLCAJ Readers Choice Diamond",   img: "/assets/badge-flcaj.png" },
          { label: "PCAM Designation",               img: "/assets/badge-pcam.png" }
        ]}
      />

      <EducationBand
        title="HOA Board Education & Resources"
        sub="Serving on a board is easier when you have the right information. Explore our guides and articles on HOA governance, compliance, and best practices, written specifically for Florida community leaders."
        posts={[
          {
            category: "Finance & Audit",
            title: "HOA Audit: What It Is, When It's Required, and How to Prepare",
            excerpt: "An HOA audit confirms your community's finances are accurate, transparent, and compliant with Florida law.",
            image: "/assets/blog/hoa-board-members-reviewing-audit.jpg",
            href: "/blog/hoa-audit/"
          },
          {
            category: "Governance",
            title: "HOA Bylaws vs CC&Rs: Key Differences Explained",
            excerpt: "Understanding the difference between HOA bylaws and CC&Rs helps boards make confident, defensible decisions.",
            image: "/assets/blog/bylaws-vs-ccrs.jpg",
            href: "/blog/hoa-bylaws-vs-ccrs/"
          }
        ]}
      />

      <ServiceArea
        eyebrow="Service Area"
        title="Serving Associations Throughout Central Florida"
        body="Based in Orlando, Edison proudly manages homeowner and condominium associations across Central Florida, from Orange and Seminole counties to Osceola, Lake, and beyond."
        cities={[
          "Orange County", "Seminole County", "Osceola County", "Lake County",
          "Orlando", "Winter Garden", "Clermont", "Kissimmee", "Lake Mary",
          "Altamonte Springs", "Oviedo", "Apopka"
        ]}
        mapImg="/assets/img-neighborhood-aerial.jpg"
        mapEmbed={true}
      />

      <FinalCTA
        eyebrow="Let's Talk"
        title="Ready for a Better Association Management Experience?"
        body="Tell us about your community and receive a customized management proposal tailored to your association's needs."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal/" }}
        secondary={{ label: "Contact Us", href: "/contact/" }}
      />

    </main>
  );
}

export { HomePage };
