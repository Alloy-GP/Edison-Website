import React, { useState as useTplState } from 'react';
import { SectionHeading, InteriorButton, InteriorEyebrow } from './interior-components';

/* ============================================================
   Edison, Template-Specific Section Components
   ----------------------------------------------------------------
   Reusable sections introduced for Solution, Geo, About,
   Contact, Testimonial, and other Phase 1 page templates.
   ============================================================ */

/* ---------- Empathy hero (Solution variant A) ---------- */
function EmpathyHero({ eyebrow, title, lede, primary, secondary, image }) {
  return (
    <section className="ts-empathy-hero" style={{
      background: "linear-gradient(180deg, #fff 0%, var(--edison-teal-pale) 100%)",
      padding: "96px 48px 80px"
    }}>
      <div className="ts-empathy-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
                    display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 64,
                    alignItems: "center" }}>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>{eyebrow}</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 54, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 24px"
          }}>{title}</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: "0 0 32px",
            maxWidth: 560
          }}>{lede}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <InteriorButton variant="primary" size="lg" href={primary.href}>
              {primary.label}
            </InteriorButton>
            {secondary && (
              <InteriorButton variant="ghost" size="lg" href={secondary.href}>
                {secondary.label}
              </InteriorButton>
            )}
          </div>
        </div>
        <div className="ts-empathy-hero-img" style={{
          width: "100%", aspectRatio: "5 / 4",
          borderRadius: 16, overflow: "hidden",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", backgroundPosition: "center",
          boxShadow: "var(--shadow-lg)"
        }}/>
      </div>
    </section>
  );
}

