import React, { useEffect, useMemo, useState } from 'react';
import { InteriorButton, InteriorEyebrow, SectionHeading } from './interior-components';

/* ============================================================
   SERVICE LEVEL SECTIONS  ·  /service-levels

     LevelWizard   — three questions (often two), one recommendation.
                     Replaced a static scenario grid: that grid asked a
                     volunteer board to read five options and diagnose
                     itself, which is the work it came here to avoid.
     FeatureMatrix — the comparison. Groups collapse, because eighteen
                     rows open at once is a reference document rather
                     than a decision aid.
     InfoTip       — inline jargon disclosure. "LCAM" and "AR/AP" mean
                     nothing to a volunteer treasurer.
     EveryLevelBand— what holds constant across the ladder.

   Pricing visibility is controlled by the caller (see PRICING_MODE in
   templates/service-levels-template.jsx), never hard-coded here.
   ============================================================ */

/* Cell vocabulary: true → included, false → not included,
   string → qualified answer ("Per use", "Monthly", "1–3 days on site"). */
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

/* "Custom quote" set at numeral size shouts louder than the figures it
   sits beside. Words get stepped down so the row still scans as one rank. */
const isFigure = (price) => typeof price === 'string' && price.trim().startsWith('$');

/* ============================================================
   INFO TIP — expands in place rather than floating.
   A popover would be clipped by the matrix's overflow-x container on
   narrow screens, and a hover tip is unreachable on touch. This is a
   plain disclosure button: mouse, finger and keyboard all work.
   ============================================================ */
function InfoTip({ term, children }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? `Hide definition of ${term}` : `What is ${term}?`}
        style={{
          appearance: "none", border: 0, padding: 0, marginLeft: 7,
          width: 17, height: 17, borderRadius: 999, verticalAlign: "middle",
          background: open ? "var(--edison-teal-dark)" : "var(--edison-teal-pale)",
          color: open ? "#fff" : "var(--edison-teal-dark)",
          fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 10.5,
          lineHeight: 1, cursor: "pointer",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          transition: "background 160ms var(--ease-standard), color 160ms var(--ease-standard)"
        }}
      >i</button>
      {open && (
        <span style={{
          display: "block", marginTop: 9,
          fontFamily: "var(--font-body)", fontWeight: 400,
          fontSize: 12.5, lineHeight: 1.55,
          color: "var(--edison-text-body)",
          borderLeft: "2px solid var(--edison-teal)",
          paddingLeft: 11
        }}>{children}</span>
      )}
    </>
  );
}

/* ============================================================
   LEVEL WIZARD — the "help me pick" job, done properly.

   Answers auto-advance; a Next button on a three-question form is a
   click that buys nothing. The on-site question only appears for boards
   that want full management, so most people answer two and are done.
   ============================================================ */
