import React, { useState as useTstState } from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, SectionHeading, TrustBadges } from '../components/interior-components';

/* ---------- Star row ---------- */
function Stars({ n = 5, size = 16 }) {
  return (
    <div aria-label={`${n} out of 5 stars`} style={{ display: "inline-flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24"
             fill={i < n ? "var(--edison-teal)" : "var(--edison-gray-light)"}
             aria-hidden="true">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>
        </svg>
      ))}
    </div>
  );
}

/* ============================================================
   TESTIMONIALS, VARIANT A (Grid Wall · masonry-style)
   Dense visual presentation of many reviews. Filter chips
   at top for category. Best when there are 20+ quotes.
   ============================================================ */
function TestimonialsPageA({ content }) {
  const [filter, setFilter] = useTstState("All");
  const filters = ["All", ...new Set(content.testimonials.map(t => t.category))];
  const filtered = filter === "All"
    ? content.testimonials
    : content.testimonials.filter(t => t.category === filter);

  return (
    <main data-screen-label="Testimonials, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Testimonials" }
      ]}/>

      <section className="testi-hero" style={{ background: "#fff", padding: "72px 48px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Testimonials</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 18px"
          }}>What boards say about working with Edison</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: "0 auto 32px", maxWidth: 720
          }}>{content.intro}</p>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 14,
            padding: "12px 22px", background: "var(--edison-teal-pale)",
            borderRadius: 999
          }}>
            <Stars n={5} size={18}/>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18,
              color: "var(--edison-navy)"
            }}>4.9 / 5.0</div>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              color: "var(--edison-gray-mid)"
            }}>{content.reviewCount} Google reviews</div>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section style={{ background: "#fff", padding: "16px 48px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto",
                      display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
                    style={{
                      appearance: "none", cursor: "pointer",
                      background: filter === f ? "var(--edison-navy)" : "#fff",
                      color: filter === f ? "#fff" : "var(--edison-navy)",
                      border: `1px solid ${filter === f ? "var(--edison-navy)" : "var(--border-strong)"}`,
                      padding: "9px 18px", borderRadius: 999,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
                      transition: "all 140ms"
                    }}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section style={{ background: "var(--bg-3, #F5F7FA)", padding: "56px 48px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            columnCount: 3, columnGap: 18,
            columnFill: "balance"
          }}>
            {filtered.map((t, i) => (
              <article key={i} style={{
                breakInside: "avoid", marginBottom: 18,
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "24px 24px",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column", gap: 12
              }}>
                <Stars n={t.rating || 5}/>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0
                }}>{t.quote}</p>
                <div style={{ marginTop: 4, paddingTop: 14,
                              borderTop: "1px solid var(--border-hairline)" }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                    color: "var(--edison-navy)"
                  }}>{t.attribution}</div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 12.5,
                    color: "var(--edison-gray-mid)", marginTop: 2
                  }}>{t.role} · {t.community}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Ready when you are"
        title="See if Edison is the right fit for your community."
        body="Boards switch to Edison because the difference is measurable. Request a proposal and see what working together looks like for your association."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Read Case Studies", href: "/case-studies" }}
      />
    </main>
  );
}

/* ============================================================
   TESTIMONIALS, VARIANT B (Featured + Highlights · editorial)
   Big featured quote at top with photo treatment, then 6
   curated reviews in cards below. Cleaner, less wall-of-text.
   ============================================================ */
function TestimonialsPageB({ content }) {
  const featured = content.testimonials[0];
  const rest = content.testimonials.slice(1, 7);
  return (
    <main data-screen-label="Testimonials, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Testimonials" }
      ]}/>

      <section style={{ background: "#fff", padding: "72px 48px 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Testimonials</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 24px", maxWidth: 880
          }}>What boards say about working with Edison.</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <Stars n={5} size={20}/>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22,
              color: "var(--edison-navy)"
            }}>4.9 / 5.0</div>
            <div style={{ width: 1, height: 18, background: "var(--border-strong)" }}/>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 14.5,
              color: "var(--edison-gray-mid)"
            }}>{content.reviewCount} Google reviews · Highest in Central Florida</div>
          </div>
        </div>
      </section>

      {/* Featured quote, large */}
      <section style={{ background: "var(--edison-teal-pale)", padding: "72px 48px" }}>
        <div className="testi-featured-grid" style={{ maxWidth: 1080, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56,
                      alignItems: "center" }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 96,
              lineHeight: 0.4, color: "var(--edison-teal)",
              marginBottom: 28
            }} aria-hidden="true">"</div>
            <blockquote style={{
              fontFamily: "var(--font-display)", fontWeight: 600,
              fontSize: 30, lineHeight: 1.32, letterSpacing: "-0.01em",
              color: "var(--edison-navy)", margin: "0 0 28px"
            }}>{featured.quote}</blockquote>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
              color: "var(--edison-navy)"
            }}>{featured.attribution}</div>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 13.5,
              color: "var(--edison-gray-mid)", marginTop: 4
            }}>{featured.role} · {featured.community}</div>
          </div>
          <div style={{
            width: "100%", aspectRatio: "1 / 1",
            borderRadius: 16, overflow: "hidden",
            backgroundImage: `url(${featured.image || "/assets/img-11.jpg"})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-md)"
          }}/>
        </div>
      </section>

      {/* 6 highlights */}
      <section style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading eyebrow="More from Edison boards" title="What boards say in their reviews"/>
          <div className="testi-all-grid" style={{
            marginTop: 40,
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18
          }}>
            {rest.map((t, i) => (
              <article key={i} style={{
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "26px 28px",
                display: "flex", flexDirection: "column", gap: 12
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Stars n={t.rating || 5}/>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "var(--edison-teal-dark)"
                  }}>{t.category}</div>
                </div>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0, flex: 1
                }}>{t.quote}</p>
                <div style={{ paddingTop: 14, borderTop: "1px solid var(--border-hairline)" }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                    color: "var(--edison-navy)"
                  }}>{t.attribution}</div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 12.5,
                    color: "var(--edison-gray-mid)", marginTop: 2
                  }}>{t.role} · {t.community}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Read deeper"
        title="See the full story behind these results."
        body="Our case studies document specific transitions, capital project rescues, and financial turnarounds we've led, with the numbers and the timelines."
        primary={{ label: "Read Case Studies", href: "/case-studies" }}
        secondary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT, moved to content/testimonials-content.jsx
   ============================================================ */

export { TestimonialsPageA, TestimonialsPageB };
