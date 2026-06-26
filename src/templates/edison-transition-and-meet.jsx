import React from 'react';
import { Breadcrumb, BodyProse, FAQ, FinalCTA, InteriorButton } from '../components/interior-components';
import { NumberedSteps, ComparisonTable, StatsBand, PullQuote } from '../components/template-sections';

/* ============================================================
   Trust & Branded Page Content
   - Edison Transition (now under /about/, not /solutions/)
   - Meet Your Management (event)
   ============================================================ */

/* ============================================================
   THE EDISON TRANSITION EXPERIENCE
   /about/the-edison-transition/
   Custom layout, branded transition program, not a standard
   solution. Uses About-template-style sections but emphasizes
   the process timeline.
   ============================================================ */
function EdisonTransitionPage() {
  return (
    <main data-screen-label="The Edison Transition Experience">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "The Edison Transition" }
      ]}/>

      <section className="transition-hero" style={{ background: "#fff", padding: "72px 48px 56px" }}>
        <div className="transition-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56,
                      alignItems: "center" }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 18
            }}>Edison's branded onboarding program</div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "0 0 22px"
            }}>The Edison Transition Experience.</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.55,
              color: "var(--edison-text-body)", margin: "0 0 28px"
            }}>Most management companies treat onboarding as a checkbox. Edison built a defined program with a dedicated COO touch-point, records digitization, vendor recredentialing, and a community-wide Meet Your Management event. 60–90 days, end-to-end. Run by us, not your board.</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/request-a-proposal">Schedule a Consultation</InteriorButton>
            </div>
          </div>
          <div className="transition-hero-img" style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: "url(/assets/img-community-aerial.webp)",
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      <StatsBand background="var(--edison-teal-pale)" stats={[
        { value: "60–90", caption: "Days, end-to-end. Defined timeline." },
        { value: "COO-led", caption: "Sabrina Stephan supervises every transition personally." },
        { value: "1 event", caption: "Meet Your Management, before cutover, not after." },
        { value: "$0", caption: "Separate transition or onboarding fees. Coordination included." }
      ]}/>

      <NumberedSteps
        background="#fff"
        eyebrow="The Four Phases"
        title="What the 60–90 days actually looks like"
        sub="A defined program. Not an open-ended onboarding."
        steps={[
          { title: "Pre-Contract Discovery", body: "Tracy or a senior manager visits the community, reviews governing documents and current pain points, and delivers a written proposal sized for your association." },
          { title: "Records & Operations Migration", body: "Edison's transition team digitizes records, recredentials vendors, coordinates bank account migration, updates insurance certificates, and builds the audit-ready financial baseline." },
          { title: "Meet Your Management Event", body: "Before the official cutover, Edison hosts a community event where homeowners meet the new manager, the accounting specialist, the enforcement coordinator, and leadership in person." },
          { title: "Cutover & First 90 Days", body: "Day 1 is live operations: Action Item List populated, WATTSON answering, accounting current, manager on the ground. The COO stays involved through day 90." }
        ]}
        variant="horizontal"
      />

      <ComparisonTable
        background="var(--edison-teal-pale)"
        eyebrow="What changes"
        title="A standard transition vs the Edison Transition Experience"
        leftLabel="Typical Transition"
        rightLabel="The Edison Way"
        rows={[
          { label: "Transition owner", left: "Sales rep, then your new manager on day one.", right: "Dedicated transition team with active COO supervision throughout." },
          { label: "Records handling", left: "Boxes of paper. Sorted later. Sometimes lost.", right: "Digitized in parallel. Indexed. Searchable. Audit-ready." },
          { label: "Vendor relationships", left: "Inherited names without contracts or COI on file.", right: "Recredentialed. Updated COIs. Re-bid if appropriate. Documented." },
          { label: "Homeowner introduction", left: "Form letter. Confusion. Phone trees.", right: "Community-wide Meet Your Management event before cutover." },
          { label: "Day 1 readiness", left: "Manager learning the community on the job.", right: "Manager already familiar with the property, board, and homeowners." }
        ]}
      />

      <PullQuote
        background="#fff"
        quote="We'd been with our last company nine years and dreaded the switch. Tracy's team handled the records, the vendors, and the homeowner meeting before we even saw a transition invoice. Day one with Edison felt like we'd been with them for years."
        attribution="Sarah M."
        role="Board President"
        community="Winter Garden HOA · 312 units"
      />

      <FAQ
        eyebrow="FAQ"
        title="What boards ask before signing"
        background="var(--bg-3, #F5F7FA)"
        items={[
          { q: "How long does the transition actually take?", a: "Most transitions are complete within 60–90 days from contract signing. The first 30 days focus on records and vendor migration; the second 30 on the Meet Your Management event and homeowner communication; the final stretch on cutover and the live handoff to your dedicated manager." },
          { q: "What if we're mid-contract with our current company?", a: "Most management agreements have a termination clause with 30–90 days notice. Edison's transition team reviews your current contract to identify the right termination window and coordinate timing so there's no gap in service." },
          { q: "Will homeowners be confused?", a: "Not if it's handled right. Edison runs a Meet Your Management event before cutover, homeowners meet the new manager, accounting specialist, and back-office team in person. By cutover day, everyone knows who to call." },
          { q: "What does it cost?", a: "Transition coordination is included in Edison's management agreement, no separate onboarding fee, no records digitization charge, no setup cost beyond the standard monthly rate quoted in your proposal." }
        ]}
      />

      <FinalCTA
        eyebrow="Ready when you are"
        title="Onboarding shouldn't be an act of faith."
        body="The Edison Transition Experience is the defined, COO-supervised program your community deserves. Request a proposal and we'll walk you through exactly what 60–90 days look like for your association."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Read About Edison", href: "/about" }}
      />
    </main>
  );
}

