/* ============================================================
   Sibling Service Content (cross-pillar)
   Used by ServicePage template.
   ============================================================ */

const SERVICES_CONTENT = {

  "hoa-accounting": {
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
      sub: "Every Edison management agreement includes the full financial operations workstream, handled by a dedicated accounting specialist with oversight from Edison's leadership team.",
      items: [
        { title: "Monthly Financial Reporting", body: "Balance sheet, income statement, and budget-to-actual comparisons by the 15th of every month. Invoice backup attached, audit-ready format." },
        { title: "Budget Preparation & Planning", href: "/services/hoa-accounting/budget-preparation", body: "Annual budgets built from real operating data, reserve study recommendations, and capital pipeline." },
        { title: "Reserve Banking & Strategy", href: "/services/hoa-accounting/reserve-study-support", body: "Reserve funds tracked against the most recent study. Banking optimized for yield without sacrificing FDIC coverage limits." },
        { title: "Accounts Payable & Vendor Pay", body: "W-9s on file, invoice documentation required, rapid vendor pay. Year-end 1099 prep handled in-house." },
        { title: "Collections & Delinquency", href: "/services/hoa-collections", body: "Coordinated with Edison's in-house collections department. Clean ledger. Cash flow protected." },
        { title: "Compliance & Filing", body: "Board certification tracking, statutory deadline monitoring, and documentation support to keep your association in good standing." }
      ]
    },
    whyEdison: {
      title: "Why boards switch to Edison's accounting model",
      sub: "Most management companies treat accounting as overhead. Edison built it as a dedicated department with its own director, because it's the work that protects board members from personal liability.",
      items: [
        { title: "Dedicated Accounting Specialist", body: "Not your manager wearing two hats. A dedicated specialist who knows your association's financial history, governing documents, and reporting needs." },
        { title: "Leadership Oversight", body: "Every association's financials are reviewed by Edison's leadership team, not just processed and filed." },
        { title: "Audit-Ready Year-Round", body: "Every invoice requires backup documentation attached. Clean books month to month, not a scramble at year-end." },
        { title: "Reserve Funding Discipline", body: "Reserve banking strategy reviewed annually against current study. We catch underfunding before it requires a special assessment." },
        { title: "Live Financial Access", body: "CINC Systems dashboards give the treasurer real-time balances, AR aging, and budget pacing." },
        { title: "Transparent Vendor Payment", body: "Every payment documented with invoice and W-9. No mystery line items." }
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
        { title: "Day 1, Onboarding", body: "Your accounting specialist inherits records, reconciles opening balances, builds the audit-ready ledger." },
        { title: "Month 1–12, Monthly Reporting", body: "By the 15th of every month: balance sheet, income statement, budget-to-actual, AR aging, narrative. Invoice docs attached." },
        { title: "Jul–Nov, Budget Season", body: "July–November: draft budget built from operating data and reserve study, presented with scenarios, not a take-it-or-leave-it number." },
        { title: "Year-End, Audit & Review", body: "Clean books and documented invoices all year mean your audit prep is already done. No scramble, no surprises at year-end." }
      ]
    },
    quote: {
      quote: "Our previous manager couldn't tell us what was in the reserve fund without a week of digging. Edison sends monthly statements with invoice backup, we know what we're looking at, and so does our auditor.",
      attribution: "James R.",
      role: "Treasurer",
      community: "Condo Association · 184 units"
    },
    faqs: [
      { q: "Does this apply to both HOAs and condo associations?", a: "Yes. Edison's accounting department handles HOAs under FL Chapter 720 and condominium associations under FL Chapter 718. The reporting cadence, audit prep, and reserve discipline are identical; the regulatory specifics differ by community type." },
      { q: "How quickly will we get monthly statements?", a: "By the 15th of every month. Balance sheet, income statement, budget-to-actual, AR aging, and a brief narrative. Real-time financial data is also available 24/7 through CINC dashboards." },
      { q: "What if our books are a mess right now?", a: "Edison's onboarding includes a clean-up phase: opening balance reconciliation, vendor recredentialing, and audit-ready ledger reconstruction. Most cleanups are complete within the first 60 days." },
      { q: "Do you handle the audit directly?", a: "We coordinate with your independent CPA, Florida statute requires external audits be performed by independent auditors. Edison prepares the year-end binder, sits with the auditor through fieldwork, and handles every follow-up question." },
      { q: "What about HOA tax filings?", a: "Edison coordinates Form 1120-H or 1120 filings for each association annually, working with your CPA on the optimal filing choice based on revenue mix and prior-year filings." }
    ],
    cta: {
      title: "Ready for accounting your board can actually defend?",
      body: "Tell us about your association, current size, current state of the books, what's worrying you. We'll respond with a written proposal within one business day."
    }
  },

  "covenant-enforcement": {
    serviceLabel: "Covenant Enforcement",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Covenant Enforcement" }
    ],
    eyebrow: "Covenant Enforcement & Compliance",
    phone: "(407) 317-5252",
    hero: {
      title: "Covenant enforcement run by a dedicated department, not your manager wearing another hat.",
      lede: "Fair, consistent, address-not-name enforcement that protects property values without eroding homeowner relationships. Edison runs covenant work as a separate workstream with documented protocols, monthly board reporting, and a correction-first protocol.",
      image: "/assets/hoa-covenant-enforcement-inspection.jpg",
      applies: "HOA + Condo Associations"
    },
    stats: [
      { value: "Dedicated", caption: "Dedicated covenant department, not the manager's overtime work." },
      { value: "Impartial", caption: "Inspectors see addresses, not names. Bias-resistant by design." },
      { value: "Visible", caption: "Monthly reports in your board portal, not buried in meeting minutes." }
    ],
    included: {
      title: "Full-cycle covenant work with the documentation boards actually need",
      sub: "Edison's enforcement department handles the workflow end-to-end, inspections, notice generation, hearing support, and reporting back to the board.",
      items: [
        { title: "Scheduled Property Inspections", body: "Routine inspections on a documented cadence, monthly drive-throughs in most communities, with photographic documentation." },
        { title: "Address-Not-Name Inspections", body: "Inspectors record addresses, not homeowner names. Protocols designed to remove bias and protect the board from selective-enforcement claims." },
        { title: "Notice & Hearing Workflow", body: "Courtesy notices, formal notices, hearing scheduling, and minutes, all documented and tracked through the Action Item List." },
        { title: "ARC Coordination", body: "Architectural Review Committee submissions reviewed, sequenced, and decisioned within board-set timelines." },
        { title: "Monthly Board Reporting", body: "A clear summary of enforcement activity, trends, and recommendations, delivered monthly so nothing gets buried in the meeting packet." },
        { title: "Legal Coordination", body: "When enforcement requires legal escalation, Edison coordinates with the association's attorney, full case file in hand." }
      ]
    },
    whyEdison: {
      title: "Why Edison's enforcement model is different",
      items: [
        { title: "Correction-First Protocol", body: "Most violations get resolved with a courtesy reminder. Fines are a last resort, not the opening move. Boards keep homeowner relationships." },
        { title: "Address-Not-Name Inspections", body: "Inspectors document addresses. Bias and 'selective enforcement' claims have a structural defense built into the workflow." },
        { title: "Documented Workflow", body: "Every notice, every hearing, every decision, tracked through the Action Item List with timestamps and attachments." },
        { title: "Separate from Management", body: "Your manager isn't the enforcer. That preserves the working relationship boards rely on for everything else." },
        { title: "Monthly Board Reporting", body: "Enforcement summary delivered monthly with trends, outliers, and recommendations. No surprises at the annual meeting." },
        { title: "Florida Compliance Built In", body: "Notice timing, hearing rights, and statutory due-process steps are baked into the workflow, not added after a complaint." }
      ]
    },
    midCta: {
      title: "Enforcement causing more board headache than it should?",
      lede: "Edison's first conversation is free. We'll look at your current enforcement workflow and tell you what's working, and what isn't."
    },
    process: {
      title: "How an enforcement cycle actually runs",
      sub: "Defined steps, documented at every stage.",
      steps: [
        { title: "Inspection", body: "Routine drive-through or report-based inspection. Address recorded, photographed, logged." },
        { title: "Courtesy Notice", body: "First touch is a courtesy reminder, friendly, specific, with a clear cure window. Notices are mailed and emailed, and owners can respond right in the Resident Portal. Most violations resolve here." },
        { title: "Formal Notice", body: "If unresolved, a formal notice follows per FL statute. Edison handles the documentation, timeline, and board communication." },
        { title: "Resolution or Escalation", body: "Most cases close at the hearing stage. Cases that don't are escalated to the association's attorney with the full file." }
      ]
    },
    quote: {
      quote: "We took over a community where enforcement had become punitive. Edison's department reset the program around correction-first protocols. Hearings down 62% in year one. Zero lawsuits.",
      attribution: "Henry G.",
      role: "Board Member",
      community: "HOA · 228 units · Heritage Oaks"
    },
    faqs: [
      { q: "Does this apply to condos as well as HOAs?", a: "Yes. Edison's enforcement department handles both, covenant enforcement under HOA governing documents (Ch. 720) and rule enforcement under condominium declarations (Ch. 718). The procedural specifics differ; the workflow discipline is the same." },
      { q: "How are inspections scheduled?", a: "Most communities get monthly drive-throughs as a baseline, plus complaint-driven inspections when residents flag specific issues. The cadence is adjusted to the community's size and the board's enforcement appetite, boards have full control over the volume." },
      { q: "What if a homeowner contests a violation?", a: "Edison handles the hearing process per FL statute, notice timing, hearing scheduling, hearing minutes, and the board's decision documentation. The board is the decision-maker; Edison handles the procedure." },
      { q: "How do you avoid selective-enforcement claims?", a: "Address-not-name inspections, documented criteria for what triggers a notice, and a documented workflow that treats every violation the same way regardless of who owns the unit. Boards using Edison have a clean procedural defense built in." },
      { q: "Can the board override Edison's recommendations?", a: "Always. Edison's enforcement work runs the procedure and recommends action; the board makes every substantive decision. We document the recommendation and the board's decision separately so the record is clear." }
    ],
    cta: {
      title: "Covenant enforcement that protects property values and homeowner relationships.",
      body: "Tell us about your community's current enforcement workflow. We'll respond with a written proposal sized for your governing documents and homeowner count, within one business day."
    }
  },

  "hoa-collections": {
    serviceLabel: "HOA Collections",
    crumb: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "HOA Collections" }
    ],
    eyebrow: "HOA Collections & Delinquency Management",
    phone: "(407) 317-5252",
    hero: {
      title: "In-house collections that protect cash flow without sending every delinquency to a lawyer.",
      lede: "Edison's collections department runs the delinquency process end-to-end, courtesy reminders, formal notices, intent-to-lien, payment plans, and attorney coordination when legally required. Most cases resolve before legal escalation. Your association's cash position stays healthy.",
      image: "/assets/img-resident-portal.jpg",
      applies: "HOA + Condo Associations"
    },
    stats: [
      { value: "In-house", caption: "Collections handled by Edison's dedicated department, not outsourced to a collections agency." },
      { value: "Pre-legal", caption: "Most cases resolve before any attorney involvement, protecting cash flow and homeowner relationships." },
      { value: "Tracked", caption: "Every account aged, documented, and visible to the board through CINC dashboards." }
    ],
    included: {
      title: "Collections work that scales from one delinquent account to a portfolio",
      sub: "Edison's collections department runs the workflow on a documented cadence, boards see the same process applied consistently across every account.",
      items: [
        { title: "Courtesy Email Reminders", body: "Free, friendly email reminders that nudge homeowners before a balance becomes a problem. Most accounts resolve at this stage." },
        { title: "Formal Notice Sequence", body: "30-day, 45-day, and 60-day notices on a documented schedule with FL-compliant language and certified-mail tracking when required." },
        { title: "Intent-to-Lien Processing", body: "Edison prepares intent-to-lien notices on the statutorily compliant timeline. Most homeowners resolve at this stage." },
        { title: "Payment Plan Coordination", body: "When homeowners can't pay in full, Edison negotiates board-approved payment plans with documented terms and CINC-tracked installments." },
        { title: "Attorney Coordination", body: "For accounts that require legal action, Edison hands off a complete case file to the association's attorney with every notice and acknowledgment documented." },
        { title: "Board Reporting", body: "Monthly aging summary with trend lines. Outliers flagged early so your board can act before accounts escalate." }
      ]
    },
    whyEdison: {
      title: "Why Edison's collections model recovers more, faster",
      items: [
        { title: "In-House Department", body: "Most management companies hand collections to an outside agency. Edison keeps it in-house, better continuity, better recovery, better homeowner experience." },
        { title: "Correction-Before-Escalation", body: "Most delinquencies resolve before legal escalation when the workflow uses courtesy reminders, payment plans, and clear notice timing." },
        { title: "Documented Process", body: "Every step timestamped and logged through the Action Item List. Boards have an audit trail for every account, every notice, every payment plan." },
        { title: "Cash Flow Discipline", body: "Aging tracked monthly. Outliers flagged before they become legal cases. Cash position protected without aggressive escalation." },
        { title: "Attorney Coordination, Not Substitution", body: "When legal action is genuinely required, Edison hands a complete case file to your association's attorney. Clean handoff, no gaps." },
        { title: "FL Compliance Built In", body: "Florida collection statutes change. Notice timing, certified-mail requirements, and lien process specifics are baked into the workflow, not bolted on after a homeowner challenges a notice." }
      ]
    },
    midCta: {
      title: "Sitting on a stack of aged receivables?",
      lede: "Edison's first conversation is free. We'll review your current delinquency profile and tell you what's recoverable without litigation."
    },
    process: {
      title: "How an account moves through Edison's collections workflow",
      sub: "Predictable timing, documented at every step.",
      steps: [
        { title: "Day 1–30, Courtesy Email", body: "Free, friendly reminder. Most accounts pay within this window. No fees applied." },
        { title: "Day 30–60, Formal Notice", body: "First formal notice with statutorily compliant language. Late fees applied per governing documents." },
        { title: "Day 60–90, Intent to Lien", body: "Edison prepares and sends intent-to-lien on the FL-compliant timeline. Most remaining delinquencies resolve here." },
        { title: "Day 90+, Legal Coordination", body: "Accounts that haven't resolved are escalated to the association's attorney with a complete case file." }
      ]
    },
    quote: {
      quote: "We inherited 18% delinquency. Edison's collections department took it to 3.2% in twelve months. Not one foreclosure escalation. Cash flow came back without lawsuits.",
      attribution: "Linda B.",
      role: "Treasurer",
      community: "HOA · 268 units · Cypress Crossing"
    },
    faqs: [
      { q: "Does this apply to both HOAs and condo associations?", a: "Yes. The collections workflow is the same; the statutory specifics differ between Ch. 720 (HOA) and Ch. 718 (condo). Edison's department calibrates to each." },
      { q: "What happens at intent-to-lien?", a: "Edison prepares a statutorily compliant intent-to-lien notice on the FL-required timeline. Most homeowners resolve at this stage rather than face an actual lien. If they don't, Edison coordinates with the association's attorney for the lien filing itself, which has to be done by counsel under FL statute." },
      { q: "Do you handle the foreclosure process?", a: "Foreclosure is an attorney-led process under FL statute. Edison prepares the complete case file, supports the attorney through discovery, and coordinates with the board on every escalation decision, but the legal work itself is performed by counsel." },
      { q: "How do you protect homeowner relationships?", a: "Courtesy reminders before formal notices. Payment plans when homeowners hit hardship. Clear, plain-language communication throughout. Most homeowners don't realize Edison's collections department exists because they pay before it would." },
      { q: "Can the board approve payment plans?", a: "Yes. Edison negotiates payment plan terms with the homeowner; the board approves them. CINC tracks the installment schedule, and Edison flags deviations to the board the month they happen." }
    ],
    cta: {
      title: "Healthy cash flow without aggressive escalation.",
      body: "Tell us about your association's current delinquency. We'll respond with a written proposal sized for your aging profile and governing documents, within one business day."
    }
  }
};

export { SERVICES_CONTENT };