/* ---------- Stat hero (Solution variant B) ---------- */
function StatHero({ eyebrow, title, lede, stat, primary, secondary, bg }) {
  return (
    <section className="ts-stat-hero" style={{
      background: "var(--edison-navy)",
      color: "#fff",
      padding: "104px 48px 88px",
      position: "relative", overflow: "hidden"
    }}>
      {bg && (
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(15,29,51,.84) 0%, rgba(15,29,51,.96) 100%), url(${bg})`,
          backgroundSize: "cover", backgroundPosition: "center", opacity: 1
        }}/>
      )}
      <div className="ts-stat-hero-grid" style={{ maxWidth: 1200, margin: "0 auto", position: "relative",
                    display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64,
                    alignItems: "center" }}>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>{eyebrow}</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 58, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 24px"
          }}>{title}</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
            color: "rgba(255,255,255,.85)", margin: "0 0 32px", maxWidth: 620
          }}>{lede}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <InteriorButton variant="onDark" size="lg" href={primary.href}>{primary.label}</InteriorButton>
            {secondary && (
              <InteriorButton variant="ghostOnDark" size="lg" href={secondary.href}>
                {secondary.label}
              </InteriorButton>
            )}
          </div>
        </div>
        {stat && (
          <div style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.16)",
            borderRadius: 16, padding: "32px 30px"
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal)", marginBottom: 14
            }}>{stat.eyebrow}</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 72, lineHeight: 1, letterSpacing: "-0.03em",
              color: "#fff", marginBottom: 12
            }}>{stat.value}</div>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.5,
              color: "rgba(255,255,255,.78)"
            }}>{stat.caption}</div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Numbered process steps ---------- */
function NumberedSteps({ eyebrow, title, sub, steps, background = "#fff", variant = "horizontal" }) {
  return (
    <section className="ts-numbered-steps" style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub}/>
        <div className="ts-numbered-steps-grid" style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: variant === "horizontal" ? `repeat(${steps.length}, 1fr)` : "1fr",
          gap: variant === "horizontal" ? 20 : 16
        }}>
          {steps.map((s, i) => (
            <article key={i} style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 12,
              padding: "26px 24px",
              display: "flex", flexDirection: variant === "horizontal" ? "column" : "row",
              gap: variant === "horizontal" ? 14 : 22,
              alignItems: variant === "horizontal" ? "stretch" : "flex-start",
              boxShadow: "var(--shadow-xs)"
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 999,
                background: "var(--edison-teal-pale)",
                color: "var(--edison-teal-dark)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 17,
                flexShrink: 0
              }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 18, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: "0 0 10px"
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: s.href ? "0 0 10px" : 0
                }}>{s.body}</p>
                {s.href && (
                  <a href={s.href} style={{
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
                    color: "var(--edison-teal-dark)", textDecoration: "none", borderBottom: 0
                  }}>Learn more →</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Comparison table (Solution variant B) ---------- */
function ComparisonTable({ eyebrow, title, sub, leftLabel, rightLabel, rows, background = "var(--edison-teal-pale)" }) {
  return (
    <section className="ts-comparison" style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub} align="center"/>
        {/* The mobile stacked layout replaces the header row with ::before
            labels; feed it the real column names so a non-"Typical vs Edison"
            comparison doesn't get mislabelled. */}
        <div className="ts-comparison-wrap" style={{
          marginTop: 48,
          background: "#fff",
          border: "1px solid var(--border-hairline)",
          borderRadius: 14, overflow: "hidden",
          boxShadow: "var(--shadow-sm)",
          "--cmp-left-label": `"${leftLabel}"`,
          "--cmp-right-label": `"${rightLabel}"`
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
            background: "var(--edison-navy)", color: "#fff"
          }}>
            <div style={{ padding: "20px 24px" }}/>
            <div style={{
              padding: "20px 24px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "rgba(255,255,255,.65)",
              borderLeft: "1px solid rgba(255,255,255,.12)"
            }}>{leftLabel}</div>
            <div style={{
              padding: "20px 24px",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--edison-teal)",
              borderLeft: "1px solid rgba(255,255,255,.12)",
              background: "rgba(60,200,200,.08)"
            }}>{rightLabel}</div>
          </div>
          {rows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr",
              borderTop: i > 0 ? "1px solid var(--border-hairline)" : 0
            }}>
              <div style={{
                padding: "20px 24px",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
                color: "var(--edison-navy)"
              }}>{row.label}</div>
              <div style={{
                padding: "20px 24px",
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55,
                color: "var(--edison-gray-mid)",
                borderLeft: "1px solid var(--border-hairline)"
              }}>{row.left}</div>
              <div style={{
                padding: "20px 24px",
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55,
                color: "var(--edison-text-body)",
                background: "rgba(60,200,200,.05)",
                borderLeft: "1px solid var(--border-hairline)",
                fontWeight: 500
              }}>{row.right}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats band ---------- */
function StatsBand({ eyebrow, title, stats, background = "#fff" }) {
  return (
    <section className="ts-stats-band" style={{ background, padding: "80px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {(eyebrow || title) && (
          <div style={{ marginBottom: 40, maxWidth: 720 }}>
            {eyebrow && <InteriorEyebrow>{eyebrow}</InteriorEyebrow>}
            {title && <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 32, lineHeight: 1.18, letterSpacing: "-0.01em",
              color: "var(--edison-navy)", margin: "12px 0 0"
            }}>{title}</h2>}
          </div>
        )}
        <div className="ts-stats-band-grid" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: 32
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              paddingLeft: 20,
              borderLeft: "3px solid var(--edison-teal)"
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 56, lineHeight: 1, letterSpacing: "-0.02em",
                color: "var(--edison-navy)", marginBottom: 12
              }}>{s.value}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55,
                color: "var(--edison-text-body)"
              }}>{s.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pull-quote testimonial ---------- */
function PullQuote({ quote, attribution, role, community, background = "#fff" }) {
  return (
    <section className="ts-pull-quote" style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 80, lineHeight: 0.5,
          color: "var(--edison-teal)", marginBottom: 32, opacity: 0.6
        }} aria-hidden="true">"</div>
        <blockquote style={{
          fontFamily: "var(--font-display)", fontWeight: 600,
          fontSize: 28, lineHeight: 1.35, letterSpacing: "-0.01em",
          color: "var(--edison-navy)", margin: "0 0 32px",
          fontStyle: "normal"
        }}>{quote}</blockquote>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
          color: "var(--edison-navy)"
        }}>{attribution}</div>
        <div style={{
          fontFamily: "var(--font-body)", fontSize: 13.5,
          color: "var(--edison-gray-mid)", marginTop: 4
        }}>{role}{community ? ` · ${community}` : ""}</div>
      </div>
    </section>
  );
}

/* ---------- Geo Hero, city skyline / aerial focus ---------- */
function GeoHeroLocal({ eyebrow, city, lede, primary, secondary, image }) {
  return (
    <section className="ts-geo-hero-local" style={{
      position: "relative", minHeight: 480,
      backgroundImage: `linear-gradient(180deg, rgba(15,29,51,.55) 0%, rgba(15,29,51,.72) 100%), url(${image})`,
      backgroundSize: "cover", backgroundPosition: "center",
      color: "#fff", padding: "120px 48px 96px",
      display: "flex", alignItems: "center"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>{eyebrow}</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 58, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 22px"
          }}>HOA Management in <span style={{ color: "var(--edison-teal)" }}>{city}</span></h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
            color: "rgba(255,255,255,.88)", margin: "0 0 32px", maxWidth: 620
          }}>{lede}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <InteriorButton variant="onDark" size="lg" href={primary.href}>{primary.label}</InteriorButton>
            {secondary && (
              <InteriorButton variant="ghostOnDark" size="lg" href={secondary.href}>
                {secondary.label}
              </InteriorButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Geo Hero, service-first with city qualifier ---------- */
function GeoHeroService({ eyebrow, title, lede, city, locationStrip, primary, secondary }) {
  return (
    <section className="ts-geo-hero-service" style={{ background: "#fff", padding: "88px 48px 56px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
          letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--edison-teal-dark)", marginBottom: 22
        }}>{eyebrow}</div>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: 60, lineHeight: 1.06, letterSpacing: "-0.02em",
          color: "var(--edison-navy)", margin: "0 0 24px",
          maxWidth: 980
        }}>{title}</h1>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
          color: "var(--edison-text-body)", margin: "0 0 32px", maxWidth: 760
        }}>{lede}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
          <InteriorButton variant="primary" size="lg" href={primary.href}>{primary.label}</InteriorButton>
          {secondary && (
            <InteriorButton variant="ghost" size="lg" href={secondary.href}>{secondary.label}</InteriorButton>
          )}
        </div>
        {locationStrip && (
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 18,
            paddingTop: 28, borderTop: "1px solid var(--border-hairline)",
            fontFamily: "var(--font-body)", fontSize: 14,
            color: "var(--edison-gray-mid)"
          }}>
            {locationStrip.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "var(--edison-teal-dark)", fontWeight: 700 }}>·</span>
                <span><strong style={{ color: "var(--edison-navy)" }}>{s.label}</strong> {s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Community / neighborhoods list ---------- */
function NeighborhoodList({ eyebrow, title, sub, items, background = "#fff" }) {
  return (
    <section className="ts-neighborhood-list" style={{ background, padding: "80px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeading eyebrow={eyebrow} title={title} sub={sub}/>
        <div style={{
          marginTop: 36,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 12
        }}>
          {items.map((n, i) => (
            <div key={i} style={{
              padding: "14px 18px",
              background: "var(--edison-teal-pale)",
              borderRadius: 8,
              fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
              color: "var(--edison-navy)"
            }}>
              <span style={{ color: "var(--edison-teal-dark)", marginRight: 8 }}>·</span>{n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Local context: image + body copy ---------- */
function LocalContext({ eyebrow, title, paragraphs = [], image, background = "var(--edison-teal-pale)" }) {
  return (
    <section className="ts-local-context" style={{ background, padding: "88px 48px" }}>
      <div className="ts-local-context-grid" style={{ maxWidth: 1200, margin: "0 auto",
                    display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 56,
                    alignItems: "center" }}>
        <div className="ts-local-context-img" style={{
          width: "100%", aspectRatio: "5 / 4",
          borderRadius: 16, overflow: "hidden",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", backgroundPosition: "center",
          boxShadow: "var(--shadow-md)"
        }}/>
        <div>
          <SectionHeading eyebrow={eyebrow} title={title}/>
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            {paragraphs.map((p, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7,
                color: "var(--edison-text-body)", margin: 0
              }}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { EmpathyHero, StatHero, NumberedSteps, ComparisonTable, StatsBand, PullQuote, GeoHeroLocal, GeoHeroService, NeighborhoodList, LocalContext };

/* ============================================================
   ANTI-PATTERNS BLOCK (required by sitemap v3.1)
   Used on /about/, /services/hoa-management/, /services/condo-management/,
   /solutions/switch-hoa-management-company/.
   ============================================================ */
function AntiPatterns({
  eyebrow = "What we deliberately don't do",
  title = "Anti-patterns matter as much as patterns.",
  items,
  background = "var(--edison-navy)",
  variant = "dark"
}) {
  const isDark = variant === "dark";
  return (
    <section className="ts-anti-patterns" style={{ background, color: isDark ? "#fff" : "var(--edison-navy)",
                      padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ maxWidth: 760, marginBottom: 40 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: isDark ? "var(--edison-teal)" : "var(--edison-teal-dark)",
            marginBottom: 14
          }}>{eyebrow}</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.01em",
            color: isDark ? "#fff" : "var(--edison-navy)",
            margin: 0
          }}>{title}</h2>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "10px 28px"
        }}>
          {items.map((a, i) => (
            <div key={i} style={{
              display: "flex", gap: 14, alignItems: "flex-start",
              padding: "18px 0",
              borderTop: `1px solid ${isDark ? "rgba(255,255,255,.14)" : "var(--border-hairline)"}`
            }}>
              <span style={{
                color: isDark ? "var(--edison-teal)" : "var(--edison-teal-dark)",
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: 26, lineHeight: 1, flexShrink: 0
              }}>×</span>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                  color: isDark ? "#fff" : "var(--edison-navy)",
                  marginBottom: 4
                }}>{a.title}</div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55,
                  color: isDark ? "rgba(255,255,255,.78)" : "var(--edison-text-body)"
                }}>{a.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CROSS-PILLAR CARD, link from HOA Pillar to Condo Pillar
   (and vice versa). Required on both Main Pillar pages.
   ============================================================ */
function CrossPillarCard({ eyebrow = "Different community type?",
                          title, body, href, ctaLabel = "See the other pillar",
                          background = "var(--edison-teal-pale)" }) {
  return (
    <section className="ts-cross-pillar" style={{ background, padding: "56px 48px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <a href={href} className="ts-cross-pillar-inner" style={{
          display: "grid", gridTemplateColumns: "1.4fr auto",
          gap: 32, alignItems: "center",
          padding: "32px 36px",
          background: "#fff", borderRadius: 14,
          border: "1px solid var(--border-hairline)",
          boxShadow: "var(--shadow-sm)",
          textDecoration: "none", borderBottom: 0,
          transition: "transform 220ms, box-shadow 220ms"
        }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "var(--shadow-md)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 10
            }}>{eyebrow}</div>
            <h3 style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
              lineHeight: 1.25, color: "var(--edison-navy)", margin: "0 0 8px"
            }}>{title}</h3>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
              color: "var(--edison-text-body)", margin: 0, maxWidth: 600
            }}>{body}</p>
          </div>
          <div className="ts-cross-pillar-cta" style={{
            background: "var(--edison-navy)", color: "var(--edison-teal)",
            padding: "14px 22px", borderRadius: 8,
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
            display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap"
          }}>
            {ctaLabel} <span aria-hidden="true">→</span>
          </div>
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   SUB-SERVICE NAV BLOCK, in-body grid linking to sub-services.
   Sub-services aren't in the top nav, so the parent pillar/service
   page is the only path to them. Required on Main Pillar pages
   and on Service pages with sub-services.
   ============================================================ */
function SubServiceNav({ eyebrow = "Go deeper",
                        title = "Sub-services under this pillar",
                        sub, items, background = "#fff", itemLabel = "Sub-Service" }) {
  return (
    <section className="ts-sub-service-nav" style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ maxWidth: 820, marginBottom: 36 }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 12
          }}>{eyebrow}</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "0 0 12px"
          }}>{title}</h2>
          {sub && <p style={{
            fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65,
            color: "var(--edison-text-body)", margin: 0, maxWidth: 760
          }}>{sub}</p>}
        </div>
        <div className="ts-sub-service-nav-grid" style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`,
          gap: 18
        }}>
          {items.map((it, i) => (
            <a key={i} href={it.href} style={{
              textDecoration: "none", borderBottom: 0,
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 12, padding: "26px 26px",
              display: "flex", flexDirection: "column", gap: 12,
              boxShadow: "var(--shadow-xs)",
              transition: "all 220ms"
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.borderColor = "var(--edison-teal)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xs)";
                e.currentTarget.style.borderColor = "var(--border-hairline)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)"
              }}>{itemLabel}</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19,
                lineHeight: 1.3, color: "var(--edison-navy)", margin: 0
              }}>{it.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0, flex: 1
              }}>{it.body}</p>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: "var(--edison-teal-dark)",
                display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4
              }}>Learn more <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AUTHOR BYLINE BLOCK, reusable across /edison-education/,
   every blog spoke, and About sections. Surfaces Tracy's PCAM
   + CAI Chapter President credentials prominently.
   ============================================================ */
