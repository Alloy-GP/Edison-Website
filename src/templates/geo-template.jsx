import React from 'react';
import { BodyProse, Breadcrumb, DetailLinkCards, FAQ, FeatureGrid, FinalCTA, InteriorButton, MidCTA, SectionHeading, ServiceArea } from '../components/interior-components';
import { GeoHeroLocal, GeoHeroService, LocalContext, NeighborhoodList, PullQuote, StatsBand } from '../components/template-sections';

/* ============================================================
   GEO PAGE TEMPLATE, VARIANT A (Location-First)
   Hero foregrounds the city. Best for high-search-volume primaries
   (Orlando) and cities with strong local-identity signal.
   ============================================================ */
function GeoPageA({ content }) {
  return (
    <main data-screen-label="Geo, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "HOA Management", href: "/services/hoa-management" },
        { label: content.city }
      ]}/>

      <GeoHeroLocal
        eyebrow={`HOA Management · ${content.region}`}
        city={content.city}
        lede={content.hero.lede}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "See Our Services", href: "/services" }}
        image={content.hero.image}
      />

      <StatsBand
        background="#fff"
        stats={content.localStats}
      />

      <LocalContext
        eyebrow={`Why ${content.city}`}
        title={content.context.title}
        paragraphs={content.context.paragraphs}
        image={content.context.image}
      />

      <FeatureGrid
        background="#fff"
        eyebrow="What's included"
        title={`Full-service HOA management for ${content.city} boards`}
        sub="Operational, financial, and advisory support, delivered by a dedicated manager with a back-office team handling everything that isn't community-facing."
        columns={3}
        items={content.services}
      />

      <NeighborhoodList
        background="var(--edison-teal-pale)"
        eyebrow="Communities we serve"
        title={`HOA communities across ${content.city} & nearby`}
        sub="Edison manages associations throughout the area. If your community isn't listed, ask, we add coverage as boards reach out."
        items={content.neighborhoods}
      />

      <PullQuote
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
        background="#fff"
      />

      <FinalCTA
        eyebrow={`${content.city} · Central Florida`}
        title={`Local HOA management. Sized for the community, not the portfolio.`}
        body={`Tell us about your ${content.city} association and we'll deliver a written proposal within one business day, sized for your governing documents, capital plan, and homeowner count.`}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: `Call ${content.phone}`, href: `tel:${content.phone.replace(/\D/g,"")}` }}
      />
    </main>
  );
}

/* ============================================================
   GEO PAGE TEMPLATE, VARIANT B (Service-First with City Qualifier)
   Strong text hero. Better for secondary cities, scalable to all
   geo pages with a single content shape.
   ============================================================ */
function GeoPageB({ content }) {
  return (
    <main data-screen-label="Geo, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "HOA Management", href: "/services/hoa-management" },
        { label: content.city }
      ]}/>

      <GeoHeroService
        eyebrow={`HOA Management · ${content.city}, FL`}
        title={`Professional HOA management for ${content.city} boards.`}
        lede={content.hero.lede}
        city={content.city}
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "See Our Services", href: "/services" }}
        locationStrip={[
          { label: "Based in", value: "Orlando, FL" },
          { label: "Serving", value: `${content.city} & nearby` },
          { label: "Office hours", value: "M–F 9am–5pm" },
          { label: "Same-day", value: "board response" }
        ]}
      />

      <DetailLinkCards
        eyebrow="Services"
        title={`What we deliver to ${content.city} associations`}
        sub="Each service is run by a dedicated department, not a manager wearing six hats. Click through to see what's included."
        columns={3}
        items={content.serviceLinks}
      />

      <FeatureGrid
        background="var(--edison-teal-pale)"
        eyebrow={`Why ${content.city} boards choose Edison`}
        title="Built for the way Central Florida communities actually run"
        columns={3}
        items={content.differentiators}
      />

      <LocalContext
        background="#fff"
        eyebrow={`${content.city} context`}
        title={content.context.title}
        paragraphs={content.context.paragraphs}
        image={content.context.image}
      />

      <NeighborhoodList
        background="#fff"
        eyebrow="Coverage"
        title={`Neighborhoods & communities we serve in ${content.city}`}
        items={content.neighborhoods}
      />

      <ServiceArea
        eyebrow="Beyond"
        title={`${content.city} is one of several cities we cover`}
        body={`Edison manages HOA, condo, and townhome associations across Central Florida. The full service area covers Orange, Seminole, Osceola, Lake, and Brevard counties.`}
        cities={content.nearbyCities}
        mapImg="/assets/img-neighborhood-aerial.jpg"
      />

      <FinalCTA
        eyebrow="Get started"
        title={`Ready to talk about your ${content.city} association?`}
        body="Send us the basics and we'll respond within one business day with next steps. Same-day for board members, 24-hour for homeowners, non-negotiable."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Contact Us", href: "/request-a-proposal" }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT, "HOA Management Orlando"
   ============================================================ */
