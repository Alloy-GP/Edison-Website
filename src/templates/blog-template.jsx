import React, { useState as useBlogState, useEffect as useBlogEffect } from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, MidCTA, SectionHeading } from '../components/interior-components';

/* ---------- Reading-progress bar (shared) ---------- */
function ReadingProgress() {
  const [pct, setPct] = useBlogState(0);
  useBlogEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 3,
      zIndex: 95, background: "transparent", pointerEvents: "none"
    }}>
      <div style={{
        height: "100%", width: `${pct}%`,
        background: "var(--edison-teal)",
        transition: "width 80ms linear"
      }}/>
    </div>
  );
}

/* ============================================================
   BLOG SPOKE, VARIANT A (Magazine / Editorial w/ Image Hero)
   ============================================================ */
function BlogSpokeA({ content }) {
  return (
    <main data-screen-label="Blog Spoke, Variant A">
      <ReadingProgress/>
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Edison Education", href: "/edison-education" },
        { label: "Blog", href: "/blog" },
        { label: content.title }
      ]}/>

      {/* Hero with image */}
      <section className="blog-a-hero" style={{ background: "#fff", padding: "56px 48px 0" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>{content.category}</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 50, lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px"
          }}>{content.title}</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.5,
            color: "var(--edison-gray-mid)", margin: "0 0 26px", maxWidth: 760
          }}>{content.dek}</p>
          <div style={{
            display: "flex", gap: 18, alignItems: "center", flexWrap: "wrap",
            paddingBottom: 32, borderBottom: "1px solid var(--border-hairline)",
            fontFamily: "var(--font-body)", fontSize: 13.5,
            color: "var(--edison-gray-mid)"
          }}>
            <span><strong style={{ color: "var(--edison-navy)" }}>{content.author}</strong></span>
            <span>·</span>
            <span>{content.date}</span>
            <span>·</span>
            <span>{content.readTime} read</span>
          </div>
        </div>
      </section>

      <section className="blog-a-body" style={{ background: "#fff", padding: "32px 48px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <img src={content.heroImage} alt=""
               style={{
                 width: "100%", height: 460, objectFit: "cover",
                 borderRadius: 16, display: "block",
                 boxShadow: "var(--shadow-md)"
               }}/>
        </div>
      </section>

      {/* Body with TOC sidebar */}
      <section className="blog-a-layout" style={{ background: "#fff", padding: "64px 48px 80px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "240px 1fr", gap: 64,
          alignItems: "start"
        }}>
          <aside style={{ position: "sticky", top: 110 }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 14,
              paddingBottom: 12, borderBottom: "1px solid var(--border-hairline)"
            }}>On this page</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0,
                         display: "flex", flexDirection: "column", gap: 12 }}>
              {content.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#${s.id}`} style={{
                    fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5,
                    color: "var(--edison-text-body)",
                    textDecoration: "none", borderBottom: 0,
                    display: "block",
                    paddingLeft: 10, borderLeft: "2px solid var(--border-hairline)",
                    transition: "color 140ms, border-color 140ms"
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--edison-teal-dark)";
                      e.currentTarget.style.borderLeftColor = "var(--edison-teal)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--edison-text-body)";
                      e.currentTarget.style.borderLeftColor = "var(--border-hairline)";
                    }}>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article style={{ maxWidth: 720, fontFamily: "var(--font-body)" }}>
            {/* Intro paragraphs (before first section heading) */}
            {content.intro && content.intro.map((para, j) =>
              para.startsWith('<') ? (
                <p key={j} dangerouslySetInnerHTML={{ __html: para }} style={{
                  fontSize: 17, lineHeight: 1.7,
                  color: "var(--edison-text-body)", margin: "0 0 18px"
                }}/>
              ) : (
                <p key={j} style={{
                  fontSize: 17, lineHeight: 1.7,
                  color: "var(--edison-text-body)", margin: "0 0 18px"
                }}>{para}</p>
              )
            )}

            {content.sections.map((s, i) => (
              <section key={i} id={s.id} style={{ marginBottom: 48 }}>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 30, lineHeight: 1.22, letterSpacing: "-0.01em",
                  color: "var(--edison-navy)", margin: "0 0 16px",
                  scrollMarginTop: 100
                }}>{s.heading}</h2>

                {/* Note / legal disclaimer — italic gray */}
                {s.note && (
                  <p style={{
                    fontSize: 15, fontStyle: "italic", lineHeight: 1.65,
                    color: "#6B7280", margin: "0 0 20px",
                    borderLeft: "3px solid var(--border-hairline)", paddingLeft: 14
                  }}>{s.note}</p>
                )}

                {/* Body paragraphs — support inline HTML via leading < */}
                {s.body && s.body.map((para, j) =>
                  para.startsWith('<') ? (
                    <p key={j} dangerouslySetInnerHTML={{ __html: para }} style={{
                      fontSize: 17, lineHeight: 1.7,
                      color: "var(--edison-text-body)", margin: "0 0 18px"
                    }}/>
                  ) : (
                    <p key={j} style={{
                      fontSize: 17, lineHeight: 1.7,
                      color: "var(--edison-text-body)", margin: "0 0 18px"
                    }}>{para}</p>
                  )
                )}

                {/* Inline image — diagram / infographic */}
                {s.image && (
                  <figure style={{ margin: "24px 0 28px" }}>
                    <img src={s.image.src} alt={s.image.alt}
                         style={{ width: "100%", borderRadius: 10, display: "block",
                                  boxShadow: "var(--shadow-sm)" }}/>
                    {s.image.caption && (
                      <figcaption style={{
                        fontFamily: "var(--font-body)", fontSize: 13, color: "#9CA3AF",
                        marginTop: 8, textAlign: "center"
                      }}>{s.image.caption}</figcaption>
                    )}
                  </figure>
                )}

                {/* Body paragraphs after image */}
                {s.body2 && s.body2.map((para, j) =>
                  para.startsWith('<') ? (
                    <p key={j} dangerouslySetInnerHTML={{ __html: para }} style={{
                      fontSize: 17, lineHeight: 1.7,
                      color: "var(--edison-text-body)", margin: "0 0 18px"
                    }}/>
                  ) : (
                    <p key={j} style={{
                      fontSize: 17, lineHeight: 1.7,
                      color: "var(--edison-text-body)", margin: "0 0 18px"
                    }}>{para}</p>
                  )
                )}

                {/* Comparison / data table */}
                {s.table && (
                  <div style={{ overflowX: "auto", margin: "24px 0 28px" }}>
                    <table style={{
                      width: "100%", borderCollapse: "collapse",
                      fontFamily: "var(--font-body)", fontSize: 15
                    }}>
                      <thead>
                        <tr>
                          {s.table.headers.map((h, k) => (
                            <th key={k} style={{
                              background: "var(--edison-navy)",
                              color: "#fff",
                              fontFamily: "var(--font-display)", fontWeight: 700,
                              fontSize: 13, padding: "12px 14px",
                              textAlign: "left", whiteSpace: "nowrap"
                            }} dangerouslySetInnerHTML={{ __html: h }}/>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, r) => (
                          <tr key={r} style={{ background: r % 2 === 0 ? "#fff" : "var(--edison-teal-pale)" }}>
                            {row.map((cell, c) => (
                              <td key={c} style={{
                                padding: "11px 14px",
                                borderBottom: "1px solid var(--border-hairline)",
                                lineHeight: 1.55, color: "var(--edison-text-body)",
                                fontWeight: c === 0 ? 600 : 400
                              }} dangerouslySetInnerHTML={{ __html: cell }}/>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Body paragraphs after table */}
                {s.body3 && s.body3.map((para, j) =>
                  para.startsWith('<') ? (
                    <p key={j} dangerouslySetInnerHTML={{ __html: para }} style={{
                      fontSize: 17, lineHeight: 1.7,
                      color: "var(--edison-text-body)", margin: "0 0 18px"
                    }}/>
                  ) : (
                    <p key={j} style={{
                      fontSize: 17, lineHeight: 1.7,
                      color: "var(--edison-text-body)", margin: "0 0 18px"
                    }}>{para}</p>
                  )
                )}

                {/* Callout box */}
                {s.callout && (
                  <div style={{
                    background: "var(--edison-teal-pale)",
                    borderLeft: "4px solid var(--edison-teal)",
                    borderRadius: 8, padding: "18px 22px", margin: "22px 0",
                    fontSize: 15.5, lineHeight: 1.6, color: "var(--edison-navy)"
                  }}>
                    <strong>{s.callout.label}:</strong> {s.callout.text}
                  </div>
                )}

                {/* Subheading (h3) */}
                {s.subheading && (
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 22, lineHeight: 1.28, letterSpacing: "-0.01em",
                    color: "var(--edison-navy)", margin: "28px 0 12px"
                  }}>{s.subheading}</h3>
                )}

                {/* Bullet list */}
                {s.list && (
                  <ul style={{ padding: "0 0 0 22px", margin: "0 0 18px",
                               display: "flex", flexDirection: "column", gap: 10 }}>
                    {s.list.map((li, k) => (
                      <li key={k} style={{ fontSize: 16.5, lineHeight: 1.65,
                                           color: "var(--edison-text-body)" }}
                          dangerouslySetInnerHTML={{ __html: li }}/>
                    ))}
                  </ul>
                )}

                {/* FAQ accordion */}
                {s.faq && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 8 }}>
                    {s.faq.map((item, k) => (
                      <details key={k} style={{
                        borderBottom: "1px solid var(--border-hairline)",
                        paddingBottom: 0
                      }}>
                        <summary style={{
                          fontFamily: "var(--font-display)", fontWeight: 700,
                          fontSize: 18, lineHeight: 1.35, color: "var(--edison-navy)",
                          padding: "18px 0", cursor: "pointer", listStyle: "none",
                          display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12
                        }}>
                          <span>{item.q}</span>
                          <span style={{
                            flexShrink: 0, marginTop: 2,
                            fontSize: 22, lineHeight: 1, color: "var(--edison-teal-dark)",
                            fontWeight: 300
                          }}>+</span>
                        </summary>
                        <div style={{
                          fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7,
                          color: "var(--edison-text-body)", padding: "0 0 20px",
                          maxWidth: 660
                        }} dangerouslySetInnerHTML={{ __html: item.a }}/>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
      </section>

      <MidCTA
        variant="teal"
        title="Need help applying this to your community?"
        lede="Edison's team works with Florida boards every day. If you've got questions, we'll talk you through it."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Contact Edison", href: "/contact" }}
      />

      {/* Related articles */}
      <section className="blog-a-related" style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading eyebrow="Keep reading" title="Related Edison Education articles"/>
          <div className="blog-related-grid" style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20
          }}>
            {content.related.map((r, i) => (
              <a key={i} href={r.href} style={{
                textDecoration: "none", borderBottom: 0,
                background: "#fff", border: "1px solid var(--border-hairline)",
                borderRadius: 12, overflow: "hidden",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column",
                transition: "all 220ms"
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
                  aspectRatio: "16 / 9",
                  backgroundImage: `url(${r.image})`,
                  backgroundSize: "cover", backgroundPosition: "center"
                }}/>
                <div style={{ padding: "22px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--edison-teal-dark)"
                  }}>{r.category}</div>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
                    lineHeight: 1.3, color: "var(--edison-navy)"
                  }}>{r.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   BLOG SPOKE, VARIANT B (Reference / Documentation Style)
   No hero image. Type-driven. Heavier on structure, anchors,
   and scannability. Better for compliance/legal guides where
   readers want a reference doc, not a magazine article.
   ============================================================ */
function BlogSpokeB({ content }) {
  return (
    <main data-screen-label="Blog Spoke, Variant B">
      <ReadingProgress/>
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Edison Education", href: "/edison-education" },
        { label: "Blog", href: "/blog" },
        { label: content.title }
      ]}/>

      <section style={{
        background: "var(--edison-teal-pale)",
        padding: "72px 48px"
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18,
            display: "flex", gap: 14, alignItems: "center"
          }}>
            <span style={{
              background: "var(--edison-navy)", color: "var(--edison-teal)",
              padding: "4px 10px", borderRadius: 4
            }}>{content.category}</span>
            <span style={{
              color: "var(--edison-gray-mid)", letterSpacing: "0.06em"
            }}>{content.readTime} READ · UPDATED {content.date}</span>
          </div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 18px"
          }}>{content.title}</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: 0, maxWidth: 720
          }}>{content.dek}</p>
        </div>
      </section>

      {/* Sticky TOC on the side */}
      <section style={{ background: "#fff", padding: "56px 48px 80px" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 280px", gap: 64,
          alignItems: "start"
        }}>
          <article style={{ maxWidth: 720, fontFamily: "var(--font-body)" }}>
            {/* Summary box */}
            <div style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 10, padding: "20px 24px",
              marginBottom: 40,
              boxShadow: "var(--shadow-xs)"
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 10
              }}>The short answer</div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0
              }}>{content.summary}</p>
            </div>

            {content.sections.map((s, i) => (
              <section key={i} id={s.id} style={{ marginBottom: 40 }}>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 26, lineHeight: 1.22, letterSpacing: "-0.005em",
                  color: "var(--edison-navy)", margin: "0 0 14px",
                  paddingBottom: 12,
                  borderBottom: "2px solid var(--edison-teal)",
                  display: "inline-block",
                  scrollMarginTop: 100
                }}>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 800,
                    fontSize: 14, letterSpacing: "0.06em",
                    color: "var(--edison-teal-dark)", marginRight: 10,
                    verticalAlign: 4
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                {s.body && s.body.map((para, j) => (
                  <p key={j} style={{
                    fontSize: 16, lineHeight: 1.7,
                    color: "var(--edison-text-body)",
                    margin: "0 0 16px"
                  }}>{para}</p>
                ))}
                {s.list && (
                  <ul style={{ padding: "0 0 0 0", margin: "12px 0 16px",
                               display: "flex", flexDirection: "column", gap: 10,
                               listStyle: "none" }}>
                    {s.list.map((li, k) => (
                      <li key={k} style={{
                        display: "flex", gap: 12,
                        fontSize: 15.5, lineHeight: 1.6,
                        color: "var(--edison-text-body)",
                        padding: "10px 14px",
                        background: "var(--edison-teal-pale)",
                        borderRadius: 6
                      }}>
                        <span style={{ color: "var(--edison-teal-dark)", fontWeight: 800 }}>→</span>
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.callout && (
                  <div style={{
                    background: "var(--edison-navy)", color: "#fff",
                    borderRadius: 8,
                    padding: "18px 22px", margin: "20px 0",
                    fontSize: 14.5, lineHeight: 1.6
                  }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "var(--edison-teal)", marginBottom: 6
                    }}>{s.callout.label}</div>
                    {s.callout.text}
                  </div>
                )}
              </section>
            ))}
          </article>

          <aside style={{ position: "sticky", top: 110 }}>
            <div style={{
              background: "var(--edison-navy)", color: "#fff",
              borderRadius: 12, padding: "22px 22px", marginBottom: 18
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal)", marginBottom: 14
              }}>Contents</div>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, counterReset: "toc",
                           display: "flex", flexDirection: "column", gap: 8 }}>
                {content.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#${s.id}`} style={{
                      fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5,
                      color: "rgba(255,255,255,.8)",
                      textDecoration: "none", borderBottom: 0,
                      display: "block", padding: "6px 0",
                      transition: "color 140ms"
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "var(--edison-teal)"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,.8)"}>
                      <span style={{ color: "var(--edison-teal)", marginRight: 10, fontWeight: 700 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{
              background: "var(--edison-teal-pale)",
              borderRadius: 12, padding: "20px 22px"
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 10
              }}>Need help?</div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55,
                color: "var(--edison-text-body)", margin: "0 0 14px"
              }}>Edison works with Florida boards every day. We'll talk you through it.</p>
              <InteriorButton variant="primary" size="sm" href="/contact">Talk to Edison</InteriorButton>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "var(--bg-3, #F5F7FA)", padding: "72px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading eyebrow="Keep reading" title="Related Edison Education articles"/>
          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20
          }}>
            {content.related.map((r, i) => (
              <a key={i} href={r.href} style={{
                textDecoration: "none", borderBottom: 0,
                background: "#fff", border: "1px solid var(--border-hairline)",
                borderRadius: 10, padding: "22px 24px",
                display: "flex", flexDirection: "column", gap: 10,
                transition: "all 220ms"
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--edison-teal)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hairline)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)"
                }}>{r.category}</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                  lineHeight: 1.3, color: "var(--edison-navy)"
                }}>{r.title}</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4
                }}>Read article →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT, "HOA Audit"
   ============================================================ */