function AuthorBylineBlock({
  name = "Tracy Durham",
  role = "Founder & Principal · Edison Association Management",
  credentials = ["PCAM", "2025 CAI Central Florida Chapter President"],
  bio = "Tracy founded Edison with a deliberate alternative to volume-driven HOA management. PCAM-credentialed, 2025 Central Florida CAI Chapter President, and Orlando Business Journal 40 Under 40, she personally onboards every new association.",
  image,
  cta = { label: "Read more about Edison", href: "/about" }
}) {
  return (
    <section className="ts-author-byline" style={{ background: "var(--bg-3, #F5F7FA)", padding: "56px 48px" }}>
      <div className="ts-author-byline-grid" style={{ maxWidth: 980, margin: "0 auto",
                    display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 28,
                    alignItems: "center" }}>
        <div style={{
          width: 88, height: 88, borderRadius: 999, overflow: "hidden",
          background: image
            ? undefined
            : "linear-gradient(135deg, var(--edison-teal-pale) 0%, var(--edison-teal) 100%)",
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: "cover", backgroundPosition: "center top",
          color: "var(--edison-navy)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30,
          flexShrink: 0,
          border: "3px solid #fff",
          boxShadow: "var(--shadow-sm)"
        }}>
          {!image && name.split(" ").map(n => n[0]).slice(0, 2).join("")}
        </div>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
            color: "var(--edison-navy)", marginBottom: 4
          }}>{name}</div>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 13.5,
            color: "var(--edison-gray-mid)", marginBottom: 10
          }}>{role}</div>
          {credentials.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
              {credentials.map((c, i) => (
                <span key={i} style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                  letterSpacing: "0.06em",
                  background: "var(--edison-teal-pale)",
                  color: "var(--edison-teal-dark)",
                  padding: "4px 10px", borderRadius: 4
                }}>{c}</span>
              ))}
            </div>
          )}
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: 0
          }}>{bio}</p>
        </div>
        <a href={cta.href} className="ts-author-byline-cta" style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
          color: "var(--edison-teal-dark)",
          textDecoration: "none", borderBottom: 0,
          whiteSpace: "nowrap"
        }}>{cta.label} →</a>
      </div>
    </section>
  );
}

