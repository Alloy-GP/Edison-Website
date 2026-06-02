import React, { useState as useCsState } from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, SectionHeading } from '../components/interior-components';

/* ============================================================
   CASE STUDIES HUB, VARIANT A (Editorial Cards · Story-Led)
   One large featured case study, then a grid of supporting
   case study cards. Each card shows the situation, outcome,
   and a single quantitative result.
   ============================================================ */
function CaseStudiesPageA({ content }) {
  const featured = content.cases[0];
  const rest = content.cases.slice(1);
  return (
    <main data-screen-label="Case Studies, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Case Studies" }
      ]}/>

      <section className="cs-hub-hero" style={{ background: "#fff", padding: "72px 48px 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Case Studies</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px", maxWidth: 880
          }}>Specific communities, real numbers, documented outcomes.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
            color: "var(--edison-text-body)", margin: "0", maxWidth: 720
          }}>{content.intro}</p>
        </div>
      </section>

      {/* Featured case */}
      <section style={{ background: "var(--edison-teal-pale)", padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <a className="cs-hub-featured-grid" href={featured.href} style={{
            display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 0,
            // @className cs-hub-featured-grid (applied on wrapper)
            textDecoration: "none",
            background: "#fff",
            borderRadius: 18, overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            transition: "transform 220ms"
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <div className="cs-hub-featured-img" style={{
              minHeight: 420,
              backgroundImage: `url(${featured.image})`,
              backgroundSize: "cover", backgroundPosition: "center"
            }}/>
            <div style={{ padding: "44px 48px", display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-navy)",
                  background: "var(--edison-teal)",
                  padding: "5px 10px", borderRadius: 4
                }}>Featured Case</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)",
                  background: "var(--edison-teal-pale)",
                  padding: "5px 10px", borderRadius: 4
                }}>{featured.category}</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 32, lineHeight: 1.18, letterSpacing: "-0.01em",
                color: "var(--edison-navy)", margin: 0
              }}>{featured.title}</h2>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 14,
                color: "var(--edison-gray-mid)"
              }}>{featured.community} · {featured.units} units · {featured.location}</div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65,
                color: "var(--edison-text-body)", margin: 0, flex: 1
              }}>{featured.summary}</p>
              <div style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14,
                marginTop: 6, paddingTop: 20,
                borderTop: "1px solid var(--border-hairline)"
              }}>
                {featured.metrics.map((m, i) => (
                  <div key={i}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24,
                      color: "var(--edison-navy)", lineHeight: 1
                    }}>{m.value}</div>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 12,
                      color: "var(--edison-gray-mid)", marginTop: 6, lineHeight: 1.4
                    }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: "var(--edison-teal-dark)", marginTop: 8
              }}>Read the full case study →</div>
            </div>
          </a>
        </div>
      </section>

      {/* Grid of remaining */}
      <section style={{ background: "#fff", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading eyebrow="More case studies" title="Communities we've helped"/>
          <div className="cs-hub-grid" style={{
            marginTop: 36,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20
          }}>
            {rest.map((c, i) => (
              <a key={i} href={c.href} style={{
                textDecoration: "none",
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, overflow: "hidden",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column",
                transition: "all 220ms"
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
                  backgroundImage: `url(${c.image})`,
                  backgroundSize: "cover", backgroundPosition: "center"
                }}/>
                <div style={{ padding: "22px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--edison-teal-dark)"
                  }}>{c.category}</div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                    lineHeight: 1.3, color: "var(--edison-navy)", margin: 0
                  }}>{c.title}</h3>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 12.5,
                    color: "var(--edison-gray-mid)"
                  }}>{c.community} · {c.units} units</div>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                    color: "var(--edison-text-body)", margin: 0, flex: 1
                  }}>{c.summary}</p>
                  <div style={{
                    paddingTop: 14, marginTop: "auto",
                    borderTop: "1px solid var(--border-hairline)",
                    display: "flex", justifyContent: "space-between", alignItems: "baseline"
                  }}>
                    <div>
                      <div style={{
                        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                        color: "var(--edison-navy)", lineHeight: 1
                      }}>{c.metrics[0].value}</div>
                      <div style={{
                        fontFamily: "var(--font-body)", fontSize: 11.5,
                        color: "var(--edison-gray-mid)", marginTop: 4
                      }}>{c.metrics[0].label}</div>
                    </div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                      color: "var(--edison-teal-dark)"
                    }}>Read →</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Your community next?"
        title="Want results like these for your association?"
        body="Every case study started with a board that picked up the phone. Request a proposal and we'll put together the path for your community."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Read Testimonials", href: "/testimonials" }}
      />
    </main>
  );
}

