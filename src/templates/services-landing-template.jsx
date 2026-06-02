import React, { useState } from 'react';
import { Breadcrumb, SectionHeading, InteriorButton, InteriorEyebrow,
         MidCTA, FAQ, FinalCTA, BulbMark, ServiceArea } from '../components/interior-components';
import { StatsBand, PullQuote } from '../components/template-sections';

/* ============================================================
   SERVICES LANDING  ·  /services/
   Hub page routing boards into the two Main Pillars (HOA / Condo)
   and three cross-community services.
   ============================================================ */

function ServicesLandingPage({ content = SERVICES_LANDING_CONTENT }) {
  return (
    <main data-screen-label="Services Landing">
      <Breadcrumb trail={content.crumb}/>

      {/* ---------- Hero: editorial split ---------- */}
      <section style={{ background: "#fff", padding: "72px 48px 56px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56,
                      alignItems: "center" }}>
          <div>
            <InteriorEyebrow>{content.eyebrow}</InteriorEyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "16px 0 22px",
              textWrap: "balance"
            }}>{content.hero.title}</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.55,
              color: "var(--edison-text-body)", margin: "0 0 28px",
              maxWidth: 620
            }}>{content.hero.lede}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/contact">Schedule a Consultation</InteriorButton>
            </div>
          </div>
          <div style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: `url(${content.hero.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      <StatsBand background="var(--edison-teal-pale)" stats={content.stats}/>

      {/* ---------- Pillar split: pick your community type ---------- */}
      <section style={{ background: "#fff", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <SectionHeading
              align="center"
              eyebrow="Start here"
              title={content.pillars.title}
              sub={content.pillars.sub}
            />
          </div>
          <div style={{
            marginTop: 56,
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24
          }}>
            {content.pillars.items.map((p, i) => <PillarCard key={i} pillar={p}/>)}
          </div>
        </div>
      </section>

      {/* ---------- Cross-community services ---------- */}
      <section style={{ background: "var(--edison-teal-pale)", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Across all communities"
            title={content.crossCommunity.title}
            sub={content.crossCommunity.sub}
          />
          <div style={{
            marginTop: 48,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20
          }}>
            {content.crossCommunity.items.map((s, i) => <CrossServiceCard key={i} service={s}/>)}
          </div>
        </div>
      </section>

      {/* ---------- How Edison structures the work ---------- */}
      <section style={{ background: "var(--edison-navy)", padding: "96px 48px", color: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            color="#fff"
            eyebrow="The Edison model"
            title={content.model.title}
            sub={content.model.sub}
          />
          <div style={{
            marginTop: 48,
            display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20
          }}>
            {content.model.items.map((m, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,.04)",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 12,
                padding: "28px 24px",
                display: "flex", flexDirection: "column", gap: 12
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: 38, lineHeight: 1, color: "var(--edison-teal)",
                  letterSpacing: "-0.02em"
                }}>{m.figure}</div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 17, lineHeight: 1.3, color: "#fff", margin: 0
                }}>{m.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
                  color: "rgba(255,255,255,.78)", margin: 0
                }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MidCTA
        variant="teal"
        title={content.midCta.title}
        lede={content.midCta.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />

      <PullQuote
        background="#fff"
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
      />

      <ServiceArea
        eyebrow="Service Area"
        title="Central Florida boards, statewide rigor."
        body={content.serviceArea.body}
        cities={content.serviceArea.cities}
        mapImg="/assets/img-neighborhood-aerial.jpg"
        mapEmbed={true}
      />

      <FAQ
        eyebrow="FAQ"
        title="Questions boards ask before they pick up the phone"
        background="var(--edison-teal-pale)"
        items={content.faqs}
      />

      <FinalCTA
        eyebrow="Lighting the way"
        title={content.cta.title}
        body={content.cta.body}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />
    </main>
  );
}

/* ============================================================
   PillarCard — large image-led card for HOA / Condo pillars
   ============================================================ */
function PillarCard({ pillar }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={pillar.href}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}
       style={{
         textDecoration: "none", borderBottom: 0,
         background: "#fff",
         border: "1px solid var(--border-hairline)",
         borderRadius: 16,
         overflow: "hidden",
         display: "flex", flexDirection: "column",
         boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
         transform: hover ? "translateY(-3px)" : "translateY(0)",
         transition: "all 220ms cubic-bezier(.2,0,.1,1)"
       }}>
      <div style={{
        position: "relative",
        height: 240,
        backgroundImage: `url(${pillar.image})`,
        backgroundSize: "cover", backgroundPosition: "center"
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(15,29,51,.15) 0%, rgba(15,29,51,.78) 100%)"
        }}/>
        <div style={{
          position: "absolute", left: 24, top: 24,
          background: "var(--edison-teal)",
          color: "var(--edison-navy)",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
          letterSpacing: "0.14em", textTransform: "uppercase",
          padding: "6px 12px", borderRadius: 6
        }}>{pillar.statute}</div>
        <div style={{
          position: "absolute", left: 28, right: 28, bottom: 24,
          color: "#fff"
        }}>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "#fff", margin: "0 0 6px"
          }}>{pillar.title}</h3>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 14.5,
            color: "rgba(255,255,255,.85)"
          }}>{pillar.kicker}</div>
        </div>
      </div>

      <div style={{ padding: "28px 30px 26px", display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.6,
          color: "var(--edison-text-body)", margin: 0
        }}>{pillar.body}</p>

        <ul style={{ listStyle: "none", margin: 0, padding: 0,
                     display: "flex", flexDirection: "column", gap: 8 }}>
          {pillar.bullets.map((b, i) => (
            <li key={i} style={{
              display: "flex", gap: 10, alignItems: "flex-start",
              fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
              color: "var(--edison-navy)"
            }}>
              <span aria-hidden="true" style={{
                color: "var(--edison-teal-dark)", fontWeight: 800, flexShrink: 0
              }}>✓</span>
              {b}
            </li>
          ))}
        </ul>

        {pillar.subPages && (
          <div style={{
            borderTop: "1px solid var(--border-hairline)",
            paddingTop: 18, marginTop: 4,
            display: "flex", flexWrap: "wrap", gap: 8
          }}>
            {pillar.subPages.map((sp, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-body)", fontSize: 12.5,
                color: "var(--edison-navy)",
                background: "var(--edison-teal-pale)",
                padding: "5px 11px", borderRadius: 999
              }}>{sp}</span>
            ))}
          </div>
        )}

        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
          color: hover ? "var(--edison-teal-dark)" : "var(--edison-navy)",
          display: "inline-flex", alignItems: "center", gap: 8,
          marginTop: "auto", transition: "color 140ms"
        }}>
          See {pillar.shortLabel} services
          <span aria-hidden="true" style={{
            transform: hover ? "translateX(4px)" : "translateX(0)",
            transition: "transform 180ms"
          }}>→</span>
        </span>
      </div>
    </a>
  );
}

/* ============================================================
   CrossServiceCard — cross-community service tile
   ============================================================ */
function CrossServiceCard({ service }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={service.href}
       onMouseEnter={() => setHover(true)}
       onMouseLeave={() => setHover(false)}
       style={{
         textDecoration: "none", borderBottom: 0,
         background: "#fff",
         border: "1px solid var(--border-hairline)",
         borderRadius: 12,
         padding: "28px 26px",
         display: "flex", flexDirection: "column", gap: 16,
         boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
         transform: hover ? "translateY(-2px)" : "translateY(0)",
         borderColor: hover ? "var(--edison-teal)" : "var(--border-hairline)",
         transition: "all 220ms cubic-bezier(.2,0,.1,1)"
       }}>
      <div style={{
        width: 48, height: 48, borderRadius: 10,
        background: "var(--edison-teal-pale)",
        color: "var(--edison-teal-dark)",
        display: "inline-flex", alignItems: "center", justifyContent: "center"
      }}>
        <BulbMark size={24}/>
      </div>

      <div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: 20, lineHeight: 1.25,
          color: "var(--edison-navy)", margin: "0 0 6px"
        }}>{service.title}</h3>
        <div style={{
          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "var(--edison-gray-mid)"
        }}>{service.applies}</div>
      </div>

      <p style={{
        fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
        color: "var(--edison-text-body)", margin: 0, flex: 1
      }}>{service.body}</p>

      <ul style={{ listStyle: "none", margin: 0, padding: 0,
                   display: "flex", flexDirection: "column", gap: 6 }}>
        {service.points.map((pt, i) => (
          <li key={i} style={{
            display: "flex", gap: 8, alignItems: "flex-start",
            fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5,
            color: "var(--edison-text-body)"
          }}>
            <span aria-hidden="true" style={{ color: "var(--edison-teal-dark)", fontWeight: 800 }}>—</span>
            {pt}
          </li>
        ))}
      </ul>

      <span style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
        color: "var(--edison-teal-dark)",
        display: "inline-flex", alignItems: "center", gap: 6,
        marginTop: 4
      }}>
        Learn more
        <span aria-hidden="true" style={{
          transform: hover ? "translateX(4px)" : "translateX(0)",
          transition: "transform 180ms"
        }}>→</span>
      </span>
    </a>
  );
}

/* ============================================================
   PAGE CONTENT
   ============================================================ */
const SERVICES_LANDING_CONTENT = {
  crumb: [
    { label: "Home", href: "/" },
    { label: "Management Services" }
  ],
  eyebrow: "Management Services",
  phone: "(407) 317-5252",

  hero: {
    title: "Full-service community association management — built around your board.",
    lede: "HOA, condo, and townhome management for Central Florida communities. Dedicated managers carrying 8–10 communities — half the industry average. Dedicated back-office departments handling accounting, enforcement, and collections. Boards stop starting over.",
    image: "/assets/img-community-aerial.jpg"
  },

  stats: [
    { value: "8–10", caption: "Communities per Edison manager (industry average is 15+)" },
    { value: "1 day", caption: "Reply guarantee for board members. 24-hour for homeowners." },
    { value: "4.9★", caption: "Highest-rated management firm in Central Florida" },
    { value: "PCAM", caption: "Leadership credential + 2025 CAI Chapter President" }
  ],

  pillars: {
    title: "Two community types. One operating standard.",
    sub: "Florida governs HOAs and condominiums under different statutes — Ch. 720 and Ch. 718 — with different reserve, milestone-inspection, and disclosure requirements. Edison runs both with the same operating rigor. Pick the pillar that matches your community to see how the day-to-day actually works.",
    items: [
      {
        title: "HOA Management",
        shortLabel: "HOA",
        statute: "FL Chapter 720",
        kicker: "Single-Family · Townhome · Master Associations",
        image: "/assets/img-community-aerial.jpg",
        body: "Day-to-day management for single-family and townhome HOAs across Central Florida. Dedicated managers, monthly property inspections, vendor coordination, and the live Action Item List that replaces stale manager reports.",
        bullets: [
          "Dedicated manager carrying 8–10 communities maximum",
          "Monthly inspections with photo documentation",
          "ARC support, Ch. 720 compliance, governing-doc interpretation",
          "Vendor sourcing with 3+ competing bids above board thresholds"
        ],
        subPages: ["Single-Family HOA", "Townhome Associations"],
        href: "/services/hoa-management"
      },
      {
        title: "Condo Management",
        shortLabel: "Condo",
        statute: "FL Chapter 718",
        kicker: "Condominium Associations · SB-4D · SIRS",
        image: "/assets/img-22.jpg",
        body: "Florida condo association management built for the new reality after SB-4D — milestone inspections, structural integrity reserve studies, and the funding discipline boards are now legally required to demonstrate.",
        bullets: [
          "Milestone inspection coordination (FL SB-4D)",
          "Structural Integrity Reserve Study (SIRS) support",
          "Engineer & vendor coordination, audit-ready financials",
          "Ch. 718 compliance and disclosure cadence"
        ],
        subPages: ["Milestone Inspections", "SIRS Support"],
        href: "/services/condo-management"
      }
    ]
  },

  crossCommunity: {
    title: "Three departments that run across every community.",
    sub: "Edison built accounting, enforcement, and collections as separate departments — not as your manager's overtime work. Every management agreement includes all three. They're listed here because boards often want to see them on their own, before they pick a pillar.",
    items: [
      {
        title: "HOA Accounting",
        applies: "HOA + Condo",
        body: "Audit-ready accrual books, monthly statements with invoice backup by the 15th, reserve banking strategy, and year-end tax filings — handled by a dedicated accounting specialist supported by Edison's CPA-led Director of Accounting.",
        points: [
          "Monthly financials by the 15th — balance sheet, P&L, budget-to-actual",
          "Reserve banking against current study",
          "1099 + Form 1120-H / 1120 filings handled in-house"
        ],
        href: "/services/hoa-accounting"
      },
      {
        title: "Covenant Enforcement",
        applies: "HOA + Condo",
        body: "Fair, consistent, address-not-name enforcement that protects property values without eroding homeowner relationships. Documented protocols, quarterly board reporting, and a correction-first workflow that keeps hearings rare.",
        points: [
          "Address-not-name inspections — bias-resistant by design",
          "Correction-first protocol; fines are a last resort",
          "Quarterly board reporting, not a buried line in monthly minutes"
        ],
        href: "/services/covenant-enforcement"
      },
      {
        title: "HOA Collections",
        applies: "HOA + Condo",
        body: "In-house delinquency, intent-to-lien, payment plan, and attorney-coordination workflow. Most accounts resolve before legal escalation. Your cash position stays healthy, homeowner relationships stay intact.",
        points: [
          "Courtesy reminders before formal notices",
          "Intent-to-lien on statutorily compliant timeline",
          "Complete case file handed to counsel when escalation is genuinely required"
        ],
        href: "/services/hoa-collections"
      }
    ]
  },

  model: {
    title: "Why Edison's services hold together at the seams.",
    sub: "Most management companies sell a list of services. Edison sells a way of running them — sized for the manager, structured for the board, supervised by leadership that stays involved past the sales call.",
    items: [
      {
        figure: "8–10",
        title: "Right-sized portfolios",
        body: "Managers carry 8–10 communities, not 15–20. Yours actually gets attention — including the proactive work that prevents fires."
      },
      {
        figure: "4",
        title: "Specialist departments",
        body: "Accounting, enforcement, collections, and ARC are separate departments. Specialists do specialist work; your manager does the work that requires being on-property."
      },
      {
        figure: "1",
        title: "One number, one team",
        body: "When you call Edison, a person answers. One number for the manager, the accountant, and the back-office — coordinated through the live Action Item List."
      },
      {
        figure: "12",
        title: "Annual, not life-time",
        body: "Management agreements are 12-month terms with clean termination provisions. We earn renewal every year. You walk free with your records, anytime."
      }
    ]
  },

  midCta: {
    title: "Not sure which pillar fits your community?",
    lede: "Tell us a little about your association — community type, unit count, what's working, what isn't. We'll route you to the right starting point and respond with a written proposal within one business day."
  },

  quote: {
    quote: "We interviewed four firms. Edison was the only one whose principal showed up to the board interview personally — and stayed for the whole thing. A year in, that wasn't a sales move. That's just how they run.",
    attribution: "Angela P.",
    role: "Board President",
    community: "HOA · 228 units · Dr. Phillips, Orlando"
  },

  serviceArea: {
    body: "Edison manages HOAs and condominium associations across Orange, Seminole, Osceola, Lake, and Brevard counties — 18+ Central Florida cities, with dedicated management pages for each. We accept new associations of 300+ units with a $2,000/month minimum.",
    cities: [
      "Orlando", "Winter Garden", "Windermere", "Dr. Phillips",
      "Kissimmee", "Clermont", "Lake Mary", "Heathrow",
      "Altamonte Springs", "Oviedo", "Cocoa Beach", "Brevard County"
    ]
  },

  faqs: [
    {
      q: "Do you manage HOAs and condo associations under one agreement?",
      a: "Not under one agreement — each community is its own client with its own management agreement, even when a master association sits over multiple sub-associations. But the operating rigor, the people, and the systems are the same across both community types. A board moving between an HOA and a condo would feel continuity, not a switch."
    },
    {
      q: "Is there a minimum community size or budget you'll take on?",
      a: "Yes. Edison's structural model — dedicated manager, dedicated back-office departments, leadership involvement — works best for communities of 300+ units and $2,000/month minimum management fee. Smaller communities are often better served by self-management plus a la carte accounting; we'll tell you directly if Edison isn't the right shape for your association."
    },
    {
      q: "What's included in a standard management agreement?",
      a: "Day-to-day association management, monthly property inspections, vendor sourcing and coordination, ARC support, HOA accounting (monthly statements, reserve banking, audit prep), covenant enforcement, collections, and the technology stack — CINC Systems portals, the Action Item List, WATTSON AI, Plaud meeting minutes. No 'a la carte' upcharges for what should be standard."
    },
    {
      q: "How long does it take to move from first conversation to live operations?",
      a: "60–90 days is the typical window. The Edison Transition Experience covers records digitization, vendor recredentialing, bank account migration, insurance certificates, and a Meet Your Management event before cutover. The COO supervises the first 90 days personally."
    },
    {
      q: "Can we keep some of our existing vendor relationships?",
      a: "Yes — Edison recredentials vendors during transition (updated W-9s, COIs, contracts) but boards keep the vendors they want to keep. We re-bid the ones the board flags for review. Vendor decisions are always the board's, documented in the Action Item List."
    },
    {
      q: "Are your agreements long-term?",
      a: "12-month terms with clear termination provisions. We don't believe in trapping boards — if Edison isn't a fit at the end of year one, you walk free with your records, your vendor list, and your processes intact. Most boards renew because the model works, not because the contract makes leaving hard."
    }
  ],

  cta: {
    title: "Management built on partnership and stability — not volume.",
    body: "Tell us about your community. We'll respond with a written proposal sized for your governing documents, capital pipeline, and homeowner count — within one business day, no high-pressure follow-ups."
  }
};

export { ServicesLandingPage };
