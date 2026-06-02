import React from 'react';
import { BodyProse, Breadcrumb, BulbMark, FAQ, FeatureGrid, FinalCTA, InteriorButton, MidCTA, SectionHeading } from '../components/interior-components';
import { NumberedSteps, PullQuote } from '../components/template-sections';

/* ============================================================
   SUB-SERVICE PAGE TEMPLATE
   Derived from locked Pillar A. Tightest of the service family —
   1,200–1,800 words. Statute-driven sub-services with heavy FAQ.
   Used by:
     /services/hoa-accounting/budget-preparation/
     /services/hoa-accounting/reserve-study-support/
     /services/condo-management/milestone-inspections/
     /services/condo-management/structural-integrity-reserve-study/

   Key differences from Service template:
   - Hero includes a "Statute" or "Florida law" callout chip
   - Adds a "Statutory Spec" reference card right after the hero
   - Heavier FAQ section (8–12 items) targets statutory queries
   - "Back to parent" link near the breadcrumb for the parent service
   ============================================================ */
function SubServicePage({ content }) {
  return (
    <main data-screen-label={`Sub-Service, ${content.serviceLabel}`}>
      <Breadcrumb trail={content.crumb}/>

      {/* Hero with statute chip */}
      <section className="sub-svc-hero" style={{ background: "#fff", padding: "64px 48px 48px" }}>
        <div className="sub-svc-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56,
                      alignItems: "center" }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 18
            }}>{content.eyebrow}</div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 48, lineHeight: 1.08, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "0 0 22px"
            }}>{content.hero.title}</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
              color: "var(--edison-text-body)", margin: "0 0 14px"
            }}>{content.hero.lede}</p>
            {content.hero.statute && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginBottom: 24,
                padding: "8px 14px",
                background: "var(--edison-navy)",
                color: "var(--edison-teal)",
                borderRadius: 999,
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
                letterSpacing: "0.04em"
              }}>
                <span aria-hidden="true">§</span>
                {content.hero.statute}
              </div>
            )}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href={content.parent.href}>← Back to {content.parent.label}</InteriorButton>
            </div>
          </div>
          <div className="sub-svc-hero-img" style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: `url(${content.hero.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      {/* Statutory Spec, quick-reference card row */}
      <section className="sub-svc-spec-section" style={{ background: "var(--edison-teal-pale)", padding: "48px" }}>
        <div className="sub-svc-spec-grid" style={{
          maxWidth: 1080, margin: "0 auto",
          display: "grid", gridTemplateColumns: `repeat(${content.spec.length}, 1fr)`,
          gap: 16
        }}>
          {content.spec.map((s, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 10, padding: "20px 22px",
              boxShadow: "var(--shadow-xs)"
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)", marginBottom: 8
              }}>{s.label}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
                lineHeight: 1.3, color: "var(--edison-navy)"
              }}>{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      <BodyProse
        background="#fff"
        title={content.context.title}
        paragraphs={content.context.paragraphs}
      />

      {/* What's included, 3-up cards */}
      <section style={{ background: "var(--bg-3, #F5F7FA)", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            eyebrow="What Edison handles"
            title={content.included.title}
            sub={content.included.sub}
          />
          <div className="sub-svc-process-grid" style={{
            marginTop: 40,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18
          }}>
            {content.included.items.map((it, i) => (
              <article key={i} style={{
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "26px 24px",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column", gap: 12
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: "var(--edison-teal-pale)",
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>
                  <BulbMark size={20}/>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 17, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: 0
                }}>{it.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0
                }}>{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NumberedSteps
        background="#fff"
        eyebrow="The process"
        title={content.process.title}
        sub={content.process.sub}
        steps={content.process.steps}
        variant="horizontal"
      />

      <MidCTA
        variant="navy"
        title={content.midCta.title}
        lede={content.midCta.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />

      <FAQ
        eyebrow="Statutory FAQ"
        title="What boards ask about this most"
        background="var(--edison-teal-pale)"
        items={content.faqs}
      />

      {/* Related, link back to parent + sibling sub-services */}
      {content.related && content.related.length > 0 && (
        <section className="sub-svc-related-section" style={{ background: "#fff", padding: "72px 48px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <SectionHeading
              eyebrow="Related"
              title="Continue exploring"
            />
            <div className="sub-svc-related-grid" style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: `repeat(${content.related.length}, 1fr)`,
              gap: 18
            }}>
              {content.related.map((r, i) => (
                <a key={i} href={r.href} style={{
                  textDecoration: "none", borderBottom: 0,
                  background: "#fff",
                  border: "1px solid var(--border-hairline)",
                  borderRadius: 12, padding: "24px 26px",
                  display: "flex", flexDirection: "column", gap: 10,
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
                  }}>{r.kind}</div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17,
                    lineHeight: 1.3, color: "var(--edison-navy)", margin: 0
                  }}>{r.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.55,
                    color: "var(--edison-text-body)", margin: 0
                  }}>{r.body}</p>
                  <span style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                    color: "var(--edison-teal-dark)",
                    display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4
                  }}>Read more <span aria-hidden="true">→</span></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA
        eyebrow="Get started"
        title={content.cta.title}
        body={content.cta.body}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT, Structural Integrity Reserve Study (SIRS)
   Statute-heaviest of the 4 sub-services. Good FAQ stress test.
   ============================================================ */
const SIRS_CONTENT = {
  serviceLabel: "Structural Integrity Reserve Study (SIRS)",
  crumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Condo Management", href: "/services/condo-management" },
    { label: "Structural Integrity Reserve Study" }
  ],
  parent: { label: "Condo Management", href: "/services/condo-management" },
  eyebrow: "Sub-Service · Condo Management",
  phone: "(407) 317-5252",
  hero: {
    title: "Structural Integrity Reserve Study (SIRS) coordination.",
    lede: "Florida condominium associations three stories or more must commission a Structural Integrity Reserve Study by their statutory deadline. Edison coordinates the engineer, manages the deliverable, and helps your board build a funding plan that actually meets the mandate.",
    image: "/assets/img-21.jpg",
    statute: "Florida Statute § 718.112(2)(g) · SB-4D"
  },
  spec: [
    { label: "Applies to", value: "Condos 3+ stories" },
    { label: "Statute", value: "Ch. 718 · SB-4D" },
    { label: "Cadence", value: "Every 10 years" },
    { label: "Components", value: "8 mandated" }
  ],
  context: {
    title: "What a SIRS actually is, and why it's different from a normal reserve study",
    paragraphs: [
      "A Structural Integrity Reserve Study is a Florida-specific reserve assessment created by Senate Bill 4D after the Champlain Towers collapse. It applies to condominium and cooperative buildings three stories or more, and it requires a licensed engineer or architect to inventory and price the remaining useful life of eight specific structural and life-safety components, roof, load-bearing walls, floor, foundation, fireproofing, plumbing, electrical, and waterproofing.",
      "A SIRS is not interchangeable with a traditional reserve study. The traditional reserve study covers a broader set of community assets (pools, paving, amenity replacements) but isn't sufficient on its own under FL Ch. 718. Most associations now need both: a SIRS for statutory compliance, and a comprehensive reserve study for full capital planning. Edison coordinates both, sequences them, and translates the engineering findings into a fundable plan your board can actually approve."
    ]
  },
  included: {
    title: "What Edison's SIRS coordination covers",
    sub: "Edison doesn't perform the engineering, that's the job of a licensed professional. We handle everything around it: engineer selection, scope review, document coordination, board presentation, and the post-study funding plan.",
    items: [
      { title: "Engineer Selection & Bid Review", body: "Edison sources 3+ qualified Florida-licensed structural engineers, reviews proposals, and helps the board select on scope and credentials, not just price." },
      { title: "Document & Access Coordination", body: "We pull historical inspection records, building permits, prior reserve studies, and capital expenditure history. The engineer gets a clean record package on day one." },
      { title: "Site Visit Logistics", body: "Resident notification, common-area access, vendor coordination, and roof/equipment access scheduling, handled so the engineer's site work doesn't drag." },
      { title: "Draft Report Review", body: "Edison's accounting team reviews the draft report against the association's actual capital history and flags discrepancies for the engineer before the final is issued." },
      { title: "Board Presentation Support", body: "We prepare a board-friendly summary of the SIRS findings, what's failing, what's funded, what's not, plus a recommended funding strategy your board can vote on." },
      { title: "Funding Plan Integration", body: "Edison's accounting department integrates SIRS components into the annual budget, reserve banking strategy, and 5-year capital plan. Statutory compliance is just step one." }
    ]
  },
  process: {
    title: "How Edison runs a SIRS engagement",
    sub: "From engineer selection through board adoption, usually 90–150 days end to end.",
    steps: [
      { title: "Discovery & Scoping", body: "Edison reviews your governing documents, building age, last reserve study, and SB-4D filing status. We confirm which statutory deadline applies and document the scope." },
      { title: "Engineer Sourcing", body: "Three competing bids from FL-licensed structural engineers. Board approves the engagement; Edison handles contracting and access setup." },
      { title: "Site Work & Draft Review", body: "Engineer performs site work. Edison's accounting team reviews the draft report and coordinates any board questions or scope revisions before the final report is issued." },
      { title: "Board Adoption & Funding Plan", body: "Edison presents findings to the board with a recommended reserve funding plan. Plan integrated into the next annual budget and 5-year capital strategy." }
    ]
  },
  midCta: {
    title: "Behind on your SIRS? Not sure if you're behind?",
    lede: "Edison's first conversation is free. We'll review your association's status against Ch. 718 / SB-4D requirements and tell you exactly where you stand."
  },
  faqs: [
    { q: "Does our community need a SIRS?", a: "If your association governs a condominium or cooperative building three stories or more (counting habitable stories above grade), yes. The requirement comes from FL Statute § 718.112(2)(g) as amended by SB-4D in 2022. Buildings under three stories aren't subject to the SIRS requirement but typically still need a traditional reserve study." },
    { q: "When is the SIRS due?", a: "The original SB-4D deadline was December 31, 2024 for existing buildings. Associations that missed the deadline are not absolved of the requirement, they're behind on a statutory obligation that the board has a fiduciary duty to remedy. Newly-built buildings have specific milestone-based deadlines tied to occupancy date. Edison's intake reviews your specific situation." },
    { q: "What's the difference between a SIRS and a milestone inspection?", a: "The milestone inspection (Phase 1 visual, Phase 2 if deficiencies are found) is a structural condition assessment performed by a licensed engineer. The SIRS is a financial reserve study scoped specifically to the structural components identified by the milestone inspection and statute. Many associations need both, often sequenced, milestone first, SIRS second, so the reserve study reflects actual condition findings." },
    { q: "What are the 8 components a SIRS must cover?", a: "Roof; load-bearing walls or other primary structural members; floor; foundation; fireproofing and fire protection systems; plumbing; electrical systems; and waterproofing and exterior painting (where related to structure). Any other items the engineer determines have a deferred maintenance expense or replacement cost over $10,000 that could affect structural integrity may also be included." },
    { q: "Can our existing reserve study count?", a: "Usually no. A traditional reserve study isn't typically scoped to the SIRS-required components and doesn't follow the same engineering standard. Some studies completed after SB-4D's enactment may be SIRS-compliant if they were specifically scoped for it, Edison can review what you have and tell you whether you need a new engagement or just an addendum." },
    { q: "How much does a SIRS cost?", a: "Fees vary widely by building size, age, and complexity, typical range is $8,000–$25,000 for the engineer's work. Edison's coordination is included in the management agreement; there's no separate fee for our role. We'll help you assess whether competing bids reflect appropriate scope for your specific building." },
    { q: "Does the SIRS require us to fully fund our reserves?", a: "The SIRS quantifies the funding need; FL Ch. 718 (as amended) requires associations to fund SIRS components on a pooled-or-component basis once the study is in place. Boards cannot waive the funding requirement for SIRS components the way they could for traditional reserves in some prior years. Edison's accounting team builds the funding plan that meets the mandate without triggering a punitive special assessment if it's avoidable." },
    { q: "What happens if we don't comply?", a: "Non-compliance creates personal liability exposure for board members, can trigger statutory penalties, and is increasingly being scrutinized by buyer-side due diligence, meaning unit sales can stall when a SIRS is missing or outdated. The compliance risk and the unit-value risk are usually what motivate boards to act, regardless of the statutory pressure." },
    { q: "How does Edison handle this differently?", a: "We treat the SIRS as a multi-year capital planning exercise, not a one-time filing. Engineer selection, document prep, board education, funding plan integration, and ongoing reserve banking strategy, all coordinated by the same accounting team responsible for your monthly financials. Statutory compliance is the floor; capital readiness is the goal." }
  ],
  related: [
    { kind: "Sibling Sub-Service", title: "Milestone Inspection Coordination", body: "The structural condition assessment that often precedes the SIRS. Required for condos 30+ years old (25+ in coastal counties).", href: "/services/condo-management/milestone-inspections" },
    { kind: "Parent Pillar", title: "Condo Management", body: "Full-service management for Florida condominium associations under Ch. 718.", href: "/services/condo-management" },
    { kind: "Educational", title: "HOA Reserve Study Florida: What Boards Need to Know", body: "How reserve studies work, what they cost, and how Edison coordinates the process.", href: "/blog/hoa-reserve-study-guide" }
  ],
  cta: {
    title: "SIRS compliance is a project, not a panic.",
    body: "Edison's first conversation is free and clarifying. Tell us what you know about your building's status, we'll tell you what's required, what it costs, and how to sequence it without disrupting your board's other priorities."
  }
};

export { SubServicePage, SIRS_CONTENT };
