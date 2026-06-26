import React from 'react';
import { BodyProse, Breadcrumb, BulbMark, DetailLinkCards, FAQ, FeatureGrid, FinalCTA, InteriorButton, MidCTA, SectionHeading, ServiceArea } from '../components/interior-components';
import { AntiPatterns, BulletsWithImage, CrossPillarCard, NumberedSteps, PullQuote, StatsBand, SubServiceNav } from '../components/template-sections';

/* ============================================================
   MAIN PILLAR PAGE TEMPLATE, VARIANT A (Structured · Spec-Sheet)
   Per sitemap v3.1: Used for /services/hoa-management/ and
   /services/condo-management/. Includes pillar-required blocks:
   sub-service nav, anti-patterns, service area, cross-pillar ref.
   ============================================================ */
function PillarPageA({ content }) {
  return (
    <main data-screen-label="Service, Variant A">
      <Breadcrumb trail={content.crumb}/>

      {/* Split hero with image (from Variant B) */}
      <section className="svc-a-hero" style={{ background: "#fff", padding: "72px 48px 64px" }}>
        <div className="svc-a-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
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
              fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "0 0 22px"
            }}>{content.hero.title}</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.55,
              color: "var(--edison-text-body)", margin: "0 0 28px"
            }}>{content.hero.lede}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/request-a-proposal">Schedule a Consultation</InteriorButton>
            </div>
          </div>
          <div className="svc-a-hero-img" style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: `url(${content.hero.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      <StatsBand
        background="var(--edison-teal-pale)"
        stats={content.stats}
      />

      {/* What's included, detail cards w/ icon */}
      <section style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            eyebrow="What's included"
            title={content.included.title}
            sub={content.included.sub}
          />
          <div className="svc-a-benefits-grid" style={{
            marginTop: 48,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18
          }}>
            {content.included.items.map((it, i) => (
              <article key={i} style={{
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "28px 26px",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column", gap: 14
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "var(--edison-teal-pale)",
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>
                  <BulbMark size={22}/>
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 18, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: 0
                }}>{it.title}</h3>
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0
                }}>{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubServiceNav
        background="var(--bg-3, #F5F7FA)"
        eyebrow="Go deeper"
        title={content.subServices.title}
        sub={content.subServices.sub}
        items={content.subServices.items}
        itemLabel={content.subServices.itemLabel}
      />

      <FeatureGrid
        background="var(--edison-teal-pale)"
        eyebrow="Why Edison"
        title={content.whyEdison.title}
        sub={content.whyEdison.sub}
        columns={3}
        items={content.whyEdison.items}
      />

      <AntiPatterns
        items={content.antiPatterns}
      />

      <MidCTA
        variant="navy"
        title={content.midCta.title}
        lede={content.midCta.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />

      <NumberedSteps
        background="#fff"
        eyebrow="The process"
        title={content.process.title}
        sub={content.process.sub}
        steps={content.process.steps}
        variant="horizontal"
      />

      <PullQuote
        background="var(--edison-teal-pale)"
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
      />

      <ServiceArea
        eyebrow="Service Area"
        title={`Communities we serve across Central Florida`}
        body={content.serviceArea.body}
        cities={content.serviceArea.cityLinks.map(c => c.label)}
        mapImg="/assets/img-neighborhood-aerial.webp"
      />

      <CrossPillarCard
        eyebrow={content.crossPillar.eyebrow}
        title={content.crossPillar.title}
        body={content.crossPillar.body}
        ctaLabel={content.crossPillar.ctaLabel}
        href={content.crossPillar.href}
      />

      <FAQ
        eyebrow="FAQ"
        title="Questions boards ask most"
        background="#fff"
        items={content.faqs}
      />

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
   MAIN PILLAR PAGE TEMPLATE, VARIANT B (Editorial · Image-Forward)
   Split hero with image. Long-form prose intro. Image-paired
   "what's included" bullets. Process. Quote. FAQ. CTA strip.
   ============================================================ */
function PillarPageB({ content }) {
  return (
    <main data-screen-label="Service, Variant B">
      <Breadcrumb trail={content.crumb}/>

      {/* Split hero */}
      <section className="svc-b-hero" style={{ background: "#fff", padding: "72px 48px 64px" }}>
        <div className="svc-b-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
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
              fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "0 0 22px"
            }}>{content.hero.title}</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.55,
              color: "var(--edison-text-body)", margin: "0 0 28px"
            }}>{content.hero.lede}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/request-a-proposal">Schedule a Consultation</InteriorButton>
            </div>
          </div>
          <div className="svc-b-hero-img" style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: `url(${content.hero.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      {/* Long-form intro prose */}
      <section style={{ background: "var(--edison-teal-pale)", padding: "80px 48px" }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <SectionHeading eyebrow="Context" title={content.context.title}/>
          <div style={{
            marginTop: 28,
            display: "flex", flexDirection: "column", gap: 18,
            maxWidth: 760
          }}>
            {content.context.paragraphs.map((p, i) => (
              <p key={i} style={{
                fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7,
                color: "var(--edison-text-body)", margin: 0
              }}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bullets w image, paired */}
      <BulletsWithImage
        eyebrow="What's included"
        title={content.included.title}
        image={content.included.image}
        bullets={content.included.bullets}
      />

      <SubServiceNav
        background="var(--bg-3, #F5F7FA)"
        eyebrow="Go deeper"
        title={content.subServices.title}
        sub={content.subServices.sub}
        items={content.subServices.items}
        itemLabel={content.subServices.itemLabel}
      />

      <NumberedSteps
        background="#fff"
        eyebrow="The process"
        title={content.process.title}
        sub={content.process.sub}
        steps={content.process.steps}
        variant="vertical"
      />

      {/* Why Edison, large cards, fewer items */}
      <section style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Why Edison"
            title={content.whyEdison.title}
            sub={content.whyEdison.sub}
          />
          <div className="svc-a-included-grid" style={{
            marginTop: 40,
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18
          }}>
            {content.whyEdison.items.slice(0, 4).map((it, i) => (
              <article key={i} style={{
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "28px 30px",
                display: "flex", gap: 20
              }}>
                <div style={{
                  flexShrink: 0,
                  width: 44, height: 44, borderRadius: 10,
                  background: "var(--edison-teal-pale)",
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>
                  <BulbMark size={22}/>
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 18, lineHeight: 1.3,
                    color: "var(--edison-navy)", margin: "0 0 8px"
                  }}>{it.title}</h3>
                  <p style={{
                    fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                    color: "var(--edison-text-body)", margin: 0
                  }}>{it.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AntiPatterns
        background="var(--edison-navy)"
        items={content.antiPatterns}
      />

      <PullQuote
        background="var(--edison-teal-pale)"
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
      />

      <ServiceArea
        eyebrow="Service Area"
        title={`Communities we serve across Central Florida`}
        body={content.serviceArea.body}
        cities={content.serviceArea.cityLinks.map(c => c.label)}
        mapImg="/assets/img-neighborhood-aerial.webp"
      />

      <CrossPillarCard
        eyebrow={content.crossPillar.eyebrow}
        title={content.crossPillar.title}
        body={content.crossPillar.body}
        ctaLabel={content.crossPillar.ctaLabel}
        href={content.crossPillar.href}
      />

      <FAQ
        eyebrow="FAQ"
        title="Questions boards ask most"
        background="#fff"
        items={content.faqs}
      />

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
   SAMPLE CONTENT, HOA Management (Main Pillar)
   ============================================================ */
const HOA_MGMT_CONTENT = {
  crumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "HOA Management" }
  ],
  eyebrow: "HOA Management Services",
  phone: "(407) 317-5252",
  hero: {
    title: "HOA management built around the board, not the company growth chart.",
    lede: "Full-service management for single-family and townhome HOAs across Central Florida. Dedicated managers carrying limited portfolios, well below the industry average. Back-office departments handling what isn't community-facing. Boards stop starting over.",
    image: "/assets/img-community-aerial.webp"
  },
  stats: [
    { value: "Limited", caption: "Portfolios sized to your community, well below the industry standard" },
    { value: "1 day", caption: "Same-day board response. 24-hour homeowner. Non-negotiable." },
    { value: "PCAM", caption: "Leadership credential plus 2025 CAI Chapter President" },
    { value: "4.9★", caption: "Google rating, highest in the Central Florida market" }
  ],
  context: {
    title: "Why most HOA management leaves boards burned out",
    paragraphs: [
      "Most management companies size their portfolios for company growth, 15 to 20 communities per manager, sometimes more. The math works on the company's spreadsheet. It doesn't work in your community. Your manager is reactive instead of proactive. Calls go to voicemail. Vendor coordination slips. The board ends up doing the management company's job.",
      "Edison was built deliberately differently. Portfolios are sized for the manager's actual capacity, 8 to 10 communities. Back-office departments handle accounting, enforcement, collections, and ARC review so the manager isn't wearing six hats. Leadership stays close: Tracy Durham, PCAM and 2025 CAI Chapter President, personally onboards every new association. The result is a manager who knows your community by name and a board that gets to lead instead of administer."
    ]
  },
  included: {
    title: "Full-service HOA management with the depth boards actually need",
    sub: "Every Edison HOA management agreement includes the operational, financial, and advisory work that keeps Florida HOAs compliant, well-funded, and well-led. No surprise upcharges, no \"a la carte\" workarounds for what should be standard.",
    image: "/assets/img-inspector.webp",
    items: [
      { title: "Dedicated Association Manager", body: "Carries a deliberately limited portfolio. Visits the property monthly. Attends every board meeting. Knows your governing documents and your homeowners by name." },
      { title: "Monthly Property Inspections", body: "Documented walks of common areas, capital assets, and vendor work. Reported back to the board with photos and recommendations, not stale generic checklists." },
      { title: "Vendor Sourcing & Management", body: "Three competing bids on capital projects above board-set thresholds. Insurance certificates on file. Updated contracts. No vendor relationships boards inherit blind." },
      { title: "Action Item List", body: "Edison's live project tracker. Every active community item, its owner, status, target date, visible to the board in real time. Replaces stale monthly manager reports." },
      { title: "ARC & Compliance Coordination", body: "Architectural Review Committee support, governing document interpretation, and FL Chapter 720 compliance, handled by Edison's dedicated departments." },
      { title: "Reserve Study Guidance", body: "Coordination with reserve study engineers, funding plan support, and capital project sequencing. Not just an annual snapshot, an active capital management partner." }
    ],
    bullets: [
      "Dedicated manager carrying only a limited portfolio, well below the industry average",
      "Monthly property inspections with photo documentation",
      "Vendor sourcing requiring 3+ competing bids on capital projects",
      "The Action Item List, live project tracking that replaces stale manager reports",
      "Dedicated departments for enforcement, accounting, collections, and ARC",
      "Monthly board reporting, annual budget support, and reserve coordination"
    ]
  },
  whyEdison: {
    title: "What sets Edison apart, structurally",
    sub: "Boards switch to Edison because the differences aren't slogans, they're how the company is built.",
    items: [
      { title: "Industry-Low Manager Turnover", body: "Most firms see 30–40% annual manager turnover. Edison's is a fraction of that. The manager who learns your community in year one is still there in year three." },
      { title: "Dedicated Back-Office Departments", body: "Enforcement, accounting, collections, and ARC are separate departments, not your manager's overtime work. Boards get specialist quality on every workstream." },
      { title: "Manageable Portfolio Sizes", body: "a limited number of communities per manager, well below the industry average. Yours isn't lost in a portfolio of hundreds." },
      { title: "Leadership That Stays Involved", body: "Tracy Durham, PCAM, personally onboards every new association and remains accessible to every board, not just the largest." },
      { title: "Modern Tools, Human Touch", body: "CINC Systems for portals and financials. WATTSON AI for 24/7 resident questions. The Action Item List for live project tracking. A real person still answers the phone." },
      { title: "Education-First Philosophy", body: "Informed boards make better decisions. Edison invests in teaching board members the statutes, the financial fundamentals, and the governance frameworks, not just executing tasks." }
    ]
  },
  process: {
    title: "How working with Edison actually works",
    sub: "From first conversation to operating partner, a defined timeline, not an open-ended onboarding.",
    steps: [
      { title: "Discovery & Proposal", body: "A senior Edison manager meets with your board to understand governing documents, pain points, and capital pipeline. We deliver a written, fixed-scope proposal within 5–7 days." },
      { title: "Transition Experience", body: "If you're switching from another company, the 60–90 day Edison Transition Experience runs in parallel, records digitization, vendor recredentialing, Meet Your Management event." },
      { title: "Day 1 & First 90 Days", body: "Your dedicated manager is on the ground. The Action Item List is live. Monthly inspections start. Accounting is current. The COO supervises the first 90 days." },
      { title: "Ongoing Partnership", body: "Regular board meetings, monthly inspections, transparent financials, proactive compliance. Annual agreement renewal, you walk free with your records anytime." }
    ]
  },
  midCta: {
    title: "Tired of doing the management company's job?",
    lede: "Edison's model is built so the board doesn't have to be reactive. Talk to us about your community."
  },
  quote: {
    quote: "We interviewed four companies. Edison was the only one whose principal showed up to the interview personally. A year in, that wasn't just sales, that's how they actually run.",
    attribution: "Angela P.",
    role: "Board President",
    community: "HOA · 228 units · Dr. Phillips, Orlando"
  },
  faqs: [
    { q: "How many communities will our manager have?", a: "Edison managers carry a limited number of communities, well below the industry average. Some managers carry fewer when they're early in their tenure or onboarding a particularly complex community. We've structured portfolios this way deliberately: managers can actually know your community, not just file your community away." },
    { q: "How quickly will calls get returned?", a: "Same-day for board members. 24-hour for homeowners. Non-negotiable, and a real person answers when you call Edison's office between 9am and 5pm Monday through Friday. The standard isn't \"we'll get back to you\", it's that we already did." },
    { q: "Do you handle our financials and accounting too?", a: "Yes. Edison's accounting department is dedicated and CPA-supported. Monthly statements with invoice backup, reserve banking strategy, audit prep, and tax filing, handled by an accounting specialist, not your manager's spare time. See our HOA Accounting page for detail." },
    { q: "What technology do you use?", a: "CINC Systems for financials and homeowner portals. The Action Item List for live project tracking. WATTSON AI for 24/7 resident questions. Plaud for meeting minute automation. All included, no per-resident technology fees." },
    { q: "How long are your management agreements?", a: "12-month terms with clear termination provisions. We don't believe in trapping boards, if Edison isn't a fit at the end of year one, you walk free with your records, your vendor list, and your processes intact." }
  ],
  cta: {
    title: "Ready for HOA management that scales with your community, not the portfolio.",
    body: "Tell us about your association. We'll deliver a written proposal sized for your governing documents, capital plan, and homeowner count, within one business day, no high-pressure follow-ups."
  }
};

/* ---------- Pillar-required content additions ---------- */
HOA_MGMT_CONTENT.subServices = {
  title: "Sub-services under HOA Management",
  sub: "Two property-type sub-services live one URL level below this pillar. They're reachable from here, not from the top nav, because most boards land on the pillar page first and route from there.",
  items: [
    {
      title: "Single-Family HOA Management",
      body: "Tailored management for single-family neighborhood HOAs across Central Florida, Ch. 720 compliance, ARC support, common-area planning.",
      href: "/services/hoa-management/single-family"
    },
    {
      title: "Townhome Association Management",
      body: "Townhome-specific challenges handled, shared roofs, common insurance, party-wall maintenance, and the homeowner expectations that come with attached housing.",
      href: "/services/hoa-management/townhome"
    }
  ]
};

HOA_MGMT_CONTENT.antiPatterns = [
  { title: "Optional coupon books", body: "Offered only if your board wants them — free, modern courtesy email reminders are the default. Respectful of homeowner money." },
  { title: "No volume-chasing", body: "Portfolio growth is opt-in for managers. Quality over headcount, every time." },
  { title: "No manager reports", body: "Replaced by the live Action Item List. Boards see project status in real time." },
  { title: "No punitive fine culture", body: "Correction first. We talk boards out of fine-first enforcement, it costs trust, not just dollars." },
  { title: "No overloaded managers", body: "Sweet spot is a limited portfolio. Well below the industry standard. No exceptions for revenue." }
];

HOA_MGMT_CONTENT.serviceArea = {
  body: "Edison manages HOAs and condominium associations across Orange, Seminole, Osceola, Lake, and Brevard counties. Each city below has a dedicated HOA Management page with local context, neighborhoods, and case studies.",
  cityLinks: [
    { label: "Orlando",            href: "/services/hoa-management/orlando" },
    { label: "Winter Garden",      href: "/services/hoa-management/winter-garden" },
    { label: "Kissimmee",          href: "/services/hoa-management/kissimmee" },
    { label: "Clermont",           href: "/services/hoa-management/clermont" },
    { label: "Lake Mary",          href: "/services/hoa-management/lake-mary" },
    { label: "Altamonte Springs",  href: "/services/hoa-management/altamonte-springs" },
    { label: "Oviedo",             href: "/services/hoa-management/oviedo" },
    { label: "Brevard County",     href: "/services/hoa-management/brevard-county" }
  ]
};

HOA_MGMT_CONTENT.crossPillar = {
  eyebrow: "Different community type?",
  title: "Manage a condominium association?",
  body: "Florida governs condos under Ch. 718, different statutes, different reserve study requirements, milestone inspection compliance under SB-4D. Edison's Condo Management pillar covers that side of the practice.",
  ctaLabel: "See Condo Management",
  href: "/services/condo-management"
};

export { PillarPageA, PillarPageB, HOA_MGMT_CONTENT };