function LevelWizard({ eyebrow, title, sub, questions, tiers, recommend,
                       onResult, background = "var(--edison-teal-pale)" }) {
  const [answers, setAnswers] = useState({});
  const [stepIndex, setStepIndex] = useState(0);

  /* One question is conditional, so the live list — and the step count
     the progress bar reports — has to derive from the answers so far. */
  const active = useMemo(
    () => questions.filter((q) => !q.showIf || q.showIf(answers)),
    [questions, answers]
  );

  const done = stepIndex >= active.length;
  const result = done ? recommend(answers, tiers) : null;

  /* Before anything is answered, quote the longest path. A count that
     shrinks from 3 to 2 once someone picks the accounting route reads as
     good news; one that grows from 2 to 3 reads as a bait and switch. */
  const total = Object.keys(answers).length === 0 ? questions.length : active.length;

  /* Hand the recommendation to the page so the table and the closer-look
     panels follow it. In an effect, not in render — onResult sets state
     in the parent. */
  const resultId = result?.tier?.id ?? null;
  useEffect(() => { if (resultId) onResult?.(resultId); }, [resultId, onResult]);

  const choose = (qid, option) => {
    const next = { ...answers, [qid]: option };
    /* Drop answers to questions that no longer apply, so a stale on-site
       answer cannot leak into a recommendation after someone backs up
       and says they only want the books done. */
    const live = questions.filter((q) => !q.showIf || q.showIf(next)).map((q) => q.id);
    Object.keys(next).forEach((k) => { if (!live.includes(k)) delete next[k]; });
    setAnswers(next);
    setStepIndex(live.indexOf(qid) + 1);
  };

  const reset = () => { setAnswers({}); setStepIndex(0); };
  const back  = () => setStepIndex((i) => Math.max(0, i - 1));

  const current = active[stepIndex];

  return (
    <section className="sl-wizard" style={{ background, padding: "88px 48px" }}>
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} sub={sub}/>
        </div>

        <div className="sl-wizard-card" id="find-your-level" style={{
          marginTop: 44,
          background: "#fff",
          border: "1px solid var(--border-hairline)",
          borderRadius: 16,
          boxShadow: "var(--shadow-md)",
          padding: "34px 36px 36px",
          scrollMarginTop: "calc(var(--site-header-height) + 20px)"
        }}>
          {!done ? (
            <>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: 16, marginBottom: 18
              }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)"
                }}>Question {stepIndex + 1} of {total}</span>
                {stepIndex > 0 && (
                  <button type="button" onClick={back} style={{
                    appearance: "none", background: "none", border: 0, cursor: "pointer",
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                    color: "var(--edison-gray-mid)", padding: 0
                  }}>← Back</button>
                )}
              </div>

              <div style={{
                height: 4, borderRadius: 999, background: "var(--edison-navy-10)",
                marginBottom: 28, overflow: "hidden"
              }}>
                <div style={{
                  height: "100%", borderRadius: 999, background: "var(--edison-teal)",
                  /* A zero-width bar reads as a rendering fault, so step one
                     keeps a visible nub. */
                  width: `${Math.max(7, (stepIndex / total) * 100)}%`,
                  transition: "width 280ms var(--ease-emphasized)"
                }}/>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24,
                lineHeight: 1.25, letterSpacing: "-0.01em",
                color: "var(--edison-navy)", margin: "0 0 8px"
              }}>{current.question}</h3>
              {current.hint && <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                color: "var(--edison-gray-mid)", margin: 0
              }}>{current.hint}</p>}

              <div className="sl-wizard-options" style={{
                marginTop: 24,
                display: "grid",
                gridTemplateColumns: current.options.length > 3 ? "1fr 1fr" : "1fr",
                gap: 10
              }}>
                {current.options.map((o) => {
                  const picked = answers[current.id]?.value === o.value;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => choose(current.id, o)}
                      className="sl-wizard-option"
                      style={{
                        appearance: "none", cursor: "pointer", textAlign: "left",
                        background: picked ? "var(--edison-teal-pale)" : "#fff",
                        border: picked ? "1.5px solid var(--edison-teal)"
                                      : "1.5px solid var(--border-hairline)",
                        borderRadius: 12,
                        padding: "18px 20px",
                        display: "flex", flexDirection: "column", gap: 5,
                        transition: "border-color 160ms var(--ease-standard), background 160ms var(--ease-standard), transform 160ms var(--ease-standard)"
                      }}
                    >
                      <span style={{
                        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15.5,
                        lineHeight: 1.35, color: "var(--edison-navy)"
                      }}>{o.label}</span>
                      {o.detail && <span style={{
                        fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5,
                        color: "var(--edison-text-body)"
                      }}>{o.detail}</span>}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <WizardResult result={result} onReset={reset}/>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WIZARD RESULT — the recommendation, the honest caveat, the handoff.
   The proposal link carries the answers, so a board lands on a form
   that already knows its size and what it asked for.
   ============================================================ */
function WizardResult({ result, onReset }) {
  const { tier, why, caution, href } = result;

  return (
    <div>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, marginBottom: 20
      }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
          letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--edison-teal-dark)"
        }}>Based on your answers</span>
        <button type="button" onClick={onReset} style={{
          appearance: "none", background: "none", border: 0, cursor: "pointer",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
          color: "var(--edison-gray-mid)", padding: 0
        }}>Start over</button>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32,
        lineHeight: 1.15, letterSpacing: "-0.02em",
        color: "var(--edison-navy)", margin: "0 0 14px"
      }}>{tier.name}</h3>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65,
        color: "var(--edison-text-body)", margin: "0 0 22px"
      }}>{why}</p>

      <div className="sl-result-grid" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 24px",
        padding: "20px 0",
        borderTop: "1px solid var(--border-hairline)",
        borderBottom: "1px solid var(--border-hairline)",
        marginBottom: 22
      }}>
        {tier.highlights.slice(0, 6).map((h, i) => (
          <div key={i} style={{
            display: "flex", gap: 10, alignItems: "flex-start",
            fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5,
            color: "var(--edison-text-body)"
          }}>
            <span aria-hidden="true" style={{
              color: "var(--edison-teal-dark)", fontWeight: 800, fontSize: 13,
              lineHeight: 1.5, flexShrink: 0
            }}>✓</span>
            {h}
          </div>
        ))}
      </div>

      {/* Edison vets fit before placing anyone and says so when a level
          will not serve a board. Publishing that judgement here is the
          same promise, made before the sales call rather than during it. */}
      {caution && (
        <div style={{
          background: "var(--edison-teal-pale)",
          borderRadius: 10, padding: "16px 18px", marginBottom: 24,
          display: "flex", gap: 12, alignItems: "flex-start"
        }}>
          <span aria-hidden="true" style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15,
            color: "var(--edison-teal-dark)", flexShrink: 0, lineHeight: 1.6
          }}>!</span>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
            color: "var(--edison-text-body)", margin: 0
          }}>{caution}</p>
        </div>
      )}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <InteriorButton variant="primary" size="lg" href={href}>
          Request a proposal
        </InteriorButton>
        <InteriorButton variant="ghost" size="lg" href={`#${tier.id}`}>
          See it in the comparison
        </InteriorButton>
      </div>
    </div>
  );
}

