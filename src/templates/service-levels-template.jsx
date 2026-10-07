import React, { useCallback, useEffect, useState } from 'react';
import { Breadcrumb, FAQ, FinalCTA, InteriorButton, InteriorEyebrow,
         MidCTA } from '../components/interior-components';
import { PullQuote } from '../components/template-sections';
import { LevelWizard, FeatureMatrix, LevelDeepDive,
         EveryLevelBand } from '../components/service-level-sections';

/* ============================================================
   SERVICE LEVELS  ·  /service-levels
   Cross-cutting comparison page. Service levels are a second axis,
   not a third pillar — a 60-unit HOA and a 400-unit condo can both
   be Accounting Plus — so every level is explained here rather than
   getting its own page. The HOA and Condo pillars are unchanged.

   ── PRICING SWITCH ─────────────────────────────────────────────
   Whether pricing appears on the site at all is still a client
   decision. All three treatments are built; flip this one constant.

     'full'             every level shows its starting figure
     'accounting-only'  figures on the two accounting levels only,
                        full management quoted (current default —
                        the option the client is actively weighing)
     'none'             no dollar figures anywhere on the page

   Nothing else needs to change. The matrix header and the matrix
   pricing row both read from this.
   ============================================================ */
const PRICING_MODE = 'full';

const SHOW_PRICING = PRICING_MODE !== 'none';
const QUOTE_ONLY   = PRICING_MODE === 'accounting-only';

/* Quoted levels still occupy the pricing row — an empty cell reads as
   "free" or "broken", "Custom quote" reads as a deliberate policy. */
function priceFor(tier) {
  if (QUOTE_ONLY && tier.quoted) {
    return { price: 'Custom quote', priceNote: 'Scoped to your community', priceShort: 'Custom quote' };
  }
  return { price: tier.price, priceNote: tier.priceNote, priceShort: tier.priceShort };
}

function ServiceLevelsPage({ content = SERVICE_LEVELS_CONTENT }) {
  const tiers = content.tiers.map((t) => ({ ...t, ...priceFor(t) }));

  /* One selected level for the whole page. The wizard sets it, the
     closer-look tabs set it, a #portfolio-plus link sets it — and the
     table highlights whichever it is. Before anything is chosen it stays
     null, so the server-rendered page is the neutral one. */
  const [selected, setSelected] = useState(null);
  const select = useCallback((id) => setSelected(id), []);

  useEffect(() => {
    const read = () => {
      const id = window.location.hash.slice(1);
      if (content.tiers.some((t) => t.id === id)) setSelected(id);
    };
    read();
    window.addEventListener('hashchange', read);
    return () => window.removeEventListener('hashchange', read);
  }, [content.tiers]);

  return (
    <main data-screen-label="Service Levels">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Service Levels" }
      ]}/>

      {/* ---------- Hero ---------- */}
      <section className="sl-hero" style={{ background: "#fff", padding: "72px 48px 56px" }}>
        <div className="sl-hero-grid" style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 56,
          alignItems: "center"
        }}>
          <div>
            <InteriorEyebrow>{content.eyebrow}</InteriorEyebrow>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 54, lineHeight: 1.06, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "16px 0 22px",
              textWrap: "balance"
            }}>{content.hero.title}</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18.5, lineHeight: 1.55,
              color: "var(--edison-text-body)", margin: "0 0 28px", maxWidth: 620
            }}>{content.hero.lede}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="#find-your-level">Find your level in 30 seconds</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="#compare">Compare all five</InteriorButton>
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

      {/* The scenario grid that used to sit here asked a volunteer board
          to read five options and diagnose itself. Same questions, asked
          one at a time, ending in an answer instead of a menu. */}
      <LevelWizard
        eyebrow="Find your level"
        title={content.wizard.title}
        sub={content.wizard.sub}
        questions={content.wizard.questions}
        recommend={content.wizard.recommend}
        onResult={select}
        showPricing={SHOW_PRICING}
        tiers={tiers}
      />

      <div id="compare" style={{ scrollMarginTop: "var(--site-header-height)" }}>
        <FeatureMatrix
          eyebrow="The five levels"
          title={content.matrix.title}
          sub={content.matrix.sub}
          tiers={tiers}
          groups={content.matrix.groups}
          footnotes={content.matrix.footnotes}
          note={content.matrix.note}
          showPricing={SHOW_PRICING}
          active={selected}
          background="var(--bg-3, #F5F7FA)"
        />
      </div>

      <EveryLevelBand
        eyebrow="At every level"
        title={content.everyLevel.title}
        sub={content.everyLevel.sub}
        items={content.everyLevel.items}
      />

      {/* Was a fixed Portfolio Plus spotlight plus a fixed "Accounting Plus
          does not include" band. Both ran regardless of what the wizard had
          just recommended, and only one level carried published limitations.
          Now every level has both halves and the panel follows the selection.
          Demoted below the constants band: it is the third place these five
          levels get explained, so it should read as the drill-down it is
          rather than compete with the table for the same job. */}
      <LevelDeepDive
        eyebrow="A closer look"
        title={content.deepDive.title}
        sub={content.deepDive.sub}
        tiers={tiers}
        panels={content.deepDive.panels}
        selected={selected}
        onSelect={select}
        fallback={content.deepDive.fallback}
      />

      <MidCTA
        variant="teal"
        title={content.midCta.title}
        lede={content.midCta.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal?intent=proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g, "")}` }}
      />

      <PullQuote
        background="#fff"
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
      />

      <FAQ
        eyebrow="FAQ"
        title="What boards ask about service levels"
        background="var(--edison-teal-pale)"
        items={content.faqs}
      />

      <FinalCTA
        eyebrow="Lighting the way"
        title={content.cta.title}
        body={content.cta.body}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal?intent=proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g, "")}` }}
      />
    </main>
  );
}

