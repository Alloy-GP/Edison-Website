/* ============================================================
   Blog Spoke Content, all 11 Phase 1 spokes
   Each uses the BlogSpokeA template (locked Variant A).
   Tight long-form: 4-6 sections, summary, callouts, FAQ-shaped
   list items where statute is involved.
   ============================================================ */

const BLOG_CONTENT = {

  "hoa-audit": {
    category: "Financial Management",
    title: "HOA Audit: What It Is, When It's Required, and How to Prepare",
    dek: "An HOA audit confirms your community's finances are accurate, transparent, and compliant with Florida law. Learn what's required based on your association's revenue, what documents to prepare, and how strong year-round financial management makes the process faster and less expensive for your board.",
    author: "Edison Association Management",
    date: "March 16, 2026",
    readTime: "9 min",
    heroImage: "/assets/blog/hoa-board-members-reviewing-audit.jpg",
    intro: [
      "An HOA audit is one of those topics that sounds more intimidating than it needs to be. Your fiscal year has closed, the 90-day reporting deadline is on the horizon, and your board needs to figure out what level of financial report is actually required. The terminology alone can make a volunteer leader's head spin. Audit, review, compilation: which one does your community actually need? What documents should you have ready? And what happens if the records aren't in order?",
      "The good news is that when your association's finances are well-managed throughout the year, the audit process becomes a straightforward confirmation of good governance. This guide covers what an HOA audit involves, how it differs from other reporting levels, what Florida law requires based on your community's revenue, and how to assemble everything your CPA will need."
    ],
    sections: [
      {
        id: "what-is-an-hoa-audit",
        heading: "What Is an HOA Financial Audit?",
        body: [
          "An HOA financial audit is a comprehensive, independent examination of an association's financial records performed by a licensed certified public accountant. It provides the highest level of assurance that the community's financial statements are accurate, complete, and free from material misstatement.",
          "<strong>During the audit, the CPA reviews far more than a simple bank balance.</strong> The examination covers financial statements, balance sheets, bank reconciliations, vendor contracts, reserve fund records, and the association's internal controls. The CPA also verifies information directly with third parties, including banks, creditors, and debtors, and evaluates whether the association's reporting complies with generally accepted accounting principles (GAAP). At the end of the process, the CPA issues a formal audit report with an independent opinion on the accuracy of the association's finances.",
          "This level of scrutiny exists for good reason. Board members carry a fiduciary responsibility to manage homeowner assessments properly. A completed HOA audit protects both the board and the community by providing documented, third-party verification that funds are being handled correctly."
        ]
      },
      {
        id: "audit-vs-review-vs-compilation",
        heading: "Audit vs. Review vs. Compilation: What's the Difference?",
        body: [
          "The three levels of financial reporting differ in depth, cost, and the degree of assurance they provide. An audit is the most thorough examination available. A compilation is the least."
        ],
        table: {
          headers: ["", "Audit", "Financial Review", "Compilation"],
          rows: [
            ["<strong>What the CPA Does</strong>", "Full independent examination with third-party verification of records", "Analytical procedures and inquiries; no independent verification", "Organizes association-provided data into standard financial statement format"],
            ["<strong>Level of Assurance</strong>", "Highest — reasonable assurance", "Moderate — limited assurance", "None — no assurance provided"],
            ["<strong>Typical Cost Range</strong>", "$4,000–$6,000+", "$2,000–$4,000", "$1,000–$2,000"],
            ["<strong>Best For</strong>", "Larger communities, those required by law, or boards seeking full verification", "Mid-size communities meeting Florida's $300K–$499K revenue tier", "Smaller communities with straightforward finances"]
          ]
        },
        body3: [
          "<strong>The right level depends on your community's size, financial complexity, and what Florida law requires for your revenue tier.</strong> Boards can always elect a higher level of reporting than the statutory minimum, and many do when they want additional assurance for their homeowners."
        ]
      },
      {
        id: "florida-hoa-audit-requirements",
        heading: "Florida HOA Audit Requirements Under Section 720.303(7)",
        body: [
          "Florida law does not require every HOA to conduct a full audit. The required level of financial reporting depends on the association's total annual revenue, as defined in the <a href=\"https://www.flsenate.gov/laws/statutes/2023/720.303\" target=\"_blank\" rel=\"noopener\">Florida Homeowners' Association Act, Section 720.303(7)</a>."
        ],
        table: {
          headers: ["Annual Revenue Tier", "Required Financial Report"],
          rows: [
            ["$500,000 or more", "Audited financial statements"],
            ["$300,000–$499,999", "Reviewed financial statements"],
            ["$150,000–$299,999", "Compiled financial statements"],
            ["Under $150,000", "Report of cash receipts and expenditures"]
          ]
        },
        body3: [
          "<strong>As of July 1, 2024, <a href=\"https://www.flsenate.gov/Session/Bill/2024/1243\" target=\"_blank\" rel=\"noopener\">HB 1243</a> added a critical new requirement: HOAs with 1,000 or more parcels must prepare audited financial statements regardless of revenue, and this requirement cannot be waived.</strong>",
          "Several additional details matter for compliance. Financial reports must be completed within 90 days of fiscal year-end, and members must receive copies within 21 days of completion or no later than 120 days from fiscal year-end. Association members can vote by majority to waive down to a lower reporting level, but that option does not apply to the 1,000+ parcel mandate. On the other end, boards can always vote to prepare a higher level of reporting than the statute requires.",
          "Knowing which tier applies to your community early in the fiscal year keeps the process predictable. Edison helps boards identify the correct reporting level and stay ahead of compliance deadlines so there's no scramble when year-end arrives."
        ]
      },
      {
        id: "hoa-audit-checklist",
        heading: "HOA Audit Checklist: What Your Board Needs to Prepare",
        body: [
          "Before the CPA begins work, the board or its management company needs to assemble a complete set of financial and governance documents. <strong>Having these records organized and accessible before the auditor's first request is the single most effective way to reduce audit time and cost.</strong>",
          "A thorough HOA audit checklist includes:"
        ],
        list: [
          "<a href=\"/blog/hoa-bylaws-vs-ccrs/\">Governing documents</a> (declaration of covenants, bylaws, articles of incorporation)",
          "Financial statements (balance sheet, income statement, statement of cash flows)",
          "Bank statements and monthly reconciliations",
          "Accounts receivable and accounts payable reports",
          "Vendor contracts and payment records with supporting documentation",
          "Reserve fund records and the most recent reserve study",
          "Board meeting minutes from the fiscal year",
          "Current insurance policies",
          "Tax returns (Form 1120-H or applicable filing)",
          "Collection and delinquency reports"
        ],
        callout: { label: "Edison's approach", text: "Edison's accounting approach through dedicated specialists means financial records are maintained with invoice documentation attached to every payment, creating a clean audit trail from day one. The Action Item List gives boards real-time visibility into outstanding financial tasks without requiring a separate audit-prep report. When audit season arrives, the records are already where they need to be." }
      },
      {
        id: "how-management-company-helps",
        heading: "How the Right Management Company Makes HOA Audits Easier",
        body: [
          "The quality of an association's day-to-day financial management directly determines how smooth and how affordable an HOA audit will be. Communities with organized, well-documented records give auditors exactly what they need upfront, which translates to fewer CPA hours and lower fees.",
          "<strong>A management partner that treats financial accuracy as a year-round practice, not a year-end project, changes the entire audit experience for volunteer boards.</strong> At Edison, that principle is built into how we manage every community's finances. Here's what it looks like in practice:"
        ],
        list: [
          "Financials managed by dedicated accounting specialists through CINC Systems, not a generalist association manager juggling multiple responsibilities. Electronic reports can be shared directly with the CPA.",
          "Every invoice requires supporting documentation before payment is processed. No mystery line items. A complete audit trail exists from the moment a vendor is paid.",
          "Rapid vendor payment processing creates clean, current accounts payable records instead of a backlog of outstanding obligations the auditor has to reconcile.",
          "Reserve study support includes boots-on-the-ground property evaluation, providing practical context the auditor can verify against the association's reserve plan.",
          "A banking partnership with One Florida Bank structures reserve investments with proper FDIC documentation, giving auditors clear records of how reserve funds are allocated and protected."
        ],
        callout: { label: "The bottom line", text: "When these practices are embedded in how a community's finances operate every day, the audit becomes a confirmation of what the board already knows: their community's money is being managed with care and transparency." }
      },
      {
        id: "faq",
        heading: "Frequently Asked Questions",
        faq: [
          {
            q: "Do HOAs need to be audited?",
            a: "Not necessarily. Whether a full HOA audit is required depends on state law, the association's annual revenue, and its governing documents. In Florida, audited financial statements are mandatory only for HOAs with annual revenues exceeding $500,000 or those with 1,000 or more parcels. Associations below those thresholds may be required to prepare a review, compilation, or cash receipts report depending on their revenue tier. Members can also vote to waive down to a lower level of reporting in most cases."
          },
          {
            q: "How much does an HOA audit cost?",
            a: "A full HOA audit typically costs between $4,000 and $6,000, though fees can be higher for larger communities or associations with complex finances. Reviews and compilations cost less. The single biggest factor in audit cost is how organized the association's financial records are. Poorly maintained records require more CPA hours, which increases the fee. Choosing a CPA with specific community association experience also helps ensure the process is efficient and the audit report reflects the nuances of association accounting."
          },
          {
            q: "When is an HOA audit required in Florida?",
            a: "Under Florida Statute 720.303(7), an HOA audit is required when the association's annual revenues reach $500,000 or more. As of July 2024, HOAs with 1,000 or more parcels must also prepare audited financial statements regardless of their revenue. The completed report must be delivered within 90 days of fiscal year-end, and copies must reach members within 21 days of completion. Boards may vote to adopt a higher reporting level than the statute requires."
          },
          {
            q: "What is the difference between an HOA audit and a financial review?",
            a: "An HOA audit is a full independent examination where the CPA verifies financial records with third parties such as banks and vendors, then issues a formal opinion providing reasonable assurance. A financial review is less extensive. The CPA performs analytical procedures and makes inquiries of management but does not independently verify information with outside parties. Reviews provide limited assurance at a lower cost."
          }
        ]
      }
    ],
    related: [
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs: Key Differences Explained", image: "/assets/blog/bylaws-vs-ccrs.jpg", href: "/blog/hoa-bylaws-vs-ccrs" },
      { category: "Financial Management", title: "HOA Reserve Study Florida: What Boards Need to Know", image: "/assets/blog/reserve-study-specialist.jpg", href: "/blog/hoa-reserve-study-guide" }
    ]
  },

  "florida-hoa-laws-guide": {
    category: "Florida Compliance",
    title: "Florida HOA Laws Guide: Ch. 720 and Ch. 718 Explained",
    dek: "A plain-language overview of the two Florida statutes that govern community associations, what they cover, where they differ, and what every board member should know.",
    author: "Edison Editorial", date: "March 2026", readTime: "12 min",
    heroImage: "/assets/img-13.jpg",
    summary: "Florida governs homeowner associations under Chapter 720 and condominium associations under Chapter 718. They look similar from a distance but differ in reserve study mandates, milestone inspection requirements, governing-document conventions, and homeowner rights. Boards that confuse them make expensive mistakes.",
    sections: [
      { id: "chapter-720", heading: "Chapter 720, The HOA statute",
        body: [
          "Florida Chapter 720 governs homeowner associations, typically single-family neighborhoods, townhome communities, and master associations. It covers governing-document hierarchy (CC&Rs above bylaws above rules), board powers and duties, meeting and notice requirements, financial reporting thresholds, and homeowner rights including the right to inspect records.",
          "Recent legislative sessions added significant requirements around board member certification (required within 90 days of election or by completing an approved course), reserve disclosure, and homeowner communication. The statute changes nearly every year."
        ]
      },
      { id: "chapter-718", heading: "Chapter 718, The condo statute",
        body: [
          "Chapter 718 governs condominium associations. It runs parallel to Ch. 720 in many respects but diverges sharply on structural requirements after Senate Bill 4D. Buildings 3+ stories face mandatory milestone inspections and Structural Integrity Reserve Studies (SIRS) under timelines tied to building age.",
          "Ch. 718 also has different conventions on common elements vs limited common elements, master insurance, and reserve funding, boards generally cannot waive SIRS-component reserves the way they sometimes can for traditional reserves."
        ],
        callout: { label: "SB-4D", text: "Senate Bill 4D, passed in 2022 in response to the Champlain Towers collapse, reshaped condo statute. If your building is 3+ stories, milestone inspection and SIRS obligations apply." }
      },
      { id: "key-differences", heading: "Where HOAs and condos diverge",
        list: [
          "Reserve studies, Ch. 718 mandates SIRS for 3+ story buildings; Ch. 720 does not",
          "Milestone inspections, Ch. 718 requires them; Ch. 720 does not",
          "Governing documents, HOAs are declared under CC&Rs; condos under a Declaration of Condominium",
          "Common elements, Different conventions on what's association vs unit responsibility",
          "Voting weight, Frequently equal in HOAs; often by unit type or percentage in condos",
          "Insurance, Ch. 718 requires specific master policy coverages; Ch. 720 is more flexible"
        ]
      },
      { id: "board-cert", heading: "Board member certification",
        body: ["Both statutes now require new board members to complete certification within 90 days of election, either by signing an affidavit confirming they've read the governing documents and statutes, or by completing a state-approved course. The course route is generally safer. Failure to certify creates personal liability exposure and can be raised by homeowners challenging board actions."]
      },
      { id: "staying-current", heading: "How boards stay current",
        body: ["Florida legislative sessions reshape community association statute every year. Boards that rely on memory of how things were two years ago tend to fall behind. Edison's management team tracks legislative changes the day they pass, surfaces what's relevant per community type, and updates board operations accordingly. Boards aren't expected to be lawyers, but they are expected to govern under current law."]
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida Milestone Inspection Guide", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities" },
      { category: "For Boards", title: "Condo Association vs HOA: Which Are You?", image: "/assets/img-21.jpg", href: "/blog/condo-association-vs-hoa" }
    ]
  },

  "florida-milestone-inspection-guide": {
    category: "Florida Compliance",
    title: "Florida Milestone Inspection Guide (SB-4D)",
    dek: "What Senate Bill 4D requires, when it triggers, and how Florida condo boards coordinate the work, by Phase 1 and Phase 2.",
    author: "Edison Editorial", date: "April 2026", readTime: "10 min",
    heroImage: "/assets/img-22.jpg",
    summary: "Florida Senate Bill 4D requires condominium and cooperative buildings 3+ habitable stories to commission phased milestone inspections by a licensed engineer at the 30-year mark (25 in coastal counties), and every 10 years after. Most coastal Florida boards have either completed Phase 1 or are behind on it.",
    sections: [
      { id: "what-is-sb4d", heading: "What SB-4D actually requires",
        body: ["Senate Bill 4D was passed in 2022 in response to the 2021 Champlain Towers South collapse. It created a recurring structural inspection requirement for condominium and cooperative buildings 3+ habitable stories. The inspection has two phases, Phase 1 is a visual assessment by a licensed engineer; Phase 2 is more invasive and triggered only when Phase 1 identifies substantial structural deterioration."]
      },
      { id: "who-is-affected", heading: "Who's affected",
        body: ["The requirement applies to associations of condominium and cooperative buildings three habitable stories or more, counting stories above grade. Buildings under three stories are not subject. The trigger age is 30 years; for buildings located within three miles of the coastline, the trigger is 25 years. Recurring inspections every 10 years after the initial inspection."]
      },
      { id: "phase-1-vs-phase-2", heading: "Phase 1 versus Phase 2",
        body: ["Phase 1 is a visual structural assessment by a licensed engineer or architect. The engineer reviews load-bearing elements, building envelope, and primary structural components. If no substantial deterioration is identified, the requirement is satisfied until the next 10-year cycle."],
        list: [
          "Phase 1, Visual structural assessment, licensed engineer/architect",
          "Phase 2, Triggered only by Phase 1 findings; more invasive testing and analysis",
          "Filing, Required with local building department on the statutory schedule",
          "Cost, Phase 1 typically $6,000–$18,000; Phase 2 can be substantially more"
        ]
      },
      { id: "edisons-role", heading: "How Edison coordinates milestone work",
        body: ["Edison doesn't perform the engineering, that's the licensed engineer's job. Edison sources 3 competing engineer bids, coordinates document preparation and site access, reviews the draft report against actual building history, and translates findings into a board-friendly summary plus a funding plan if structural work is required. Filing with the local building department is handled on the statutory timeline."],
        callout: { label: "Behind deadline?", text: "Missing a milestone inspection deadline doesn't eliminate the requirement, it creates personal liability for board members and stalls unit sales as buyer due diligence catches the gap. Edison's first step is intake; we'll tell you exactly where you stand." }
      },
      { id: "milestone-vs-sirs", heading: "Milestone inspection vs SIRS",
        body: ["The milestone inspection is a structural condition assessment. The Structural Integrity Reserve Study (SIRS), also created by SB-4D, is a reserve study scoped to the structural components the milestone inspection identifies. They're complementary, often sequenced, milestone first, SIRS second. Most affected buildings need both."]
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide" },
      { category: "Financial Management", title: "HOA Reserve Study Guide (Florida)", image: "/assets/img-21.jpg", href: "/blog/hoa-reserve-study-guide-florida" },
      { category: "For Boards", title: "Condo Association vs HOA", image: "/assets/img-22.jpg", href: "/blog/condo-association-vs-hoa" }
    ]
  },

  "hoa-reserve-study-guide-florida": {
    category: "Financial Management",
    title: "HOA Reserve Study Guide (Florida)",
    dek: "What a reserve study covers, how often Florida communities need one, and how to read the report your engineer hands you.",
    author: "Edison Editorial", date: "March 2026", readTime: "10 min",
    heroImage: "/assets/img-21.jpg",
    summary: "A reserve study is an engineer's inventory of community capital components, roofs, paving, pools, infrastructure, with remaining useful life and replacement cost estimates. Florida HOAs typically refresh every 3–5 years. Condos 3+ stories also need the SIRS under SB-4D.",
    sections: [
      { id: "what-is-it", heading: "What a reserve study is",
        body: ["A reserve study is a professional analysis of a community's capital components, what they cost to replace, how much useful life remains, and how much the association needs to set aside annually to fund replacement without special assessments. It's the foundation of capital planning."]
      },
      { id: "how-often", heading: "How often Florida HOAs need one",
        body: ["Standard practice is a full reserve study every 3–5 years with annual updates between full studies. Condos 3+ stories under FL Ch. 718 also need a SIRS, a separate, statute-driven study scoped to 8 structural and life-safety components, on its own cadence."]
      },
      { id: "what-it-covers", heading: "What components a study covers",
        list: [
          "Roofing and waterproofing assemblies",
          "Paving, roads, parking lots, walkways",
          "Pool, spa, and pool deck infrastructure",
          "Clubhouse, fitness, and amenity buildings",
          "Mechanical systems, HVAC, elevators, generators",
          "Site work, irrigation, lighting, retaining walls",
          "Signage, entry features, and gates"
        ]
      },
      { id: "reading-the-report", heading: "How to read the report",
        body: ["A reserve study report typically includes a component inventory, an analysis of useful life remaining, a replacement cost estimate per component, and a funding plan, usually scenarios ranging from baseline (statutory minimum) to fully funded. Boards approve the funding scenario; Edison's accounting team integrates it into the annual budget."],
        callout: { label: "Funding levels", text: "FL Ch. 720 sets reserve disclosure obligations but allows boards (with the right vote) to waive reserve funding for some components. Ch. 718 after SB-4D is much stricter for condo SIRS components. Read both, they don't say the same thing." }
      },
      { id: "how-edison-helps", heading: "Edison's reserve study coordination",
        body: ["Edison doesn't perform reserve studies; we coordinate them. Three competing engineer bids, document and history prep, site access, draft review against actual capital history, and integration of recommendations into the next annual budget. The reserve study by itself doesn't fund anything, turning it into an adopted funding plan is the work."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Audit Guide", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit" },
      { category: "Florida Compliance", title: "Florida Milestone Inspection Guide", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide" },
      { category: "Financial Management", title: "HOA Special Assessment Guide", image: "/assets/img-13.jpg", href: "/blog/hoa-special-assessment" }
    ]
  },

  "hoa-board-member-responsibilities": {
    category: "For Boards",
    title: "HOA Board Member Responsibilities",
    dek: "Fiduciary duty, Florida board certification, and what board members actually owe their communities, and themselves.",
    author: "Edison Editorial", date: "March 2026", readTime: "11 min",
    heroImage: "/assets/img-11.jpg",
    summary: "Florida HOA and condo board members owe their communities a fiduciary duty, duty of care, duty of loyalty, duty to act in good faith. Failing those duties creates personal liability that the association's D&O insurance may not fully cover. Knowing the duties is step one; documenting them is step two.",
    sections: [
      { id: "fiduciary-duty", heading: "What fiduciary duty actually means",
        body: ["Board members owe three core duties to their associations: care, loyalty, and good faith. Duty of care means making informed decisions with reasonable diligence. Duty of loyalty means putting the association's interests above personal interests. Good faith means acting honestly and within the scope of the board's authority."]
      },
      { id: "fl-certification", heading: "Florida board member certification",
        body: ["Both Ch. 720 and Ch. 718 now require new board members to complete certification within 90 days of election, either by signed affidavit confirming they've read the governing documents and statutes, or by completing a state-approved course. The course route is generally safer because it documents actual learning, not just an attestation."]
      },
      { id: "what-boards-control", heading: "What boards control, and don't",
        list: [
          "Setting policy and approving the budget, board authority",
          "Day-to-day operational decisions, typically delegated to management",
          "Enforcement decisions, board votes; management runs the procedure",
          "Capital projects above board-set thresholds, require board approval",
          "Vendor contracts, typically board-approved, with management coordination"
        ]
      },
      { id: "documenting-decisions", heading: "Documenting board decisions",
        body: ["Board decisions are only as defensible as their documentation. Minutes should reflect what was discussed, what was decided, and on what basis. Edison's manager prepares draft minutes; the board's secretary reviews and the board approves at the following meeting. The minutes are the legal record."]
      },
      { id: "personal-liability", heading: "Where personal liability comes in",
        body: ["Most board decisions are protected by the business judgment rule, courts defer to good-faith board decisions made with reasonable diligence. Decisions made without that diligence (no minutes, no records, no documented rationale), or decisions that breach fiduciary duty (self-dealing, conflicts of interest), can pierce that protection. D&O insurance helps; it doesn't cover everything."],
        callout: { label: "Why this matters", text: "Volunteer board members don't sign up to take personal financial risk. Edison's documented workflow, Action Item List, board-approved decisions in writing, minutes, is the procedural protection that keeps boards out of court." }
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide" },
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs Explained", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs" },
      { category: "For Boards", title: "Unenforceable HOA Rules in Florida", image: "/assets/img-inspector.jpg", href: "/blog/unenforceable-hoa-rules-florida" }
    ]
  },

  "hoa-bylaws-vs-ccrs": {
    category: "For Boards",
    title: "HOA Bylaws vs CC&Rs: Key Differences Explained",
    dek: "Board members often reach for the wrong document when a decision needs to be made quickly. Understanding the difference between HOA bylaws and CC&Rs — and knowing which one governs your situation — is how volunteer leaders make confident, defensible decisions.",
    author: "Edison Association Management",
    date: "February 4, 2026",
    readTime: "8 min",
    heroImage: "/assets/blog/bylaws-vs-ccrs.jpg",
    intro: [
      "You're sitting at a board meeting and the question on the table is whether the board can pass a new rental restriction with a simple majority vote, or whether it has to go to the full membership. Someone thinks it's covered in the bylaws. Someone else is pretty sure it's a CC&R issue. A third board member isn't confident there's even a difference between the two documents.",
      "Understanding HOA bylaws vs CC&Rs isn't just useful background knowledge for Central Florida board members. It's how you make confident, defensible decisions when something actually comes up. This post breaks down what each document covers, how they interact, and which one to reach for depending on the situation."
    ],
    sections: [
      {
        id: "what-are-governing-documents",
        heading: "What Are HOA Governing Documents?",
        note: "This post is for educational purposes only and should not be considered legal advice. Community-specific requirements, especially around membership voting, should always be reviewed by the association's legal counsel.",
        body: [
          "HOA governing documents are the legal framework that tells your community what the rules are and how decisions get made. In Florida, most homeowners associations operate under several governing documents: typically the Declaration of Covenants, Conditions, and Restrictions (CC&Rs), the Articles of Incorporation, the Bylaws, and the Rules & Regulations. These documents follow a clear hierarchy of authority: federal and state law first, followed by the CC&Rs, then the Articles of Incorporation, then the Bylaws, and finally the Rules & Regulations."
        ],
        image: { src: "/assets/blog/hoa-governing-document-hierarchy.svg", alt: "HOA governing document hierarchy diagram" },
        body2: [
          "All are legally binding, but they serve different purposes and carry different levels of authority.",
          "Florida's Chapter 720, the Florida Homeowners' Association Act, establishes many of the legal requirements governing HOA operations, including elections, meetings, records access, and certain amendment procedures. Boards in Central Florida are working within that specific legal framework, which is why generic national guidance on these HOA governing documents often falls short."
        ]
      },
      {
        id: "what-are-ccrs",
        heading: "What Are CC&Rs?",
        body: [
          "CC&Rs — short for Covenants, Conditions, and Restrictions — are the foundational rules of community living, and they follow the property, not the owner. Think of them as the \"what\" of your association: the document that defines how the community looks, how property is used, and what obligations every homeowner carries. Boards can also adopt additional policies, as long as those policies don't conflict with the recorded documents or state statutes.",
          "What makes CC&Rs distinct from other governing documents is that they are recorded with the county, meaning a record is kept on file and the property use restrictions are tied to the property itself, not the person who owns it. When a home sells, the CC&Rs transfer automatically to the new owner. Under Florida law, amendments to the Declaration of Covenants, Conditions, and Restrictions require a membership vote and must be re-recorded with the county, making changes deliberate and intentionally difficult to reverse. When Edison's <a href=\"/services/hoa-enforcement/\">covenant enforcement team</a> conducts property inspections, the CC&Rs are one of the governing standards they work from, alongside the Rules & Regulations and any other adopted community policies."
        ],
        subheading: "What CC&Rs Typically Cover",
        list: [
          "Property use restrictions (what can and can't be done with a lot or unit)",
          "Architectural guidelines and exterior modification requirements",
          "Homeowner maintenance obligations",
          "<a href=\"/services/hoa-accounting/\">Assessment obligations and payment requirements</a>",
          "Insurance obligations for homeowners and the association",
          "Dispute resolution mechanisms",
          "Lender protection provisions"
        ]
      },
      {
        id: "what-are-bylaws",
        heading: "What Are HOA Bylaws?",
        body: [
          "Bylaws govern <a href=\"/services/hoa-management/\">how the HOA operates</a> as an organization — not what homeowners can do with their property, but how the board makes decisions, runs meetings, and fulfills the duties and responsibilities of board members. If the CC&Rs are the \"what,\" the bylaws are the \"how.\"",
          "Unlike CC&Rs, bylaws do not need to be recorded with the county under Florida law, though amendments typically require a homeowner vote, with the exact process depending on the amendment provisions written in the bylaws themselves. The bylaws are also where Florida's board certification requirement lives in practice: boards must be certified within 90 days of election under state law, and understanding the governing documents is a core part of that process.",
          "When a question comes up about whether something requires a vote or about the responsibilities of officers, the bylaws are almost always the right document to open first."
        ],
        subheading: "What Bylaws Typically Cover",
        list: [
          "The process for nominating and electing new board members",
          "Length of board member service terms",
          "Duties and responsibilities of board members and officers",
          "How meetings are called, noticed, and conducted",
          "Quorum requirements for valid votes",
          "Voting rights and procedures",
          "How the bylaws themselves can be amended"
        ]
      },
      {
        id: "rules-and-regulations",
        heading: "What About Rules & Regulations?",
        body: [
          "Rules & Regulations are the most flexible layer of your HOA governing documents — operational details the board can update without a community-wide vote, as long as they stay consistent with the CC&Rs and bylaws. While CC&Rs and bylaws both require a membership vote to amend, in most communities the board can adopt or amend Rules & Regulations through a board vote alone. No community-wide vote and no re-recording with the county required.",
          "This flexibility is intentional. A community's pool hours, for example, might need to shift seasonally or as more families move in, and it would be impractical to call a homeowner vote every time that change makes sense. Rules & Regulations allow the board to make those operational adjustments efficiently. The important caveat: no rule or regulation can contradict the covenants, conditions, and restrictions or the bylaws. When documents conflict, the hierarchy holds and the higher-ranking document always controls."
        ]
      },
      {
        id: "which-document-applies",
        heading: "Which Document Applies to Your Situation?",
        body: [
          "The fastest way to use your governing documents well is to match the type of question to the right document. Property rules live in the CC&Rs, governance procedures live in the bylaws, and operational details live in the Rules & Regulations."
        ],
        table: {
          headers: ["If you're dealing with...", "Start here"],
          rows: [
            ["Homeowner painted fence the wrong color", "CC&Rs"],
            ["Upcoming board election procedures", "Bylaws"],
            ["How long a director can serve", "Bylaws"],
            ["Pool hours or guest policy", "Rules & Regulations"],
            ["Insurance obligations for common areas", "CC&Rs"],
            ["How to call a special meeting", "Bylaws"]
          ]
        },
        body3: [
          "When the documents conflict with one another, or when a board isn't sure which document governs a particular situation, that's exactly the kind of question a management partner should help you work through — alongside an association attorney who knows Florida law, where needed."
        ]
      },
      {
        id: "key-difference",
        heading: "HOA Bylaws vs CC&Rs: The Key Difference",
        body: [
          "CC&Rs define the rules homeowners must follow as property owners. Bylaws define the rules the board must follow when governing the association. Both are legally binding, both are difficult to amend, and neither can override state or federal law — but they operate in entirely different lanes.",
          "When a question is about what a homeowner can or can't do, start with the CC&Rs. When a question is about how the HOA operates or how a decision gets made, start with the bylaws. Rules & Regulations fill in the operational gaps that neither document addresses at the level of <a href=\"/services/hoa-management/\">detail day-to-day management</a> requires."
        ]
      },
      {
        id: "faq",
        heading: "Frequently Asked Questions",
        faq: [
          {
            q: "Are CC&Rs and bylaws the same thing?",
            a: "No. CC&Rs and bylaws are two separate documents that serve different purposes. CC&Rs govern what homeowners can do with their property; bylaws govern how the association itself is run. Both are legally binding and both require a membership vote to amend, but they cover entirely different territory. Confusing them is one of the most common mistakes volunteer leaders make when they're new to the role, and it can lead to looking in the wrong place when a decision needs to be made quickly."
          },
          {
            q: "What is the difference between HOA bylaws and CC&Rs?",
            a: "CC&Rs cover the \"what\" — the rules for property use and community living — and bylaws cover the \"how\" — the rules for running the association. CC&Rs are recorded with the county and tied to the property itself, which means they transfer to every new owner automatically. Bylaws are the internal operating rules for the board and don't require county recording under Florida law. When you're asking a question about what a homeowner can or can't do, start with the CC&Rs. When you're asking about how the HOA operates, start with the bylaws."
          },
          {
            q: "Which HOA governing document has more authority?",
            a: "CC&Rs generally take precedence over bylaws, and both outrank Rules & Regulations. The full hierarchy in Florida runs from state and federal law first, then CC&Rs, then Articles of Incorporation, then Bylaws, then Rules & Regulations. When documents conflict, the higher-ranking document controls. Florida's <a href=\"https://www.flsenate.gov/Laws/Statutes/2024/Chapter720/All\" target=\"_blank\" rel=\"noopener\">Chapter 720, the Florida Homeowners' Association Act</a>, governs this hierarchy for HOAs throughout the state and should be the first reference when a board has questions about document authority or amendment procedures."
          },
          {
            q: "Can HOA bylaws override CC&Rs?",
            a: "No. Bylaws cannot override CC&Rs. If a bylaw provision conflicts with a CC&R provision, the CC&R controls. When there's uncertainty about which document governs a situation, the governing documents should be reviewed alongside Florida Chapter 720 and, if needed, in consultation with an HOA attorney. The <a href=\"https://www.caionline.org\" target=\"_blank\" rel=\"noopener\">Community Associations Institute</a> is also a strong resource for boards looking to deepen their governance knowledge."
          }
        ]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Audit: What It Is, When It's Required, and How to Prepare", image: "/assets/blog/hoa-board-members-reviewing-audit.jpg", href: "/blog/hoa-audit" },
      { category: "Financial Management", title: "HOA Reserve Study Florida: What Boards Need to Know", image: "/assets/blog/reserve-study-specialist.jpg", href: "/blog/hoa-reserve-study-guide" }
    ]
  },

  "unenforceable-hoa-rules-florida": {
    category: "For Boards",
    title: "Unenforceable HOA Rules in Florida",
    dek: "Just because a rule is on the books doesn't mean a court will uphold it. What Florida law says about which HOA rules stick, and which don't.",
    author: "Edison Editorial", date: "February 2026", readTime: "8 min",
    heroImage: "/assets/img-inspector.jpg",
    summary: "Florida law protects homeowners from HOA rules that conflict with statute, exceed the board's documented authority, or are enforced selectively. Boards that try to enforce unenforceable rules create legal exposure for themselves, and lose the homeowner's trust along the way.",
    sections: [
      { id: "why-rules-fail", heading: "Why some HOA rules are unenforceable",
        body: ["Florida courts and statute have established categories of rules that boards can't enforce regardless of what the governing documents say. Some are pre-empted by state or federal law; some exceed the scope of authority granted by the CC&Rs; some are valid in principle but enforced so inconsistently that selective-enforcement defenses succeed."]
      },
      { id: "common-categories", heading: "Common categories of unenforceable rules",
        list: [
          "Display of religious or political symbols, protected by FL statute in many cases",
          "Display of the American flag, federally protected (Freedom to Display the American Flag Act)",
          "Service animals, protected by ADA, not subject to standard pet rules",
          "Solar panels, strong FL statutory protection against HOA restrictions",
          "Rules adopted without the procedural requirements specified in the bylaws",
          "Rules retroactively applied to existing conditions without grandfathering"
        ]
      },
      { id: "selective-enforcement", heading: "The selective-enforcement defense",
        body: ["Even a valid rule becomes hard to enforce when the board has enforced it against some owners and not others. Florida courts apply equitable estoppel and waiver doctrines, if the board let it slide for years for one homeowner, it can't suddenly enforce against another. The fix is documented, consistent enforcement on a defined cadence."],
        callout: { label: "How Edison handles this", text: "Address-not-name inspections and documented enforcement workflow are how Edison defends boards against selective-enforcement claims. Inspectors record addresses; the workflow treats every violation the same way." }
      },
      { id: "fair-housing", heading: "Fair housing and accommodation rules",
        body: ["Federal fair housing law protects against discrimination on the basis of race, color, religion, national origin, sex, familial status, and disability. HOA rules that produce disparate impact on protected classes, or that refuse reasonable accommodations for disabled owners, are unenforceable and create federal liability exposure."]
      },
      { id: "before-enforcing", heading: "Before enforcing, three questions",
        body: ["Before issuing a violation notice, boards should answer three questions: (1) Is the rule properly adopted under our governing documents? (2) Is it consistent with FL statute and federal law? (3) Have we enforced it consistently against everyone in similar circumstances? If any answer is uncertain, talk to counsel before enforcing."]
      }
    ],
    related: [
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs Explained", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities" },
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide" }
    ]
  },

  "condo-association-vs-hoa": {
    category: "For Boards",
    title: "Condo Association vs HOA: Which Are You?",
    dek: "Different statutes, different governing documents, different rules. A quick decision tree for boards who aren't sure which framework applies.",
    author: "Edison Editorial", date: "January 2026", readTime: "6 min",
    heroImage: "/assets/img-21.jpg",
    summary: "If your community is declared under a Declaration of Condominium, you're a condo association under Florida Chapter 718. Otherwise, single-family neighborhoods, townhomes, master associations, you're typically an HOA under Chapter 720. The distinction matters for reserves, milestone inspections, and homeowner rights.",
    sections: [
      { id: "the-decision-tree", heading: "The decision tree",
        body: ["The simplest way to tell: read the recorded governing document. If it's a Declaration of Condominium, you're a condo (Ch. 718). If it's a Declaration of Covenants, Conditions, and Restrictions (CC&Rs), you're an HOA (Ch. 720). Townhomes are almost always HOAs even though the buildings are attached. Cooperative associations follow a third statute (Ch. 719)."]
      },
      { id: "key-statute-differences", heading: "Key statutory differences",
        list: [
          "Reserve studies, Ch. 718 mandates SIRS for 3+ story buildings; Ch. 720 doesn't",
          "Milestone inspections, Ch. 718 requires them after age 30 (25 coastal); Ch. 720 doesn't",
          "Common element structure, Different in condos (shared building); HOAs share land + amenities",
          "Master insurance, Ch. 718 has prescriptive coverage requirements; Ch. 720 is flexible",
          "Voting weight, Often weighted in condos; usually equal in HOAs"
        ]
      },
      { id: "operational-differences", heading: "Operational differences boards feel",
        body: ["Condo boards spend more time on building maintenance, insurance, and statutory compliance, the building itself is association property. HOA boards spend more time on amenities, common-area landscaping, and homeowner-property enforcement. Edison runs both as distinct practices because the operating profile genuinely differs."]
      },
      { id: "which-edison-page", heading: "Which Edison page applies to you?",
        body: ["Single-family HOAs and townhome HOAs, see /services/hoa-management/. Condominium associations, see /services/condo-management/. Brevard County coastal communities are predominantly condo and have their own geo page noting the SB-4D compliance focus."]
      }
    ],
    related: [
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide" },
      { category: "Florida Compliance", title: "Florida Milestone Inspection Guide", image: "/assets/img-22.jpg", href: "/blog/florida-milestone-inspection-guide" },
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs Explained", image: "/assets/img-17.jpg", href: "/blog/hoa-bylaws-vs-ccrs" }
    ]
  },

  "hoa-management-fees": {
    category: "Financial Management",
    title: "HOA Management Fees: What Boards Actually Pay",
    dek: "What's standard, what's premium, and how to read a management proposal without losing the plot.",
    author: "Edison Editorial", date: "January 2026", readTime: "10 min",
    heroImage: "/assets/img-13.jpg",
    summary: "HOA management fees in Florida typically run a monthly per-door rate based on community size, service scope, and complexity. The headline number is rarely the whole story, what's included, what's an upcharge, and what happens after year one matters more than the per-door rate.",
    sections: [
      { id: "fee-structure", heading: "How management fees are usually structured",
        body: ["Most Florida HOA management proposals quote a monthly base fee, calculated per door or per unit. A 200-unit HOA paying $18 per door per month would have a base management fee of $3,600/month, or roughly $43,000 annually. The base fee covers the manager's time and standard administrative scope."]
      },
      { id: "whats-typically-included", heading: "What's typically included in the base fee",
        list: [
          "Dedicated association manager, visits, board meetings, day-to-day decisions",
          "Monthly financial statements, balance sheet, P&L, budget-to-actual",
          "Vendor coordination, bid solicitation, contract management, COI tracking",
          "Resident communication, portal, email, phone coverage",
          "Annual meeting support and election coordination",
          "Routine compliance, annual filings, FL statute updates, basic governance"
        ]
      },
      { id: "common-upcharges", heading: "Common upcharges to watch for",
        list: [
          "Per-violation enforcement fees, Edison doesn't charge these; many companies do",
          "ARC review fees, sometimes billed per submission",
          "After-hours emergency coverage, sometimes a separate retainer",
          "Capital project coordination, sometimes billed as a % of project cost",
          "Special assessments processing, sometimes a flat per-event fee",
          "Technology fees, per-resident portal access, ACH processing surcharges"
        ],
        callout: { label: "Edison's approach", text: "Edison doesn't charge per-violation enforcement fees, per-submission ARC fees, or per-resident technology fees. The proposal is fixed-scope; the agreement says exactly what's included. No surprise upcharges." }
      },
      { id: "year-two-pricing", heading: "What happens after year one",
        body: ["Most management agreements include an annual renewal with a CPI-pegged or fixed percentage increase. Read the renewal clause carefully, some companies front-load the first-year discount knowing the increase resets the economics in year two. Edison's agreements are 12-month terms with transparent renewal mechanics; if a board chooses not to renew, they walk free with all records intact."]
      },
      { id: "how-to-evaluate", heading: "How to evaluate a management proposal",
        body: ["The base per-door fee is the starting point, not the conclusion. Compare what's included, what's an upcharge, what the renewal terms look like, and what the company's portfolio sizes per manager actually are. A cheap proposal from a 20-communities-per-manager firm is often more expensive in 18 months than a slightly higher proposal from a boutique firm, because the cost of poor service shows up as legal bills, special assessments, and homeowner attrition."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Audit Guide", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit" },
      { category: "Financial Management", title: "HOA Special Assessment Guide", image: "/assets/img-13.jpg", href: "/blog/hoa-special-assessment" },
      { category: "Local Authority", title: "Best HOA Management Companies in Orlando", image: "/assets/img-community-aerial.jpg", href: "/blog/best-hoa-management-companies-orlando" }
    ]
  },

  "hoa-special-assessment": {
    category: "Financial Management",
    title: "HOA Special Assessment Guide",
    dek: "When special assessments make sense, how they're approved, what they look like in Florida, and the alternatives most boards skip past.",
    author: "Edison Editorial", date: "February 2026", readTime: "8 min",
    heroImage: "/assets/img-accounting.jpg",
    summary: "A special assessment is a one-time charge to homeowners outside the regular assessment cycle, usually to fund a capital project that reserves can't cover. They work, but they damage homeowner trust, drive owner attrition, and are usually preventable with disciplined reserve banking.",
    sections: [
      { id: "what-it-is", heading: "What a special assessment is",
        body: ["A special assessment is a non-recurring charge levied on every owner to fund a specific need, typically a capital project (new roof, repaving, structural repair) that the reserve fund can't cover, or an emergency expense (hurricane damage, insurance shortfall) that wasn't in the budget."]
      },
      { id: "approval-process", heading: "How special assessments get approved",
        body: ["The approval process is governed by the association's bylaws and FL statute. HOAs typically require a board vote with proper notice and an opportunity for homeowner input. Condos under Ch. 718 have specific notice and meeting requirements. A few governing documents require a homeowner vote above certain thresholds, check yours carefully."]
      },
      { id: "alternatives", heading: "Alternatives boards often skip past",
        list: [
          "Phasing the project, sequence work over 2–4 years to match reserve cash flow",
          "Bank financing, community-level loans against reserves can spread the impact",
          "Reserve banking optimization, sometimes the funds exist but aren't yielding",
          "Insurance claims, for damage events, the master policy may cover more than assumed",
          "Vendor renegotiation, competitive re-bidding sometimes drops project cost meaningfully"
        ],
        callout: { label: "Why this matters", text: "Special assessments are the loudest signal of reserve underfunding. Boards that go to special assessment once tend to do it again, until the underlying reserve discipline gets fixed. Edison's accounting team flags reserve gaps years before they become special-assessment territory." }
      },
      { id: "homeowner-impact", heading: "What homeowners feel",
        body: ["A $5,000 special assessment is a lot to ask of a homeowner who didn't see it coming. Owners on fixed incomes or recent buyers tend to feel it hardest. Communities that special-assess frequently see slower unit sales, lower resale values, and more contentious annual meetings. The financial damage to community standing often outweighs the cost being assessed."]
      },
      { id: "communicating-it", heading: "Communicating a special assessment well",
        body: ["When a special assessment is genuinely necessary, communication is everything. Edison's playbook: name the specific project, show the reserve study calculation, explain the alternatives considered, and provide payment-plan options. Homeowners can accept hard news; they can't accept being surprised."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Reserve Study Guide (Florida)", image: "/assets/img-21.jpg", href: "/blog/hoa-reserve-study-guide-florida" },
      { category: "Financial Management", title: "HOA Audit Guide", image: "/assets/img-accounting.jpg", href: "/blog/hoa-audit" },
      { category: "Financial Management", title: "HOA Management Fees", image: "/assets/img-13.jpg", href: "/blog/hoa-management-fees" }
    ]
  },

  "hoa-reserve-study-guide": {
    category: "Financial Management",
    title: "HOA Reserve Study Florida: What Boards Need to Know",
    dek: "What is an HOA reserve study and why does Florida law require one? Learn what boards need to know about reserve studies, costs, and funding requirements.",
    author: "Edison Association Management",
    date: "May 20, 2026",
    readTime: "10 min",
    heroImage: "/assets/blog/reserve-study-specialist.jpg",
    intro: [
      "You're staring at a line item in the budget labeled \"reserves,\" and you're not entirely sure the number is right. Maybe it was carried over from last year. Maybe it was set by a previous board. Maybe no one has looked at the actual condition of the roof, the pool deck, or the parking lot in years. If any of this sounds familiar, your community probably needs an HOA reserve study.",
      "A reserve study is the financial planning tool that tells your board exactly where your community stands: what's aging, when it will need replacement, and whether the money is there to pay for it. In Florida, where hurricane exposure, humidity, and rapid development put constant pressure on shared infrastructure, reserve planning is not optional. It's how boards avoid the surprise special assessments that frustrate homeowners and erode trust.",
      "This guide covers what a reserve study is, whether Florida law requires one for your community, what it costs, how often to update it, and how a professional management company supports the process from start to finish."
    ],
    sections: [
      {
        id: "what-is-an-hoa-reserve-study",
        heading: "What Is an HOA Reserve Study?",
        body: [
          "A reserve study is a financial planning tool that inventories a community's major shared assets, estimates when each will need repair or replacement, and recommends how much the association should set aside each year to cover those future costs.",
          "<strong>Every reserve study has two parts: a physical analysis and a financial analysis.</strong> The physical analysis is an on-site inspection of every major common-area component. A licensed engineer or reserve specialist walks the property and catalogs items like the roof, parking surfaces, pool and pool equipment, HVAC systems, exterior painting, fencing, drainage infrastructure, and landscaping hardscape. For each component, the specialist records its current condition, estimated useful life, remaining useful life, and estimated replacement cost.",
          "The financial analysis takes those findings and measures them against the association's current reserve fund balance. It projects annual contributions, factors in interest earned, and produces a funding plan that shows how contributions need to change over time to keep pace with upcoming capital expenses. The output includes a percent-funded metric, which represents how much the association has saved relative to what it should have saved. The <a href=\"https://www.caionline.org/advocacy/public-policies/reserve-study-and-funding/\" target=\"_blank\" rel=\"noopener\">Community Associations Institute (CAI)</a> considers 70% or above to be adequately funded.",
          "Think of a reserve study as the community's long-range financial roadmap. Without one, the board is making budget decisions based on assumptions instead of data."
        ]
      },
      {
        id: "florida-reserve-study-requirements",
        heading: "Florida HOA Reserve Study Requirements: HOA vs. Condo",
        body: [
          "Florida law treats HOAs and condominiums differently when it comes to reserve studies, and this distinction is where many boards get confused."
        ],
        table: {
          headers: ["Requirement", "HOAs (Chapter 720)", "Condominiums (Chapter 718)"],
          rows: [
            ["Formal reserve study mandate", "No statutory requirement as of 2026", "SIRS required for buildings 3+ stories"],
            ["Reserve accounts required", "Yes — must be included in annual budget", "Yes — with full funding required for SIRS components"],
            ["Owners can vote to waive reserves", "Yes — annually, by majority vote", "No — SIRS reserves cannot be waived"],
            ["Update interval", "Best practice: every 3–5 years", "SIRS: every 10 years (statutory minimum)"]
          ]
        },
        body3: [
          "<strong>For HOAs governed under <a href=\"https://www.flsenate.gov/Laws/Statutes/2000/720.303\" target=\"_blank\" rel=\"noopener\">Florida Statute 720.303(6)</a>, there is no statutory mandate requiring a formal reserve study.</strong> The statute requires associations to include reserve accounts in their annual budget and disclose reserve balances to members, but boards may vote each year to waive or partially fund those reserves. That said, most community governing documents require a reserve study every three to five years. Lenders, insurance carriers, and prospective buyers are also increasingly looking for current reserve studies as a sign of responsible governance. Skipping a reserve study is the fastest path to a special assessment.",
          "For condominiums under <a href=\"https://www.flsenate.gov/Laws/Statutes/2025/Chapter718/All\" target=\"_blank\" rel=\"noopener\">Chapter 718</a>, the requirements are significantly stricter. Florida now mandates a Structural Integrity Reserve Study (SIRS) for condominium buildings three stories or higher. The initial SIRS deadline was December 31, 2025, and studies must be updated at least every 10 years. SIRS covers eight mandatory structural components, and reserves for those components cannot be waived by a vote of the owners. It's important to note that SIRS addresses structural elements only. Condominium associations still benefit from a traditional reserve study for non-structural items like pool equipment, landscaping, and common-area finishes."
        ]
      },
      {
        id: "what-does-a-reserve-study-include",
        heading: "What Does a Reserve Study Include?",
        body: [
          "A comprehensive reserve study includes a physical site inspection and a financial analysis that together produce a 20- to 30-year funding plan for the association.",
          "During the physical analysis, a licensed engineer or reserve specialist conducts an on-site inspection of every major common-area component. The component inventory typically includes roofing, asphalt and concrete paving, pool and pool deck surfaces, exterior painting, HVAC systems, fencing, gates, drainage systems, clubhouse interiors, and landscaping infrastructure such as irrigation and retaining walls. For each item, the specialist records its current condition, total useful life, estimated remaining useful life, and projected replacement cost.",
          "<strong>The financial analysis translates those physical findings into a funding strategy the board can act on.</strong> It compares the association's current reserve fund balance against projected capital expenses over the planning horizon, accounts for interest earned on reserves, and recommends an annual contribution schedule designed to keep the fund on track. The result is a clear picture of whether the association is adequately funded, underfunded, or on pace.",
          "CAI recognizes four levels of reserve studies. A Level I study is the most comprehensive, including a full on-site inspection, and is recommended every five years. A Level II study is an update that includes a new site visit. A Level III study updates the financial projections without a new inspection. A Level IV study is for pre-construction communities. Most established communities need a Level I study every five years, with Level II updates in between to keep the data current."
        ]
      },
      {
        id: "how-much-does-a-reserve-study-cost",
        heading: "How Much Does an HOA Reserve Study Cost?",
        body: [
          "A full HOA reserve study typically costs between $3,000 and $10,000 or more, depending on the size and complexity of the community.",
          "Several factors influence the final price. Larger communities with more units naturally require more inspection time and a more detailed component inventory. Communities with multiple building types, pools, clubhouses, and extensive common-area infrastructure will land on the higher end of the range. Whether the study is a first-time engagement or an update to an existing study also affects cost, as does whether the community has condo SIRS requirements that add structural inspection components.",
          "<strong>When evaluating reserve study providers, boards should look for the CAI Reserve Specialist (RS) credential, direct experience with Florida communities, and a commitment to a thorough on-site inspection rather than a desk review.</strong> Clarity of the final report matters too. A reserve study that boards can't interpret is a reserve study that doesn't get used. Some communities reduce costs by coordinating the reserve study with a required milestone inspection.",
          "A good management company helps boards evaluate proposals and ensures the reserve study firm has practical context about the community's actual condition. At Edison, that means walking the property alongside the specialist and sharing real-world input on what's been recently replaced, what's showing early signs of wear, and which vendor quotes the board has already collected. That kind of context makes the study more accurate from the start."
        ]
      },
      {
        id: "how-often-to-update",
        heading: "How Often Should a Board Update Its Reserve Study?",
        body: [
          "CAI recommends updating the reserve study at least every three years, with a full Level I study every five years. <strong>In Florida's construction cost environment, where hurricanes, inflation, and supply chain disruptions can shift replacement costs significantly in a short window, regular updates are especially important.</strong>",
          "A reserve study is a living document, not a one-time checkbox. Components deteriorate faster or slower than projected. Boards make capital improvement decisions that shift the funding timeline. Construction material costs change. An HOA reserve study from five years ago may significantly underestimate what it actually costs to repave a parking lot or re-roof a clubhouse today.",
          "For condominium associations subject to SIRS, the statutory update interval is every 10 years. That's a legal floor, not a best practice. Well-managed communities update their reserve studies more frequently than the statute requires, because waiting a decade between assessments invites costly surprises."
        ]
      },
      {
        id: "how-management-supports-the-process",
        heading: "How a Management Company Supports the Reserve Study Process",
        body: [
          "A reserve study is only as useful as what the board does with it. That's where the management company matters.",
          "<strong>Most management companies hand the reserve study off to a vendor, wait for the report, and drop it in a board packet. Edison's approach is different.</strong>",
          "Before the study begins, Edison's team walks the property and provides the reserve specialist with practical, on-the-ground context. Which components were recently repaired or replaced? Which areas are showing early signs of failure that might not be obvious in a single-day inspection? What vendor quotes has the board already received for upcoming projects? This kind of input makes the reserve study more accurate and more useful.",
          "During the study, Edison coordinates property access, provides historical maintenance records from CINC Systems, and ensures the specialist has accurate data on prior replacements and upgrades. Organized records and responsive management support mean the specialist spends their time inspecting, not chasing documentation.",
          "After the study is complete, Edison translates the findings into the community's <a href=\"/services/hoa-accounting/\">annual budget</a>. Reserve contribution recommendations are adjusted, the funding plan is mapped against upcoming capital projects, and the board has a clear path forward. Edison's banking partnership with One Florida Bank also helps boards optimize how reserve dollars are held. CDs, sweep accounts, and FDIC coverage structuring ensure reserve funds earn interest while they wait, rather than sitting idle in a low-yield account.",
          "This is what reserve planning looks like when the management company treats it as part of ongoing financial stewardship rather than a one-time vendor deliverable."
        ]
      },
      {
        id: "faq",
        heading: "Frequently Asked Questions",
        faq: [
          {
            q: "Is a reserve study legally required for Florida HOAs?",
            a: "No. As of 2026, Florida Statute Chapter 720 does not mandate a formal reserve study for HOAs. The statute requires associations to maintain reserve accounts and disclose them in the annual budget, but boards can vote to waive or partially fund reserves each year. That said, most governing documents require a reserve study every three to five years, and lenders, insurers, and prospective buyers increasingly expect one. Condominiums under Chapter 718 face stricter rules: buildings three stories or higher must complete a Structural Integrity Reserve Study (SIRS), and those reserves cannot be waived."
          },
          {
            q: "How much does an HOA reserve study cost in Florida?",
            a: "Most Florida communities pay between $3,000 and $10,000 or more for a full reserve study. Cost depends on the number of units, the number of distinct building types, the complexity of common-area infrastructure, and whether the engagement is a first-time study or an update. Larger communities with pools, clubhouses, and multiple building styles will be on the higher end."
          },
          {
            q: "What happens if an HOA doesn't have a reserve study?",
            a: "Without a reserve study, the board is budgeting blind. When a major component fails and the reserve fund can't cover it, a special assessment becomes the default funding mechanism. Underfunded reserves erode property values, create homeowner frustration, and expose board members to fiduciary risk. A reserve study gives the board the data to plan ahead, fund responsibly, and avoid financial surprises."
          },
          {
            q: "How often should an HOA update its reserve study?",
            a: "CAI recommends updating at least every three years, with a full Level I study every five years. In Florida, where hurricane seasons, inflation, and supply chain volatility can rapidly change construction costs, regular updates are particularly important. A reserve study that's five years old may significantly underestimate current replacement costs for common components like roofing, paving, and pool resurfacing."
          }
        ]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Audit: What It Is, When It's Required, and How to Prepare", image: "/assets/blog/hoa-board-members-reviewing-audit.jpg", href: "/blog/hoa-audit" },
      { category: "For Boards", title: "HOA Bylaws vs CC&Rs: Key Differences Explained", image: "/assets/blog/bylaws-vs-ccrs.jpg", href: "/blog/hoa-bylaws-vs-ccrs" }
    ]
  },

  "best-hoa-management-companies-orlando": {
    category: "Local Authority",
    title: "Best HOA Management Companies in Orlando: An Honest Field Guide",
    dek: "Written for boards comparing options. What to look for, what to watch out for, and how Edison stacks up, without disparaging competitors.",
    author: "Edison Editorial", date: "December 2025", readTime: "11 min",
    heroImage: "/assets/img-community-aerial.jpg",
    summary: "Orlando has more HOA management options than any other city in Central Florida, from national operators with hundreds of communities to single-manager boutiques. The right choice for your board depends on portfolio size per manager, depth of back-office, transition discipline, and how loud the company's voicemail gets.",
    sections: [
      { id: "what-to-look-for", heading: "What to look for in any HOA management company",
        list: [
          "Portfolio size per manager, boutique firms keep portfolios limited so managers stay proactive; large operators stretch managers across far more communities",
          "Dedicated departments, is accounting separate from management, or is the manager the bookkeeper?",
          "Manager turnover, ask explicitly; most firms see 30–40% annually",
          "Leadership credentials, PCAM, CMCA, CAI involvement signal real industry standing",
          "Technology stack, CINC, AppFolio, and similar purpose-built systems are table stakes",
          "Transition discipline, is there a defined onboarding program, or is it ad hoc?",
          "Response standard, what's the same-day vs 24-hour response guarantee?"
        ]
      },
      { id: "the-orlando-market", heading: "The Orlando HOA management market",
        body: ["Orlando's HOA market includes large national firms (multi-state operators), regional firms (Florida-only but multi-city), and boutique firms like Edison. National firms scale through process and technology; regional firms scale through relationships and local knowledge; boutiques scale through portfolio discipline and back-office depth. None is automatically better, fit matters."]
      },
      { id: "questions-to-ask", heading: "Questions to ask in any interview",
        list: [
          "How many communities will our specific manager carry?",
          "What's your manager turnover rate? (Ask for a number, not 'low')",
          "Who handles our accounting, the manager, or a dedicated specialist?",
          "What does your transition look like? Show us the timeline.",
          "What's the renewal mechanism in year two? What does the price escalate to?",
          "How do you handle covenant enforcement? Are inspections address-only or name-based?",
          "Will your principal personally meet with our board?"
        ],
        callout: { label: "Edison's answers, in case you're wondering", text: "A limited number of communities per manager. Manager turnover a fraction of industry average. Dedicated accounting specialist with CPA-led oversight. 60–90 day transition with defined COO supervision. 12-month terms with transparent renewal. Address-not-name enforcement. Tracy onboards every association personally." }
      },
      { id: "the-pricing-trap", heading: "The pricing trap most boards fall into",
        body: ["The cheapest proposal almost always becomes the most expensive one in 18 months. Cheap usually means overloaded managers, thin back-office, high turnover, and a renewal mechanism that resets the economics in year two. The real cost of a management company shows up as legal exposure, special assessments, homeowner attrition, and the time the board spends doing the management company's job."]
      },
      { id: "how-edison-shows-up", heading: "How Edison shows up in the market",
        body: ["Edison is deliberately a boutique. Manager portfolios are deliberately limited. Tracy Durham (PCAM, 2025 CAI Central Florida Chapter President) personally onboards every new association. Back-office departments, accounting, enforcement, collections, are separate from management. Same-day response for board members; 24-hour for homeowners; non-negotiable. We don't try to be the cheapest. We try to be the firm boards stay with."]
      }
    ],
    related: [
      { category: "Financial Management", title: "HOA Management Fees: What Boards Actually Pay", image: "/assets/img-13.jpg", href: "/blog/hoa-management-fees" },
      { category: "For Boards", title: "HOA Board Member Responsibilities", image: "/assets/img-11.jpg", href: "/blog/hoa-board-member-responsibilities" },
      { category: "Florida Compliance", title: "Florida HOA Laws Guide", image: "/assets/img-13.jpg", href: "/blog/florida-hoa-laws-guide" }
    ]
  }
};

export { BLOG_CONTENT };
