import React, { useState as useEdState } from 'react';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { Breadcrumb, FinalCTA, InteriorButton, MidCTA, SectionHeading } from '../components/interior-components';

/* ============================================================
   EDISON EDUCATION HUB, VARIANT A (Topic-First / Category Grid)
   Hero, three big topic-category cards (Florida Compliance / For
   Boards / Financial Management) each with the spokes underneath,
   then a featured article band.
   ============================================================ */
function EducationHubA({ content }) {
  return (
    <main data-screen-label="Edison Education, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Edison Education" }
      ]}/>

      <section className="edu-hero" style={{
        background: "linear-gradient(180deg, #fff 0%, var(--edison-teal-pale) 100%)",
        padding: "88px 48px 64px"
      }}>
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <img src="/assets/Edison-Education-Full-Color.svg" alt="Edison Education"
               style={{ height: 80, width: "auto", display: "block", margin: "0 auto 24px" }}/>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 20px", textAlign: "center"
          }}>Resources for Florida HOA & condo boards.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: "0 auto", maxWidth: 720, textAlign: "center"
          }}>{content.intro}</p>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
            <a href="#insurance-videos" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 18px", borderRadius: 999,
              background: "var(--edison-navy)", color: "#fff",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
              textDecoration: "none", letterSpacing: "0.01em",
              boxShadow: "var(--shadow-sm)"
            }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              New: Insurance Video Library
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{opacity: 0.7}}><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Topic categories - now labeled "Blog" with see-all link */}
      <section style={{ background: "#fff", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "flex-end",
            marginBottom: 36, flexWrap: "wrap", gap: 16
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 12
              }}>Blog</div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 32, lineHeight: 1.2, letterSpacing: "-0.01em",
                color: "var(--edison-navy)", margin: 0
              }}>Articles for Florida HOA & condo boards</h2>
            </div>
            <a href="/blog" style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
              color: "var(--edison-teal-dark)",
              textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 18px", borderRadius: 8,
              border: "1.5px solid var(--edison-teal-dark)"
            }}>See all blogs <span aria-hidden="true">→</span></a>
          </div>
          <div className="edu-course-grid" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {content.topics.map((t, i) => (
            <article key={i} id={t.id} style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 16, overflow: "hidden",
              boxShadow: "var(--shadow-xs)",
              display: "flex", flexDirection: "column",
              scrollMarginTop: 100
            }}>
              <div style={{
                background: t.color || "var(--edison-teal-pale)",
                padding: "32px 28px 24px",
                borderBottom: "1px solid var(--border-hairline)"
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)", marginBottom: 14
                }}>{t.label}</div>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 24, lineHeight: 1.22, letterSpacing: "-0.01em",
                  color: "var(--edison-navy)", margin: "0 0 10px"
                }}>{t.title}</h2>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                  color: "var(--edison-text-body)", margin: 0
                }}>{t.body}</p>
              </div>
              <ul style={{ listStyle: "none", padding: "8px 0", margin: 0, flex: 1 }}>
                {t.articles.map((a, j) => (
                  <li key={j}>
                    <a href={a.href} style={{
                      display: "block", padding: "14px 26px",
                      textDecoration: "none",
                      borderBottom: j < t.articles.length - 1 ? "1px solid var(--border-hairline)" : 0,
                      borderBottomColor: "var(--border-hairline)", borderBottomStyle: "solid",
                      borderBottomWidth: j < t.articles.length - 1 ? 1 : 0,
                      transition: "background 140ms"
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "var(--edison-teal-pale)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                      <div style={{
                        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5,
                        color: "var(--edison-navy)", marginBottom: 4
                      }}>{a.title}</div>
                      <div style={{
                        fontFamily: "var(--font-body)", fontSize: 12.5,
                        color: "var(--edison-gray-mid)"
                      }}>{a.readTime} read</div>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section style={{ background: "var(--edison-teal-pale)", padding: "80px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading eyebrow="Featured" title="What boards are reading this month"/>
          <a className="edu-featured-grid" href={content.featured.href} style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 0,
            background: "#fff",
            borderRadius: 16, overflow: "hidden",
            boxShadow: "var(--shadow-md)",
            textDecoration: "none",
            transition: "transform 220ms"
          }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
            <div style={{
              minHeight: 340,
              backgroundImage: `url(${content.featured.image})`,
              backgroundSize: "cover", backgroundPosition: "center"
            }}/>
            <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)"
              }}>{content.featured.category}</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 28, lineHeight: 1.22, letterSpacing: "-0.01em",
                color: "var(--edison-navy)", margin: 0
              }}>{content.featured.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0
              }}>{content.featured.excerpt}</p>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: "var(--edison-teal-dark)", marginTop: 8
              }}>Read the article →</div>
            </div>
          </a>
        </div>
      </section>

      {/* Live signup (posts to /api/subscribe). Replaces a CTA that pointed at
          a #subscribe anchor with nothing behind it. */}
      <NewsletterSignup
        id="subscribe"
        background="#fff"
        eyebrow="Stay informed"
        title="Get Edison Education updates straight to your inbox"
        body="One monthly email with new articles, Florida compliance updates, and board education. No sales pitches."
      />
    </main>
  );
}

