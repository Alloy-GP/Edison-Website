/* ============================================================
   Phase 1 Pages — INDEX
   Maps every Phase 1 URL to its template + content key.
   ============================================================ */

const PHASE_1_PAGES = [
  /* CORE */
  { url: "/",                              label: "Home",                       template: "Home",          group: "Core" },
  { url: "/about",                        label: "About",                      template: "AboutPageB",    group: "Core" },
  { url: "/request-a-proposal",           label: "Request a Proposal",         template: "IntakeForm", group: "Core" },

  /* LANDING HUBS */
  { url: "/services",   label: "Services Landing",   template: "ServicesLandingPage",  group: "Core" },
  { url: "/solutions",  label: "Solutions Landing",  template: "SolutionsLandingPage", group: "Core" },

  /* MAIN PILLARS */
  { url: "/services/hoa-management",      label: "HOA Management",             template: "PillarPageA",   contentKey: "hoa-management",   group: "Pillars" },
  { url: "/services/condo-management",    label: "Condo Management",           template: "PillarPageA",   contentKey: "condo-management", group: "Pillars" },

  /* SIBLING SERVICES (cross-pillar) */
  { url: "/services/hoa-accounting",      label: "HOA Accounting",             template: "ServicePage",   contentKey: "hoa-accounting",      group: "Services" },
  { url: "/services/covenant-enforcement",label: "Covenant Enforcement",       template: "ServicePage",   contentKey: "covenant-enforcement",group: "Services" },
  { url: "/services/hoa-collections",     label: "HOA Collections",            template: "ServicePage",   contentKey: "hoa-collections",     group: "Services" },

  /* PROPERTY-TYPE SUB-SERVICES (under HOA Management) */
  { url: "/services/hoa-management/single-family", label: "Single-Family HOA Management", template: "SubServicePage", contentKey: "single-family", group: "Sub-Services" },
  { url: "/services/hoa-management/townhome",      label: "Townhome Association Management", template: "SubServicePage", contentKey: "townhome",    group: "Sub-Services" },

  /* STATUTORY SUB-SERVICES */
  { url: "/services/hoa-accounting/budget-preparation",                       label: "Budget Preparation",                 template: "SubServicePage", contentKey: "budget-preparation",   group: "Sub-Services" },
  { url: "/services/hoa-accounting/reserve-study-support",                    label: "Reserve Study Support",              template: "SubServicePage", contentKey: "reserve-study-support",group: "Sub-Services" },
  { url: "/services/condo-management/milestone-inspections",                  label: "Milestone Inspection Coordination",  template: "SubServicePage", contentKey: "milestone-inspections",group: "Sub-Services" },
  { url: "/services/condo-management/structural-integrity-reserve-study",     label: "Structural Integrity Reserve Study (SIRS)", template: "SubServicePage", contentKey: "sirs", group: "Sub-Services" },

  /* SOLUTIONS (3, per v3.1) */
  { url: "/solutions/switch-hoa-management-company", label: "Switch HOA Management Company",  template: "SolutionPageB", contentKey: "switch-hoa-management-company", group: "Solutions" },
  { url: "/solutions/self-managed-hoa",              label: "Self-Managed → Professional",    template: "SolutionPageB", contentKey: "self-managed-hoa",              group: "Solutions" },
  { url: "/solutions/modern-hoa-management",         label: "Modern HOA Management",          template: "SolutionPageB", contentKey: "modern-hoa-management",         group: "Solutions" },

  /* GEO (8 cities) */
  { url: "/services/hoa-management/orlando",            label: "HOA Management Orlando",            template: "GeoPageB", contentKey: "orlando",            group: "Geo" },
  { url: "/services/hoa-management/winter-garden",      label: "HOA Management Winter Garden",      template: "GeoPageB", contentKey: "winter-garden",      group: "Geo" },
  { url: "/services/hoa-management/kissimmee",          label: "HOA Management Kissimmee",          template: "GeoPageB", contentKey: "kissimmee",          group: "Geo" },
  { url: "/services/hoa-management/clermont",           label: "HOA Management Clermont",           template: "GeoPageB", contentKey: "clermont",           group: "Geo" },
  { url: "/services/hoa-management/lake-mary",          label: "HOA Management Lake Mary",          template: "GeoPageB", contentKey: "lake-mary",          group: "Geo" },
  { url: "/services/hoa-management/altamonte-springs",  label: "HOA Management Altamonte Springs",  template: "GeoPageB", contentKey: "altamonte-springs",  group: "Geo" },
  { url: "/services/hoa-management/oviedo",             label: "HOA Management Oviedo",             template: "GeoPageB", contentKey: "oviedo",             group: "Geo" },
  { url: "/services/hoa-management/brevard-county",     label: "HOA Management Brevard County",     template: "GeoPageB", contentKey: "brevard-county",     group: "Geo" },

  /* TRUST & BRANDED */
  { url: "/testimonials",                  label: "Testimonials",            template: "TestimonialsPageB", group: "Trust & Branded" },
  { url: "/edison-education",              label: "Edison Education",        template: "EducationHubA",     group: "Trust & Branded" },
  { url: "/about/meet-our-team",           label: "Meet Our Team",           template: "TeamPageA",         group: "Trust & Branded" },
  { url: "/about/meet-your-management",    label: "Meet Your Management",    template: "MeetYourManagementPage", group: "Trust & Branded" },

  /* RESOURCES */
  { url: "/blog",                          label: "Blog Index",              template: "BlogIndexPage",       group: "Resources" },
  { url: "/faq",                           label: "FAQ",                     template: "FAQPage",             group: "Resources" },

  /* BLOG SPOKES */
  { url: "/blog/hoa-audit",                                           label: "HOA Audit Guide",                         template: "BlogSpokeA", contentKey: "hoa-audit",                          group: "Blog Spokes" },
  { url: "/blog/florida-hoa-laws-guide",                              label: "Florida HOA Laws Guide",                  template: "BlogSpokeA", contentKey: "florida-hoa-laws-guide",             group: "Blog Spokes" },
  { url: "/blog/florida-milestone-inspection-guide",                  label: "Florida Milestone Inspection Guide",      template: "BlogSpokeA", contentKey: "florida-milestone-inspection-guide", group: "Blog Spokes" },
  { url: "/blog/hoa-reserve-study-guide-florida",                     label: "HOA Reserve Study Guide (Florida)",       template: "BlogSpokeA", contentKey: "hoa-reserve-study-guide-florida",    group: "Blog Spokes" },
  { url: "/blog/hoa-board-member-responsibilities",                   label: "HOA Board Member Responsibilities",       template: "BlogSpokeA", contentKey: "hoa-board-member-responsibilities",  group: "Blog Spokes" },
  { url: "/blog/hoa-bylaws-vs-ccrs",                                  label: "HOA Bylaws vs CC&Rs",                     template: "BlogSpokeA", contentKey: "hoa-bylaws-vs-ccrs",                 group: "Blog Spokes" },
  { url: "/blog/unenforceable-hoa-rules-florida",                     label: "Unenforceable HOA Rules in Florida",      template: "BlogSpokeA", contentKey: "unenforceable-hoa-rules-florida",    group: "Blog Spokes" },
  { url: "/blog/condo-association-vs-hoa",                            label: "Condo Association vs HOA",                template: "BlogSpokeA", contentKey: "condo-association-vs-hoa",           group: "Blog Spokes" },
  { url: "/blog/hoa-management-fees",                                 label: "HOA Management Fees",                     template: "BlogSpokeA", contentKey: "hoa-management-fees",                group: "Blog Spokes" },
  { url: "/blog/hoa-special-assessment",                              label: "HOA Special Assessment Guide",            template: "BlogSpokeA", contentKey: "hoa-special-assessment",             group: "Blog Spokes" },
  { url: "/blog/best-hoa-management-companies-orlando",               label: "Best HOA Management Companies Orlando",   template: "BlogSpokeA", contentKey: "best-hoa-management-companies-orlando", group: "Blog Spokes" },

  /* LEGAL */
  { url: "/privacy-policy",                label: "Privacy Policy",          template: "PrivacyPolicyPage",   group: "Legal" },
  { url: "/terms-of-service",              label: "Terms of Service",        template: "TermsOfServicePage",  group: "Legal" }
];

export { PHASE_1_PAGES };
