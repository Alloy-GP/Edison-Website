import React from 'react';
import { InteriorButton, InteriorEyebrow, SectionHeading } from './interior-components';

/* ============================================================
   SERVICE LEVEL SECTIONS  ·  /service-levels
   Five-tier comparison patterns. The existing ComparisonTable in
   template-sections.jsx is hard-wired to two columns ("Typical vs
   Edison"), so the ladder needed its own primitives:

     TierCards     — the five levels side by side, scannable
     LevelChooser  — scenario-first routing, the "help me pick" job
     FeatureMatrix — full row-by-row grid with a sticky header

   Pricing visibility is controlled by the caller (see PRICING_MODE in
   templates/service-levels-template.jsx), never hard-coded here.
   ============================================================ */

/* Shared cell vocabulary for FeatureMatrix + TierCards:
   true → included, false → not included, string → qualified answer. */
function Included({ onTint = false }) {
  return (
    <span aria-label="Included" title="Included" style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 24, height: 24, borderRadius: 999,
      background: onTint ? "var(--edison-teal)" : "var(--edison-teal-pale)",
      color: onTint ? "#fff" : "var(--edison-teal-dark)",
      fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13,
      lineHeight: 1
    }}>✓</span>
  );
}

function NotIncluded() {
  return (
    <span aria-label="Not included" title="Not included" style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: 24, height: 24,
      color: "var(--edison-navy-50)",
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
      lineHeight: 1
    }}>–</span>
  );
}

/* "Custom quote" set at numeral size shouts louder than the figures it sits
   beside. Words get stepped down so the row still scans as one rank. */
const isFigure = (price) => typeof price === 'string' && price.trim().startsWith('$');

function Cell({ value, onTint }) {
  if (value === true)  return <Included onTint={onTint}/>;
  if (value === false || value == null) return <NotIncluded/>;
  return (
    <span style={{
      fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.45,
      color: "var(--edison-text-body)", fontWeight: 600
    }}>{value}</span>
  );
}

/* ============================================================
   TIER CARDS — the five levels, left to right, lowest to highest
   ============================================================ */
function TierCards({ eyebrow, title, sub, tiers, showPricing = true,
                     background = "#fff" }) {
  return (
    <section className="sl-tier-cards" style={{ background, padding: "88px 40px" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} sub={sub}/>
        </div>

        <div className="sl-tier-grid" style={{
          marginTop: 56,
          display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          gap: 16, alignItems: "stretch"
        }}>
          {tiers.map((t) => <TierCard key={t.id} tier={t} showPricing={showPricing}/>)}
        </div>

        <p className="sl-tier-note" style={{
          fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.6,
          color: "var(--edison-gray-mid)", textAlign: "center",
          margin: "32px auto 0", maxWidth: 780
        }}>
          Not sure where you land? Edison reviews fit before placing any community.
          If a level is wrong for you, we will say so — including when full management
          is the better value.
        </p>
      </div>
    </section>
  );
}

function TierCard({ tier, showPricing }) {
  const featured = !!tier.badge;
  return (
    <article id={tier.id} style={{
      display: "flex", flexDirection: "column",
      background: "#fff",
      border: featured ? "2px solid var(--edison-teal)" : "1px solid var(--border-hairline)",
      borderRadius: 14,
      boxShadow: featured ? "var(--shadow-md)" : "var(--shadow-xs)",
      overflow: "hidden",
      scrollMarginTop: "calc(var(--site-header-height) + 20px)"
    }}>
      {/* Badge rail keeps every card's body aligned whether or not it has one */}
      <div style={{
        height: 28, flexShrink: 0,
        background: featured ? "var(--edison-teal)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 10.5,
        letterSpacing: "0.12em", textTransform: "uppercase",
        color: "var(--edison-navy)"
      }}>{tier.badge || ""}</div>

      <div style={{ padding: "22px 20px 24px", display: "flex", flexDirection: "column",
                    gap: 14, flex: 1 }}>
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 19,
            lineHeight: 1.2, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: "0 0 8px"
          }}>{tier.name}</h3>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: 0
          }}>{tier.summary}</p>
        </div>

        {showPricing && (
          <div style={{
            paddingTop: 14, borderTop: "1px solid var(--border-hairline)"
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: isFigure(tier.price) ? 26 : 19,
              lineHeight: 1.1, letterSpacing: "-0.02em",
              color: "var(--edison-navy)"
            }}>{tier.price}</div>
            {tier.priceNote && <div style={{
              fontFamily: "var(--font-body)", fontSize: 12, lineHeight: 1.45,
              color: "var(--edison-gray-mid)", marginTop: 5
            }}>{tier.priceNote}</div>}
          </div>
        )}

        <div style={{
          paddingTop: 14, borderTop: "1px solid var(--border-hairline)"
        }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 6
          }}>Manager access</div>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5,
            color: "var(--edison-text-body)", fontWeight: 600
          }}>{tier.managerAccess}</div>
        </div>

        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 8
          }}>Includes</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0,
                       display: "flex", flexDirection: "column", gap: 7 }}>
            {tier.highlights.map((h, i) => (
              <li key={i} style={{
                display: "flex", gap: 8, alignItems: "flex-start",
                fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.45,
                color: "var(--edison-text-body)"
              }}>
                <span aria-hidden="true" style={{
                  color: "var(--edison-teal-dark)", fontWeight: 800,
                  fontSize: 12, lineHeight: 1.5, flexShrink: 0
                }}>✓</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div style={{
          marginTop: "auto", paddingTop: 16,
          borderTop: "1px solid var(--border-hairline)"
        }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 6
          }}>Best fit</div>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5,
            color: "var(--edison-text-body)", margin: "0 0 16px"
          }}>{tier.bestFit}</p>
          <InteriorButton
            variant={featured ? "primary" : "ghost"}
            size="sm"
            href="/request-a-proposal"
          >Request a proposal</InteriorButton>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   LEVEL CHOOSER — scenario first, level second.
   Boards do not arrive knowing what "Portfolio Plus" means; they
   arrive knowing what their community is struggling with.
   ============================================================ */
