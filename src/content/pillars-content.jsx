/* ============================================================
   Pillar Page Content, both Main Pillars
   Used by PillarPageA template.
   ============================================================ */

const PILLAR_CONTENT = {

  "hoa-management": {
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "HOA Management" }
    ],
    eyebrow: "HOA Management Services",
    phone: "(407) 317-5252",
    hero: {
      title: "HOA management built around the board, not the company growth chart.",
      lede: "Edison is a Florida HOA management company built for single-family and townhome boards across Central Florida. Dedicated managers carrying limited portfolios, well below the industry average. Back-office departments handling what isn't community-facing. Boards stop starting over.",
      image: "/assets/img-community-aerial.webp"
    },
    stats: [
      { value: "Limited", caption: "Portfolios sized to your community, well below the industry standard" },
      { value: "1 day", caption: "Same-day board response. 24-hour homeowner. Non-negotiable." },
      { value: "PCAM", caption: "Leadership credential plus 2025 CAI Chapter President" },
      { value: "4.9★", caption: "Google rating, highest in Central Florida" }
    ],
    context: {
      title: "Why most HOA management leaves boards burned out",
      paragraphs: [
        "Most management companies size their portfolios for company growth, 15 to 20 communities per manager, sometimes more. The math works on the company's spreadsheet. It doesn't work in your community. Your manager is reactive instead of proactive. Calls go to voicemail. Vendor coordination slips. The board ends up doing the management company's job.",
        "Edison was built deliberately differently. Portfolios are sized for the manager's actual capacity, 8 to 10 communities. Back-office departments handle accounting, enforcement, collections, and ARC review so the manager isn't wearing six hats. Leadership stays close: Tracy Durham, PCAM and 2025 CAI Chapter President, personally onboards every new association."
      ]
    },
    included: {
      title: "Full-service HOA management with the depth boards actually need",
      sub: "Every Edison HOA management agreement includes the operational, financial, and advisory work that keeps Florida HOAs compliant, well-funded, and well-led.",
      image: "/assets/img-inspector.webp",
      items: [
        { title: "Dedicated Association Manager", body: "Carries a deliberately limited portfolio. Visits the property monthly. Attends every board meeting. Knows your governing documents and your homeowners by name." },
        { title: "Monthly Property Inspections", body: "Documented walks of common areas, capital assets, and vendor work. Reported back to the board with photos and recommendations." },
        { title: "Vendor Sourcing & Management", body: "Three competing bids on capital projects above board-set thresholds. Insurance certificates on file. Updated contracts." },
        { title: "Action Item List", body: "Edison's live project tracker. Every active community item, its owner, status, target date, visible to the board in real time." },
        { title: "ARC & Compliance Coordination", body: "Architectural Review Committee support, governing document interpretation, and FL Chapter 720 compliance, handled by Edison's dedicated departments." },
        { title: "Reserve Study Guidance", body: "Coordination with reserve study engineers, funding plan support, and capital project sequencing." }
      ],
      bullets: [
        "Dedicated manager carrying only a limited portfolio, well below the industry average",
        "Monthly property inspections with photo documentation",
        "Vendor sourcing requiring 3+ competing bids on capital projects",
        "Live Action Item List replaces stale manager reports",
        "Dedicated departments for enforcement, accounting, collections, and ARC",
        "Monthly board reporting, annual budget support, and reserve coordination"
      ]
    },
    subServices: {
      title: "Community-Specific Management",
      sub: "Every community type has its own operational needs. Edison tailors its approach based on your association's structure, governing documents, and common-area responsibilities.",
      itemLabel: "By Community Type",
      items: [
        { title: "Single-Family HOA Management", body: "Tailored management for single-family neighborhood HOAs across Central Florida, Ch. 720 compliance, ARC support, common-area planning.", href: "/services/hoa-management/single-family" },
        { title: "Townhome Association Management", body: "Townhome-specific challenges handled, shared roofs, common insurance, party-wall maintenance.", href: "/services/hoa-management/townhome" }
      ]
    },
    whyEdison: {
      title: "What sets Edison apart, structurally",
      sub: "Boards switch to Edison because the differences aren't slogans, they're how the company is built.",
      items: [
        { title: "Industry-Low Manager Turnover", body: "Most firms see 30–40% annual manager turnover. Edison's is a fraction of that. The manager who learns your community in year one is still there in year three." },
        { title: "Dedicated Back-Office Departments", body: "Enforcement, accounting, collections, and ARC are separate departments, not your manager's overtime work." },
        { title: "Manageable Portfolio Sizes", body: "a limited number of communities per manager, well below the industry average. Yours isn't lost in a portfolio of hundreds." },
        { title: "Leadership That Stays Involved", body: "Edison's senior leadership personally onboards every new association and remains accessible to every board." },
        { title: "Modern Tools, Human Touch", body: "CINC Systems for portals and financials. WATTSON AI for 24/7 resident questions. The Action Item List for live project tracking. A real person still answers the phone." },
        { title: "Education-First Philosophy", body: "Informed boards make better decisions. Edison invests in teaching board members the statutes, the financial fundamentals, and the governance frameworks." }
      ]
    },
    antiPatterns: [
      { title: "Optional coupon books", body: "Offered only if your board wants them — free, modern courtesy email reminders are the default. Respectful of homeowner money." },
      { title: "No volume-chasing", body: "Portfolio growth is opt-in for managers. Quality over headcount, every time." },
      { title: "No manager reports", body: "Replaced by the live Action Item List. Boards see project status in real time." },
      { title: "No punitive fine culture", body: "Correction first. We talk boards out of fine-first enforcement." },
      { title: "No overloaded managers", body: "Sweet spot is a limited portfolio. Well below the industry standard. No exceptions for revenue." }
    ],
    process: {
      title: "How working with Edison actually works",
      sub: "From first conversation to operating partner, a defined timeline, not an open-ended onboarding.",
      steps: [
        { title: "Discovery & Proposal", body: "A senior Edison manager meets with your board. Written, fixed-scope proposal within 5–7 days." },
        { title: "Transition Experience", body: "If switching, the 60–90 day Edison Transition Experience runs in parallel, records, vendors, Meet Your Management event." },
        { title: "Day 1 & First 90 Days", body: "Your dedicated manager on the ground. Action Item List live. Monthly inspections. COO supervises the first 90 days." },
        { title: "Ongoing Partnership", body: "Regular board meetings, monthly inspections, transparent financials, proactive compliance. Annual renewal, you walk free anytime." }
      ]
    },
    midCta: {
      title: "Tired of doing the management company's job?",
      lede: "Edison's model is built so the board doesn't have to be reactive. Talk to us about your community."
    },
    serviceArea: {
      body: "Edison manages HOAs across Orange, Seminole, Osceola, Lake, and Brevard counties. Each city below has a dedicated HOA Management page with local context, neighborhoods, and case studies.",
      cityLinks: [
        { label: "Orlando" }, { label: "Winter Garden" }, { label: "Kissimmee" }, { label: "Clermont" },
        { label: "Lake Mary" }, { label: "Altamonte Springs" }, { label: "Oviedo" }, { label: "Brevard County" }
      ]
    },
    crossPillar: {
      eyebrow: "Different community type?",
      title: "Serve on a condominium board?",
      body: "Florida governs condos under Ch. 718 with different statutes, reserve study requirements, and milestone inspection compliance under SB-4D. Edison's Condo Management team handles all of it.",
      ctaLabel: "See Condo Management",
      href: "/services/condo-management"
    },
    quote: {
      quote: "We interviewed four companies. Edison was the only one whose principal showed up to the interview personally. A year in, that wasn't just sales, that's how they actually run.",
      attribution: "Angela P.",
      role: "Board President",
      community: "HOA · 228 units · Dr. Phillips, Orlando"
    },
    faqs: [
      { q: "How many communities will our manager have?", a: "Edison managers carry a limited number of communities, well below the industry average. We've structured portfolios this way deliberately: managers can actually know your community, not just file your community away." },
      { q: "How quickly will calls get returned?", a: "Same-day for board members. 24-hour for homeowners. Non-negotiable, and a real person answers when you call Edison's office between 9am and 5pm Monday through Friday." },
      { q: "Do you handle our financials and accounting too?", a: "Yes. Edison's accounting department is dedicated and CPA-supported. Monthly statements with invoice backup, reserve banking strategy, audit prep, and tax filing. See our HOA Accounting page for detail." },
      { q: "What technology do you use?", a: "CINC Systems for financials and homeowner portals. The Action Item List for live project tracking. WATTSON AI for 24/7 resident questions. Plaud for meeting minute automation. All included." },
      { q: "How long are your management agreements?", a: "12-month terms with clear termination provisions. We don't believe in trapping boards, if Edison isn't a fit at the end of year one, you walk free with your records intact." }
    ],
    cta: {
      title: "Ready for HOA management that scales with your community, not the portfolio.",
      body: "Tell us about your association. We'll deliver a written proposal sized for your governing documents, capital plan, and homeowner count, within one business day."
    }
  },

  "condo-management": {
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Condo Management" }
    ],
    eyebrow: "Condo Management Services",
    phone: "(407) 317-5252",
    hero: {
      title: "Florida condo management built for Chapter 718, and SB-4D reality.",
      lede: "Condo boards face a different statutory landscape than HOAs, milestone inspections, structural integrity reserve studies, and reserve funding mandates that weren't there five years ago. Edison's condo practice is built around that reality, with a dedicated accounting specialist and engineering coordination support.",
      image: "/assets/img-21.webp"
    },
    stats: [
      { value: "Ch. 718", caption: "Florida condominium statute, distinct from HOA Ch. 720" },
      { value: "SB-4D", caption: "Milestone inspection and SIRS compliance coordinated end-to-end" },
      { value: "Limited", caption: "Portfolios sized to your community, well below the industry average." },
      { value: "PCAM", caption: "Leadership credential plus 2025 CAI Chapter President" }
    ],
    context: {
      title: "Condos aren't HOAs with extra paperwork",
      paragraphs: [
        "Florida governs condominium associations under Chapter 718, a separate statute with different reserve study requirements, different governing document conventions, and a different compliance calendar than the HOA Ch. 720 framework. After Senate Bill 4D, the gap widened: condo associations three stories or more now face mandatory milestone inspections and Structural Integrity Reserve Studies on statutory deadlines that didn't exist before 2022.",
        "Most management companies treat condos as a side practice. Edison treats them as a dedicated pillar, same boutique manager-to-community ratio, but with an accounting specialist who understands SB-4D and a transition team that coordinates engineering work the way a general contractor coordinates trades."
      ]
    },
    included: {
      title: "Full-service condo management for Florida associations",
      sub: "Every Edison condo management agreement covers the day-to-day operations, the statutory compliance, and the engineering coordination that condo boards need to actually meet their obligations.",
      image: "/assets/img-22.webp",
      items: [
        { title: "Dedicated Association Manager", body: "A deliberately limited portfolio. Walks the property monthly. Attends every board meeting. Knows your governing documents and homeowners by name." },
        { title: "SB-4D Compliance Tracking", body: "Milestone inspection deadlines, SIRS triggers, and reserve funding obligations tracked centrally. No statutory deadline misses on Edison's watch." },
        { title: "Engineering Coordination", body: "Edison sources licensed engineers, coordinates site access, reviews draft reports, and integrates findings into the funding plan." },
        { title: "Common-Element Maintenance", body: "Roof, structure, elevator, pool, garage, Edison coordinates vendors with the documentation and bidding discipline condo boards need." },
        { title: "Reserve Banking & Strategy", body: "Reserve funds tracked against the most recent study with banking optimized for yield within FDIC coverage limits." },
        { title: "Insurance & Risk", body: "Master policy coordination, COI tracking on every vendor, claims advocacy when needed. Insurance is a workstream, not an afterthought." }
      ],
      bullets: [
        "Dedicated manager carrying only a limited portfolio, well below the industry average",
        "SB-4D milestone inspection and SIRS compliance coordinated end-to-end",
        "Licensed engineer sourcing and engagement management",
        "Master insurance policy coordination and vendor COI tracking",
        "Reserve banking strategy reviewed annually against current study",
        "Monthly board reporting, audit-ready accrual books, and tax filing"
      ]
    },
    subServices: {
      title: "Florida Condo Compliance",
      sub: "Florida law requires specific inspections and reserve studies for condos 3+ stories. Edison coordinates both so your board stays compliant without managing the process alone.",
      itemLabel: "Florida Statute",
      items: [
        { title: "Milestone Inspection Coordination", body: "FL SB-4D compliance for condos 30+ years old (25+ coastal). Engineer sourcing, scope review, board reporting.", href: "/services/condo-management/milestone-inspections" },
        { title: "Structural Integrity Reserve Study (SIRS)", body: "SIRS coordination for condos 3+ stories. Engineer engagement, draft review, funding plan integration.", href: "/services/condo-management/structural-integrity-reserve-study" }
      ]
    },
    whyEdison: {
      title: "What makes Edison different for condo boards specifically",
      items: [
        { title: "SB-4D Fluent", body: "Edison's team knows the statute cold. Milestone inspection triggers, SIRS components, reserve funding requirements, we won't be learning on your dime." },
        { title: "Engineer Network", body: "Working relationships with FL-licensed structural engineers across Central Florida. Faster sourcing, vetted scope, competitive pricing." },
        { title: "Dedicated Accounting Specialist", body: "Condo reserves have a different funding cadence than HOAs. Your accounting specialist understands the difference." },
        { title: "Manageable Portfolio Sizes", body: "A limited portfolio per manager. Your condo isn't lost in a portfolio of dozens." },
        { title: "Modern Communication", body: "Resident portal, CINC dashboards, WATTSON AI. Owners get answers; boards get visibility." },
        { title: "Crisis-Ready Operations", body: "When something fails, and in older buildings, something will, Edison's team has the contacts, the contracts, and the experience to act fast." }
      ]
    },
    antiPatterns: [
      { title: "Optional coupon books", body: "Offered only if your board wants them — free, modern courtesy email reminders are the default." },
      { title: "No volume-chasing", body: "Portfolio growth is opt-in for managers. Quality over headcount." },
      { title: "No manager reports", body: "Replaced by the live Action Item List." },
      { title: "No punitive fine culture", body: "Correction first. Fines as a last resort." },
      { title: "No overloaded managers", body: "Sweet spot is a limited portfolio. No exceptions for revenue." }
    ],
    process: {
      title: "How Edison's condo practice works",
      sub: "From first conversation to a multi-year operating partnership, with statutory compliance front and center.",
      steps: [
        { title: "Discovery & Compliance Audit", body: "Edison reviews governing documents, current reserve study, SIRS status, milestone inspection history, and capital pipeline before we quote." },
        { title: "Transition Experience", body: "60–90 day onboarding with COO supervision. Records, vendors, engineering relationships, and the Meet Your Management event for homeowners.", href: "/solutions/switch-hoa-management-company" },
        { title: "Day 1 & First 90 Days", body: "Your dedicated manager assigned and engaged. SB-4D calendar populated. Reserve banking reviewed. Action Item List live." },
        { title: "Ongoing Partnership", body: "Monthly financials, board meetings, statutory deadline tracking, capital project sequencing." }
      ]
    },
    midCta: {
      title: "Behind on a milestone inspection or SIRS?",
      lede: "Edison's first conversation is free and clarifying. We'll review your association's compliance status and tell you exactly where you stand."
    },
    serviceArea: {
      body: "Edison manages condominium associations across Orange, Seminole, Osceola, Lake, and Brevard counties. Coastal Brevard County in particular has a heavy concentration of SB-4D-eligible buildings.",
      cityLinks: [
        { label: "Orlando" }, { label: "Winter Garden" }, { label: "Kissimmee" }, { label: "Clermont" },
        { label: "Lake Mary" }, { label: "Altamonte Springs" }, { label: "Oviedo" }, { label: "Brevard County" }
      ]
    },
    crossPillar: {
      eyebrow: "Different community type?",
      title: "Manage a single-family or townhome HOA?",
      body: "HOAs are governed under FL Ch. 720, different from condominium Ch. 718. Edison's HOA Management pillar covers single-family neighborhoods and townhome associations.",
      ctaLabel: "See HOA Management",
      href: "/services/hoa-management"
    },
    quote: {
      quote: "The milestone inspection was looming over our board for months. Edison coordinated the engineer, scheduled the inspection, prepared the SIRS, and walked us through the report. It became a project, not a crisis.",
      attribution: "Marcus T.",
      role: "Board President",
      community: "Condo Association · 248 units"
    },
    faqs: [
      { q: "Does my condo need a milestone inspection?", a: "If your condominium or cooperative is three stories or more and 30+ years old (25+ in coastal counties), yes. FL SB-4D mandates phased structural inspections by licensed engineers, with specific deadlines tied to building age and location." },
      { q: "What's the difference between a milestone inspection and a SIRS?", a: "The milestone inspection is a physical structural assessment. The SIRS is a reserve study scoped to the structural components the inspection identifies. They're complementary, most associations need both, often sequenced." },
      { q: "Do you handle the engineering work directly?", a: "No, Florida statute requires licensed independent engineers. Edison coordinates: sourcing, scope review, document prep, site access, draft review, and board presentation." },
      { q: "What about Ch. 720 HOAs versus Ch. 718 condos?", a: "Different statutes, different reserve study requirements, different governing document conventions. Edison maintains a separate Condo Management practice precisely because the regulatory frameworks aren't interchangeable." },
      { q: "How long are your management agreements?", a: "12-month terms with clear termination provisions. You walk free at renewal with your records intact." }
    ],
    cta: {
      title: "Condo management for boards who can't afford a learning curve.",
      body: "Tell us about your building. We'll deliver a written proposal sized for your governing documents, compliance status, and capital pipeline, within one business day."
    }
  }
};

export { PILLAR_CONTENT };