const ORLANDO_CONTENT = {
  city: "Orlando",
  region: "Orange County, FL",
  phone: "(407) 317-5252",
  hero: {
    lede: "Orlando boards have more management choices than any other city in Central Florida, and more competing pressures than most. Edison is the boutique alternative: a dedicated manager who knows your community, a PCAM-credentialed leader at the top, and back-office departments that close the loop on what most companies leave open.",
    image: "/assets/img-community-aerial.jpg"
  },
  localStats: [
    { value: "Orlando", caption: "Headquartered here. Tracy and the team live and work in the metro." },
    { value: "Limited", caption: "Portfolios sized to your community, well below the industry average." },
    { value: "4.9★", caption: "Google rating, the highest of any named competitor in the Orlando market." },
    { value: "M–F", caption: "9am–5pm office hours. Same-day response for board members." }
  ],
  context: {
    title: "Orlando's HOA market is unique, and so are its boards",
    paragraphs: [
      "Orlando is one of the fastest-growing HOA markets in the country. The metro adds roughly 1,500 residents a week, sees rapid new-community development, and houses a mix of established neighborhoods, transplant-heavy newer subdivisions, and growing 55+ communities. That growth has produced a strong management-company industry, but also a familiar pattern: large firms get larger, managers get spread thinner, and boards end up wondering why their phone calls aren't being returned.",
      "Edison was founded in Orlando in 2021 with a deliberately different model. Smaller portfolios. Dedicated back-office departments. A PCAM-credentialed principal, Tracy Durham, with 15+ years in the industry, who personally onboards every new association. The result is a management partner that scales with the community's needs, not the company's growth chart."
    ],
    image: "/assets/img-community-aerial.jpg"
  },
  services: [
    { title: "HOA Management", body: "Dedicated managers, transparent reporting, and proactive communication, built for Orlando's mix of established and newer communities." },
    { title: "HOA Accounting", body: "Monthly financials, reserve study guidance, and reserve banking, handled by a dedicated specialist, not your manager's spare time." },
    { title: "Covenant Enforcement", body: "Consistent inspections, fair enforcement, and full compliance tracking, protecting property values without homeowner relationships." },
    { title: "Collections", body: "In-house collections through intent-to-lien, with attorney coordination when legally required. Fast cash flow, clear ledger." },
    { title: "Reserve Planning", body: "Florida reserve study coordination, capital project pipeline, and long-range funding plans your board can defend." },
    { title: "The Transition Experience", body: "60–90 day onboarding with COO oversight, for boards switching from another company." }
  ],
  serviceLinks: [
    { title: "HOA Management", body: "Day-to-day management, monthly inspections, vendor coordination, and the Action Item List, live project tracking that replaces stale manager reports.", href: "/services/hoa-management" },
    { title: "HOA Accounting", body: "Monthly statements, reserve study guidance, reserve banking, tax filing, handled by a dedicated accounting specialist.", href: "/services/hoa-accounting" },
    { title: "Covenant Enforcement", body: "Dedicated enforcement department. Fair, consistent, and address-not-name based, protecting property values and homeowner relationships.", href: "/services/covenant-enforcement" },
    { title: "Single-Family HOA", body: "Tailored management for single-family neighborhood HOAs across Orlando, Ch. 720 compliance, ARC support, common-area planning.", href: "/services/hoa-management/single-family" },
    { title: "Townhome Associations", body: "Townhome-specific challenges handled, shared roofs, common insurance, party-wall maintenance, and homeowner expectations.", href: "/services/hoa-management/townhome" },
    { title: "Management Transition", body: "The Edison Transition Experience handles records, vendors, and homeowner communication, 60–90 days, end to end.", href: "/solutions/switch-hoa-management-company" }
  ],
  differentiators: [
    { title: "Industry-Low Manager Turnover", body: "Most firms see 30–40% annual turnover. Edison's is a fraction of that. The manager who learns your community in year one is still there in year three." },
    { title: "Dedicated Back-Office Departments", body: "Enforcement, ARC, accounting, and collections are separate departments, not your manager's overtime work. Boards get specialist quality on every workstream." },
    { title: "Boutique Portfolio Sizes", body: "a limited number of communities per manager, well below the industry average. Yours isn't lost in a portfolio of hundreds. The manager actually knows your community by name." },
    { title: "Leadership Credibility", body: "Edison's principal is a PCAM and the 2025 CAI Central Florida Chapter President, credentials boards can verify and trust." },
    { title: "Modern Technology, Human Touch", body: "WATTSON AI for 24/7 resident questions. CINC for portals and financials. A human still answers when you call the office." },
    { title: "The Edison Transition Experience", body: "Switching is the burden Edison absorbs, records, vendors, banking, homeowner communication. 60–90 days, COO-supervised." }
  ],
  neighborhoods: [
    "Lake Nona", "Baldwin Park", "MetroWest", "Dr. Phillips", "Hunters Creek",
    "College Park", "Audubon Park", "Avalon Park", "Conway", "Belle Isle",
    "Edgewood", "Pine Hills", "Rosemont", "Southchase", "Williamsburg",
    "Vista Park", "Eola Heights", "Thornton Park"
  ],
  nearbyCities: [
    "Winter Garden", "Kissimmee", "Clermont", "Lake Mary",
    "Altamonte Springs", "Oviedo", "Apopka", "Sanford", "Maitland",
    "Winter Park", "St. Cloud", "Brevard County"
  ],
  quote: {
    quote: "We interviewed four companies after our last manager left mid-year. Edison was the only one whose principal showed up to the interview personally. A year in, that wasn't just sales, that's how they actually run.",
    attribution: "Board President",
    role: "HOA · 228 units",
    community: "Dr. Phillips, Orlando"
  }
};

export { GeoPageA, GeoPageB, ORLANDO_CONTENT };