/* ============================================================
   MEET YOUR MANAGEMENT EVENT
   /about/meet-your-management/
   Branded transition event page, the event story for boards
   already in conversation. Uses Edison's "ice cream truck"
   visual cue from brand brief.
   ============================================================ */
function MeetYourManagementPage() {
  return (
    <main data-screen-label="Meet Your Management Event">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Meet Your Management" }
      ]}/>

      <section className="meet-section" style={{
        background: "linear-gradient(180deg, #fff 0%, var(--edison-teal-pale) 100%)",
        padding: "88px 48px 64px"
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: 72, height: 72, borderRadius: 18,
            background: "var(--edison-teal)", color: "var(--edison-navy)",
            fontSize: 36, marginBottom: 22
          }} aria-hidden="true">🍦</div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>A signature Edison program</div>
          <h1 className="meet-headline" style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 54, lineHeight: 1.06, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px"
          }}>Meet Your Management.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: "0 auto", maxWidth: 740
          }}>Before every transition from a previous management company, Edison hosts a community-wide event where homeowners meet the new manager, the accounting specialist, the enforcement coordinator, and the leadership team in person. Often with an ice cream truck. Always with answers.</p>
        </div>
      </section>

      <section style={{ background: "var(--edison-teal-pale)", padding: "0 48px 88px" }}>
        <div className="meet-grid" style={{ maxWidth: 1080, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          {[
            { title: "Meet the People", body: "Homeowners see the actual humans running their community, names, faces, direct extensions. Not 'our team.'" },
            { title: "Ask Anything", body: "Q&A on the spot, with the manager, the accounting lead, and the enforcement coordinator all face to face." },
            { title: "Set the Tone", body: "The event signals Edison's standard: a real person answers, communication is open, and transparency starts on day one." }
          ].map((c, i) => (
            <article key={i} style={{
              background: "#fff", borderRadius: 14, padding: "28px 28px",
              border: "1px solid var(--border-hairline)",
              boxShadow: "var(--shadow-sm)"
            }}>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 19, lineHeight: 1.3,
                color: "var(--edison-navy)", margin: "0 0 12px"
              }}>{c.title}</h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.6,
                color: "var(--edison-text-body)", margin: 0
              }}>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <BodyProse
        background="#fff"
        title="Why Edison does this"
        paragraphs={[
          "Most management company transitions fail at the homeowner layer. The board signs a contract. Records get transferred. The accounting cuts over. And then a form letter goes out to homeowners, 'your management company is now ABC', and the questions and confusion start showing up at the new company's front desk for the next six months.",
          "Edison handles the transition differently. The Meet Your Management event is held in the community, typically in a clubhouse or common area, two to four weeks before the official transition. Tracy attends. The dedicated manager attends. The accounting specialist and enforcement coordinator attend. Homeowners come, ask their questions, see the people, and leave knowing who to call. By transition day, the new is already familiar.",
          "Often there's an ice cream truck. It's the most Edison signature detail of an Edison signature program: warm, casual, anti-corporate, and intentional. Boards remember the event. Homeowners remember the event. If you're wondering whether Edison takes transitions seriously, this is your answer."
        ]}
      />

      <PullQuote
        background="var(--edison-teal-pale)"
        quote="Edison's Meet Your Management event was the smartest thing we've seen any management company do. By transition day everyone knew who to call, what changed, and what didn't."
        attribution="Diane K."
        role="Board Member"
        community="Townhome HOA · 142 units · Stonebrook"
      />

      <FinalCTA
        eyebrow="Part of every Edison transition"
        title="Switching to Edison? The event comes standard."
        body="The Meet Your Management event is included in every Edison transition. No upcharge, no fine print. It's how we set the tone for the partnership ahead."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "How switching works", href: "/solutions/switch-hoa-management-company" }}
      />
    </main>
  );
}


export { MeetYourManagementPage };
