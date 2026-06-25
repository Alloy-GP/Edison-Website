import React, { useState } from 'react';
import { Breadcrumb, SectionHeading, InteriorButton, InteriorEyebrow,
         MidCTA, FAQ, FinalCTA, BulbMark } from '../components/interior-components';
import { StatsBand, PullQuote, ComparisonTable, NumberedSteps } from '../components/template-sections';

/* ============================================================
   SOLUTIONS LANDING  ·  /solutions/
   Hub page routing boards into three solution tracks based
   on the situation they're in, not the service they need.
   ============================================================ */

function SolutionsLandingPage({ content = SOLUTIONS_LANDING_CONTENT }) {
  return (
    <main data-screen-label="Solutions Landing">
      <Breadcrumb trail={content.crumb}/>

      {/* ---------- Empathy hero: identify-by-situation ---------- */}
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
              <InteriorButton variant="ghost" size="lg" href="/request-a-proposal">Schedule a Consultation</InteriorButton>
            </div>
          </div>

          {/* Right column — "Find your starting point" jump card */}
          <div style={{
            background: "var(--edison-navy)",
            color: "#fff",
            borderRadius: 18,
            padding: "32px 32px 28px",
            boxShadow: "var(--shadow-lg)"
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal)", marginBottom: 14
            }}>Find your starting point</div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 22, lineHeight: 1.3, color: "#fff",
              margin: "0 0 22px"
            }}>Which describes your board today?</h2>

            <ul style={{ listStyle: "none", padding: 0, margin: 0,
                         display: "flex", flexDirection: "column", gap: 4 }}>
              {content.hero.jumpLinks.map((j, i) => <JumpLink key={i} item={j}/>)}
            </ul>
          </div>
        </div>
      </section>

      <StatsBand background="var(--edison-teal-pale)" stats={content.stats}/>

      {/* ---------- Solution cards — the three situations ---------- */}
      <section id="solutions" style={{ background: "#fff", padding: "96px 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeading
            eyebrow="Three situations, one approach"
            title={content.solutions.title}
            sub={content.solutions.sub}
          />
          <div style={{
            marginTop: 56,
            display: "flex", flexDirection: "column", gap: 24
          }}>
            {content.solutions.items.map((s, i) => (
              <SolutionRow key={i} solution={s} index={i}/>
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable
        background="var(--edison-teal-pale)"
        eyebrow="What changes"
        title="The shift from typical management to Edison."
        sub="Same operating model behind every solution above. Different pain points lead in, the same way of running the work follows."
        leftLabel="Typical Management Company"
        rightLabel="Edison"
        rows={content.comparison}
      />

      <NumberedSteps
        background="#fff"
        eyebrow="How any solution actually starts"
        title="Four steps. Defined timeline. No mystery."
        sub="Whether you're switching, professionalizing, or modernizing, the first 90 days look the same — because the Edison Transition Experience is the program every solution runs through."
        steps={content.howItStarts}
        variant="horizontal"
      />

      <PullQuote
        background="var(--edison-teal-pale)"
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
      />

      <MidCTA
        variant="navy"
        title={content.midCta.title}
        lede={content.midCta.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />

      <FAQ
        eyebrow="FAQ"
        title="Questions boards ask when they're thinking about a change"
        background="#fff"
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
   JumpLink — diagnostic links on hero card
   ============================================================ */
function JumpLink({ item }) {
  const [hover, setHover] = useState(false);
  return (
    <li>
      <a href={item.href}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{
           display: "flex", alignItems: "flex-start", gap: 14,
           padding: "13px 12px",
           borderRadius: 8,
           textDecoration: "none", borderBottom: 0,
           background: hover ? "rgba(60,200,200,.10)" : "transparent",
           transition: "background 140ms"
         }}>
        <span aria-hidden="true" style={{
          flexShrink: 0,
          width: 26, height: 26, borderRadius: 999,
          background: "var(--edison-teal)",
          color: "var(--edison-navy)",
          fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13,
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          marginTop: 1
        }}>{item.num}</span>
        <span>
          <span style={{
            display: "block",
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5,
            color: hover ? "var(--edison-teal)" : "#fff",
            transition: "color 140ms"
          }}>{item.label}</span>
          <span style={{
            display: "block",
            fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.45,
            color: "rgba(255,255,255,.72)",
            marginTop: 2
          }}>{item.desc}</span>
        </span>
      </a>
    </li>
  );
}

/* ============================================================
   SolutionRow — alternating-side feature row for each solution
   ============================================================ */
function SolutionRow({ solution, index }) {
  const [hover, setHover] = useState(false);
  const reverse = index % 2 === 1;

  return (
    <article id={solution.id} style={{
      background: "#fff",
      border: "1px solid var(--border-hairline)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: hover ? "translateY(-2px)" : "translateY(0)",
      transition: "all 240ms cubic-bezier(.2,0,.1,1)"
    }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        minHeight: 360
      }}>
        {/* Content column */}
        <div style={{
          order: reverse ? 2 : 1,
          padding: "44px 48px",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 18
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 8,
              background: "var(--edison-teal-pale)",
              color: "var(--edison-teal-dark)",
              display: "inline-flex", alignItems: "center", justifyContent: "center"
            }}>
              <BulbMark size={20}/>
            </div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)"
            }}>{solution.eyebrow}</div>
          </div>

          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.01em",
            color: "var(--edison-navy)", margin: 0
          }}>{solution.title}</h3>

          <p style={{
            fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.65,
            color: "var(--edison-text-body)", margin: 0
          }}>{solution.body}</p>

          <ul style={{ listStyle: "none", margin: 0, padding: 0,
                       display: "flex", flexDirection: "column", gap: 8 }}>
            {solution.bullets.map((b, i) => (
              <li key={i} style={{
                display: "flex", gap: 10, alignItems: "flex-start",
                fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.5,
                color: "var(--edison-navy)"
              }}>
                <span aria-hidden="true" style={{
                  color: "var(--edison-teal-dark)", fontWeight: 800, flexShrink: 0
                }}>✓</span>
                {b}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 6, display: "flex", gap: 14, alignItems: "center" }}>
            <InteriorButton variant="primary" size="md" href={solution.href}>
              {solution.ctaLabel}
            </InteriorButton>
            <a href={solution.href} style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
              color: "var(--edison-teal-dark)",
              textDecoration: "none", borderBottom: 0,
              display: "inline-flex", alignItems: "center", gap: 6
            }}>
              Full solution detail
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Image / signal column */}
        <div style={{
          order: reverse ? 1 : 2,
          position: "relative",
          backgroundImage: `url(${solution.image})`,
          backgroundSize: "cover", backgroundPosition: "center",
          minHeight: 320
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: reverse
              ? "linear-gradient(90deg, rgba(15,29,51,.65) 0%, rgba(15,29,51,.15) 60%)"
              : "linear-gradient(270deg, rgba(15,29,51,.65) 0%, rgba(15,29,51,.15) 60%)"
          }}/>

          {/* Signal stat card */}
          <div style={{
            position: "absolute",
            ...(reverse ? { left: 28 } : { right: 28 }),
            top: 28,
            background: "rgba(15,29,51,.92)",
            color: "#fff",
            borderRadius: 12,
            padding: "20px 22px",
            maxWidth: 240,
            boxShadow: "var(--shadow-md)"
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 10.5,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--edison-teal)", marginBottom: 10
            }}>{solution.signal.eyebrow}</div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 38, lineHeight: 1, letterSpacing: "-0.02em",
              color: "#fff", marginBottom: 10
            }}>{solution.signal.value}</div>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5,
              color: "rgba(255,255,255,.78)"
            }}>{solution.signal.caption}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================================================
   PAGE CONTENT
   ============================================================ */