function LevelChooser({ eyebrow, title, sub, paths,
                        background = "var(--edison-teal-pale)" }) {
  return (
    <section className="sl-chooser" style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} sub={sub}/>
        </div>
        <div className="sl-chooser-grid" style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18
        }}>
          {paths.map((p, i) => (
            <a key={i} href={`#${p.tierId}`} className="sl-chooser-card" style={{
              textDecoration: "none", borderBottom: 0,
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 14,
              padding: "26px 28px",
              display: "flex", flexDirection: "column", gap: 12,
              boxShadow: "var(--shadow-xs)",
              transition: "box-shadow 220ms var(--ease-standard), border-color 220ms var(--ease-standard), transform 220ms var(--ease-standard)"
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                lineHeight: 1.35, color: "var(--edison-navy)", margin: 0
              }}>&ldquo;{p.scenario}&rdquo;</p>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0, flex: 1
              }}>{p.why}</p>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                paddingTop: 14, borderTop: "1px solid var(--border-hairline)"
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-gray-mid)"
                }}>Start with</span>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15,
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", gap: 6
                }}>{p.tierName} <span aria-hidden="true">→</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURE MATRIX — the actual comparison tool.
   Header row sticks under the site header on desktop; on narrow
   screens global.css swaps the wrapper to horizontal scroll and
   drops the sticky (an overflow container breaks position:sticky).
   ============================================================ */