/* ============================================================
   WIZARD LOGIC
   Mirrors how Edison actually places a community: what the board wants
   off its plate, the size, and how much on-site presence it genuinely
   needs. Size never drives the answer on its own — the brief is explicit
   that placement is scope + size + volunteer capacity + access need.
   ============================================================ */

/* The proposal form deep-links on ?intent=proposal and prefills any
   param matching a field key (see IntakeForm). Handing it the wizard's
   answers means the board lands on a form that already knows its size
   and what it asked for, and sales gets a qualified lead. */
function proposalHref({ units, summary, level }) {
  const q = new URLSearchParams({ intent: 'proposal' });
  if (units) q.set('units', units);
  /* Matches an option on the form's Service level select exactly, or the
     prefill drops it rather than rendering a blank field. */
  if (level) q.set('serviceLevel', level);
  if (summary) q.set('message', summary);
  return `/request-a-proposal?${q.toString()}`;
}

function recommendLevel(answers, tiers) {
  const byId = Object.fromEntries(tiers.map((t) => [t.id, t]));
  const scope = answers.scope;
  const size  = answers.size;
  const site  = answers.onsite;

  let id;
  if (scope?.value === 'books')         id = 'accounting-only';
  else if (scope?.value === 'asneeded') id = 'accounting-plus';
  else if (site?.value === 'daily')     id = 'on-site';
  else if (site?.value === 'days')      id = 'portfolio-plus';
  else                                  id = 'portfolio';

  const tier  = byId[id];
  const doors = size?.label?.toLowerCase() ?? 'your size';
  const big   = size?.value === 'u500' || size?.value === 'o500';
  const small = size?.value === 'u100';

  const WHY = {
    'accounting-only': `You have volunteers who show up and vendors you trust. What you do not have is anyone who should be signing checks or chasing delinquent assessments on a Saturday. Accounting Only takes the financial risk off your board at ${doors} homes, without putting a manager between you and your community.`,
    'accounting-plus': `Most months you will not need a manager. The months you do — a contentious annual meeting, a roof project that needs bids, an enforcement letter that has to be right — you book one. At ${doors} homes that usually costs less across a year than full management, and your board stays in control of which year it is having.`,
    'portfolio': `This is standard full management and where most communities belong. A dedicated licensed manager and a community specialist who learn your documents, your history and your vendors — and stay. At ${doors} homes, quarterly board meetings and monthly site inspections are typically the right cadence.`,
    'portfolio-plus': `You want a face in the community, not just a phone number, but a full-time salary is more than ${doors} homes should carry. A dedicated manager is physically on site one to three days a week with the full Edison back office behind them. It is the fastest-growing level in Edison's portfolio, mostly because former on-site communities convert to it.`,
    'on-site': `At ${doors} homes with enough activity to fill a week, a manager dedicated to one community — yours — is the right call. Optional admin and maintenance staff work alongside them, and Edison's accounting, enforcement and collections departments stand behind them.`
  };

  /* Edison vets fit before placing anyone and says so when a level will
     not serve a board. Saying it here is that promise, made before the
     sales call rather than during it. */
  let caution = null;
  if (big && (id === 'accounting-only' || id === 'accounting-plus')) {
    caution = `A community at ${doors} homes is larger than most boards can carry on volunteer time alone. We will quote what you asked for, and show you Portfolio beside it so you can see the difference in writing.`;
  } else if (small && id === 'portfolio') {
    caution = `Portfolio carries a monthly minimum that does not scale down below a certain size. At ${doors} homes it is worth seeing Accounting Plus quoted beside it — we will put both in the proposal.`;
  }

  const summary = [
    'Sent from the service levels tool.',
    `Community size: ${size?.label ?? 'not given'} homes.`,
    `Wants to hand over: ${scope?.label ?? 'not given'}.`,
    site ? `On-site presence needed: ${site.label}.` : null,
    `Suggested level: ${tier.name}.`
  ].filter(Boolean).join(' ');

  return {
    tier,
    why: WHY[id],
    caution,
    href: proposalHref({ units: size?.units, summary, level: tier.name })
  };
}

