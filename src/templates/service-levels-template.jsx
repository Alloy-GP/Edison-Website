import React from 'react';
import { Breadcrumb, FAQ, FinalCTA, InteriorButton, InteriorEyebrow,
         MidCTA } from '../components/interior-components';
import { AntiPatterns, BulletsWithImage, PullQuote } from '../components/template-sections';
import { TierCards, LevelChooser, FeatureMatrix,
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

   Nothing else needs to change. The tier cards, the matrix header
   and the matrix pricing row all read from this.
   ============================================================ */
const PRICING_MODE = 'accounting-only';

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
              <InteriorButton variant="primary" size="lg" href="#compare">Compare all five levels</InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/request-a-proposal">Request a Proposal</InteriorButton>
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

      <LevelChooser
        eyebrow="Start with the problem"
        title={content.chooser.title}
        sub={content.chooser.sub}
        paths={content.chooser.paths}
      />

      <TierCards
        eyebrow="The five levels"
        title={content.tierCards.title}
        sub={content.tierCards.sub}
        tiers={tiers}
        showPricing={SHOW_PRICING}
      />

      <div id="compare" style={{ scrollMarginTop: "var(--site-header-height)" }}>
        <FeatureMatrix
          eyebrow="Side by side"
          title={content.matrix.title}
          sub={content.matrix.sub}
          tiers={tiers}
          groups={content.matrix.groups}
          footnotes={content.matrix.footnotes}
          showPricing={SHOW_PRICING}
          background="var(--bg-3, #F5F7FA)"
        />
      </div>

      <BulletsWithImage
        eyebrow="The level nobody else offers"
        title={content.spotlight.title}
        bullets={content.spotlight.bullets}
        image={content.spotlight.image}
      />

      {/* Light variant on purpose — the band below it is navy, and two dark
          sections back to back read as one undifferentiated block. */}
      <AntiPatterns
        eyebrow="Before you choose Accounting Plus"
        title={content.limits.title}
        items={content.limits.items}
        variant="light"
        background="var(--edison-teal-pale)"
      />

      <EveryLevelBand
        eyebrow="Constant across the ladder"
        title={content.everyLevel.title}
        sub={content.everyLevel.sub}
        items={content.everyLevel.items}
      />

      <MidCTA
        variant="teal"
        title={content.midCta.title}
        lede={content.midCta.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
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
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g, "")}` }}
      />
    </main>
  );
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
    lede: "Most management companies sell one package and ask every board to fit inside it. Edison offers five levels, from behind-the-scenes accounting to a manager dedicated to your community full time. A quiet year costs less. A year with a repaving project and a contentious annual meeting costs more. Your board decides which year it is having.",
    image: "/assets/img-community-aerial.webp"
  },

  chooser: {
    title: "Which level fits your community?",
    sub: "Boards rarely arrive knowing what to call the thing they need. Find the sentence that sounds like your last board meeting.",
    paths: [
      {
        scenario: "We are small, we handle ourselves fine, we just need the money handled right.",
        why: "You have volunteers who show up and vendors you trust. What you do not have is anyone who should be signing checks or chasing delinquent assessments on a Saturday. Accounting Only takes the financial risk off your board without putting a manager between you and your community.",
        tierId: "accounting-only",
        tierName: "Accounting Only"
      },
      {
        scenario: "We can run most of it ourselves — we just want a professional available when it matters.",
        why: "Most months you do not need a manager. But the annual meeting is contentious, the roof project needs bids, or an enforcement letter has to be right. Accounting Plus keeps the books covered and lets you buy the operational help only in the months you need it.",
        tierId: "accounting-plus",
        tierName: "Accounting Plus"
      },
      {
        scenario: "We want a manager who knows our community, not whoever picks up the phone.",
        why: "This is standard full management and the level most communities belong at. A dedicated LCAM and a community specialist who know your documents, your history, and your vendors. Quarterly board meetings, monthly site inspections, project and vendor work handled.",
        tierId: "portfolio",
        tierName: "Portfolio"
      },
      {
        scenario: "We want someone on site — but not five days a week, and not on our payroll.",
        why: "Plenty of communities were paying for a full-time on-site manager when they genuinely needed one to three days. Portfolio Plus puts a dedicated manager physically in your community on a set schedule, with the full back office behind them.",
        tierId: "portfolio-plus",
        tierName: "Portfolio Plus"
      },
      {
        scenario: "Our community is large enough that someone needs to be here every day.",
        why: "Significant amenities, active construction, a clubhouse that runs events, or enough doors that homeowner traffic alone fills a week. On-Site gives you a manager dedicated to one community full time — yours — with optional admin and maintenance staff alongside.",
        tierId: "on-site",
        tierName: "On-Site"
      },
      {
        scenario: "Honestly, we have no idea which of these we are.",
        why: "Then let us look at it with you. Edison reviews size, amenity load, volunteer capacity, and how much manager access a community genuinely needs before placing anyone. If a level is wrong for you — including if full management is the better value — we will tell you.",
        tierId: "compare",
        tierName: "Compare all five"
      }
    ]
  },

  tierCards: {
    title: "Five levels, one standard of service.",
    sub: "The level changes how much manager access you get and what you pay for it. It never changes who is doing the work or how carefully it gets done."
  },

  /* quoted:true routes a tier to "Custom quote" when PRICING_MODE is
     'accounting-only'. Figures are starting points, not typical prices. */
  tiers: [
    {
      id: "accounting-only",
      name: "Accounting Only",
      summary: "Everything financial, nothing operational. The books, the billing, and the collections, handled by professionals.",
      price: "$500",
      priceNote: "per month, starting",
      priceShort: "From $500/mo",
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
      bestFit: "Small communities, often self-managed or with their own on-staff help, that need financial oversight and risk off the volunteers."
    },
    {
      id: "accounting-plus",
      name: "Accounting Plus",
      summary: "Accounting Only, plus any operational service you buy as you need it. Meetings, inspections, projects, enforcement — priced per use.",
      price: "$500",
      priceNote: "per month, plus services as needed",
      priceShort: "From $500/mo + services",
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
      bestFit: "Small communities with capable volunteers or strong vendor relationships that want a professional available for specific needs."
    },
    {
      id: "portfolio",
      name: "Portfolio",
      summary: "Standard full management. A dedicated LCAM and community specialist who know your community, your documents, and your vendors.",
      price: "$2,000",
      priceNote: "per month, starting — scales with community size",
      priceShort: "From $2,000/mo",
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
      bestFit: "Communities that want a manager who knows them and stays. The most common fit by a wide margin."
    },
    {
      id: "portfolio-plus",
      name: "Portfolio Plus",
      summary: "The hybrid. A dedicated manager physically on site one to three days a week, with the full Edison back office behind them.",
      price: "$600",
      priceNote: "per on-site day, starting",
      priceShort: "From $600/day",
      quoted: true,
      badge: "Growing fastest",
      managerAccess: "Dedicated manager, scheduled on-site days",
      highlights: [
        "LCAM on site 1–3 days a week",
        "Monthly board meetings",
        "On-site homeowner support",
        "Site inspections at board's cadence",
        "Community event planning",
        "Newsletter publication"
      ],
      bestFit: "Larger communities that want regular on-site presence without funding a full-time manager."
    },
    {
      id: "on-site",
      name: "On-Site",
      summary: "A manager dedicated to one community full time. Yours. Optional admin and maintenance staff alongside them.",
      price: "$2,000",
      priceNote: "per month, plus manager salary, burden & markup",
      priceShort: "From $2,000/mo + staffing",
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
      bestFit: "Large communities with the scale and budget to support a full-time manager of their own."
    }
  ],

  matrix: {
    title: "What you get at each level",
    sub: "Everything financial is covered at every level. What changes as you move up is manager access, on-site presence, and how much of the operational work sits with your board.",
    footnotes: [
      "Pricing shown is starting pricing and may vary based on community size, scope and service requirements.",
      "Per use means the service is available at Accounting Plus and billed when you book it, rather than included in the monthly fee.",
      "On-Site and Portfolio Plus staffing is billed separately from the monthly management fee."
    ],
    groups: [
      {
        group: "Financial management",
        rows: [
          {
            label: "Assessment processing",
            values: { "accounting-only": true, "accounting-plus": true, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Monthly financial reporting",
            values: { "accounting-only": true, "accounting-plus": true, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "AR / AP processing",
            values: { "accounting-only": true, "accounting-plus": true, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Collections processing",
            values: { "accounting-only": true, "accounting-plus": true, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Homeowner payment support",
            values: { "accounting-only": true, "accounting-plus": "Remote", "portfolio": true, "portfolio-plus": "On site", "on-site": "On site" }
          }
        ]
      },
      {
        group: "Your manager",
        rows: [
          {
            label: "Dedicated LCAM",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": "Assigned", "portfolio-plus": "1–3 days on site", "on-site": "Full time, on site" }
          },
          {
            label: "Assigned community specialist",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Board meetings",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": "Quarterly", "portfolio-plus": "Monthly", "on-site": "Monthly" }
          },
          {
            label: "Admin & maintenance staff",
            values: { "accounting-only": false, "accounting-plus": false, "portfolio": false, "portfolio-plus": "Optional", "on-site": "Optional" }
          }
        ]
      },
      {
        group: "Day-to-day operations",
        rows: [
          {
            label: "Site inspections",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": "Monthly", "portfolio-plus": "Board sets cadence", "on-site": "Board sets cadence" }
          },
          {
            label: "Vendor sourcing & oversight",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Covenant enforcement",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Project management",
            values: { "accounting-only": false, "accounting-plus": "Per use", "portfolio": true, "portfolio-plus": true, "on-site": true }
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
      {
        group: "Technology & education",
        rows: [
          {
            label: "Resident portal, website & mobile app",
            values: { "accounting-only": true, "accounting-plus": true, "portfolio": true, "portfolio-plus": true, "on-site": true }
          },
          {
            label: "Edison Education access",
            values: { "accounting-only": true, "accounting-plus": true, "portfolio": true, "portfolio-plus": true, "on-site": true }
          }
        ]
      }
    ]
  },

  spotlight: {
    title: "Portfolio Plus solves a problem nobody was addressing.",
    image: "/assets/central-florida-hoa-management-board-walkthrough.webp",
    bullets: [
      "For years the choice was binary: a manager who visits, or a manager on your payroll five days a week. Communities that needed two days were paying for five.",
      "A dedicated Edison LCAM is physically in your community on a set schedule — one, two, or three days a week — and carries a small portfolio alongside it.",
      "Homeowners get a face and a desk. Boards get on-site presence without funding a full-time salary, benefits, and coverage for vacation weeks.",
      "The full Edison back office stands behind that manager: accounting, covenant enforcement, and collections departments, not one person doing everything.",
      "It is the fastest-growing level in Edison's portfolio, largely because former on-site communities are converting to it."
    ]
  },

  limits: {
    title: "What Accounting Plus does not include.",
    items: [
      {
        title: "No dedicated manager",
        body: "This is the defining limitation and the one Edison leads with. A booked meeting is covered by whoever is available. A board can request a specific person but cannot be promised one."
      },
      {
        title: "No deep community knowledge",
        body: "A covering manager knows the law and will read your documents before the meeting. They will not know that the north fence has been a fight since 2019."
      },
      {
        title: "No depositions or expert witness work",
        body: "Edison provides the documentation required by law, but will not serve as an expert witness on work it did not perform."
      },
      {
        title: "Self-performed enforcement shifts labor to your board",
        body: "Where a board handles its own inspections, Edison provides portal access so the board enters violations directly, and the board covers mailing costs. Edison charges for any inspection it performs."
      }
    ]
  },

  everyLevel: {
    title: "Four things do not change, whichever level you pick.",
    sub: "Moving down the ladder reduces how much manager access you buy. It does not move you to a lesser version of Edison.",
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
      a: "Yes. Communities move up and down the ladder as their needs change — a board that starts at Accounting Only and takes on a major capital project often moves to Portfolio for the duration. Changes are handled at renewal or by amendment, and Edison will flag it proactively when your usage suggests a different level would serve you better."
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
    body: "Fifteen minutes is usually enough to know which of the five levels fits your community. Request a proposal and we will scope it against your actual documents, not a generic package."
  }
};

export { ServiceLevelsPage, SERVICE_LEVELS_CONTENT, PRICING_MODE };
