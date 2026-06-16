import React from 'react';
import { Breadcrumb, BulbMark, FAQ, FeatureGrid, FinalCTA, InteriorButton, MidCTA, SectionHeading, DetailLinkCards } from '../components/interior-components';
import { NumberedSteps, PullQuote, StatsBand } from '../components/template-sections';

/* ============================================================
   SERVICE PAGE TEMPLATE
   Derived from the locked Pillar A pattern. Used for sibling
   service pages that apply across HOA + Condo:
     /services/hoa-accounting/
     /services/covenant-enforcement/
     /services/hoa-collections/
   1,500–2,000 words. Tighter than the pillar: no sub-service nav
   (unless content provides it), no cross-pillar card, no
   service-area block. Hero notes the dual applicability.
   ============================================================ */
function ServicePage({ content }) {
  return (
    <main data-screen-label={`Service, ${content.serviceLabel}`}>
      <Breadcrumb trail={content.crumb}/>

      {/* Split hero, same pattern as Pillar */}
      <section className="svc-page-hero" style={{ background: "#fff", padding: "72px 48px 64px" }}>
        <div className="svc-page-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
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
              color: "var(--edison-text-body)", margin: "0 0 14px"
            }}>{content.hero.lede}</p>
            {content.hero.applies && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                marginBottom: 24,
                padding: "8px 14px",
                background: "var(--edison-teal-pale)",
                borderRadius: 999,
                fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5,
                color: "var(--edison-teal-dark)"
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: 999, background: "var(--edison-teal)"
                }}/>
                Applies to: {content.hero.applies}
              </div>
            )}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/contact">Schedule a Consultation</InteriorButton>
            </div>
          </div>
          <div className="svc-page-hero-img" style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: `url(${content.hero.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      <StatsBand background="var(--edison-teal-pale)" stats={content.stats}/>

      {/* What's included, 3-up cards with icon — linked variant if item has href */}
      <section style={{ background: "#fff", padding: "88px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            eyebrow="What's included"
            title={content.included.title}
            sub={content.included.sub}
          />
          <div className="svc-page-sub-grid" style={{
            marginTop: 48,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18
          }}>
            {content.included.items.map((it, i) => {
              const sharedCardStyle = {
                background: "#fff",
                border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "28px 26px",
                boxShadow: "var(--shadow-xs)",
                display: "flex", flexDirection: "column", gap: 14
              };
              const icon = (
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "var(--edison-teal-pale)",
                  color: "var(--edison-teal-dark)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center"
                }}>
                  <BulbMark size={22}/>
                </div>
              );
              const heading = (
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: 18, lineHeight: 1.3,
                  color: "var(--edison-navy)", margin: 0
                }}>{it.title}</h3>
              );
              const body = (
                <p style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                  color: "var(--edison-text-body)", margin: 0, flex: 1
                }}>{it.body}</p>
              );
              if (it.href) {
                return (
                  <a key={i} href={it.href} className="svc-included-link-card" style={{ textDecoration: "none", ...sharedCardStyle }}>
                    {icon}{heading}{body}
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                      color: "var(--edison-teal-dark)",
                      display: "inline-flex", alignItems: "center", gap: 6,
                      marginTop: 4
                    }}>
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </a>
                );
              }
              return (
                <article key={i} style={sharedCardStyle}>
                  {icon}{heading}{body}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FeatureGrid
        background="var(--edison-teal-pale)"
        eyebrow="Why Edison"
        title={content.whyEdison.title}
        sub={content.whyEdison.sub}
        columns={3}
        items={content.whyEdison.items}
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
   SAMPLE CONTENT, HOA Accounting & Financial Management
   ============================================================ */
const HOA_ACCOUNTING_CONTENT = {
  serviceLabel: "HOA Accounting",
  crumb: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "HOA Accounting" }
  ],
  eyebrow: "HOA Accounting & Financial Management",
  phone: "(407) 317-5252",
  hero: {
    title: "HOA accounting handled by a dedicated specialist, not your manager's spare time.",
    lede: "Florida community associations carry compliance obligations, transparency requirements, and reserve funding responsibilities that a generalist bookkeeper isn't built to handle. Edison's accounting department keeps your books audit-ready year-round.",
    image: "/assets/img-accounting.jpg",
    applies: "HOA + Condo Associations"
  },
  stats: [
    { value: "15th", caption: "Monthly statements delivered by the 15th, balance sheet, P&L, budget-to-actual." },
    { value: "Accrual", caption: "Audit-ready accrual-basis books. Not cash-basis approximations." },
    { value: "CPA-Led", caption: "Director of Accounting oversees every association's financials." }
  ],
  included: {
    title: "Full-service HOA accounting for Florida communities",
    sub: "Every Edison management agreement includes the full financial operations workstream, handled by a dedicated specialist supported by Edison's CPA-led Director of Accounting.",
    items: [
      { title: "Monthly Financial Reporting", body: "Balance sheet, income statement, and budget-to-actual comparisons by the 15th of every month. Invoice backup attached, audit-ready format." },
      { title: "Budget Preparation & Planning", body: "Annual budgets built from real operating data, reserve study recommendations, and capital pipeline, not last year's plus inflation." },
      { title: "Reserve Banking & Strategy", body: "Reserve funds tracked against the most recent study. Banking optimized for yield without sacrificing FDIC coverage limits." },
      { title: "Accounts Payable & Vendor Pay", body: "W-9s on file, invoice documentation required, rapid vendor pay. Year-end 1099 prep handled in-house." },
      { title: "Collections & Delinquency", body: "Coordinated with Edison's in-house collections department. Clean ledger. Cash flow protected without escalating to attorneys prematurely." },
      { title: "Audit & Tax Preparation", body: "Year-end binder ready on day one for your CPA. HOA tax filings (Form 1120-H or 1120) coordinated and filed on time." }
    ]
  },
  whyEdison: {
    title: "Why boards switch to Edison's accounting model",
    sub: "Most management companies treat accounting as overhead. Edison built it as a dedicated department with its own director, because it's the work that protects board members from personal liability.",
    items: [
      { title: "Dedicated Accounting Specialist", body: "Not your manager wearing two hats. A specialist who knows accrual accounting, FL Ch. 720/718 requirements, and your association's specific history." },
      { title: "CPA-Led Director of Accounting", body: "Every association's financials are overseen by Edison's Director of Accounting, a credentialed CPA, not just a senior bookkeeper." },
      { title: "Audit-Ready Year-Round", body: "Books are kept audit-ready every month, not crammed into shape in April. Most Edison audits finish 20–40% faster than the industry norm." },
      { title: "Reserve Funding Discipline", body: "Reserve banking strategy reviewed annually against current study. We catch underfunding before it requires a special assessment." },
      { title: "Live Financial Access", body: "CINC Systems dashboards give the treasurer real-time balances, AR aging, and budget pacing, not a PDF mailed monthly." },
      { title: "Transparent Vendor Payment", body: "Every payment documented with invoice and W-9. No mystery line items. No surprise reconciliations." }
    ]
  },
  midCta: {
    title: "Worried about your association's financial picture?",
    lede: "A second-opinion review of your current books is the lowest-friction way to find out where you actually stand. We'll walk through it with you."
  },
  process: {
    title: "How Edison's accounting works in practice",
    sub: "Defined cadence, predictable deliverables, year-round audit readiness.",
    steps: [
      { title: "Day 1, Onboarding", body: "Your accounting specialist inherits records, reconciles opening balances, builds the audit-ready ledger, and identifies any clean-up work needed from prior management." },
      { title: "Month 1–12, Monthly Reporting", body: "By the 15th of every month: balance sheet, income statement, budget-to-actual, AR aging, and a brief narrative. Invoice documentation attached. Always." },
      { title: "Jul–Nov, Budget Season", body: "July–November: draft budget built from operating data and reserve study recommendations, presented to the board with scenarios, not a single take-it-or-leave-it number." },
      { title: "Year-End, Audit & Tax", body: "Year-end binder delivered to the auditor by mid-January. Tax filings coordinated. Audit closed out in weeks, not quarters." }
    ]
  },
  quote: {
    quote: "Our previous manager couldn't tell us what was in the reserve fund without a week of digging. Edison sends monthly statements with invoice backup, we know what we're looking at, and so does our auditor.",
    attribution: "James R.",
    role: "Treasurer",
    community: "Condo Association · 184 units"
  },
  faqs: [
    { q: "Does this apply to both HOAs and condo associations?", a: "Yes. Edison's accounting department handles HOAs under FL Chapter 720 and condominium associations under FL Chapter 718. The reporting cadence, audit prep, and reserve discipline are identical; the regulatory specifics differ by community type and we calibrate to each." },
    { q: "How quickly will we get monthly statements?", a: "By the 15th of every month. Balance sheet, income statement, budget-to-actual, AR aging, and a brief narrative on any unusual activity. Invoice documentation is always attached. Real-time financial data is also available 24/7 through CINC dashboards." },
    { q: "What if our books are a mess right now?", a: "That's common, especially for self-managed communities or boards switching from a less rigorous firm. Edison's onboarding includes a clean-up phase: opening balance reconciliation, vendor recredentialing, and audit-ready ledger reconstruction. Most cleanups are complete within the first 60 days." },
    { q: "Do you handle the audit directly?", a: "We coordinate with your independent CPA, Florida statute requires external audits be performed by independent auditors, not the management company. Edison prepares the year-end binder, sits with the auditor through fieldwork, and handles every follow-up question. Most Edison audits close 20–40% faster than the industry norm because the books are already audit-ready." },
    { q: "What about HOA tax filings?", a: "Edison coordinates Form 1120-H or 1120 filings for each association annually. We work with your CPA on the optimal filing choice based on revenue mix and prior-year filings. Deadlines are tracked centrally; we don't let extensions become a recurring pattern." },
    { q: "Can we keep our current CPA / auditor?", a: "Yes. Most boards do. Edison's accounting department works with whichever independent CPA your association has historically used, we don't bundle audit work, and we don't push boards toward a preferred provider." }
  ],
  cta: {
    title: "Ready for accounting your board can actually defend?",
    body: "Tell us about your association, current size, current state of the books, what's worrying you. We'll respond with a written proposal sized for your community, within one business day."
  }
};

export { ServicePage, HOA_ACCOUNTING_CONTENT };