/* ============================================================
   CONTENT
   Sources: master brief v1.8 §6.8 (levels, manager access, best fit,
   UVPs) and the client Service Levels exhibit (included services and
   starting prices). Where the two disagree the exhibit wins — it is
   the later, service-level-specific document.

   Do Not Publish constraints honoured here: no communities-per-manager
   figure at any level; no mention that a la carte is priced so that
   assembling coverage exceeds Portfolio (the customer-facing version
   is simply that Edison vets fit); no bilingual staffing location.
   ============================================================ */
const SERVICE_LEVELS_CONTENT = {
  phone: "(407) 317-5252",
  eyebrow: "Service Levels · Five ways to work with Edison",

  hero: {
    title: "Pay for the management your community actually needs.",
    lede: "Most management companies have one way of working and ask every board to fit inside it. Edison offers five levels, from behind-the-scenes accounting to a manager dedicated to your community full time. Answer three questions and we will tell you which one fits.",
    image: "/assets/img-community-aerial.webp"
  },

  wizard: {
    title: "Three questions. One answer.",
    sub: "No email required, nothing to download. Most boards are done in under a minute.",
    recommend: recommendLevel,
    questions: [
      {
        id: "scope",
        question: "What would your board most like to hand over?",
        hint: "There is no wrong answer. This is the starting point, not the commitment.",
        options: [
          {
            value: "books",
            label: "Just the finances",
            detail: "We handle meetings, vendors and the community ourselves."
          },
          {
            value: "asneeded",
            label: "The finances, plus help when something comes up",
            detail: "Most months are quiet. Some months need a professional."
          },
          {
            value: "full",
            label: "The day-to-day management",
            detail: "We want a manager who runs the community alongside us."
          }
        ]
      },
      {
        id: "size",
        question: "How many homes are in your community?",
        options: [
          { value: "u100", label: "Under 100",   units: "Under 100" },
          { value: "u250", label: "100 to 249",  units: "100-249" },
          { value: "u500", label: "250 to 499",  units: "250-499" },
          { value: "o500", label: "500 or more", units: "500+" }
        ]
      },
      {
        id: "onsite",
        /* Only full management has an on-site dimension. Boards that
           picked the books skip this and answer two questions total. */
        showIf: (a) => a.scope?.value === "full",
        question: "How much on-site presence does your community need?",
        hint: "Someone physically in the community, not just reachable by phone.",
        options: [
          {
            value: "none",
            label: "Not much",
            detail: "Reachable by phone and email is fine."
          },
          {
            value: "occasional",
            label: "Occasional visits",
            detail: "Monthly inspections and scheduled board meetings."
          },
          {
            value: "days",
            label: "A few days a week",
            detail: "Enough going on that someone should be here regularly."
          },
          {
            value: "daily",
            label: "Every day",
            detail: "Amenities, staff or volume that fills a full week."
          }
        ]
      }
    ]
  },

  /* quoted:true routes a tier to "Custom quote" when PRICING_MODE is
     'accounting-only'. Figures are starting points, not typical prices. */
  tiers: [
    {
      id: "accounting-only",
      name: "Accounting Only",
      summary: "Everything financial, nothing operational. The books, the billing, and the collections, handled by professionals.",
      price: "$500",
      priceNote: "per month",
      priceShort: "Starts at $500/mo",
      quoted: false,
      managerAccess: "No manager assigned",
      highlights: [
        "Assessment processing",
        "Monthly financial reporting",
        "Vendor payments (AR/AP)",
        "Collections processing",
        "Homeowner payment support",
        "Resident portal, website & app"
      ],
      /* Hand off / keep is the shape of the decision for a volunteer
         board: how much work leaves the volunteers, not which boxes
         get ticked. Surfaced in the wizard result. */
      handOff: [
        "Billing, collecting and recording every assessment",
        "Paying your vendors and closing the books each month",
        "Chasing delinquent accounts through to lien if needed"
      ],
      keep: [
        "Board meetings and the decisions in them",
        "Site inspections and covenant enforcement",
        "Finding and managing your own vendors"
      ],
      bestFit: "Small communities, often self-managed or with their own on-staff help, that need financial oversight and risk off the volunteers."
    },
    {
      id: "accounting-plus",
      name: "Accounting Plus",
      summary: "Accounting Only, plus any operational service you buy as you need it. Meetings, inspections, projects, enforcement — priced per use.",
      price: "$500",
      priceNote: "per month, plus services as needed",
      priceShort: "Starts at $500/mo + services",
      quoted: false,
      managerAccess: "No manager assigned",
      highlights: [
        "Everything in Accounting Only",
        "Board meetings, booked per use",
        "Site inspections, per use",
        "Project management, per use",
        "Covenant enforcement, per use",
        "Remote homeowner support"
      ],
      /* Hand off / keep is the shape of the decision for a volunteer
         board: how much work leaves the volunteers, not which boxes
         get ticked. Surfaced in the wizard result. */
      handOff: [
        "Everything financial, every month",
        "Any meeting, inspection, project or enforcement you book",
        "Remote homeowner support through the portal"
      ],
      keep: [
        "Deciding which months are worth buying help for",
        "Day-to-day community matters between those bookings",
        "Continuity — no one manager carries your history"
      ],
      bestFit: "Small communities with capable volunteers or strong vendor relationships that want a professional available for specific needs."
    },
    {
      id: "portfolio",
      name: "Portfolio",
      summary: "Standard full management. A dedicated LCAM and community specialist who know your community, your documents, and your vendors.",
      price: "$2,000",
      priceNote: "per month, and scales with community size",
      priceShort: "Starts at $2,000/mo",
      quoted: true,
      managerAccess: "Dedicated manager",
      highlights: [
        "Assigned LCAM",
        "Assigned community specialist",
        "Quarterly board meetings",
        "Monthly site inspections",
        "Vendor sourcing & oversight",
        "Full financial management"
      ],
      /* Hand off / keep is the shape of the decision for a volunteer
         board: how much work leaves the volunteers, not which boxes
         get ticked. Surfaced in the wizard result. */
      handOff: [
        "Day-to-day management, with a manager who knows you",
        "Monthly inspections, vendor bidding and project oversight",
        "Covenant enforcement and the full financial operation"
      ],
      keep: [
        "Governance and the decisions that are legally yours",
        "Setting direction at quarterly board meetings",
        "Any on-site presence beyond scheduled visits"
      ],
      bestFit: "Communities that want a manager who knows them and stays. The most common fit by a wide margin."
    },
    {
      id: "portfolio-plus",
      name: "Portfolio Plus",
      summary: "The hybrid. A dedicated manager physically on site one to three days a week, with the full Edison back office behind them.",
      price: "$2,000",
      priceNote: "per month, plus salary/burden costs",
      priceShort: "Starts at $2,000/mo + staffing",
      quoted: true,
      badge: "Growing fastest",
      managerAccess: "Dedicated manager, scheduled on-site days",
      highlights: [
        "LCAM on site 1–3 days a week",
        "Monthly board meetings",
        "On-site homeowner support",
        "Monthly site inspections with a written report",
        "Community event planning",
        "Newsletter publication"
      ],
      /* Hand off / keep is the shape of the decision for a volunteer
         board: how much work leaves the volunteers, not which boxes
         get ticked. Surfaced in the wizard result. */
      handOff: [
        "Everything in Portfolio, plus a manager on site on set days",
        "On-site homeowner support, events and the newsletter",
        "Monthly site inspections, with a manager who is already on site to act on them"
      ],
      keep: [
        "Governance and the decisions that are legally yours",
        "Choosing how many on-site days you fund",
        "Whether to add admin or maintenance staff"
      ],
      bestFit: "Larger communities that want regular on-site presence without funding a full-time manager."
    },
    {
      id: "on-site",
      name: "On-Site",
      summary: "A manager dedicated to one community full time. Yours. Optional admin and maintenance staff alongside them.",
      price: "$2,000",
      priceNote: "per month, plus salary/burden costs",
      priceShort: "Starts at $2,000/mo + staffing",
      quoted: true,
      managerAccess: "Dedicated, full time",
      highlights: [
        "Dedicated full-time on-site LCAM",
        "Optional admin & maintenance staff",
        "Monthly board meetings",
        "On-site homeowner support",
        "Community event planning",
        "Newsletter publication"
      ],
      /* Hand off / keep is the shape of the decision for a volunteer
         board: how much work leaves the volunteers, not which boxes
         get ticked. Surfaced in the wizard result. */
      handOff: [
        "A full-time manager working only for your community",
        "On-site homeowner support five days a week",
        "Events, newsletter, vendor and project work end to end"
      ],
      keep: [
        "Governance and the decisions that are legally yours",
        "Approving the staffing you fund alongside the manager",
        "Setting priorities at monthly board meetings"
      ],
      bestFit: "Large communities with the scale and budget to support a full-time manager of their own."
    }
  ],

  matrix: {
    title: "Only what actually differs.",
    sub: "Assessments, financials, AR/AP, collections, the resident portal and board education are identical at all five levels, so they are not in this table — they are the band directly below it. Everything here changes as you move up.",
    note: "Not sure where you land? Edison reviews fit before placing any community. If a level is wrong for you, we will say so — including when full management is the better value.",
    footnotes: [
      "Pricing shown is starting pricing and may vary based on community size, scope and service requirements.",
      "At Accounting Plus, site inspections are billed per visit and board meetings hourly, rather than included in the monthly fee.",
      "At On-Site and Portfolio Plus, salary/burden costs for the on-site manager are billed on top of the monthly management fee."
    ],
    /* "Your manager" opens by default because it is the group that
       actually separates the five levels. The rest is detail a board
       opens when it has a specific question. */
    groups: [
      {
        group: "Your manager",
        rows: [
          {
            label: "Dedicated LCAM",
            tip: "Licensed Community Association Manager — Florida requires a state license to manage an association professionally. Dedicated means the same person every time, not whoever happens to be free that week.",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": "Assigned", "portfolio-plus": "1–3 days on site", "on-site": "Full time, on site" }
          },
          {
            label: "Assigned community specialist",
            tip: "Your manager's back-office counterpart. Handles day-to-day requests and keeps work moving between board meetings, so the manager is not the only route into Edison.",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Board meetings",
            tip: "Preparation, attendance and follow-up — not just showing up. At Accounting Plus a meeting is booked and billed hourly when you need one.",
            values: { "accounting-only": false, "accounting-plus": "Hourly", "portfolio": "Quarterly", "portfolio-plus": "Monthly", "on-site": "Monthly" }
          },
          {
            label: "Admin & maintenance staff",
            tip: "Community-employed support working alongside your manager. Billed separately from the management fee.",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": false, "portfolio-plus": "Optional", "on-site": "Optional" }
          }
        ]
      },
      {
        group: "Day-to-day operations",
        rows: [
          {
            label: "Site inspections",
            tip: "A walk of the community looking for maintenance issues and covenant violations, with a written report back to the board.",
            values: { "accounting-only": false, "accounting-plus": "Per visit", "portfolio": "Monthly", "portfolio-plus": "Monthly", "on-site": "Monthly" }
          },
          {
            label: "Vendor sourcing & oversight",
            tip: "Finding and vetting contractors, collecting competing bids, and holding them to the scope once work starts.",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Covenant enforcement",
            tip: "Handled by a dedicated department: violation notices, tracking, and the escalation path your governing documents require.",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Project management",
            tip: "Scoping capital work, collecting three or more competing bids with a comparison, and overseeing the vendor through completion.",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Homeowner payment support",
            values: { "accounting-only": true, "accounting-plus": "Remote", "portfolio": true, "portfolio-plus": "On site", "on-site": "On site" }
          },
          {
            label: "On-site homeowner support",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": false, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Community event planning",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": false, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Newsletter publication",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": false, "portfolio-plus": true, "on-site": true }
          }
        ]
      },
    ]
  },

  /* Sources: brief §6.8 "What Accounting Plus Does Not Include" (verbatim
     in substance for that panel), §6.1 and §6.8 for the rest, and the
     client exhibit for billing mechanics. Nothing here is a limitation
     Edison has not already put in writing. */
  deepDive: {
    title: "What each level actually looks like.",
    sub: "Pick a level to see what it gets you and what it does not. Answer the questions above and this jumps to the one we would put you at.",
    fallback: "portfolio-plus",
    panels: {
      "accounting-only": {
        eyebrow: "Accounting Only",
        image: "/assets/img-accounting.webp",
        title: "Financial oversight, without a manager in between.",
        works: [
          "Assessments billed and recorded, vendors paid, and financials delivered monthly — on the same schedule and through the same department every other level gets.",
          "Delinquent accounts pursued by Edison's collections department: notices, payment plans, and the lien process when it goes that far.",
          "Your board stops signing checks. Financial controls and statutory recordkeeping sit with licensed professionals instead of a volunteer treasurer.",
          "Homeowners get the full resident portal, website and mobile app, plus payment support."
        ],
        know: [
          "No manager is assigned. Meetings, inspections, enforcement and vendor work all stay with your board.",
          "If you want to buy any of that occasionally rather than never, that is Accounting Plus — same base, services added as you need them."
        ]
      },
      "accounting-plus": {
        eyebrow: "Accounting Plus",
        image: "/assets/img-resident-portal.webp",
        title: "Use as much or as little as you need.",
        works: [
          "Everything in Accounting Only, plus board meetings, site inspections, project management and covenant enforcement — each booked and billed when you need it.",
          "A quiet year costs very little. A year with a repaving project and a contentious annual meeting costs more. Your board decides which year it is having.",
          "Remote homeowner support, and the same resident portal and mobile app every other level gets.",
          "Full Edison Education access for your board, exactly as at On-Site."
        ],
        know: [
          "No dedicated manager. This is the defining limitation. A booked meeting is covered by whoever is available — you can request a specific person but cannot be promised one.",
          "No deep community knowledge. A covering manager knows the law and will read your documents before the meeting. They will not know the north fence has been a fight since 2019.",
          "No depositions or expert witness work on work Edison did not perform. Documentation required by law is still provided.",
          "Self-performed enforcement shifts labor to your board: Edison provides portal access, your board enters violations and covers the mailing cost."
        ]
      },
      "portfolio": {
        eyebrow: "Portfolio",
        image: "/assets/hoa-covenant-enforcement-inspection.webp",
        title: "A manager who knows your community — and stays.",
        works: [
          "A dedicated licensed manager plus an assigned community specialist, so two people know your documents, your vendors and your history.",
          "Quarterly board meetings with real preparation and follow-up, and monthly site inspections with a written report back to the board.",
          "Vendor sourcing with three or more competing bids and a written comparison, then oversight of that vendor through completion.",
          "Covenant enforcement handled by a dedicated department rather than squeezed into one manager's week."
        ],
        know: [
          "Board meetings are quarterly at this level. Communities that want them monthly are usually looking at Portfolio Plus.",
          "There is no scheduled on-site presence. Your manager comes for inspections, meetings and project work, not on set days.",
          "Portfolio carries a monthly minimum that scales up with community size, so the starting figure should never be read as a typical price."
        ]
      },
      "portfolio-plus": {
        eyebrow: "The level nobody else offers",
        image: "/assets/central-florida-hoa-management-board-walkthrough.webp",
        title: "Portfolio Plus solves a problem nobody was addressing.",
        works: [
          "For years the choice was binary: a manager who visits, or a manager on your payroll five days a week. Communities that needed two days were paying for five.",
          "A dedicated Edison LCAM is physically in your community on a set schedule — one, two or three days a week — and carries a small portfolio alongside it.",
          "Homeowners get a face and a desk. Boards get on-site presence without funding a full-time salary, benefits and vacation cover.",
          "The full Edison back office stands behind that manager: accounting, covenant enforcement and collections departments, not one person doing everything."
        ],
        know: [
          "You and the board set the number of on-site days, and that is what you get.",
          "Admin and maintenance staff are available if you want them, billed separately from the management fee.",
          "It is the fastest-growing level in Edison's portfolio, largely because former on-site communities are converting to it."
        ]
      },
      "on-site": {
        eyebrow: "On-Site",
        image: "/assets/img-neighborhood-aerial.webp",
        title: "A manager who works for one community. Yours.",
        works: [
          "A dedicated licensed manager, full time, in your community — with monthly board meetings and on-site homeowner support.",
          "Optional admin and maintenance staff working alongside them, scaled to what the community actually runs.",
          "Community event planning and newsletter publication included rather than quoted.",
          "Edison's accounting, covenant enforcement and collections departments stand behind that manager, so they are not doing everything alone."
        ],
        know: [
          "Salary/burden costs for the manager are billed on top of the monthly management fee.",
          "This is the largest commitment of the five and needs the scale to justify it. Plenty of communities that once ran on-site have converted to Portfolio Plus instead."
        ]
      }
    }
  },

  everyLevel: {
    title: "And here is what never changes.",
    sub: "Every row above differs by level. These do not. Choosing a lighter level reduces how much manager access you buy — it does not move you to a lesser version of Edison, and it is the first thing boards ask when they look at one of the smaller levels.",
    items: [
      {
        title: "Resident portal and mobile app",
        body: "Homeowners get the same portal, website, and app at Accounting Only that they get at On-Site. Payments, documents, and requests in one place."
      },
      {
        title: "Full Edison Education access",
        body: "Board education is not a premium add-on. Every community at every level gets the same access to Edison's board education program."
      },
      {
        title: "Risk off the volunteers",
        body: "Your board stops signing checks. Financial controls, documentation, and statutory recordkeeping are handled by licensed professionals at every level."
      },
      {
        title: "Licensed, specialist departments",
        body: "Accounting, covenant enforcement, and collections are staffed departments, not side duties bolted onto one manager's week."
      }
    ]
  },

  midCta: {
    title: "Not sure which level you belong at?",
    lede: "Tell us your size, your amenities, and what your board is tired of doing. We will tell you which level fits — and say so plainly if a different one is the better value."
  },

  quote: {
    quote: "We were a hundred and twelve doors and nobody would return our calls. Every company we talked to wanted to sell us full management or nothing. Edison put us on accounting, told us exactly what we would be giving up, and then told us which two months of the year we would probably want to buy a meeting. That was the first honest conversation we had had in two years.",
    attribution: "Board President",
    role: "HOA · 112 doors",
    community: "Central Florida"
  },

  faqs: [
    {
      q: "Can we change levels later?",
      a: "Yes. Communities move between levels as their needs change — a board that starts at Accounting Only and takes on a major capital project often moves to Portfolio for the duration. Changes are handled at renewal or by amendment, and Edison will flag it proactively when your usage suggests a different level would serve you better."
    },
    {
      q: "What does 'no dedicated manager' actually mean day to day?",
      a: "At Accounting Only and Accounting Plus, no specific LCAM is assigned to your community. Your accounting is handled by Edison's accounting department, and homeowners still reach support through the portal. When you book an operational service at Accounting Plus, it is covered by whichever licensed manager is available. They will read your governing documents before the meeting, but they will not carry your community's history."
    },
    {
      q: "Is Accounting Plus cheaper than Portfolio?",
      a: "It depends entirely on how much you use. A quiet year at Accounting Plus costs well under full management. A year with a capital project, a contentious annual meeting, and regular enforcement can cost more than Portfolio would have. Edison will tell you when that is the likely outcome rather than let you find out in December."
    },
    {
      q: "Does the level affect how fast our financials arrive?",
      a: "No. Monthly financial reporting runs on the same schedule and through the same accounting department at every level, from Accounting Only through On-Site."
    },
    {
      q: "Do condo associations and HOAs get the same levels?",
      a: "Yes. Service levels cut across community type — a 60-unit HOA and a 400-unit condo association can both sit at Accounting Plus. What changes for a condo is the statutory work layered on top, including milestone inspection and structural integrity reserve study coordination, which Edison handles regardless of level."
    },
    {
      q: "How does Edison decide whether we are a fit for a level?",
      a: "We look at community size, amenity load, volunteer capacity, and how much manager access your board genuinely needs — not how much it wants to spend. Edison vets fit before placing any community, and will decline to place a board at a level that will not serve it."
    }
  ],

  cta: {
    title: "Tell us what your board is tired of doing.",
    body: "Fifteen minutes is usually enough to know which of the five levels fits your community. Request a proposal and we will scope it against your actual documents, not a template."
  }
};

export { ServiceLevelsPage, SERVICE_LEVELS_CONTENT, PRICING_MODE };
