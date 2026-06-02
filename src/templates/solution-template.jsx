import React from 'react';
import { BodyProse, Breadcrumb, DetailLinkCards, FAQ, FeatureGrid, FinalCTA, InteriorButton, MidCTA, PageTitle, SectionHeading } from '../components/interior-components';
import { ComparisonTable, EmpathyHero, NumberedSteps, PullQuote, StatHero, StatsBand } from '../components/template-sections';

/* ============================================================
   SOLUTION PAGE TEMPLATE, VARIANT A (Empathetic Narrative)
   Sample content: Switch HOA Management Company
   ============================================================ */
function SolutionPageA({ content }) {
  return (
    <main data-screen-label="Solution, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: content.crumb }
      ]}/>

      <EmpathyHero
        eyebrow={content.eyebrow}
        title={content.hero.title}
        lede={content.hero.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
        image={content.hero.image}
      />

      <BodyProse
        background="#fff"
        title={content.story.title}
        paragraphs={content.story.paragraphs}
      />

      <NumberedSteps
        background="var(--edison-teal-pale)"
        eyebrow="The Edison Transition Experience"
        title="What switching actually looks like, with Edison handling it"
        sub="Most boards expect a switch to mean disruption, lost records, and angry homeowners. The Edison Transition Experience is built to remove the burden, not move it onto the board."
        steps={content.steps}
        variant="horizontal"
      />

      <PullQuote
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
        background="#fff"
      />

      <FAQ
        eyebrow="Common Questions"
        title="What boards usually want to know"
        background="var(--bg-3, #F5F7FA)"
        items={content.faqs}
      />

      <FinalCTA
        eyebrow="Ready when you are"
        title={content.cta.title}
        body={content.cta.body}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
      />
    </main>
  );
}

/* ============================================================
   SOLUTION PAGE TEMPLATE, VARIANT B (Comparison + Proof)
   ============================================================ */
function SolutionPageB({ content }) {
  return (
    <main data-screen-label="Solution, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/solutions" },
        { label: content.crumb }
      ]}/>

      <StatHero
        eyebrow={content.eyebrow}
        title={content.hero.title}
        lede={content.hero.lede}
        stat={content.heroStat}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
        bg={content.hero.image}
      />

      <ComparisonTable
        eyebrow="What changes"
        title="Two ways this can go"
        sub="Most management transitions fail because the new company has the same structural problems as the old one. Edison's model is different, and it shows up in the day-to-day, not just the pitch deck."
        leftLabel="Typical Transition"
        rightLabel="The Edison Way"
        rows={content.comparison}
      />

      <NumberedSteps
        background="#fff"
        eyebrow="The Process"
        title="Four steps. 60–90 days. Handled by us."
        sub="The Edison Transition Experience is a defined program with a dedicated COO touch-point, not a generic onboarding form."
        steps={content.steps}
        variant="vertical"
      />

      <StatsBand
        background="var(--edison-teal-pale)"
        eyebrow="Why this works"
        title="Edison by the numbers"
        stats={content.stats}
      />

      {content.quote && (
        <PullQuote
          quote={content.quote.quote}
          attribution={content.quote.attribution}
          role={content.quote.role}
          community={content.quote.community}
          background="#fff"
        />
      )}

      <FAQ
        eyebrow="FAQ"
        title="Switching questions, answered directly"
        background="#fff"
        items={content.faqs}
      />

      <FinalCTA
        eyebrow="Start the conversation"
        title={content.cta.title}
        body={content.cta.body}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Schedule a Consultation", href: "/contact" }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT, "Switch HOA Management Company"
   ============================================================ */