const SOLUTIONS_LANDING_CONTENT = {
  crumb: [
    { label: "Home", href: "/" },
    { label: "Solutions" }
  ],
  eyebrow: "Solutions for boards",
  phone: "(407) 317-5252",

  hero: {
    title: "When something has to change — start here.",
    lede: "Most boards know they need a different operating model long before they make the move. The questions are usually the same: is switching worth the disruption? Should self-management end here? Is there a modern way to run this without losing the human relationship? Edison built three solution tracks for exactly those moments.",
    jumpLinks: [
      {
        num: 1,
        label: "Our current management company isn't working.",
        desc: "Slow replies, opaque finances, manager turnover.",
        href: "#switch"
      },
      {
        num: 2,
        label: "Our volunteer treasurer is burning out.",
        desc: "Self-managed model is running out of runway.",
        href: "#self-managed"
      },
      {
        num: 3,
        label: "We want modern management — without losing the human.",
        desc: "Tech-forward operations, real person on the phone.",
        href: "#modern"
      }
    ]
  },

  stats: [
    { value: "60–90", caption: "Days from signed agreement to live operations" },
    { value: "Limited", caption: "Portfolio size per Edison manager, sized to your community" },
    { value: "4.9★", caption: "Highest-rated firm in Central Florida" },
    { value: "$0", caption: "Separate transition or onboarding fees" }
  ],

  solutions: {
    title: "Pick the situation that matches yours.",
    sub: "Each solution links to its own page with full detail, comparison table, FAQ, and a request-a-proposal flow tuned to that situation. The work behind them is the same — sized to the moment your board is in.",
    items: [
      {
        id: "switch",
        eyebrow: "If you're considering a change",
        title: "Switch HOA Management Company.",
        body: "If your current manager doesn't return calls, your financials feel opaque, or your board is tired of doing the management company's job — switching is the lift. The Edison Transition Experience is the program that makes the lift the lighter part of the year.",
        bullets: [
          "Dedicated transition team with active COO oversight",
          "Records digitized, vendors recredentialed, banks migrated in parallel",
          "Meet Your Management event before cutover — homeowners meet the team",
          "60–90 days, end-to-end. No separate transition fee."
        ],
        signal: {
          eyebrow: "Industry reality",
          value: "30–40%",
          caption: "Annual manager turnover at most large firms. Edison's is a fraction of that."
        },
        image: "/assets/img-inspector.jpg",
        href: "/solutions/switch-hoa-management-company",
        ctaLabel: "See the switch playbook"
      },
      {
        id: "self-managed",
        eyebrow: "If self-management is wearing out",
        title: "Self-Managed → Professional.",
        body: "Self-managed associations get built on one or two volunteers' personal effort. The model works — until it doesn't. Compliance gets missed, audits get messy, the volunteer who held it together for a decade finally steps back. Edison structures the transition so what worked stays, and what was breaking the volunteer stops.",
        bullets: [
          "Custom hybrid agreements — full-service, accounting-only, or compliance-only",
          "Audit-ready accrual books rebuilt from your existing records",
          "Resident portal + WATTSON AI take volunteers off-call",
          "Volunteer treasurer stays in oversight if the board wants — out of execution"
        ],
        signal: {
          eyebrow: "The tipping point",
          value: "1 person",
          caption: "Most self-managed associations rely on one volunteer. When they step back, the gaps get expensive fast."
        },
        image: "/assets/img-resident-portal.jpg",
        href: "/solutions/self-managed-hoa",
        ctaLabel: "See the self-managed transition"
      },
      {
        id: "modern",
        eyebrow: "If your tools are stuck in 2010",
        title: "Modern HOA Management.",
        body: "There's a lot of HOA management software. There isn't a lot of HOA management that actually uses it well. CINC Systems, the Action Item List, WATTSON AI, and Plaud meeting minutes solve the problems boards keep flagging — without removing the human relationship that makes management work.",
        bullets: [
          "Live Action Item List replaces stale monthly manager reports",
          "CINC portals + real-time financial dashboards for the treasurer",
          "WATTSON AI answers 24/7 resident questions",
          "Polished draft meeting minutes delivered within 24 hours"
        ],
        signal: {
          eyebrow: "The shift",
          value: "24/7",
          caption: "Homeowner questions don't keep business hours. Your manager shouldn't have to either."
        },
        image: "/assets/img-11.jpg",
        href: "/solutions/modern-hoa-management",
        ctaLabel: "See the modern stack"
      }
    ]
  },

  comparison: [
    { label: "Manager portfolio size", left: "15+ communities per manager.", right: "A limited portfolio per manager — well below the industry average." },
    { label: "Who runs onboarding", left: "Sales rep hands the file off on day one.", right: "Dedicated transition team with COO supervision through day 90." },
    { label: "Manager-to-board reporting", left: "Monthly manager report — already stale on arrival.", right: "Live Action Item List. Owner, status, target date — visible to the board in real time." },
    { label: "Accounting cadence", left: "Statements 'when they're ready.' Often weeks late.", right: "Monthly statements by the 15th. Audit-ready every month." },
    { label: "Homeowner support", left: "Email the manager, wait days, maybe get a reply.", right: "Resident portal + WATTSON AI 24/7; real person on the phone in business hours." },
    { label: "When you call the office", left: "Voicemail tree. Callback maybe.", right: "A person answers. Every time, between 9am and 5pm." },
    { label: "Agreement terms", left: "Long-term lock-ins, non-competes, renewal-by-default.", right: "12-month terms. Clean termination. Walk free with your records anytime." }
  ],

  howItStarts: [
    { title: "Discovery & Proposal", body: "A senior Edison manager meets with your board to understand governing documents, pain points, and the capital pipeline. Written, fixed-scope proposal within 5–7 days." },
    { title: "Records & Vendor Cutover", body: "Edison's transition team digitizes records, recredentials vendors, migrates banking, and updates insurance certificates — without disrupting daily operations." },
    { title: "Meet Your Management Event", body: "Before official cutover, Edison hosts a community event so homeowners meet the actual manager, accounting specialist, and leadership team in person." },
    { title: "Day 1 & First 90 Days", body: "Live operations. The Action Item List populates. WATTSON answers. Accounting is current. The COO supervises personally through day 90." }
  ],

  quote: {
    quote: "We inherited 18% delinquency, two unresolved hearings, and a manager who'd already moved to a new firm. Edison's transition team handled the lift — we didn't. A year in, delinquency was at 3.2% and the board could finally focus on the community.",
    attribution: "Linda B.",
    role: "Treasurer",
    community: "HOA · 268 units · Cypress Crossing"
  },

  midCta: {
    title: "Not sure which solution fits?",
    lede: "Tell us what's happening with your community in plain language — what's working, what's grinding. We'll point you to the right starting place and respond with a written proposal within one business day."
  },

  faqs: [
    {
      q: "How is a 'solution' different from a 'service'?",
      a: "Services describe what we do — HOA Management, Condo Management, Accounting, Enforcement, Collections. Solutions describe what your board is going through — switching companies, leaving self-management, or modernizing the operating model. Solutions route into the same services, but they're framed for the situation you're actually in, not the line item on the proposal."
    },
    {
      q: "Do I have to pick one?",
      a: "No. Solutions overlap. Most switching boards are also modernizing. Many self-managed transitions are also a tech migration. Pick the closest match for the conversation; we'll handle the rest on the proposal."
    },
    {
      q: "What if our situation doesn't fit any of these?",
      a: "Talk to us anyway. Edison takes on associations in mid-transition rescue scenarios, communities with missing records, condos under SB-4D compliance pressure, master associations sitting over multiple sub-associations — the playbooks are built to flex. If we're not the right fit, we'll tell you directly and point you elsewhere."
    },
    {
      q: "How long does any of this actually take?",
      a: "60–90 days, end-to-end, for most transitions. Self-managed transitions are typically 45–75 days because there's no incumbent to disentangle from. Modernization happens in parallel with whichever transition path your board is on — it's not a separate project."
    },
    {
      q: "What does it cost?",
      a: "The Edison Transition Experience is included in the management agreement — no separate transition fee, no records digitization charge, no Meet Your Management event cost. You pay the monthly management rate quoted in your proposal. That's it."
    },
    {
      q: "Can we talk before we're ready to commit?",
      a: "Yes — and most boards do. Many boards talk to Edison a year or two before they actually transition. We don't sell pressure. When you're ready, we'll be the same Edison."
    }
  ],

  cta: {
    title: "Whichever situation you're in — the next step is the same.",
    body: "Tell us about your community. We'll respond with a written proposal sized for your governing documents, capital pipeline, and the moment your board is in — within one business day, no high-pressure follow-ups."
  }
};

export { SolutionsLandingPage };
