import React from 'react';
import { Breadcrumb, FAQ, FinalCTA, SectionHeading } from '../components/interior-components';

/* ============================================================
   /faq/, Frequently Asked Questions
   Categorized accordion mirroring the questions boards ask
   Edison most. Each category surfaces the page-level FAQs
   organized into Switching, Services, Pricing, Transition,
   Technology, and Edison Education.
   ============================================================ */
function FAQPage({ content }) {
  return (
    <main data-screen-label="FAQ">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "FAQ" }
      ]}/>

      <section className="faq-hero" style={{
        background: "linear-gradient(180deg, #fff 0%, var(--edison-teal-pale) 100%)",
        padding: "88px 48px 64px"
      }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>FAQ</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 20px"
          }}>{content.title}</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: 0
          }}>{content.intro}</p>
        </div>
      </section>

      {content.sections.map((s, i) => (
        <FAQ key={i}
             eyebrow={s.eyebrow}
             title={s.title}
             sub={s.sub}
             background={i % 2 === 0 ? "#fff" : "var(--bg-3, #F5F7FA)"}
             items={s.items}/>
      ))}

      <FinalCTA
        eyebrow="Still have questions?"
        title="When you call Edison, a real person answers."
        body="If your question isn't here, ask us directly. Same-day reply for board members; 24-hour for homeowners."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Contact Edison", href: "/contact" }}
      />
    </main>
  );
}

const FAQ_CONTENT = {
  title: "Questions boards and homeowners ask us most.",
  intro: "We update this page whenever a question shows up enough to deserve a permanent answer. Categories below mirror the conversations Edison actually has on the phone every week.",
  sections: [
    {
      eyebrow: "Switching", title: "Changing management companies",
      items: [
        { q: "How long does switching to Edison take?", a: "Most transitions are complete within 60–90 days from contract signing. The first 30 days focus on records and vendor migration; the second 30 on the Meet Your Management event and homeowner communication; the final stretch on cutover and the live handoff to your dedicated manager." },
        { q: "What if we're mid-contract with our current company?", a: "Most management agreements include a 30–90 day termination provision. Edison's transition team reviews your current contract to identify the right window and coordinates timing so there's no gap in service." },
        { q: "Will homeowners be confused during the change?", a: "Not when it's handled right. Edison runs a Meet Your Management event before the official cutover, your homeowners meet the manager, accounting specialist, and back-office team in person. By cutover day, everyone knows who to call." }
      ]
    },
    {
      eyebrow: "Services", title: "What Edison actually does",
      items: [
        { q: "Do you handle HOAs and condos differently?", a: "Yes. Florida governs them under different statutes, Chapter 720 for HOAs, Chapter 718 for condos. Edison runs both as distinct practices with statute-aware managers, accounting specialists, and compliance tracking." },
        { q: "Is accounting included or extra?", a: "Included. Every Edison management agreement covers monthly statements, reserve banking, audit prep, and tax filing, handled by a dedicated specialist supported by our CPA-led Director of Accounting." },
        { q: "How is covenant enforcement handled?", a: "By a dedicated enforcement department, not your manager wearing another hat. Address-not-name inspections, correction-first protocols, quarterly board reporting." },
        { q: "Do you provide collections work?", a: "Yes, in-house. Edison's collections department runs the delinquency workflow from courtesy reminders through intent-to-lien, coordinating with your association's attorney only when legal escalation is genuinely required." }
      ]
    },
    {
      eyebrow: "Pricing", title: "What it costs",
      items: [
        { q: "How are management fees structured?", a: "Monthly fee based on community size, service scope, and operational complexity. No coupon books. No surprise upcharges for what should be standard. Edison's proposals are written, fixed-scope, and delivered within 5–7 days of the initial conversation." },
        { q: "Is the Edison Transition Experience an extra fee?", a: "No. Transition coordination, records digitization, the Meet Your Management event, and 90 days of COO supervision are all included in the standard management agreement." },
        { q: "Are there hidden costs?", a: "No. Edison doesn't bill separately for ARC reviews, enforcement notices, or homeowner portal access. Capital project bid-coordination is included; project execution costs are paid to vendors directly per board approval." }
      ]
    },
    {
      eyebrow: "Transition", title: "The first 90 days",
      items: [
        { q: "Who runs the transition, sales or my manager?", a: "Neither. The Edison Transition Experience is run by a dedicated transition team with active COO supervision. Your manager joins for relationship continuity; the team handles the operational work." },
        { q: "What records get migrated?", a: "Governing documents, financials, vendor contracts, insurance certificates, ARC history, enforcement records, and homeowner communications. Edison digitizes physical records in parallel rather than after the fact." },
        { q: "What happens to our existing vendors?", a: "Edison reviews each vendor relationship, confirms insurance and W-9 documentation, and identifies any that should be re-bid. The board approves any changes." }
      ]
    },
    {
      eyebrow: "Technology", title: "Tools and portals",
      items: [
        { q: "What software does Edison use?", a: "CINC Systems for financials, board dashboards, and homeowner portals. The Action Item List for live project tracking. WATTSON AI for 24/7 resident questions. Plaud AI for board meeting minute drafting. All included, no per-resident or per-feature fees." },
        { q: "Is there a homeowner portal?", a: "Yes. CINC Connect gives homeowners 24/7 access to account information, payment, documents, and maintenance requests. Architects and vendors get their own scoped access." },
        { q: "What is WATTSON?", a: "Edison's branded AI assistant, named for watts and the light bulb. Launching 2026, WATTSON will answer resident questions 24/7 inside the portal, grounded in your governing documents and management calendar. A real person still answers when you call." }
      ]
    },
    {
      eyebrow: "Edison Education", title: "Board education program",
      items: [
        { q: "What is Edison Education?", a: "Our free library of articles, guides, and FL compliance updates written specifically for HOA and condo boards. Available at /edison-education/, no login, no email gate." },
        { q: "Do you offer board certification training?", a: "Edison reimburses our managers for industry designations and partners with Strength in Partnerships (SIP) to deliver free education content to boards. FL statutory board certification is supported and tracked centrally for client communities." },
        { q: "How often is content published?", a: "New articles every month, prioritized by what boards are asking us about in real time. FL legislative changes get covered the day they pass." }
      ]
    }
  ]
};


export { FAQPage, FAQ_CONTENT };