function FeatureMatrix({ eyebrow, title, sub, tiers, groups, footnotes = [],
                         showPricing = true, background = "#fff" }) {
  const cols = `minmax(190px, 1.5fr) repeat(${tiers.length}, minmax(130px, 1fr))`;

  return (
    <section className="sl-matrix" style={{ background, padding: "88px 40px" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} sub={sub}/>
        </div>

        <p className="sl-matrix-hint" style={{
          display: "none",
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "var(--edison-gray-mid)", textAlign: "center",
          margin: "24px 0 0"
        }}>Swipe the table sideways to compare all five levels.</p>

        <div className="sl-matrix-wrap" style={{ marginTop: 48 }}>
          {/* No overflow:hidden here — it would become the containing block
              for the sticky header and pin it to the table instead of the
              viewport. Corners are rounded on the edge cells instead. */}
          <div className="sl-matrix-grid" style={{
            minWidth: 880,
            border: "1px solid var(--border-hairline)",
            borderRadius: 14,
            background: "#fff",
            boxShadow: "var(--shadow-sm)"
          }}>
            {/* ---- Sticky header ----
                top:0 rather than the site header height: the site header is
                fixed but auto-hides on scroll down, which is exactly when the
                table is being read. Offsetting by 122px would leave the header
                floating mid-table once the nav retracts. */}
            <div className="sl-matrix-head" style={{
              display: "grid", gridTemplateColumns: cols,
              background: "var(--edison-navy)", color: "#fff",
              position: "sticky", top: 0, zIndex: 2
            }}>
              <div style={{ padding: "16px 20px", borderTopLeftRadius: 13 }}/>
              {tiers.map((t, ti) => (
                <div key={t.id} style={{
                  padding: "16px 14px",
                  borderLeft: "1px solid rgba(255,255,255,.12)",
                  borderTopRightRadius: ti === tiers.length - 1 ? 13 : 0,
                  background: t.badge ? "rgba(60,200,200,.12)" : "transparent"
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13.5,
                    lineHeight: 1.25,
                    color: t.badge ? "var(--edison-teal)" : "#fff"
                  }}>{t.name}</div>
                  {showPricing && (
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 11.5, lineHeight: 1.4,
                      color: "rgba(255,255,255,.62)", marginTop: 4
                    }}>{t.priceShort}</div>
                  )}
                </div>
              ))}
            </div>

            {/* ---- Grouped rows ---- */}
            {groups.map((g, gi) => (
              <React.Fragment key={gi}>
                {/* Label is its own sticky span so the group stays readable
                    once the table is scrolled sideways on narrow screens. */}
                <div className="sl-matrix-group" style={{
                  padding: "14px 20px",
                  background: "var(--edison-teal-pale)",
                  borderTop: "1px solid var(--border-hairline)",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-navy)"
                }}><span className="sl-matrix-group-label">{g.group}</span></div>

                {g.rows.map((row, ri) => (
                  <div key={ri} className="sl-matrix-row" style={{
                    display: "grid", gridTemplateColumns: cols,
                    borderTop: "1px solid var(--border-hairline)"
                  }}>
                    <div style={{
                      padding: "14px 20px",
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                      lineHeight: 1.4, color: "var(--edison-navy)"
                    }}>{row.label}</div>
                    {tiers.map((t) => (
                      <div key={t.id} style={{
                        padding: "14px",
                        display: "flex", alignItems: "center",
                        borderLeft: "1px solid var(--border-hairline)",
                        background: t.badge ? "rgba(60,200,200,.05)" : "transparent"
                      }}>
                        <Cell value={row.values[t.id]}/>
                      </div>
                    ))}
                  </div>
                ))}
              </React.Fragment>
            ))}

            {/* ---- Pricing footer row ---- */}
            {showPricing && (
              <div className="sl-matrix-row" style={{
                display: "grid", gridTemplateColumns: cols,
                borderTop: "2px solid var(--edison-navy)"
              }}>
                <div style={{
                  padding: "18px 20px",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14,
                  color: "var(--edison-navy)", borderBottomLeftRadius: 13
                }}>Starting at</div>
                {tiers.map((t, ti) => (
                  <div key={t.id} style={{
                    padding: "18px 14px",
                    borderLeft: "1px solid var(--border-hairline)",
                    borderBottomRightRadius: ti === tiers.length - 1 ? 13 : 0,
                    background: t.badge ? "rgba(60,200,200,.05)" : "transparent"
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: isFigure(t.price) ? 17 : 14.5,
                      lineHeight: 1.2, color: "var(--edison-navy)"
                    }}>{t.price}</div>
                    {t.priceNote && <div style={{
                      fontFamily: "var(--font-body)", fontSize: 11.5, lineHeight: 1.4,
                      color: "var(--edison-gray-mid)", marginTop: 4
                    }}>{t.priceNote}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {footnotes.length > 0 && (
          <ul style={{
            listStyle: "none", padding: 0, margin: "24px 0 0",
            display: "flex", flexDirection: "column", gap: 6
          }}>
            {footnotes.map((f, i) => (
              <li key={i} style={{
                fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.6,
                color: "var(--edison-gray-mid)"
              }}>{f}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   EVERY LEVEL BAND — what does not change as you move up or down
   ============================================================ */
function EveryLevelBand({ eyebrow, title, sub, items }) {
  return (
    <section className="sl-every-level" style={{
      background: "var(--edison-navy)", padding: "88px 48px", color: "#fff"
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ maxWidth: 760 }}>
          {eyebrow && <InteriorEyebrow color="var(--edison-teal)">{eyebrow}</InteriorEyebrow>}
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 34, lineHeight: 1.18, letterSpacing: "-0.01em",
            color: "#fff", margin: "14px 0 14px"
          }}>{title}</h2>
          {sub && <p style={{
            fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
            color: "rgba(255,255,255,.78)", margin: 0
          }}>{sub}</p>}
        </div>
        <div className="sl-every-level-grid" style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20
        }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.12)",
              borderRadius: 12, padding: "26px 24px",
              display: "flex", flexDirection: "column", gap: 10
            }}>
              <span aria-hidden="true" style={{
                width: 34, height: 34, borderRadius: 999,
                background: "var(--edison-teal)", color: "var(--edison-navy)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16
              }}>✓</span>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16.5,
                lineHeight: 1.3, color: "#fff", margin: 0
              }}>{it.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
                color: "rgba(255,255,255,.78)", margin: 0
              }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TierCards, LevelChooser, FeatureMatrix, EveryLevelBand };
