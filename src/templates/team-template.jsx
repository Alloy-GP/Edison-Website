import React, { useState as useTeamState } from 'react';
import { BodyProse, Breadcrumb, FinalCTA, InteriorButton, SectionHeading } from '../components/interior-components';

/* ---------- Avatar placeholder (initials + brand color) ---------- */
function Avatar({ name, image, size = 96 }) {
  if (image) {
    return (
      <div style={{
        width: size, height: size, borderRadius: size / 2, overflow: "hidden",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover", backgroundPosition: "center"
      }}/>
    );
  }
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("");
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: "linear-gradient(135deg, var(--edison-teal-pale) 0%, var(--edison-teal) 100%)",
      color: "var(--edison-navy)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--font-display)", fontWeight: 800,
      fontSize: size * 0.38,
      letterSpacing: "-0.02em",
      border: "2px solid #fff",
      boxShadow: "var(--shadow-sm)"
    }}>{initials}</div>
  );
}

/* ============================================================
   TEAM PAGE, VARIANT A (Featured Leadership + Departments)
   Tracy + leadership get big bio cards. Rest of the team is
   broken into department sections (Management / Accounting /
   Enforcement / Collections) as compact grids.
   ============================================================ */
function TeamPageA({ content }) {
  const leaders = content.team.filter(p => p.featured);
  const departments = [...new Set(content.team.filter(p => !p.featured).map(p => p.department))];

  return (
    <main data-screen-label="Team, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Meet Our Team" }
      ]}/>

      <section className="team-hero" style={{ background: "#fff", padding: "72px 48px 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Meet Our Team</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px", maxWidth: 880
          }}>The people who actually do the work for your board.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
            color: "var(--edison-text-body)", margin: 0, maxWidth: 720
          }}>{content.intro}</p>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ background: "var(--edison-teal-pale)", padding: "64px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading eyebrow="Leadership" title="The people behind the partnership"/>
          <div className="team-leaders-grid" style={{
            marginTop: 36,
            display: "grid",
            gridTemplateColumns: `repeat(${leaders.length}, 1fr)`,
            gap: 22
          }}>
            {leaders.map((p, i) => (
              <article key={i} style={{
                background: "#fff",
                borderRadius: 14, overflow: "hidden",
                boxShadow: "var(--shadow-md)"
              }}>
                <div style={{
                  aspectRatio: "4 / 3",
                  backgroundImage: p.image ? `url(${p.image})` : "linear-gradient(135deg, var(--edison-teal-pale) 0%, var(--edison-teal) 100%)",
                  backgroundSize: "cover", backgroundPosition: "center top",
                  position: "relative"
                }}>
                  {!p.image && (
                    <div style={{
                      position: "absolute", inset: 0,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <div style={{
                        fontFamily: "var(--font-display)", fontWeight: 800,
                        fontSize: 72, color: "var(--edison-navy)",
                        letterSpacing: "-0.03em"
                      }}>
                        {p.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                      </div>
                    </div>
                  )}
                  <span style={{
                    position: "absolute", bottom: 14, left: 14,
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "var(--edison-navy)",
                    background: "var(--edison-teal)",
                    padding: "4px 10px", borderRadius: 4
                  }}>Placeholder photo</span>
                </div>
                <div style={{ padding: "26px 28px" }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 22, lineHeight: 1.2,
                    color: "var(--edison-navy)", margin: "0 0 6px"
                  }}>{p.name}</h3>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                    color: "var(--edison-teal-dark)", marginBottom: 14
                  }}>{p.role}</div>
                  {p.credentials && (
                    <div style={{
                      display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14
                    }}>
                      {p.credentials.map((c, j) => (
                        <span key={j} style={{
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
                    fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                    color: "var(--edison-text-body)", margin: 0
                  }}>{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      {departments.map(dept => (
        <section key={dept} style={{ background: "#fff", padding: "72px 48px",
                                     borderTop: "1px solid var(--border-hairline)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 32 }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 10
              }}>Department</div>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.01em",
                color: "var(--edison-navy)", margin: 0
              }}>{dept}</h2>
            </div>
            <div className="team-dept-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20
            }}>
              {content.team.filter(p => !p.featured && p.department === dept).map((p, i) => (
                <article key={i} style={{
                  background: "#fff",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: 12, padding: "26px 22px",
                  textAlign: "center",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 10
                }}>
                  <Avatar name={p.name} image={p.image} size={84}/>
                  <div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16,
                      color: "var(--edison-navy)"
                    }}>{p.name}</div>
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
                      color: "var(--edison-teal-dark)", marginTop: 4
                    }}>{p.role}</div>
                  </div>
                  {p.bio && (
                    <p style={{
                      fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.55,
                      color: "var(--edison-text-body)", margin: 0
                    }}>{p.bio}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <FinalCTA
        eyebrow="Let's talk"
        title="Want to know who you'd actually be working with?"
        body="Request a proposal and we'll introduce you to the specific manager who'd run your community, not just a sales rep."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Read About Edison", href: "/about" }}
      />
    </main>
  );
}

/* ============================================================
   TEAM PAGE, VARIANT B (Single Grid · Egalitarian)
   No leadership distinction. Everyone gets the same card.
   Filters at top by department. Reads as "this is the team."
   ============================================================ */
function TeamPageB({ content }) {
  const [filter, setFilter] = useTeamState("All");
  const departments = ["All", "Leadership", ...new Set(content.team.filter(p => !p.featured).map(p => p.department))];
  const filtered = content.team.filter(p => {
    if (filter === "All") return true;
    if (filter === "Leadership") return p.featured;
    return p.department === filter;
  });

  return (
    <main data-screen-label="Team, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Meet Our Team" }
      ]}/>

      <section style={{ background: "#fff", padding: "72px 48px 32px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Meet Our Team</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px"
          }}>The Edison team.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: "0 auto", maxWidth: 720
          }}>{content.intro}</p>
        </div>
      </section>

      {/* Filter chips */}
      <section style={{ background: "#fff", padding: "16px 48px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto",
                      display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {departments.map(d => (
            <button key={d} onClick={() => setFilter(d)}
                    style={{
                      appearance: "none", cursor: "pointer",
                      background: filter === d ? "var(--edison-navy)" : "#fff",
                      color: filter === d ? "#fff" : "var(--edison-navy)",
                      border: `1px solid ${filter === d ? "var(--edison-navy)" : "var(--border-strong)"}`,
                      padding: "9px 18px", borderRadius: 999,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
                      transition: "all 140ms"
                    }}>
              {d}
            </button>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--bg-3, #F5F7FA)", padding: "56px 48px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20
          }}>
            {filtered.map((p, i) => (
              <article key={i} style={{
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 14, overflow: "hidden",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column"
              }}>
                <div style={{
                  aspectRatio: "1 / 1",
                  backgroundImage: p.image ? `url(${p.image})` : "linear-gradient(135deg, var(--edison-teal-pale) 0%, var(--edison-teal) 100%)",
                  backgroundSize: "cover", backgroundPosition: "center top",
                  position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {!p.image && (
                    <div style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 64, color: "var(--edison-navy)",
                      letterSpacing: "-0.03em"
                    }}>
                      {p.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                    </div>
                  )}
                  <span style={{
                    position: "absolute", bottom: 12, right: 12,
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 9,
                    letterSpacing: "0.14em", textTransform: "uppercase",
                    color: "rgba(15,29,51,.65)",
                    background: "rgba(255,255,255,.85)",
                    padding: "3px 8px", borderRadius: 3
                  }}>Placeholder</span>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
                    color: "var(--edison-navy)", margin: "0 0 4px"
                  }}>{p.name}</h3>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
                    color: "var(--edison-teal-dark)", marginBottom: 10
                  }}>{p.role}</div>
                  <div style={{
                    fontFamily: "var(--font-body)", fontSize: 11.5,
                    color: "var(--edison-gray-mid)",
                    textTransform: "uppercase", letterSpacing: "0.06em",
                    paddingTop: 10,
                    borderTop: "1px solid var(--border-hairline)"
                  }}>{p.featured ? "Leadership" : p.department}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Let's talk"
        title="Want to know who you'd actually be working with?"
        body="Request a proposal and we'll introduce you to the specific manager who'd run your community, not just a sales rep."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Read About Edison", href: "/about" }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT, Placeholder team
   ============================================================ */
const TEAM_CONTENT = {
  intro: "Edison is small on purpose. The manager who learns your community in year one is the same one you'll work with in year three. Our back-office departments are dedicated specialists, not managers wearing another hat.",
  team: [
    {
      name: "Tracy Durham",
      role: "Founder & Principal",
      department: "Leadership",
      featured: true,
      credentials: ["PCAM", "2025 CAI Chapter President"],
      bio: "Tracy founded Edison in 2001 with a deliberate alternative to volume-driven HOA management. PCAM-credentialed and the 2025 Central Florida CAI Chapter President, she personally onboards every new association."
    },
    {
      name: "Sabrina Stephan",
      role: "Chief Operating Officer",
      department: "Leadership",
      featured: true,
      credentials: ["CMCA"],
      bio: "Sabrina oversees the entire transition process for new communities and supervises day-to-day operations across Edison's portfolio. The COO is the person who makes sure the Transition Experience actually works."
    },
    {
      name: "Jordan Reyes",
      role: "Director of Accounting",
      department: "Leadership",
      featured: true,
      credentials: ["CPA"],
      bio: "Jordan leads Edison's accounting department, monthly financials, reserve banking, audit prep, and the discipline that keeps boards out of trouble with their CPAs."
    },
    /* Management */
    { name: "Maya Henderson", role: "Senior Association Manager", department: "Management" },
    { name: "Daniel Park", role: "Association Manager", department: "Management" },
    { name: "Priya Shah", role: "Association Manager", department: "Management" },
    { name: "Marcus Lee", role: "Association Manager", department: "Management" },
    { name: "Elena Vega", role: "Association Manager", department: "Management" },
    { name: "Trevor Boyd", role: "Manager in Training", department: "Management" },
    /* Accounting */
    { name: "Renee Carter", role: "Accounting Specialist", department: "Accounting" },
    { name: "Hannah Liu", role: "Accounting Specialist", department: "Accounting" },
    { name: "Devon Park", role: "Reserve & Capital Analyst", department: "Accounting" },
    /* Enforcement */
    { name: "Sam Whitmore", role: "Enforcement Lead", department: "Enforcement & Compliance" },
    { name: "Olivia Russo", role: "Inspector & ARC Coordinator", department: "Enforcement & Compliance" },
    /* Collections */
    { name: "Wesley Brooks", role: "Collections Specialist", department: "Collections" },
    { name: "Naomi Foster", role: "Collections Coordinator", department: "Collections" }
  ]
};

export { TeamPageA, TeamPageB, TEAM_CONTENT };