/* ============================================================
   EDISON EDUCATION HUB, VARIANT B (Chronological Index + Sidebar)
   Search bar, big article list (newest first), sidebar with
   categories and trending. More like a content publication.
   ============================================================ */
function EducationHubB({ content }) {
  const allArticles = content.topics.flatMap(t =>
    t.articles.map(a => ({ ...a, category: t.label }))
  );
  return (
    <main data-screen-label="Edison Education, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Edison Education" }
      ]}/>

      <section style={{ background: "var(--edison-navy)", color: "#fff",
                        padding: "80px 48px 56px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>Edison Education · Resources</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 50, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 22px", maxWidth: 880
          }}>Articles, guides, and Florida compliance updates for boards.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.55,
            color: "rgba(255,255,255,.82)", margin: "0 0 32px", maxWidth: 720
          }}>{content.intro}</p>
          <div style={{
            display: "flex", gap: 0,
            background: "#fff", borderRadius: 10,
            padding: 4, maxWidth: 540,
            boxShadow: "var(--shadow-md)"
          }}>
            <input type="text" placeholder="Search articles, milestone, reserve, audit, switching..."
                   style={{
                     flex: 1, border: 0, outline: 0,
                     padding: "12px 16px",
                     fontFamily: "var(--font-body)", fontSize: 14.5,
                     background: "transparent",
                     color: "var(--edison-text-body)"
                   }}/>
            <button style={{
              appearance: "none", cursor: "pointer", border: 0,
              background: "var(--edison-teal)", color: "var(--edison-navy)",
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
              padding: "0 22px", borderRadius: 8
            }}>Search</button>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "56px 48px" }}>
        <div className="edu-blog-layout" style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56,
                      alignItems: "start" }}>

          <div>
            <SectionHeading eyebrow="Latest" title="Recent articles"/>
            <div style={{
              marginTop: 32,
              display: "flex", flexDirection: "column", gap: 24
            }}>
              {allArticles.slice(0, 8).map((a, i) => (
                <a className="edu-article-row" key={i} href={a.href} style={{
                  display: "grid", gridTemplateColumns: "200px 1fr", gap: 24,
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border-hairline)",
                  borderBottomColor: "var(--border-hairline)", borderBottomStyle: "solid", borderBottomWidth: 1
                }}>
                  <div style={{
                    width: 200, height: 130, borderRadius: 8, overflow: "hidden",
                    backgroundImage: `url(${a.image || "assets/img-13.webp"})`,
                    backgroundSize: "cover", backgroundPosition: "center"
                  }}/>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "var(--edison-teal-dark)", marginBottom: 8
                    }}>{a.category}</div>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
                      lineHeight: 1.25, color: "var(--edison-navy)", margin: "0 0 8px"
                    }}>{a.title}</h3>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 13.5,
                      color: "var(--edison-gray-mid)"
                    }}>{a.readTime} read · {a.date || "April 2026"}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <aside style={{ position: "sticky", top: 110, display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 12, padding: 24
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 14,
                paddingBottom: 12, borderBottom: "1px solid var(--border-hairline)"
              }}>Topics</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0,
                           display: "flex", flexDirection: "column", gap: 4 }}>
                {content.topics.map((t, i) => (
                  <li key={i}>
                    <a href={t.id ? `#${t.id}` : "/blog"} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "11px 14px", borderRadius: 6,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                      color: "var(--edison-navy)",
                      textDecoration: "none", borderBottom: 0
                    }}>
                      <span>{t.label}</span>
                      <span style={{
                        background: "var(--edison-teal-pale)",
                        color: "var(--edison-teal-dark)",
                        padding: "3px 10px", borderRadius: 999,
                        fontFamily: "var(--font-body)", fontSize: 12,
                        fontWeight: 700
                      }}>{t.articles.length}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <NewsletterSignup
              id="subscribe"
              variant="card"
              eyebrow="Monthly newsletter"
              body="One email a month. New articles, FL compliance updates, board education. No sales pitches."
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT
   ============================================================ */
const EDUCATION_CONTENT = {
  intro: "Edison Education is our free library of articles, guides, and Florida compliance updates, written specifically for HOA, condo, and townhome board members. Every piece is grounded in the actual statute, the actual board pain point, and the actual decision boards have to make.",
  // Three clusters, mirroring the Edison Education mega menu (Florida
  // Compliance / Board Governance / Financial Management). `id` is what the
  // Topics sidebar anchors to.
  topics: [
    {
      id: "florida-compliance",
      label: "Florida Compliance",
      title: "What Florida statute actually requires",
      body: "Chapter 720, Chapter 718, and the post-Surfside inspection rules, translated out of legalese into what your board has to do and by when.",
      color: "#F2F7F6",
      // Titles match each post's H1 exactly; readTime reflects actual length.
      articles: [
        { title: "Florida HOA Laws Guide: Ch. 720 and Ch. 718 Explained", readTime: "2 min", href: "/blog/florida-hoa-laws-guide" },
        { title: "Florida Milestone Inspection Guide (SB-4D)", readTime: "2 min", href: "/blog/florida-milestone-inspection-guide" },
        { title: "Condo Association vs HOA: Which Are You?", readTime: "2 min", href: "/blog/condo-association-vs-hoa" }
      ]
    },
    {
      id: "board-governance",
      label: "Board governance",
      title: "Practical guides for volunteer board members",
      body: "Governance fundamentals, document hierarchy, enforcement boundaries, and decision-making frameworks for boards who didn't sign up to be lawyers.",
      color: "#FAF4ED",
      articles: [
        { title: "HOA Bylaws vs CC&Rs: Key Differences Explained", readTime: "8 min", href: "/blog/hoa-bylaws-vs-ccrs" },
        { title: "HOA Board Member Responsibilities", readTime: "2 min", href: "/blog/hoa-board-member-responsibilities" },
        { title: "Unenforceable HOA Rules in Florida", readTime: "2 min", href: "/blog/unenforceable-hoa-rules-florida" }
      ]
    },
    {
      id: "financial-management",
      label: "Financial Management",
      title: "Audits, budgets, fees, and reserves",
      body: "Reserve funding, audit prep, and how to read financial statements your board can actually defend.",
      color: "#EEF4FF",
      articles: [
        { title: "How to Prepare an HOA Budget: A Board's Step-by-Step Guide", readTime: "8 min", href: "/blog/hoa-budget-preparation" },
        { title: "HOA Audit: What It Is, When It's Required, and How to Prepare", readTime: "9 min", href: "/blog/hoa-audit" },
        { title: "HOA Reserve Study Florida: What Boards Need to Know", readTime: "10 min", href: "/blog/hoa-reserve-study-guide" },
        { title: "HOA Special Assessment Guide", readTime: "2 min", href: "/blog/hoa-special-assessment" },
        { title: "HOA Management Fees: What Boards Actually Pay", readTime: "2 min", href: "/blog/hoa-management-fees" }
      ]
    }
  ],
  featured: {
    category: "Financial Management",
    title: "How to Prepare an HOA Budget: A Board's Step-by-Step Guide",
    excerpt: "Budget season doesn't have to be the hardest thing your board does all year. A step-by-step guide to preparing an HOA budget, from funding reserves to setting dues, plus the Florida requirements and the backwards-planning method that keeps every deadline calm.",
    image: "/assets/blog/hoa-budget-preparation.webp",
    href: "/blog/hoa-budget-preparation"
  }
};

export { EducationHubA, EducationHubB, EDUCATION_CONTENT };