const AUDIT_CONTENT = {
  category: "Financial Management",
  title: "HOA Audit: What It Is, When It's Required, and How to Prepare",
  dek: "An HOA audit confirms your community's finances are accurate, transparent, and compliant with Florida law. Here's what's required based on your association's revenue, what documents to prepare, and how strong year-round financial management makes the process faster and less expensive.",
  author: "Edison Editorial",
  date: "April 2026",
  readTime: "9 min",
  heroImage: "/assets/img-accounting.jpg",
  summary: "If your Florida HOA collects $300,000 or more in annual revenue, you're likely required to commission an audited financial statement each year. Boards that prepare year-round, clean ledgers, documented vendor invoices, reconciled reserves, finish audits faster, cheaper, and without surprises.",
  sections: [
    {
      id: "what-is-an-audit",
      heading: "What an HOA audit actually is",
      body: [
        "An HOA audit is an independent examination of the association's financial records by a licensed CPA. The auditor verifies that the financial statements fairly represent the association's actual financial position, assessments collected, expenses paid, reserves funded, and obligations outstanding.",
        "Florida statute distinguishes between three levels of financial reporting: compilation (least scrutiny), review (some scrutiny), and audit (independent examination with formal opinion). Which level your association needs depends on annual revenue."
      ]
    },
    {
      id: "when-required",
      heading: "When Florida HOAs are required to audit",
      body: [
        "Under Florida Statute Chapter 720 and Chapter 718 for condos, the reporting level your association must produce annually is tied to total annual revenue. Boards can technically vote to waive the requirement for one year, but that vote has specific procedural rules and doesn't change next year's obligation."
      ],
      list: [
        "Annual revenue under $150,000, report of cash receipts and expenditures",
        "Annual revenue $150,000 to $300,000, compiled financial statements",
        "Annual revenue $300,000 to $500,000, reviewed financial statements",
        "Annual revenue $500,000 or more, audited financial statements"
      ],
      callout: {
        label: "Important",
        text: "These thresholds apply to HOAs (Ch. 720). Condominium associations under Ch. 718 follow similar but distinct thresholds. Always confirm with your governing documents and CPA."
      }
    },
    {
      id: "how-to-prepare",
      heading: "How to prepare for an HOA audit",
      body: [
        "The audit itself takes weeks; preparation takes a year. Boards that finish audits without painful follow-up questions tend to maintain four things year-round: clean general ledgers, complete invoice documentation, reconciled reserve accounts, and well-organized minutes that show how the board authorized major spending."
      ],
      list: [
        "Pull together monthly bank statements, reserve account statements, and reconciliations",
        "Gather all paid vendor invoices with W-9s on file for 1099-eligible vendors",
        "Compile board meeting minutes that document authorization for capital expenditures",
        "Provide the most recent reserve study and updated funding plan",
        "Have prior-year audit and tax returns ready for the new auditor's review"
      ]
    },
    {
      id: "what-it-costs",
      heading: "What an HOA audit typically costs",
      body: [
        "Audit fees vary by association size, complexity, and the cleanliness of the books. A small association with well-maintained accrual-basis books and a reserve study on file might pay $3,500–$6,500 for a clean audit. A larger or more complex community with messy records can see fees climb to $12,000 or more, most of that increase reflects the auditor's time untangling what should have been documented as the year unfolded.",
        "The single biggest cost driver is records preparation time. If the management company keeps books on a cash basis with informal documentation, the CPA has to reconstruct a year of bookkeeping before the actual audit begins. Edison and similar firms keep accrual-basis books with invoice documentation required, which typically drops audit fees by 20–40% relative to less rigorous setups."
      ]
    },
    {
      id: "how-edison-helps",
      heading: "How Edison's accounting model makes audits easier",
      body: [
        "Edison's HOA accounting team treats audit readiness as a year-round responsibility, not an April scramble. A dedicated accounting specialist, not the manager wearing two hats, maintains the books on an accrual basis, requires documentation for every invoice paid, reconciles reserve banking against the most recent reserve study, and packages a year-end binder that the auditor can work from on day one.",
        "The result for boards is shorter audit timelines, lower CPA fees, and zero panicked emails the week before the auditor arrives. The result for homeowners is published audited statements that reflect what the association actually did with their money."
      ],
      callout: {
        label: "Talk to Edison",
        text: "If your association is preparing for an audit, switching companies, or just wants a cleaner financial picture, our accounting team can review your current setup and outline the gaps."
      }
    }
  ],
  related: [
    {
      category: "Financial Management",
      title: "HOA Reserve Study Florida: What Boards Need to Know",
      image: "/assets/blog/reserve-study-specialist.jpg",
      href: "/blog/hoa-reserve-study-guide"
    },
    {
      category: "For Boards",
      title: "HOA Bylaws vs CC&Rs: Key Differences Explained",
      image: "/assets/blog/bylaws-vs-ccrs.jpg",
      href: "/blog/hoa-bylaws-vs-ccrs"
    }
  ]
};

export { BlogSpokeA, BlogSpokeB, AUDIT_CONTENT };