export { AntiPatterns, CrossPillarCard, SubServiceNav, AuthorBylineBlock, BulletsWithImage };

/* ============================================================
   BULLETS + IMAGE, checklist with paired image. Used on Pillar
   pages, About variants, and originally homepage.
   ============================================================ */
function BulletsWithImage({ eyebrow, title, bullets, image }) {
  return (
    <section className="ts-bullets-section" style={{ background: "#fff", padding: "88px 48px" }}>
      <div className="ts-bullets-grid" style={{ maxWidth: 1200, margin: "0 auto",
                    display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64,
                    alignItems: "center" }}>
        <div className="ts-bullets-img" style={{
          width: "100%", aspectRatio: "5 / 4",
          minHeight: 280,
          borderRadius: 18, overflow: "hidden",
          boxShadow: "var(--shadow-md)",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover", backgroundPosition: "center"
        }}/>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 14
          }}>{eyebrow}</div>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 34, lineHeight: 1.2, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "0 0 24px",
            position: "relative", paddingBottom: 16, display: "inline-block"
          }}>
            {title}
            <span style={{ position: "absolute", left: 0, bottom: 0,
                           width: 60, height: 3,
                           background: "var(--edison-teal)", borderRadius: 2 }}/>
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0,
                       display: "flex", flexDirection: "column", gap: 14 }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start",
                                   fontFamily: "var(--font-body)", fontSize: 16,
                                   lineHeight: 1.55, color: "var(--edison-text-body)" }}>
                <span style={{
                  flexShrink: 0, width: 26, height: 26, borderRadius: 999,
                  background: "var(--edison-teal-pale)",
                  color: "var(--edison-teal-dark)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 14, marginTop: 1
                }} aria-hidden="true">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