/* ============================================================
   CASE STUDIES HUB, VARIANT B (Filterable Index · Data-Forward)
   List view with category + community type filters. Each row
   shows headline, community, metric, and a "Read" link. Lets
   boards drill quickly by their use case.
   ============================================================ */
function CaseStudiesPageB({ content }) {
  const [filter, setFilter] = useCsState("All");
  const filters = ["All", ...new Set(content.cases.map(c => c.category))];
  const filtered = filter === "All" ? content.cases : content.cases.filter(c => c.category === filter);

  return (
    <main data-screen-label="Case Studies, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Case Studies" }
      ]}/>

      <section style={{
        background: "var(--edison-navy)", color: "#fff",
        padding: "88px 48px 64px"
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>Case Studies</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 50, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 22px"
          }}>Real communities. Real numbers. Real timelines.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.55,
            color: "rgba(255,255,255,.82)", margin: 0, maxWidth: 760
          }}>{content.intro}</p>
        </div>
      </section>

      {/* Filter chips */}
      <section style={{ background: "#fff", padding: "32px 48px 0",
                        borderBottom: "1px solid var(--border-hairline)" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", gap: 6, flexWrap: "wrap"
        }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
                    style={{
                      appearance: "none", cursor: "pointer",
                      background: filter === f ? "var(--edison-navy)" : "transparent",
                      color: filter === f ? "#fff" : "var(--edison-gray-mid)",
                      border: 0,
                      borderBottom: `3px solid ${filter === f ? "var(--edison-teal)" : "transparent"}`,
                      padding: "12px 18px",
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                      transition: "all 140ms"
                    }}>
              {f}
              <span style={{
                marginLeft: 8, fontSize: 12,
                color: filter === f ? "var(--edison-teal)" : "var(--edison-navy-50)"
              }}>
                {f === "All" ? content.cases.length : content.cases.filter(c => c.category === f).length}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Table list */}
      <section style={{ background: "#fff", padding: "0 48px 88px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {filtered.map((c, i) => (
            <a key={i} href={c.href} style={{
              display: "grid", gridTemplateColumns: "180px 1.2fr 1fr 140px 90px",
              gap: 24, alignItems: "center",
              padding: "24px 0",
              borderBottom: "1px solid var(--border-hairline)",
              textDecoration: "none",
              borderBottomColor: "var(--border-hairline)", borderBottomStyle: "solid", borderBottomWidth: 1,
              transition: "background 140ms"
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--edison-teal-pale)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              <div style={{
                width: 160, height: 100, borderRadius: 8, overflow: "hidden",
                backgroundImage: `url(${c.image})`,
                backgroundSize: "cover", backgroundPosition: "center"
              }}/>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)", marginBottom: 6
                }}>{c.category}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                  lineHeight: 1.3, color: "var(--edison-navy)", margin: "0 0 4px"
                }}>{c.title}</h3>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 12.5,
                  color: "var(--edison-gray-mid)"
                }}>{c.community} · {c.units} units · {c.location}</div>
              </div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--edison-text-body)", margin: 0
              }}>{c.summary}</p>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
                  color: "var(--edison-navy)", lineHeight: 1
                }}>{c.metrics[0].value}</div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 11.5,
                  color: "var(--edison-gray-mid)", marginTop: 6, lineHeight: 1.4
                }}>{c.metrics[0].label}</div>
              </div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: "var(--edison-teal-dark)", textAlign: "right"
              }}>Read →</div>
            </a>
          ))}
        </div>
      </section>

      <FinalCTA
        eyebrow="Your community next?"
        title="Want results like these for your association?"
        body="Every case study started with a board that picked up the phone. Request a proposal and we'll put together the path for your community."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Read Testimonials", href: "/testimonials" }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT
   ============================================================ */
