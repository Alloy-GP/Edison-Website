/* ============================================================
   Sub-Service Content, 4 statutory + 2 property-type
   Used by SubServicePage template.
   ============================================================ */

const SUB_SERVICES_CONTENT = {

  "single-family": {
    serviceLabel: "Single-Family HOA Management",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "HOA Management", href: "/services/hoa-management" },
      { label: "Single-Family" }
    ],
    parent: { label: "HOA Management", href: "/services/hoa-management" },
    eyebrow: "COMMUNITY TYPE · SINGLE-FAMILY",
    phone: "(407) 317-5252",
    hero: {
      title: "HOA management built for single-family neighborhoods.",
      lede: "Single-family HOAs in Central Florida share a profile, detached homes, individual lots, shared common areas, ARC review on exteriors. Edison's HOA management practice was built around exactly this community type.",
      image: "/assets/img-13.webp",
      statute: "Florida Statute Ch. 720"
    },
    spec: [
      { label: "90%", value: "Back-office resolves 90% of homeowner requests without involving your manager" },
      { label: "3+ bids", value: "Vendor contracts competitively sourced with comparison spreadsheets" },
      { label: "ARC", value: "Dedicated architectural review, not your manager's side task" }
    ],
    context: {
      title: "What makes single-family HOA management distinct",
      paragraphs: [
        "Single-family HOAs are the most common community type in Central Florida, detached homes on individual lots, shared common areas (typically pool, clubhouse, playground, sometimes a private entrance and landscaped frontage), and an Architectural Review Committee that reviews exterior changes against the community's CC&Rs.",
        "The day-to-day work pattern is different from condo or townhome management. ARC volume is higher (paint colors, fences, sheds, additions). Vendor sourcing centers on landscape, irrigation, and common-element maintenance rather than building-envelope work. Reserve studies cover community amenities and infrastructure, not building structure. Edison's HOA management practice is sized and staffed for this profile."
      ]
    },
    included: {
      title: "What's included for single-family communities specifically",
      sub: "Edison's standard HOA management for single-family neighborhoods, with the workstreams calibrated to this community type.",
      items: [
        { title: "ARC Submission Workflow", body: "Inbound architectural review submissions sorted, decisioned, and tracked through the Action Item List on the board's defined timelines." },
        { title: "Landscape & Irrigation Vendor Management", body: "Three competing bids on annual contracts. Insurance certificates current. Performance documented." },
        { title: "Common-Area Inspections", body: "Pool, clubhouse, playground, signage, entry features, inspected monthly with photo documentation." },
        { title: "Covenant Enforcement", body: "Address-not-name inspections. Courtesy-first protocol. Monthly enforcement reporting in your board portal." },
        { title: "Resident Communication", body: "CINC portal for documents and payments. WATTSON AI for 24/7 questions. Real-person phone coverage M–F." },
        { title: "Reserve & Budget Planning", body: "Annual budget built around real operating data and community reserve study recommendations." }
      ]
    },
    process: {
      title: "How Edison runs day-to-day for a single-family HOA",
      sub: "Predictable cadence, transparent reporting.",
      steps: [
        { title: "Monthly Inspection", body: "Full property walk-through with photo documentation. Findings routed into the Action Item List for tracking." },
        { title: "ARC & Enforcement Cycle", body: "ARC submissions processed weekly. Enforcement on a documented monthly cycle." },
        { title: "Board Reporting", body: "Monthly financial package + Action Item List update. Monthly enforcement report in the board portal." },
        { title: "Annual Cycle", body: "Budget cycle Jul–Nov. Annual meeting support. Reserve study coordination on the schedule the study itself sets." }
      ]
    },
    midCta: {
      title: "Single-family board exploring better management?",
      lede: "Let's talk. Edison can walk your board through how we'd approach your community."
    },
    faqs: [
      { q: "Does Edison work with smaller HOAs?", a: "Yes. Edison manages single-family HOAs from roughly 60 units up through 500+. Smaller communities don't get a smaller manager, they get the same boutique-portfolio model, just with proportionally smaller scope." },
      { q: "How is the ARC handled?", a: "Edison's enforcement department processes inbound ARC submissions, routes them to the board's ARC committee or appointed reviewer, tracks decision timing, and documents approvals/denials in the Action Item List." },
      { q: "Can we customize the inspection cadence?", a: "Yes. Most single-family communities get a monthly drive-through baseline. More frequent or less frequent inspections are available based on the community's needs and the board's preference." },
      { q: "What about Ch. 720 compliance specifically?", a: "Edison's team handles Ch. 720 statutory requirements, annual meetings, election protocols, notice timing, reserve disclosure, and the regulatory changes that arrive every legislative session." },
      { q: "Do you handle townhome HOAs too?", a: "Yes, but townhome management is different enough that Edison runs it as a separate sub-service practice, different vendor mix (building envelope, party walls), different insurance treatment, different reserve scope. See the Townhome page for detail." }
    ],
    related: [
      { kind: "Parent Pillar", title: "HOA Management", body: "Full-service management for single-family and townhome HOAs.", href: "/services/hoa-management" },
      { kind: "Sibling Sub-Service", title: "Townhome Association Management", body: "Townhome-specific management, shared roofs, party walls, common insurance.", href: "/services/hoa-management/townhome" },
      { kind: "Sibling Service", title: "HOA Accounting", body: "Dedicated accounting specialist, audit-ready books, reserve discipline.", href: "/services/hoa-accounting" }
    ],
    cta: {
      title: "Single-family HOA management calibrated to your community type.",
      body: "Tell us about your community. We'll respond with a written proposal, within one business day."
    }
  },

  "townhome": {
    serviceLabel: "Townhome Association Management",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "HOA Management", href: "/services/hoa-management" },
      { label: "Townhome" }
    ],
    parent: { label: "HOA Management", href: "/services/hoa-management" },
    eyebrow: "COMMUNITY TYPE · TOWNHOME",
    phone: "(407) 317-5252",
    hero: {
      title: "Townhome association management, attached housing, shared building elements.",
      lede: "Townhome HOAs sit between single-family and condominium in their governing pattern, Ch. 720 statutory frame, but with shared roofs, party walls, and common building elements that demand a different vendor mix and reserve scope.",
      image: "/assets/img-22.webp",
      statute: "Florida Statute Ch. 720"
    },
    spec: [
      { label: "90%", value: "Back-office resolves routine requests without involving your manager" },
      { label: "Shared", value: "Building envelope, roofs, and party walls managed as community assets" },
      { label: "ARC", value: "Architectural review tuned for attached housing modifications" }
    ],
    context: {
      title: "Why townhome management isn't single-family management",
      paragraphs: [
        "Townhome HOAs are governed under FL Ch. 720, the same statute as single-family, but the operating profile is closer to a condominium. Roofs are shared across multiple units. Party walls require coordinated insurance and maintenance. Building envelope work (siding, paint, gutters, soffits) is association-level, not homeowner-level. Reserve studies look more like a condo's than a typical HOA's.",
        "Generic HOA managers tend to under-resource townhome communities, fewer vendor relationships in building envelope, less reserve study sophistication, and ARC workflows calibrated for single-family changes that don't match what townhome residents actually need to request. Edison's townhome practice is staffed and tooled for the attached-housing reality."
      ]
    },
    included: {
      title: "What's included for townhome associations specifically",
      sub: "Edison's HOA management with the workstreams sized for attached housing.",
      items: [
        { title: "Building Envelope Coordination", body: "Roof, siding, gutters, paint, vendor sourcing, scope definition, and scheduling for community-wide work." },
        { title: "Insurance Master-Policy Tracking", body: "Coordination with the master insurance carrier on certificates, claims, and renewal cycles." },
        { title: "Party-Wall & Common-Element Protocols", body: "Defined handling for issues that span multiple units, water intrusion, pest, structural questions." },
        { title: "ARC for Attached Housing", body: "ARC workflow tuned for the changes townhome residents actually request, windows, doors, patios, fencing." },
        { title: "Reserve Study for Building Components", body: "Reserve scope includes roof, building envelope, and amenities, not just amenities." },
        { title: "Resident Communication", body: "CINC portal. WATTSON AI. Phone coverage M–F. Same access every Edison community receives." }
      ]
    },
    process: {
      title: "How townhome management runs differently",
      sub: "Cadence is similar; vendor mix and reserve scope are not.",
      steps: [
        { title: "Onboarding & Audit", body: "Edison audits the master policy, current vendor contracts, and reserve study against the actual building inventory." },
        { title: "Monthly Operations", body: "Property inspection, ARC processing, enforcement cycle, financial reporting. Consistent and predictable." },
        { title: "Capital Project Cycle", body: "Edison sources, sequences, and coordinates building-envelope projects, typically roof, paint, gutters, soffit, on rolling schedules." },
        { title: "Annual Cycle", body: "Budget season Jul–Nov, with building-component capital pacing built in. Reserve study refreshed on the study's schedule." }
      ]
    },
    midCta: {
      title: "Townhome board frustrated by generic HOA management?",
      lede: "Let's talk. Edison can walk your board through how we'd approach your community's building inventory and vendor relationships."
    },
    faqs: [
      { q: "Are townhomes governed under Ch. 720 or Ch. 718?", a: "Almost always Ch. 720 (HOA). Townhomes are residential subdivisions even when units are attached, and they're typically declared under HOA documents rather than condominium documents. If your community is a 'townhome condominium' (rare but possible), it's under Ch. 718 and Edison's Condo Management pillar applies." },
      { q: "How are roof replacements handled?", a: "Roof replacement is typically a community-wide capital project sequenced over multiple years to manage cash flow and contractor availability. Edison sources 3+ competing bids on roof scope, manages the contractor relationship, and coordinates resident notification building by building." },
      { q: "What about insurance, master policy or individual?", a: "Townhome associations typically maintain a master policy covering the building envelope and shared elements, with homeowners responsible for interior coverage (HO-6). Edison coordinates the master policy and tracks vendor COIs against the community's risk profile." },
      { q: "Can my townhome owner make exterior changes?", a: "Exterior changes go through the ARC like any HOA, but the bar tends to be higher for townhomes because changes affect the visual continuity of the attached row. Edison handles the workflow; the board's ARC sets the standards." },
      { q: "Do you handle smaller townhome communities?", a: "Yes. Edison manages townhome associations from roughly 40 units up through 300+. Smaller communities benefit most from the boutique-portfolio model because there's less margin for operational drag." }
    ],
    related: [
      { kind: "Parent Pillar", title: "HOA Management", body: "Full-service management for single-family and townhome HOAs.", href: "/services/hoa-management" },
      { kind: "Sibling Sub-Service", title: "Single-Family HOA Management", body: "Detached-home HOAs with shared amenities.", href: "/services/hoa-management/single-family" },
      { kind: "Sibling Service", title: "HOA Accounting", body: "Dedicated accounting specialist with reserve discipline.", href: "/services/hoa-accounting" }
    ],
    cta: {
      title: "Townhome management with the right vendor mix and reserve scope.",
      body: "Tell us about your community, unit count, age, current building-envelope status. We'll respond with a written proposal within one business day."
    }
  },

  "budget-preparation": {
    serviceLabel: "Budget Preparation",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "HOA Accounting", href: "/services/hoa-accounting" },
      { label: "Budget Preparation" }
    ],
    parent: { label: "HOA Accounting", href: "/services/hoa-accounting" },
    eyebrow: "Sub-Service · HOA Accounting",
    phone: "(407) 317-5252",
    hero: {
      title: "Annual budget preparation that boards can actually defend.",
      lede: "Most community association budgets are last year's plus inflation. Edison's budget preparation is built from operating data, reserve study recommendations, and an honest read of the community's capital pipeline, so boards approve a number they can stand behind.",
      image: "/assets/img-accounting.webp",
      statute: "FL Ch. 720 / Ch. 718"
    },
    spec: [
      { label: "Cycle", value: "Jul–Nov annually" },
      { label: "Format", value: "Scenarios, not a single number" },
      { label: "Delivered", value: "Board-meeting-ready" }
    ],
    context: {
      title: "Why most HOA budgets get rubber-stamped, and why that's expensive",
      paragraphs: [
        "The default budget cycle in most management companies is straightforward: take last year's budget, add an inflation assumption to each line, present to the board, ask for approval. It's fast. It's also why so many communities end up underfunded when capital projects arrive, the budget never reflected what was actually coming.",
        "Edison's budget preparation works from the bottom up. We pull twelve months of actual operating data, overlay reserve study recommendations, sequence the capital pipeline against the reserve banking strategy, and present multiple scenarios so the board can see the trade-offs. The output is a budget your treasurer can defend, and a community that funds what it actually needs."
      ]
    },
    included: {
      title: "What Edison's budget preparation actually delivers",
      sub: "Not a spreadsheet handed off the week before the meeting, a process that starts in July.",
      items: [
        { title: "Operating Data Review", body: "Twelve months of actual expense by category. Variances analyzed. Anomalies flagged. The base is real spend, not last year's plan." },
        { title: "Reserve Study Integration", body: "Current reserve study recommendations sequenced into the next 12 months. Funding pace reviewed against statutory expectations." },
        { title: "Capital Project Pipeline", body: "Known capital projects scheduled against reserve banking, vendor availability, and cash flow. No surprise special assessments." },
        { title: "Scenarios, Not a Single Number", body: "Three scenarios typically, conservative, base, aggressive, with the funding implications spelled out so the board chooses with full visibility." },
        { title: "Board-Ready Presentation", body: "Budget package includes a one-page summary, line-item detail, and a scenarios comparison. Designed for the annual meeting, not just the treasurer's spreadsheet." },
        { title: "Reserve Disclosure Compliance", body: "FL Ch. 720 / 718 reserve disclosure requirements built into the package, not added later when statute requires it." }
      ]
    },
    process: {
      title: "Edison's annual budget cycle",
      sub: "July–November, with a defined cadence and clear deliverables.",
      steps: [
        { title: "July, Data Pull & Review", body: "Operating data, reserve study, vendor contracts, and capital pipeline assembled and reviewed by Edison's accounting team." },
        { title: "Aug/Sept, Draft Scenarios", body: "Three scenarios drafted with funding implications. Treasurer review session scheduled." },
        { title: "Sept/Oct, Review & Adoption", body: "Budget presented at a regular board meeting with the scenarios comparison. Board reviews the options and votes to adopt the version it wants to approve." },
        { title: "November, Notice", body: "Adopted budget formalized, homeowner notice mailed per FL statute, and integrated into the next fiscal year's reporting cadence." }
      ]
    },
    midCta: {
      title: "Want a second-opinion on this year's budget?",
      lede: "Edison's first conversation is free. We'll review your current budget against operating data and the reserve study, and flag what we'd do differently."
    },
    faqs: [
      { q: "When does Edison's budget cycle start?", a: "July. Twelve months of operating data are needed for a clean variance review, and most associations close their fiscal year on a calendar basis, so starting in July gives us the runway to deliver a board-ready package in the fall and send the statutory homeowner notice in November." },
      { q: "Are we required to present multiple scenarios?", a: "Not by statute, but it's how Edison runs the process. Single-number budgets force boards to vote yes or vote no without seeing alternatives. Scenarios show the funding implications of each choice, and document the board's reasoning if questions come up later." },
      { q: "What if our reserve study is out of date?", a: "Edison flags it. If the study is more than 3–5 years old (varies by community type), we recommend a refresh and sequence the project. The budget reflects the best information available; the gap gets named, not hidden." },
      { q: "How does Edison handle reserve disclosure?", a: "FL statute requires reserve disclosure language in the budget package each year. Edison's standard package includes the disclosure language, the reserve funding pace, and the board's reserve decision (fully funded, partial waiver if statutorily permitted, etc.), formatted for the FL-required homeowner notice." },
      { q: "Can the board still customize the budget?", a: "Always. Edison drafts scenarios; the board approves the version it wants. We'll document the board's modifications and reflect them in the final package. The board's decisions are the binding ones." }
    ],
    related: [
      { kind: "Full service", title: "HOA Accounting", body: "Full financial management, monthly reporting, reserve banking, audit prep, tax filing.", href: "/services/hoa-accounting" },
      { kind: "Also included", title: "Reserve Study Support", body: "Coordination with reserve study engineers and funding plan integration.", href: "/services/hoa-accounting/reserve-study-support" },
      { kind: "Guide", title: "How to Prepare an HOA Budget", body: "The step-by-step board guide behind this service, from actuals to adopted dues.", href: "/blog/hoa-budget-preparation" }
    ],
    cta: {
      title: "A budget your board can defend, with the work that builds it.",
      body: "Tell us about your association, fiscal year, current budget status, biggest unknowns. We'll respond with a proposal within one business day."
    }
  },

  "reserve-study-support": {
    serviceLabel: "Reserve Study Support",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "HOA Accounting", href: "/services/hoa-accounting" },
      { label: "Reserve Study Support" }
    ],
    parent: { label: "HOA Accounting", href: "/services/hoa-accounting" },
    eyebrow: "Sub-Service · HOA Accounting",
    phone: "(407) 317-5252",
    hero: {
      title: "Reserve study support, from engineer engagement through funding plan adoption.",
      lede: "A reserve study is only as useful as the funding plan it produces. Edison coordinates the engineer engagement, reviews the deliverable against the community's actual capital history, and integrates findings into the next budget cycle.",
      image: "/assets/img-21.webp",
      statute: "FL Ch. 720 / Ch. 718"
    },
    spec: [
      { label: "Cadence", value: "Refresh every 3–5 years" },
      { label: "Edison's role", value: "Coordination + integration" },
      { label: "Output", value: "Adopted funding plan" }
    ],
    context: {
      title: "Reserve studies that produce funding plans, not just reports",
      paragraphs: [
        "A reserve study by itself doesn't fund anything. It's an engineer's inventory and price estimate for the community's capital components, useful, but inert until a board adopts a funding strategy that matches it. The gap between 'we have a reserve study' and 'we're funding to the study' is where most communities end up underfunded.",
        "Edison's reserve study support closes that gap. We coordinate the engineer engagement (sourcing, scope review, document prep, site access), review the draft report against the community's actual capital and maintenance history, and translate the engineer's recommendations into a funding plan the board can adopt. Then we integrate the plan into the <a href=\"/services/hoa-accounting/budget-preparation\">annual budget</a> so reserve banking actually tracks the study.",
        "Florida treats the two association types differently. Under Ch. 720, HOAs must carry reserve accounts and disclose them in the budget, but owners can vote each year to waive or partially fund, which is exactly how communities drift into special-assessment territory one budget at a time. Under Ch. 718, condominium buildings three stories or higher also need a <a href=\"/services/condo-management/structural-integrity-reserve-study\">Structural Integrity Reserve Study</a>, and funding for those structural components can't be waived the same way. Most condo associations end up needing both studies, on two different cadences.",
        "Where a study is out of date, the practical question isn't whether to refresh, it's what the refresh will surface. Components priced four years ago in a Florida construction market rarely cost what the old report says today. Edison's accounting team models the delta before the board commissions the work, so the funding conversation starts from a realistic number rather than a stale one. Our <a href=\"/blog/hoa-reserve-study-guide\">Florida reserve study guide</a> walks boards through what the report contains and how to read it."
      ]
    },
    included: {
      title: "What Edison handles around the reserve study itself",
      sub: "The engineer does the study. Edison does everything around it.",
      items: [
        { title: "Engineer Sourcing", body: "Three competing bids from qualified reserve study firms. Scope reviewed for completeness." },
        { title: "Document & History Package", body: "Prior reserve studies, capital expenditure history, maintenance logs, and warranty records assembled for the engineer on day one." },
        { title: "Site Access Coordination", body: "Vendor coordination, resident notification, roof and equipment access, handled so the engineer's site visit doesn't drag." },
        { title: "Draft Report Review", body: "Edison's accounting team reviews the draft against community history, flags discrepancies, and coordinates engineer revisions." },
        { title: "Funding Plan Integration", body: "Engineer's recommended funding levels translated into a budget-line strategy. Reserve banking adjusted to match." },
        { title: "Board Adoption Support", body: "Board-ready presentation of findings and funding options. Adopted plan integrated into the next annual budget cycle." }
      ]
    },
    process: {
      title: "How Edison runs a reserve study engagement",
      sub: "Typically 90–120 days from engagement to adopted funding plan.",
      steps: [
        { title: "Scope & Source", body: "Edison defines the scope (full study vs update), sources 3 competing bids, and coordinates board selection." },
        { title: "Document Prep & Site Work", body: "History package delivered to engineer. Site access coordinated. Engineer performs inventory and pricing work." },
        { title: "Draft Review & Revision", body: "Edison reviews the draft, flags discrepancies against community history, and coordinates engineer revisions before the final issue." },
        { title: "Funding Plan & Adoption", body: "Funding scenarios presented to the board. Plan adopted, integrated into next budget, and reserve banking adjusted to match." }
      ]
    },
    midCta: {
      title: "Reserve study more than 5 years old, or not on file at all?",
      lede: "Edison's first conversation is free. We'll tell you what's required for your community type and what a refresh would actually cost."
    },
    faqs: [
      { q: "How often does our community need a reserve study?", a: "FL practice is a full reserve study every 3–5 years with annual updates between full studies. For condos 3+ stories, the SIRS adds an additional structural-component study on a separate cadence under SB-4D. Edison tracks the calendar centrally." },
      { q: "Can we use our existing reserve study?", a: "Yes if it's current and scoped appropriately. Edison reviews what you have, flags gaps against the community's actual capital inventory and statutory requirements, and recommends a refresh only if the gap requires it, not as a default revenue play." },
      { q: "What's the difference between a reserve study and a SIRS?", a: "A traditional reserve study covers community capital components broadly (amenities, infrastructure, equipment). A SIRS is FL-specific, scoped to 8 mandated structural and life-safety components for condos 3+ stories, and required by SB-4D. Most condos now need both." },
      { q: "Does Edison do the engineering work directly?", a: "No, FL practice and the credibility of the study require an independent engineer or licensed reserve study firm. Edison coordinates the engagement; the engineer performs the study itself." },
      { q: "What does a reserve study cost?", a: "Typical full studies for HOAs run $4,000–$9,000 depending on community size and capital inventory complexity. SIRS engagements for condos run $8,000–$25,000+ given the structural engineering involved. Edison sources 3 competing bids and the board selects." },
      { q: "Does Florida law require our HOA to have a reserve study?", a: "Chapter 720 does not mandate a formal reserve study for HOAs. It requires reserve accounts in the annual budget and disclosure to members, and it lets owners vote to waive or partially fund. Most governing documents, however, require a study every three to five years, and lenders, insurers, and buyers increasingly ask for a current one. Condominium buildings three stories or higher are in a different position: the SIRS is mandatory under Chapter 718." },
      { q: "What percent funded should our reserves be?", a: "CAI treats 70% funded or above as adequately funded, 30–70% as a caution range where special assessment risk rises, and below 30% as high risk. The percentage matters less than the trajectory. A community at 45% and climbing on an adopted plan is in better shape than one at 65% that has waived reserves three years running." },
      { q: "Can we use reserve funds for something other than what the study lists?", a: "Not without following the statutory process. Reserve funds earmarked by the budget for specific components generally can't be redirected to operating expenses or other projects without the required membership vote. Edison flags this before a board makes an informal decision that has to be unwound later, and documents the vote when the board does choose to reallocate." },
      { q: "What happens if the study says we're badly underfunded?", a: "It becomes a sequencing problem rather than a crisis. Edison's accounting team models the paths, phased assessment increases, capital deferral where the engineer says deferral is safe, reserve banking adjustments, and in some cases financing, and presents the trade-offs side by side. Boards make a better decision seeing three funded scenarios than seeing one alarming number." }
    ],
    related: [
      { kind: "Full Service", title: "HOA Accounting", body: "Monthly financial management with reserve banking strategy.", href: "/services/hoa-accounting" },
      { kind: "Also Included", title: "Budget Preparation", body: "Annual budget cycle that integrates the reserve study findings.", href: "/services/hoa-accounting/budget-preparation" },
      { kind: "Also Included", title: "SIRS (for condos 3+ stories)", body: "Structural Integrity Reserve Study coordination under FL SB-4D.", href: "/services/condo-management/structural-integrity-reserve-study" }
    ],
    cta: {
      title: "A reserve study that actually produces a funding plan.",
      body: "Tell us about your community's current reserve study status. We'll respond with a proposal, within one business day."
    }
  },

  "milestone-inspections": {
    serviceLabel: "Milestone Inspection Coordination",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Condo Management", href: "/services/condo-management" },
      { label: "Milestone Inspections" }
    ],
    parent: { label: "Condo Management", href: "/services/condo-management" },
    eyebrow: "compliance · Condo Management",
    phone: "(407) 317-5252",
    hero: {
      title: "Milestone inspection coordination under Florida SB-4D.",
      lede: "Florida condominium associations 30+ years old (25+ in coastal counties) and three stories or more must commission phased milestone inspections by a licensed structural engineer. Edison handles the engineer engagement, the access logistics, and the board reporting.",
      image: "/assets/img-22.webp",
      statute: "Florida Statute § 553.899 · SB-4D"
    },
    spec: [
      { label: "Applies to", value: "Condos 3+ stories" },
      { label: "Trigger age", value: "30 yrs (25 coastal)" },
      { label: "Cadence", value: "Every 10 yrs after" }
    ],
    context: {
      title: "What the milestone inspection requirement actually is",
      paragraphs: [
        "Florida Senate Bill 4D created the milestone inspection requirement in response to the Champlain Towers collapse. It applies to condominium and cooperative buildings three habitable stories or more. The inspection itself has two phases: Phase 1 is a visual structural assessment by a licensed engineer or architect. If Phase 1 identifies substantial structural deterioration, Phase 2 requires what the statute calls a more invasive inspection, meaning a deeper, hands-on assessment of the affected areas.",
        "The original SB-4D deadlines have largely passed for existing buildings, but the requirement is recurring, every 10 years after the initial milestone inspection. New buildings face their first milestone inspection at the 30-year mark (25 in coastal counties). Edison's milestone inspection coordination is built to run this end-to-end without requiring board members to learn structural engineering."
      ]
    },
    included: {
      title: "What Edison handles around a milestone inspection",
      sub: "Edison doesn't perform the inspection. We handle everything around it.",
      items: [
        { title: "Engineer Sourcing", body: "Three competing bids from FL-licensed structural engineers experienced with milestone work. Scope reviewed for completeness." },
        { title: "Document Prep", body: "Building permits, prior inspection history, capital expenditure records, and maintenance logs assembled in advance." },
        { title: "Site Access Coordination", body: "Resident notification, common-area access, roof and equipment access, scheduled so the engineer's site work doesn't drag." },
        { title: "Draft Report Review", body: "Edison reviews the draft against the building's actual capital and maintenance history. Discrepancies flagged for engineer revision before final." },
        { title: "Phase 2 Coordination (if triggered)", body: "If Phase 1 identifies deficiencies requiring Phase 2, Edison coordinates the more invasive inspection on the FL-required timeline." },
        { title: "Board Reporting & Filing", body: "Engineer's findings translated into a board-friendly summary. Filing with the local building department coordinated on the statutory schedule." }
      ]
    },
    process: {
      title: "How a milestone engagement runs",
      sub: "Typically 90–180 days for Phase 1, longer if Phase 2 is triggered.",
      steps: [
        { title: "Scope Confirmation", body: "Edison confirms milestone eligibility, identifies the deadline, and defines the Phase 1 scope with the engineer." },
        { title: "Engineer Engagement", body: "Three competing bids sourced. Board selects. Contracting and insurance handled by Edison." },
        { title: "Site Work & Report", body: "Engineer performs Phase 1. Edison coordinates access. Draft report reviewed and revised before final." },
        { title: "Filing & Follow-up", body: "Filing with the local building department on the statutory timeline. If Phase 2 is triggered, the coordination cycle repeats." }
      ]
    },
    midCta: {
      title: "Not sure if your building's milestone is due, or overdue?",
      lede: "Edison's first conversation is free. We'll confirm your statutory status and outline the path forward."
    },
    faqs: [
      { q: "Does our building need a milestone inspection?", a: "If your condominium or cooperative building is three habitable stories or more, yes, at the 30-year mark (25 in counties within three miles of the coastline), and every 10 years after that. Buildings under three habitable stories aren't subject." },
      { q: "What's the difference between Phase 1 and Phase 2?", a: "Phase 1 is a visual structural assessment by a licensed engineer or architect. If Phase 1 identifies 'substantial structural deterioration,' Phase 2 is a more invasive inspection that can include testing, exploratory openings, and engineering analysis. Most buildings stop at Phase 1." },
      { q: "How is this different from a SIRS?", a: "The milestone inspection is a structural condition assessment. The SIRS is a reserve study scoped to the structural components the milestone inspection identifies. They're complementary and often sequenced, milestone first, SIRS second." },
      { q: "What does it cost?", a: "Phase 1 typically runs $6,000–$18,000 depending on building size and complexity. Phase 2 if triggered can run substantially more given the invasive nature of the work. Edison sources 3 competing bids; the board selects." },
      { q: "What if we're past the deadline?", a: "Missing the deadline doesn't eliminate the requirement, it creates compliance exposure and personal liability for board members. Edison's first-step intake is to determine current status, file what's required to demonstrate good-faith remediation, and complete the inspection on the fastest credible timeline." },
      { q: "Who files the report?", a: "The engineer files with the local building department per statute; Edison coordinates the filing and tracks acknowledgment. The board receives a copy of the filed report and the building department's response." }
    ],
    related: [
      { kind: "Full service", title: "Condo Management", body: "Full-service management for FL condominium associations under Ch. 718.", href: "/services/condo-management" },
      { kind: "also required", title: "Structural Integrity Reserve Study (SIRS)", body: "The reserve study that pairs with the milestone inspection under SB-4D.", href: "/services/condo-management/structural-integrity-reserve-study" },
      { kind: "guide", title: "HOA Reserve Study Florida: What Boards Need to Know", body: "How reserve studies work, what they cost, and how Edison coordinates the process.", href: "/blog/hoa-reserve-study-guide" }
    ],
    cta: {
      title: "Milestone compliance, run by people who do this every month.",
      body: "Tell us about your building's age, location, and inspection history. We'll respond with a proposal, within one business day."
    }
  },

  "sirs": {
    serviceLabel: "Structural Integrity Reserve Study (SIRS)",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Condo Management", href: "/services/condo-management" },
      { label: "Structural Integrity Reserve Study" }
    ],
    parent: { label: "Condo Management", href: "/services/condo-management" },
    eyebrow: "compliance · Condo Management",
    phone: "(407) 317-5252",
    hero: {
      title: "Structural Integrity Reserve Study (SIRS) coordination in Florida.",
      lede: "Florida condominium associations three stories or more must commission a Structural Integrity Reserve Study by their statutory deadline. Edison coordinates the engineer, manages the deliverable, and helps your board build a funding plan that meets the mandate.",
      image: "/assets/img-21.webp",
      statute: "Florida Statute § 718.112(2)(g) · SB-4D"
    },
    spec: [
      { label: "Applies to", value: "Condos 3+ stories" },
      { label: "Statute", value: "Ch. 718 · SB-4D" },
      { label: "Cadence", value: "Every 10 years" },
      { label: "Components", value: "8 mandated" }
    ],
    context: {
      title: "What a SIRS actually is, and why it's not a normal reserve study",
      paragraphs: [
        "A Structural Integrity Reserve Study is a Florida-specific reserve assessment created by Senate Bill 4D after the Champlain Towers South collapse. It applies to condominium and cooperative buildings three stories or more, and it requires a licensed engineer or architect to inventory and price the remaining useful life of eight specific structural and life-safety components, roof, load-bearing walls, floor, foundation, fireproofing, plumbing, electrical, and waterproofing.",
        "A SIRS is not interchangeable with a traditional reserve study. The traditional reserve study covers a broader set of community assets, pools, paving, clubhouses, amenity replacements, but isn't sufficient on its own under FL Ch. 718. Most associations now need both: a SIRS for statutory compliance, and a <a href=\"/services/hoa-accounting/reserve-study-support\">comprehensive reserve study</a> for full capital planning. Edison coordinates both, sequences them, and translates the engineering findings into a fundable plan.",
        "Boards routinely ask how the SIRS relates to the <a href=\"/services/condo-management/milestone-inspections\">milestone inspection</a>, because SB-4D created both. The milestone inspection answers a condition question: is the structure sound today? The SIRS answers a money question: what will those structural components cost to maintain and replace, and what does the association need to bank each year to get there. They are usually sequenced, milestone first, SIRS second, so the reserve numbers reflect what the engineer actually found on the building.",
        "The compliance dates have moved more than once. The original SB-4D deadline for existing buildings was December 31, 2024, and subsequent legislative sessions extended relief to associations whose milestone inspection was due at the end of 2024, pushing them to December 31, 2025. Both dates are now behind us. An association without a completed SIRS is not exempt, it is behind on a statutory obligation the board has a fiduciary duty to remedy, and Edison's intake starts by confirming exactly which deadline applied to your building. For the broader picture of how reserve studies work in Florida, our <a href=\"/blog/hoa-reserve-study-guide\">reserve study guide for Florida boards</a> covers the fundamentals."
      ]
    },
    compare: {
      eyebrow: "Know the difference",
      title: "SIRS vs. a traditional reserve study",
      sub: "Boards are often told they already have \"a reserve study.\" Under Ch. 718, that answer is usually incomplete. Here is where the two actually diverge.",
      leftLabel: "Traditional reserve study",
      rightLabel: "SIRS (Ch. 718 · SB-4D)",
      rows: [
        { label: "What's in scope", left: "Community capital components broadly, roofs, paving, pools, clubhouses, amenities, equipment.", right: "Eight mandated structural and life-safety components, plus items over the statutory cost threshold that affect structural integrity." },
        { label: "Who performs it", left: "A reserve specialist or reserve study firm, credentialing varies by state and by firm.", right: "A Florida-licensed engineer or architect, or a professional the statute qualifies to perform the visual inspection portion." },
        { label: "Who it applies to", left: "Any association doing responsible capital planning, HOA or condo, any building height.", right: "Condominium and cooperative associations with buildings three habitable stories or more." },
        { label: "Funding flexibility", left: "Boards and owners can, in many cases, vote to waive or partially fund reserves.", right: "Funding for SIRS components cannot be waived the way traditional reserves sometimes can." },
        { label: "Refresh cadence", left: "Best practice is a full study every 3–5 years with updates in between.", right: "At least every 10 years, which is a statutory floor rather than a best practice." },
        { label: "What it produces", left: "A funding plan across the community's full capital inventory.", right: "A statutory compliance record plus a structural funding obligation that flows into the budget." }
      ]
    },
    components: {
      eyebrow: "The mandated eight",
      title: "What a Florida SIRS must inventory",
      sub: "Every SIRS engagement covers these components at minimum. The engineer may add anything else with a deferred maintenance or replacement cost above the statutory threshold that bears on structural integrity.",
      items: [
        { title: "Roof", body: "Assembly, covering, and remaining useful life, the component most likely to drive the near-term funding number." },
        { title: "Load-Bearing Walls", body: "Load-bearing walls and other primary structural members, assessed for condition and remaining life." },
        { title: "Floor", body: "Floor structure and slabs, including the deterioration patterns coastal buildings see first." },
        { title: "Foundation", body: "Foundation systems, evaluated against the building's settlement, drainage, and water-intrusion history." },
        { title: "Fireproofing", body: "Fireproofing and fire protection systems, a life-safety component boards frequently under-reserve." },
        { title: "Plumbing", body: "Supply, waste, and vertical stack systems, where age-based repiping decisions get expensive fast." },
        { title: "Electrical", body: "Electrical systems, including distribution equipment that predates current code expectations." },
        { title: "Waterproofing", body: "Waterproofing and exterior painting where related to structure, the recurring cycle that protects everything above." }
      ]
    },
    included: {
      title: "What Edison's SIRS coordination covers",
      sub: "Edison doesn't perform the engineering. We handle everything around it: engineer selection, scope review, document coordination, board presentation, and the post-study funding plan.",
      items: [
        { title: "Engineer Selection & Bid Review", body: "Edison sources 3+ qualified Florida-licensed structural engineers and helps the board select on scope and credentials, not just price." },
        { title: "Document & Access Coordination", body: "Historical inspection records, building permits, prior reserve studies, and capital expenditure history assembled for the engineer." },
        { title: "Site Visit Logistics", body: "Resident notification, common-area access, vendor coordination, and roof/equipment access scheduling." },
        { title: "Draft Report Review", body: "Edison's accounting team reviews the draft against actual capital history and flags discrepancies for revision before final issuance." },
        { title: "Board Presentation Support", body: "Board-friendly summary of findings, what's failing, what's funded, what's not, plus a recommended funding strategy." },
        { title: "Funding Plan Integration", body: "SIRS components integrated into the annual budget, reserve banking strategy, and 5-year capital plan." }
      ]
    },
    process: {
      title: "How Edison runs a SIRS engagement",
      sub: "From engineer selection through board adoption, usually 90–150 days end to end.",
      steps: [
        { title: "Discovery & Scoping", body: "Edison reviews governing documents, building age, last reserve study, and SB-4D filing status. Statutory deadline confirmed." },
        { title: "Engineer Sourcing", body: "Three competing bids from FL-licensed engineers. Board approves; Edison handles contracting and access." },
        { title: "Site Work & Draft Review", body: "Engineer performs site work. Edison reviews the draft and coordinates revisions before the final is issued." },
        { title: "Board Adoption & Funding Plan", body: "Findings presented with a recommended funding plan. Plan integrated into the next annual budget." }
      ]
    },
    midCta: {
      title: "Behind on your SIRS? Not sure if you're behind?",
      lede: "Edison's first conversation is free. We'll review your association's status against Ch. 718 / SB-4D requirements and tell you exactly where you stand."
    },
    faqs: [
      { q: "Does our community need a SIRS?", a: "If your association governs a condominium or cooperative building three stories or more (counting habitable stories above grade), yes. Buildings under three stories aren't subject to the SIRS requirement but typically still need a traditional reserve study." },
      { q: "When is the SIRS due?", a: "The original SB-4D deadline was December 31, 2024 for existing buildings, with later legislative relief extending some associations to December 31, 2025. Both dates have passed. Associations that missed them are still subject to the requirement, and the study is then updated at least every 10 years. Newer buildings have deadlines tied to their certificate of occupancy, so Edison's intake confirms which date applies to your specific building rather than assuming." },
      { q: "What's the difference between a SIRS and a milestone inspection?", a: "The milestone inspection is a structural condition assessment. The SIRS is a reserve study scoped to the structural components the milestone identifies. Many associations need both, sequenced, milestone first, SIRS second." },
      { q: "What are the 8 components a SIRS must cover?", a: "Roof; load-bearing walls or other primary structural members; floor; foundation; fireproofing and fire protection systems; plumbing; electrical systems; and waterproofing and exterior painting (where related to structure)." },
      { q: "Can our existing reserve study count?", a: "Usually no, a traditional reserve study isn't typically scoped to the SIRS-required components and doesn't follow the same engineering standard. Some studies completed after SB-4D may be compliant if specifically scoped for it." },
      { q: "How much does a SIRS cost?", a: "Typical range is $8,000–$25,000 for the engineer's work, depending on building size and complexity. Edison's coordination is included in the management agreement." },
      { q: "Does the SIRS require us to fully fund reserves?", a: "The SIRS quantifies the funding need; FL Ch. 718 as amended requires associations to fund SIRS components on a pooled-or-component basis. Boards cannot waive funding for SIRS components the way they could for some traditional reserves." },
      { q: "What happens if we don't comply?", a: "Non-compliance creates personal liability exposure for board members and is increasingly scrutinized in unit-sale due diligence. Edison's first step is to assess current status and build the fastest credible remediation path." },
      { q: "How does Edison handle this differently?", a: "We treat the SIRS as a multi-year capital planning exercise, not a one-time filing. Engineer selection, document prep, board education, funding plan integration, and ongoing reserve banking strategy are all coordinated by the same accounting team responsible for your monthly financials." },
      { q: "Who is qualified to perform a Structural Integrity Reserve Study in Florida?", a: "The structural portion of the study must be performed by a Florida-licensed engineer or architect. The visual inspection component may be performed by other professionals the statute qualifies, but the association's credibility, and the study's defensibility if it is ever challenged, rests on the credentials behind it. Edison sources bids only from firms with documented Florida SIRS experience and reviews scope before the board selects." },
      { q: "How long does a SIRS take from start to finish?", a: "Typically 90 to 150 days. Engineer sourcing and board selection run 3–4 weeks, document prep and site work another 4–6 weeks depending on building access and engineer backlog, and draft review through final issuance a further 3–4 weeks. Boards that start the process before their budget cycle can fold the funding plan into the same year's budget rather than waiting a full cycle." },
      { q: "Does the SIRS affect our monthly assessments?", a: "Frequently, yes. The study quantifies a funding obligation for components that cannot be waived, so if the association has been under-reserving on structural items, the gap becomes visible and has to be funded. Edison's accounting team models the funding paths, phased assessment increases, reserve banking adjustments, capital sequencing, before the board votes, so the decision is made with the trade-offs in front of it rather than after homeowners react." },
      { q: "Our building is two stories. Do we need a SIRS?", a: "No. The SIRS requirement applies to condominium and cooperative buildings three habitable stories or more. Two-story buildings still benefit from a traditional reserve study for capital planning, and lenders, insurers, and buyers increasingly expect one, but the Ch. 718 structural mandate does not reach them." },
      { q: "How does the SIRS affect unit sales and lending?", a: "Buyer-side due diligence now routinely asks for the SIRS and the milestone inspection report. A missing or outdated study stalls closings, complicates lender approval, and gives buyers a reason to renegotiate. Boards that treat compliance as a paperwork problem tend to discover it as a property-value problem." }
    ],
    related: [
      { kind: "also required", title: "Milestone Inspection Coordination", body: "The structural condition assessment that often precedes the SIRS.", href: "/services/condo-management/milestone-inspections" },
      { kind: "full service", title: "Condo Management", body: "Full-service management for Florida condominium associations under Ch. 718.", href: "/services/condo-management" },
      { kind: "also included", title: "Reserve Study Support", body: "The traditional reserve study that sits alongside the SIRS, engineer coordination through adopted funding plan.", href: "/services/hoa-accounting/reserve-study-support" },
      { kind: "guide", title: "HOA Reserve Study Florida: What Boards Need to Know", body: "How reserve studies work, what they cost, and how Edison coordinates the process.", href: "/blog/hoa-reserve-study-guide" }
    ],
    cta: {
      title: "SIRS compliance is a project, not a panic.",
      body: "Tell us what you know about your building's status. We'll respond with what's required, what it costs, and how to sequence it, within one business day."
    }
  }
};

export { SUB_SERVICES_CONTENT };
