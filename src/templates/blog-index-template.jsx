import React from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, SectionHeading } from '../components/interior-components';

/* ============================================================
   /blog/ , chronological article index
   Same shape as Edison Education hub but flat, paginated list.
   ============================================================ */
function BlogIndexPage({ content }) {
  const all = content.articles;
  return (
    <main data-screen-label="Blog Index">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Edison Education", href: "/edison-education" },
        { label: "Blog" }
      ]}/>

      <section className="blog-idx-hero" style={{ background: "var(--edison-navy)", color: "#fff",
                        padding: "72px 48px 56px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>Edison Blog</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 50, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 20px", maxWidth: 880
          }}>Every article we've published, newest first.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.55,
            color: "rgba(255,255,255,.82)", margin: 0, maxWidth: 720
          }}>{content.intro}</p>
        </div>
      </section>

      <section className="blog-idx-body" style={{ background: "#fff", padding: "56px 48px 88px" }}>
        <div className="blog-idx-layout" style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 56,
                      alignItems: "start" }}>
          <div>
            <div style={{
              display: "flex", flexDirection: "column", gap: 22
            }}>
              {all.map((a, i) => (
                <a key={i} href={a.href} className="blog-idx-row" style={{
                  display: "grid", gridTemplateColumns: "200px 1fr", gap: 22,
                  alignItems: "center",
                  textDecoration: "none",
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border-hairline)",
                  borderBottomStyle: "solid", borderBottomWidth: 1
                }}>
                  <div style={{
                    width: 200, height: 130, borderRadius: 8, overflow: "hidden",
                    backgroundImage: `url(${a.image})`,
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
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                      color: "var(--edison-text-body)", margin: "0 0 8px"
                    }}>{a.dek}</p>
                    <div style={{
                      fontFamily: "var(--font-body)", fontSize: 12.5,
                      color: "var(--edison-gray-mid)"
                    }}>{a.readTime} read · {a.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <aside className="blog-idx-sidebar" style={{ position: "sticky", top: 110, display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{
              background: "#fff", border: "1px solid var(--border-hairline)",
              borderRadius: 12, padding: 22
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 14
              }}>Topics</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0,
                           display: "flex", flexDirection: "column", gap: 4 }}>
                {content.topics.map((t, i) => (
                  <li key={i}>
                    <a href="/edison-education" style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "10px 12px", borderRadius: 6,
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
                      }}>{t.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              background: "var(--edison-teal-pale)",
              borderRadius: 12, padding: 22
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 10
              }}>Browse by topic</div>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--edison-text-body)", margin: "0 0 12px"
              }}>Edison Education organizes articles into Florida Compliance, Board Governance, and Financial Management.</p>
              <InteriorButton variant="primary" size="sm" href="/edison-education">Visit Edison Education →</InteriorButton>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ---------- Content ---------- */
const BLOG_INDEX_CONTENT = {
  intro: "Long-form guides, statutory explainers, and board-education articles, written for Florida HOA and condo boards by Edison's team. New articles every month.",
  topics: [
    { label: "Financial Management", count: 4 },
    { label: "For Boards", count: 1 }
  ],
  articles: [
    { category: "Financial Management", title: "How to Prepare an HOA Budget: A Board's Step-by-Step Guide", dek: "A step-by-step guide to preparing an HOA budget, from funding reserves to setting dues, plus the Florida requirements and the backwards-planning method that keeps every deadline calm.", readTime: "8 min", date: "August 5, 2026", image: "/assets/blog/hoa-budget-preparation.webp", href: "/blog/hoa-budget-preparation" },
    { category: "Financial Management", title: "HOA Reserve Study Florida: What Boards Need to Know", dek: "What a reserve study covers, how Florida law treats HOAs vs condos, what it costs, and how Edison supports the process from start to finish.", readTime: "10 min", date: "May 20, 2026", image: "/assets/blog/reserve-study-specialist.webp", href: "/blog/hoa-reserve-study-guide" },
    { category: "Financial Management", title: "HOA Audit: What It Is, When It's Required, and How to Prepare", dek: "Florida audit thresholds, prep checklist, and how strong year-round bookkeeping cuts cost and time.", readTime: "9 min", date: "March 16, 2026", image: "/assets/blog/hoa-board-members-reviewing-audit.webp", href: "/blog/hoa-audit" },
    { category: "For Boards", title: "HOA Bylaws vs CC&Rs: Key Differences Explained", dek: "Which document governs your situation, and how to find out without calling a lawyer.", readTime: "8 min", date: "February 4, 2026", image: "/assets/blog/bylaws-vs-ccrs.webp", href: "/blog/hoa-bylaws-vs-ccrs" }
  ]
};


export { BlogIndexPage, BLOG_INDEX_CONTENT };