const CASES_CONTENT = {
  intro: "Each Edison case study documents a specific community, the situation we inherited, the work performed, and the measurable outcome, with sizes, dates, and dollar figures the board signed off on. Community names are anonymized; details aren't.",
  cases: [
    {
      title: "Mid-transition rescue after a failed company switch",
      category: "Transition Rescue",
      community: "Sunset Lakes HOA",
      units: 412,
      location: "Lake Nona, Orlando",
      summary: "Inherited a community three weeks into a botched transition from a competitor, records incomplete, vendor relationships ambiguous, four months of delinquent assessments unbilled. Edison's transition team restored a clean ledger and homeowner confidence in 60 days.",
      metrics: [
        { value: "60 days", label: "To full operational baseline" },
        { value: "$214K", label: "Delinquent assessments recovered" },
        { value: "0 lost", label: "Records during rebuild" }
      ],
      image: "/assets/img-11.jpg",
      href: "#"
    },
    {
      title: "Reserve underfunding reversed before SB-4D",
      category: "Compliance",
      community: "Bayfront Condo Association",
      units: 184,
      location: "Brevard County, FL",
      summary: "A 28-year-old coastal condo facing milestone inspection with an underfunded reserve. Edison coordinated the SIRS, restructured the reserve banking strategy, and built a 5-year funding plan the board could defend.",
      metrics: [
        { value: "32%", label: "Reserve funding gap closed in year 1" },
        { value: "On time", label: "SB-4D filing completed" }
      ],
      image: "/assets/img-13.jpg",
      href: "#"
    },
    {
      title: "Manager continuity for a board tired of starting over",
      category: "Continuity",
      community: "Stonebrook Townhomes",
      units: 142,
      location: "Winter Garden",
      summary: "Switched to Edison after their fourth manager in five years at their previous company. The Edison manager who learned the community in year one is still there at year three, same accounting specialist, same enforcement coordinator.",
      metrics: [
        { value: "0", label: "Manager changes in 3 years" },
        { value: "1 day", label: "Avg. board-call response time" }
      ],
      image: "/assets/img-17.jpg",
      href: "#"
    },
    {
      title: "Roofing capital project delivered on budget",
      category: "Capital Projects",
      community: "Pinewood HOA",
      units: 96,
      location: "Clermont",
      summary: "Coordinated a community-wide roof replacement across 96 units with no special assessment. Edison's accounting team sourced 3 competing bids, sequenced disbursements against reserve cash flow, and protected homeowner equity.",
      metrics: [
        { value: "$0", label: "Special assessment required" },
        { value: "8 mo", label: "Project on schedule" }
      ],
      image: "/assets/img-21.jpg",
      href: "#"
    },
    {
      title: "Collections cleanup for a delinquency-heavy community",
      category: "Collections",
      community: "Cypress Crossing HOA",
      units: 268,
      location: "Kissimmee",
      summary: "Inherited 18% delinquency. Edison's in-house collections department implemented courtesy email reminders, structured the intent-to-lien workflow, and brought the community back to a healthy cash position without a single attorney-led foreclosure.",
      metrics: [
        { value: "3.2%", label: "Delinquency at month 12" },
        { value: "0", label: "Foreclosure escalations" }
      ],
      image: "/assets/img-22.jpg",
      href: "#"
    },
    {
      title: "Covenant enforcement reset without the homeowner backlash",
      category: "Enforcement",
      community: "Heritage Oaks HOA",
      units: 228,
      location: "Oviedo",
      summary: "Took over a community where enforcement had become punitive and homeowner trust was eroding. Edison's enforcement department reset the program around correction-first protocols, address-not-name inspections, and quarterly board reporting.",
      metrics: [
        { value: "62%", label: "Drop in formal hearings, year 1" },
        { value: "0", label: "Lawsuits initiated" }
      ],
      image: "/assets/img-inspector.jpg",
      href: "#"
    },
    {
      title: "Self-managed community transitions to professional support",
      category: "Self-Managed",
      community: "Vista Grove HOA",
      units: 86,
      location: "Altamonte Springs",
      summary: "A long-time self-managed HOA where a single volunteer treasurer was managing finances. Edison built a custom hybrid arrangement, took over compliance and accounting, and kept volunteer leadership involved in what they wanted to keep.",
      metrics: [
        { value: "0", label: "Treasurer burnout incidents since" },
        { value: "Audit", label: "Passed first formal audit" }
      ],
      image: "/assets/img-resident-portal.jpg",
      href: "#"
    }
  ]
};

export { CaseStudiesPageA, CaseStudiesPageB, CASES_CONTENT };