/* ============================================================
   FEATURE MATRIX — the comparison, and the only place the five levels
   are laid out against each other.

   Groups collapse. The six rows that are identical at every level were
   the bulk of the noise: they now sit in one group a board can open if
   it doubts the claim, instead of taking a third of the table to say
   "yes" five times in a row.

   Header sticks on desktop; on narrow screens global.css swaps the
   wrapper to horizontal scroll and drops the sticky, since an overflow
   container breaks position:sticky.
   ============================================================ */
function FeatureMatrix({ eyebrow, title, sub, tiers, groups, footnotes = [],
                         note, showPricing = true, background = "#fff",
                         /* Selection is owned by the page, so the wizard, this
                            table and the closer-look panels all agree on which
                            level the board is currently looking at. */
                         active = null }) {
  const cols = `minmax(215px, 1.5fr) repeat(${tiers.length}, minmax(140px, 1fr))`;

  const [open, setOpen] = useState(() =>
    groups.reduce((acc, g, i) => ({ ...acc, [i]: !!g.defaultOpen }), {})
  );
  const allOpen = groups.every((_, i) => open[i]);
  const toggleAll = () =>
    setOpen(groups.reduce((acc, _, i) => ({ ...acc, [i]: !allOpen }), {}));

  /* Column tint: an explicitly chosen column outranks the badged one. */
  const tintFor = (t) => {
    if (t.id === active) return "rgba(60,200,200,.16)";
    if (t.badge) return "rgba(60,200,200,.05)";
    return "transparent";
  };

  return (
    <section className="sl-matrix" style={{ background, padding: "88px 40px" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} sub={sub}/>
        </div>

        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: 14, flexWrap: "wrap", marginTop: 26
        }}>
          <button type="button" onClick={toggleAll} style={{
            appearance: "none", cursor: "pointer",
            background: "#fff", border: "1.5px solid var(--border-hairline)",
            borderRadius: 999, padding: "9px 18px",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
            color: "var(--edison-navy)"
          }}>{allOpen ? "Collapse all details" : "Expand all details"}</button>
          <span className="sl-matrix-hint" style={{
            display: "none",
            fontFamily: "var(--font-body)", fontSize: 13,
            color: "var(--edison-gray-mid)"
          }}>Swipe the table sideways.</span>
        </div>

        <div className="sl-matrix-wrap" style={{ marginTop: 28 }}>
          {/* No overflow:hidden here — it would become the containing block
              for the sticky header and pin it to the table instead of the
              viewport. Corners are rounded on the edge cells instead. */}
          <div className="sl-matrix-grid" style={{
            minWidth: 940,
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
              <div style={{ padding: "18px 20px", borderTopLeftRadius: 13 }}/>
              {tiers.map((t, ti) => {
                const on = t.id === active;
                return (
                  <div key={t.id} id={t.id} style={{
                    padding: "18px 14px",
                    borderLeft: "1px solid rgba(255,255,255,.12)",
                    borderTopRightRadius: ti === tiers.length - 1 ? 13 : 0,
                    background: on ? "rgba(60,200,200,.18)"
                               : t.badge ? "rgba(60,200,200,.10)" : "transparent",
                    scrollMarginTop: "calc(var(--site-header-height) + 20px)"
                  }}>
                    {t.badge && (
                      <div style={{
                        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 9.5,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "var(--edison-teal)", marginBottom: 5
                      }}>{t.badge}</div>
                    )}
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14.5,
                      lineHeight: 1.25,
                      color: (on || t.badge) ? "var(--edison-teal)" : "#fff"
                    }}>{t.name}</div>
                    {showPricing && (
                      <div style={{
                        fontFamily: "var(--font-body)", fontSize: 11.5, lineHeight: 1.4,
                        color: "rgba(255,255,255,.62)", marginTop: 4
                      }}>{t.priceShort}</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ---- What each level is, in one line ---- */}
            <div className="sl-matrix-row" style={{
              display: "grid", gridTemplateColumns: cols
            }}>
              <div style={{
                padding: "18px 20px",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                color: "var(--edison-navy)"
              }}>What it is</div>
              {tiers.map((t) => (
                <div key={t.id} style={{
                  padding: "18px 14px",
                  borderLeft: "1px solid var(--border-hairline)",
                  background: tintFor(t),
                  fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5,
                  color: "var(--edison-text-body)"
                }}>{t.summary}</div>
              ))}
            </div>

            {/* ---- Collapsible groups ---- */}
            {groups.map((g, gi) => (
              <React.Fragment key={gi}>
                <button
                  type="button"
                  className="sl-matrix-group"
                  onClick={() => setOpen((o) => ({ ...o, [gi]: !o[gi] }))}
                  aria-expanded={!!open[gi]}
                  style={{
                    appearance: "none", width: "100%", textAlign: "left", cursor: "pointer",
                    padding: "15px 20px",
                    background: "var(--edison-teal-pale)",
                    border: 0, borderTop: "1px solid var(--border-hairline)",
                    display: "block"
                  }}
                >
                  <span className="sl-matrix-group-label" style={{
                    display: "inline-flex", alignItems: "center", gap: 10
                  }}>
                    <span aria-hidden="true" style={{
                      fontSize: 9, color: "var(--edison-teal-dark)",
                      transform: open[gi] ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 200ms var(--ease-standard)",
                      display: "inline-block"
                    }}>▶</span>
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 11,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--edison-navy)"
                    }}>{g.group}</span>
                    <span style={{
                      fontFamily: "var(--font-body)", fontSize: 12,
                      color: "var(--edison-gray-mid)"
                    }}>{open[gi] ? "Hide" : g.closedNote || `${g.rows.length} rows`}</span>
                  </span>
                </button>

                {open[gi] && g.rows.map((row, ri) => (
                  <div key={ri} className="sl-matrix-row" style={{
                    display: "grid", gridTemplateColumns: cols,
                    borderTop: "1px solid var(--border-hairline)"
                  }}>
                    <div style={{
                      padding: "14px 20px",
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                      lineHeight: 1.4, color: "var(--edison-navy)"
                    }}>
                      {row.label}
                      {row.tip && <InfoTip term={row.label}>{row.tip}</InfoTip>}
                    </div>
                    {tiers.map((t) => (
                      <div key={t.id} style={{
                        padding: "14px",
                        display: "flex", alignItems: "center",
                        borderLeft: "1px solid var(--border-hairline)",
                        background: tintFor(t)
                      }}>
                        <Cell value={row.values[t.id]}/>
                      </div>
                    ))}
                  </div>
                ))}
              </React.Fragment>
            ))}

            {/* ---- Best fit ---- */}
            <div className="sl-matrix-row" style={{
              display: "grid", gridTemplateColumns: cols,
              borderTop: "1px solid var(--border-hairline)"
            }}>
              <div style={{
                padding: "18px 20px",
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                color: "var(--edison-navy)"
              }}>Best fit</div>
              {tiers.map((t) => (
                <div key={t.id} style={{
                  padding: "18px 14px",
                  borderLeft: "1px solid var(--border-hairline)",
                  background: tintFor(t),
                  fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5,
                  color: "var(--edison-text-body)"
                }}>{t.bestFit}</div>
              ))}
            </div>

            {/* ---- Pricing ---- */}
            {showPricing && (
              <div className="sl-matrix-row" style={{
                display: "grid", gridTemplateColumns: cols,
                borderTop: "2px solid var(--edison-navy)"
              }}>
                <div style={{
                  padding: "18px 20px",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14,
                  color: "var(--edison-navy)"
                }}>Starting at</div>
                {tiers.map((t) => (
                  <div key={t.id} style={{
                    padding: "18px 14px",
                    borderLeft: "1px solid var(--border-hairline)",
                    background: tintFor(t)
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: isFigure(t.price) ? 20 : 14.5,
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

            {/* ---- Per-level CTA ---- */}
            <div className="sl-matrix-row" style={{
              display: "grid", gridTemplateColumns: cols,
              borderTop: "1px solid var(--border-hairline)"
            }}>
              <div style={{ padding: "18px 20px", borderBottomLeftRadius: 13 }}/>
              {tiers.map((t, ti) => (
                <div key={t.id} style={{
                  padding: "18px 14px",
                  borderLeft: "1px solid var(--border-hairline)",
                  borderBottomRightRadius: ti === tiers.length - 1 ? 13 : 0,
                  background: tintFor(t)
                }}>
                  <InteriorButton
                    variant={t.id === active || t.badge ? "primary" : "ghost"}
                    size="sm"
                    href={`/request-a-proposal?intent=proposal&level=${encodeURIComponent(t.name)}`}
                  >Get a quote</InteriorButton>
                </div>
              ))}
            </div>
          </div>
        </div>

        {note && (
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
            color: "var(--edison-text-body)", textAlign: "center",
            margin: "32px auto 0", maxWidth: 820
          }}>{note}</p>
        )}

        {footnotes.length > 0 && (
          <ul style={{
            listStyle: "none", padding: 0, margin: "20px 0 0",
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
   LEVEL DEEP DIVE — the closer look, matched to the level in play.

   This replaced two fixed sections: a Portfolio Plus spotlight and an
   "Accounting Plus does not include" band. Both ran no matter what the
   wizard had just said, so the page personalised and then immediately
   reverted to a pitch for a level the board might not be considering.
   Worse, only one level carried published limitations, which read as
   Accounting Plus being singled out as the budget option.

   Every level now gets both halves — what makes it work, and what you
   give up — and the panel follows the current selection.

   All five panels stay in the DOM and are hidden with display, not
   unmounted. Switching is instant, nothing reflows, and the copy for
   every level is in the server-rendered HTML rather than appearing
   only after someone clicks.
   ============================================================ */
function LevelDeepDive({ eyebrow, title, sub, tiers, panels,
                         selected, onSelect, fallback,
                         background = "#fff" }) {
  const activeId = selected && panels[selected] ? selected : fallback;
  const railRef = React.useRef(null);

  /* When the wizard moves the selection, bring the matching tab into
     view on narrow screens. block:'nearest' so the page itself does
     not jump — the board may still be reading something else. */
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const tab = rail.querySelector(`[data-tab="${activeId}"]`);
    if (tab) tab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [activeId]);

  return (
    <section className="sl-deep" id="closer-look" style={{
      background, padding: "88px 48px",
      scrollMarginTop: "calc(var(--site-header-height) + 10px)"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center" }}>
          <SectionHeading align="center" eyebrow={eyebrow} title={title} sub={sub}/>
        </div>

        <div className="sl-deep-rail" ref={railRef} role="tablist"
             aria-label="Service levels"
             style={{
               marginTop: 36, display: "flex", gap: 8,
               justifyContent: "center", flexWrap: "wrap"
             }}>
          {tiers.map((t) => {
            const on = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                data-tab={t.id}
                aria-selected={on}
                aria-controls={`panel-${t.id}`}
                onClick={() => onSelect(t.id)}
                className="sl-deep-tab"
                style={{
                  appearance: "none", cursor: "pointer", whiteSpace: "nowrap",
                  background: on ? "var(--edison-navy)" : "#fff",
                  color: on ? "#fff" : "var(--edison-navy)",
                  border: on ? "1.5px solid var(--edison-navy)"
                             : "1.5px solid var(--border-hairline)",
                  borderRadius: 999, padding: "10px 20px",
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                  transition: "background 160ms var(--ease-standard), color 160ms var(--ease-standard), border-color 160ms var(--ease-standard)"
                }}
              >{t.name}</button>
            );
          })}
        </div>

        {tiers.map((t) => {
          const panel = panels[t.id];
          if (!panel) return null;
          const on = t.id === activeId;
          return (
            <div
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${t.id}`}
              className="sl-deep-panel"
              style={{
                display: on ? "grid" : "none",
                gridTemplateColumns: "1fr 1.1fr", gap: 56,
                /* Stretch, not centre: panel copy runs longer than a 5:4
                   image, and a centred image floats away from the heading
                   it belongs to. */
                alignItems: "stretch", marginTop: 48
              }}
            >
              <div className="sl-deep-img" style={{
                width: "100%", minHeight: 420,
                borderRadius: 18, overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                backgroundImage: `url(${panel.image})`,
                backgroundSize: "cover", backgroundPosition: "center"
              }}/>

              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
                  letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)", marginBottom: 14
                }}>{panel.eyebrow}</div>

                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.01em",
                  color: "var(--edison-navy)", margin: "0 0 24px",
                  position: "relative", paddingBottom: 16, display: "inline-block"
                }}>
                  {panel.title}
                  <span style={{
                    position: "absolute", left: 0, bottom: 0, width: 60, height: 3,
                    background: "var(--edison-teal)", borderRadius: 2
                  }}/>
                </h3>

                <ul style={{
                  listStyle: "none", padding: 0, margin: "0 0 26px",
                  display: "flex", flexDirection: "column", gap: 13
                }}>
                  {panel.works.map((b, i) => (
                    <li key={i} style={{
                      display: "flex", gap: 13, alignItems: "flex-start",
                      fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.55,
                      color: "var(--edison-text-body)"
                    }}>
                      <span aria-hidden="true" style={{
                        flexShrink: 0, width: 24, height: 24, borderRadius: 999,
                        background: "var(--edison-teal-pale)",
                        color: "var(--edison-teal-dark)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 800, fontSize: 13, marginTop: 1
                      }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* The honest half. Every level has one — a page where only
                    the cheapest tier carries caveats reads as a warning
                    label rather than as candour. */}
                <div style={{
                  background: "var(--edison-teal-pale)",
                  borderRadius: 12, padding: "20px 22px", marginBottom: 26
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--edison-navy)", marginBottom: 12
                  }}>What to know before you pick it</div>
                  <ul style={{
                    listStyle: "none", padding: 0, margin: 0,
                    display: "flex", flexDirection: "column", gap: 10
                  }}>
                    {panel.know.map((k, i) => (
                      <li key={i} style={{
                        display: "flex", gap: 11, alignItems: "flex-start",
                        fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                        color: "var(--edison-text-body)"
                      }}>
                        <span aria-hidden="true" style={{
                          color: "var(--edison-teal-dark)", fontWeight: 800,
                          fontSize: 14, lineHeight: 1.55, flexShrink: 0
                        }}>→</span>
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <InteriorButton
                    variant="primary" size="md"
                    href={`/request-a-proposal?intent=proposal&message=${encodeURIComponent(`Interested in ${t.name}.`)}`}
                  >Get a quote for {t.name}</InteriorButton>
                  <InteriorButton variant="ghost" size="md" href="#compare">
                    Compare in the table
                  </InteriorButton>
                </div>
              </div>
            </div>
          );
        })}
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

export { LevelWizard, FeatureMatrix, LevelDeepDive, EveryLevelBand, InfoTip };