const SWITCH_CONTENT = {
  crumb: "Switch HOA Management Company",
  eyebrow: "Solutions · For boards considering a change",
  hero: {
    title: "Thinking about switching HOA management companies?",
    lede: "If your manager doesn't return calls, your financials feel opaque, or your board is tired of doing the management company's job, you're not alone. Most boards know they need a change long before they make one. Here's how to make it the easier decision.",
    image: "/assets/img-inspector.jpg"
  },
  heroStat: {
    eyebrow: "Industry Reality",
    value: "30–40%",
    caption: "Annual manager turnover at most large management firms. Every change means your board starts over with someone who doesn't know your community."
  },
  story: {
    title: "Why most boards wait too long",
    paragraphs: [
      "Switching management companies feels like a mountain. Records to transfer, vendors to re-credential, homeowners to inform, bank accounts to re-route, and the constant worry that the next company will be just as unresponsive as the last one. So boards wait. They wait through another season of unanswered emails, another budget that arrives late, another covenant violation that gets botched. Until something breaks badly enough to force the move.",
      "It doesn't have to work that way. The reason most transitions feel disruptive is that most management companies treat onboarding as a checkbox, sign the contract, hand the community to whichever manager has the lightest portfolio, and hope the rough edges smooth out. Edison built a different model from day one. Transitions are run by a dedicated team, not the manager who's about to inherit your community. Your records, vendors, and homeowner communications are handled in parallel, not sequentially. And the manager who learns your community in the first 90 days is the same one still there in year three, because Edison's portfolios are sized for stability, not volume."
    ]
  },
  steps: [
    {
      title: "Discovery & Proposal",
      body: "Tracy or a senior manager meets with your board to understand the current pain points, governing documents, and capital pipeline, then delivers a written, fixed-scope proposal."
    },
    {
      title: "Records & Vendor Cutover",
      body: "Edison's transition team digitizes physical records, re-credentials your vendors, and coordinates bank account migration and insurance certificates, without disrupting daily operations."
    },
    {
      title: "Meet Your Management Event",
      body: "A community-wide event introduces your new Edison manager and back-office team to homeowners before the official cutover, so day one feels like continuity, not chaos."
    },
    {
      title: "Day 1 & Beyond",
      body: "Your dedicated manager and accounting specialist are on the ground. The Action Item List is live. WATTSON is answering homeowner questions 24/7. Your board has one phone number for everything."
    }
  ],
  comparison: [
    {
      label: "Who runs the transition",
      left: "Sales rep hands the file to your new manager on day one.",
      right: "Dedicated transition team with COO oversight runs the entire 60–90 day onboarding."
    },
    {
      label: "Records migration",
      left: "Boxes of paper land at the new office. Sorting happens later.",
      right: "Edison digitizes governing documents, financials, and homeowner records in parallel."
    },
    {
      label: "Manager portfolio size",
      left: "15+ communities per manager, yours is one of many.",
      right: "8–10 communities per manager. Yours actually gets attention."
    },
    {
      label: "Homeowner communication",
      left: "Form letter announcing the change. Confusion follows.",
      right: "Meet Your Management event introduces the team before cutover."
    },
    {
      label: "Manager turnover",
      left: "Industry average is 30–40% annually. Boards start over every year.",
      right: "A fraction of industry average. The manager who learns your community stays."
    }
  ],
  stats: [
    { value: "60–90", caption: "Days from contract signing to full cutover, end-to-end" },
    { value: "8–10", caption: "Communities per Edison manager (industry average is 15+)" },
    { value: "4.9★", caption: "Google Business rating, highest in the Central Florida market" },
    { value: "PCAM", caption: "Leadership credential held by Edison's principal, plus 2025 CAI Chapter President" }
  ],
  quote: {
    quote: "We'd been with our last company nine years and dreaded the switch. Tracy's team handled the records, the vendors, and the homeowner meeting before we even saw a transition invoice. Day one with Edison felt like we'd been with them for years.",
    attribution: "Board President",
    role: "HOA · 312 units",
    community: "Winter Garden, FL"
  },
  faqs: [
    {
      q: "How long does the switch actually take?",
      a: "Most transitions are complete within 60–90 days from contract signing. The first 30 days focus on records and vendor migration; the second 30 on the Meet Your Management event and homeowner communication; the final stretch on cutover and the live handoff to your dedicated manager."
    },
    {
      q: "What if we're mid-contract with our current company?",
      a: "Most management agreements have a termination clause with 30–90 days notice. Edison's transition team can review your current contract to identify the right termination window and coordinate timing so there's no gap in service."
    },
    {
      q: "Will homeowners be confused?",
      a: "Not if it's handled right. Edison runs a Meet Your Management event before the official cutover, your homeowners meet the new manager, the accounting specialist, and the back-office team in person. By cutover day, everyone knows who to call."
    },
    {
      q: "What does the transition cost?",
      a: "Transition coordination is included in Edison's management agreement, there's no separate onboarding fee, no records digitization charge, and no setup cost beyond the standard monthly management rate quoted in your proposal."
    },
    {
      q: "What if Edison isn't the right fit?",
      a: "Our agreements are 12-month terms with clear termination provisions. We don't believe in trapping boards, if Edison isn't a fit at the end of year one, you walk free with your records, your vendor list, and your processes intact."
    }
  ],
  cta: {
    title: "Switching companies doesn't have to be the year's biggest project.",
    body: "Tracy and the Edison team handle the burden, the records, the homeowners, the vendor cutover, so your board can stay focused on the community. Request a proposal and see exactly what that looks like for your association."
  }
};

export { SolutionPageA, SolutionPageB, SWITCH_CONTENT };
