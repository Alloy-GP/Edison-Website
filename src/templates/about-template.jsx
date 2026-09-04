import React from 'react';
import { BodyProse, Breadcrumb, DetailLinkCards, FeatureGrid, FinalCTA, InteriorButton, MidCTA, SectionHeading, TrustBadges } from '../components/interior-components';
import { BulletsWithImage, PullQuote, StatsBand } from '../components/template-sections';

/* ============================================================
   ABOUT PAGE TEMPLATE, VARIANT A (Narrative / Story-Driven)
   The page leads with the company's story, the founder's "why,"
   and weaves values + team into a single readable flow.
   ============================================================ */
function AboutPageA({ content }) {
  return (
    <main data-screen-label="About, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About" }
      ]}/>

      {/* Story Hero */}
      <section className="about-a-hero" style={{
        background: "linear-gradient(180deg, #fff 0%, var(--edison-teal-pale) 100%)",
        padding: "96px 48px 80px"
      }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 22
          }}>About Edison</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 58, lineHeight: 1.06, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 28px"
          }}>{content.hero.title}</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 20, lineHeight: 1.55,
            color: "var(--edison-text-body)", margin: 0, maxWidth: 760
          }}>{content.hero.lede}</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="about-a-img-wrap" style={{ background: "var(--edison-teal-pale)", padding: "0 48px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <img src={content.hero.image} alt=""
               className="about-full-img" style={{ width: "100%", height: 460, objectFit: "cover",
                        borderRadius: 20, boxShadow: "var(--shadow-lg)" }}/>
        </div>
      </section>

      <BodyProse
        background="#fff"
        title={content.story.title}
        paragraphs={content.story.paragraphs}
      />

      <BulletsWithImage
        eyebrow="What we believe"
        title="Six things we hold to"
        image={content.valuesImage}
        bullets={content.values}
      />

      <PullQuote
        quote={content.quote.quote}
        attribution={content.quote.attribution}
        role={content.quote.role}
        community={content.quote.community}
        background="var(--edison-teal-pale)"
      />

      <BodyProse
        background="#fff"
        title="The people behind it"
        paragraphs={content.teamIntro}
      />

      <section className="about-a-btn-wrap" style={{ background: "#fff", padding: "0 48px 88px" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto",
                      display: "flex", justifyContent: "center" }}>
          <InteriorButton variant="ghost" size="lg" href="/about/meet-our-team">
            Meet the Edison team →
          </InteriorButton>
        </div>
      </section>

      <FinalCTA
        eyebrow="Let's talk"
        title="Curious what working with Edison feels like?"
        body="Boards we serve don't switch companies on impulse, they switch because the difference is measurable. Request a proposal and see what that looks like for your community."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Schedule a Consultation", href: "/request-a-proposal" }}
      />
    </main>
  );
}

/* ============================================================
   ABOUT PAGE TEMPLATE, VARIANT B (Modular Hub)
   Clean sectional layout. Each block of "about" surfaces as
   its own card or row, with prominent links out to the related
   sub-pages (Meet Our Team, WATTSON, Testimonials, etc.)
   ============================================================ */
function AboutPageB({ content }) {
  return (
    <main data-screen-label="About, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "About" }
      ]}/>

      <section className="about-b-hero" style={{ background: "#fff", padding: "88px 48px 64px" }}>
        <div className="about-b-hero-grid" style={{ maxWidth: 1200, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 64,
                      alignItems: "center" }}>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 18
            }}>About Edison</div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 52, lineHeight: 1.08, letterSpacing: "-0.02em",
              color: "var(--edison-navy)", margin: "0 0 22px"
            }}>{content.hero.title}</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
              color: "var(--edison-text-body)", margin: "0 0 28px", maxWidth: 560
            }}>{content.hero.lede}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="lg" href="/request-a-proposal">
                Request a Proposal
              </InteriorButton>
              <InteriorButton variant="ghost" size="lg" href="/about/meet-our-team">
                Meet Our Team
              </InteriorButton>
            </div>
          </div>
          <div className="about-b-hero-img" style={{
            width: "100%", aspectRatio: "5 / 4",
            borderRadius: 18, overflow: "hidden",
            backgroundImage: `url(${content.hero.image})`,
            backgroundSize: "cover", backgroundPosition: "center",
            boxShadow: "var(--shadow-lg)"
          }}/>
        </div>
      </section>

      <StatsBand
        background="var(--edison-teal-pale)"
        stats={content.stats}
      />

      <FeatureGrid
        background="#fff"
        eyebrow="What we believe"
        title="Six values we hold to"
        sub="These aren't poster-on-the-wall words. They show up in how Edison structures portfolios, treats employees, and serves boards."
        columns={3}
        items={content.valueCards}
      />

      <DetailLinkCards
        eyebrow="Explore more"
        title="Get to know Edison"
        sub="The full picture of who we are, what we've built, and what boards say about working with us."
        columns={3}
        items={content.subPages}
      />

      <section className="about-b-anti" style={{
        background: "var(--edison-navy)", color: "#fff", padding: "88px 48px"
      }}>
        <div className="about-b-anti-grid" style={{ maxWidth: 1080, margin: "0 auto",
                      display: "grid", gridTemplateColumns: "auto 1fr", gap: 56,
                      alignItems: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 96, lineHeight: 1, letterSpacing: "-0.03em",
            color: "var(--edison-teal)"
          }}>×</div>
          <div>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal)", marginBottom: 14
            }}>Anti-patterns matter, too</div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 30, lineHeight: 1.2, letterSpacing: "-0.01em",
              color: "#fff", margin: "0 0 18px"
            }}>What Edison deliberately doesn't do</h2>
            <ul className="about-b-anti-list" style={{ listStyle: "none", padding: 0, margin: 0,
                         display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 28px" }}>
              {content.antiPatterns.map((a, i) => (
                <li key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.55,
                  color: "rgba(255,255,255,.85)"
                }}>
                  <span style={{ color: "var(--edison-teal)", fontWeight: 800, flexShrink: 0 }}>•</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Let's talk"
        title="Curious what working with Edison feels like?"
        body="Boards we serve don't switch companies on impulse, they switch because the difference is measurable. Request a proposal and see what that looks like for your community."
        primary={{ label: "Request a Proposal", href: "/request-a-proposal" }}
        secondary={{ label: "Schedule a Consultation", href: "/request-a-proposal" }}
      />
    </main>
  );
}

/* ============================================================
   SAMPLE CONTENT
   ============================================================ */
const ABOUT_CONTENT = {
  hero: {
    title: "A boutique HOA management firm, built around the boards we serve.",
    lede: "Edison Association Management is an Orlando-based, PCAM-led HOA, condominium, and townhome management firm. We were founded on the belief that volunteer boards deserve a partner who treats their community like the only one in the portfolio, because we deliberately keep our portfolios small enough that it can be.",
    image: "/assets/img-community-aerial.webp"
  },
  story: {
    title: "Why Edison exists",
    paragraphs: [
      "Edison was founded in 2021 because the Central Florida HOA management market had a pattern: large firms growing larger, manager portfolios stretching past 15 communities, and boards quietly accepting that their phone calls would be returned eventually, if at all. Tracy Durham, PCAM and the 2025 CAI Central Florida Chapter President, started Edison with the opposite premise: build a firm small enough to know every community by name, with the back-office depth to handle real complexity. She brought 15+ years of association-industry experience into the launch.",
      "Four years later that premise still drives the day-to-day. Edison's portfolios are sized for stability, not volume. Managers carry limited portfolios, well below the industry standard. There are no non-competes, no per-violation enforcement quotas, and no managers covering coverage as an afterthought. The boards who switch to Edison tend to stay. And the managers who join tend to stay even longer.",
      "What boards get is straightforward: a manager who actually knows the community, accounting handled by a dedicated specialist, enforcement run by a separate department, and a leadership team that personally onboards every new association. What homeowners get is responsiveness, transparency, and a portal that works. What the board's lawyer doesn't get is a panicked phone call at 9pm. That's the whole pitch."
    ]
  },
  values: [
    "Partnership over transactions, boards are partners, not account numbers",
    "Transparency and trust, clear finances, open communication, no surprises",
    "Education and empowerment, informed boards make better decisions",
    "People-first culture, manageable portfolios, real PTO, no non-competes",
    "Stability and continuity, industry-low manager turnover",
    "Innovation with a human touch, modern tools, real people answer the phone"
  ],
  valueCards: [
    { title: "Partnership Over Transactions", body: "Boards are partners, not account numbers. Every interaction is rooted in collaboration." },
    { title: "Transparency & Trust", body: "Clear finances, open communication, honest counsel. No surprises in your monthly statements." },
    { title: "Education & Empowerment", body: "Informed boards make better decisions. We invest in teaching, not just executing." },
    { title: "People-First Culture", body: "Manageable portfolios, real PTO, no non-competes. Managers stay because they want to." },
    { title: "Stability & Continuity", body: "Industry-low manager turnover. Boards stop starting over every year." },
    { title: "Modern, Human Service", body: "Technology should make life easier without replacing the human connection that builds trust." }
  ],
  antiPatterns: [
    "Coupon books, optional and offered only on request; free courtesy email reminders are the default",
    "Non-competes, we earn loyalty through investment, not fear",
    "Volume-chasing, portfolio growth is opt-in, never forced",
    "Manager reports, replaced by the live Action Item List",
    "Punitive fine culture, correction first, fines as a last resort",
    "Overloaded managers. Edison's sweet spot is a limited portfolio per manager, well below the industry standard."
  ],
  valuesImage: "/assets/img-11.webp",
  teamIntro: [
    "Edison's organizational model treats the manager as one node on a network, not the single point of failure. A manager is paired with a dedicated accounting specialist, an enforcement coordinator, a collections specialist, and an ARC reviewer. The back-office handles what isn't community-facing so the manager can be present where it counts.",
    "Leadership stays close. Tracy Durham personally onboards every new association and remains accessible to every board, not just the largest. The COO supervises transitions. The CAI Chapter Presidency role keeps Edison plugged into Florida legislative changes the day they happen."
  ],
  stats: [
    { value: "2021", caption: "Founded in Orlando · 60+ years combined leadership experience" },
    { value: "Limited", caption: "Portfolios sized to your community, well below the industry average" },
    { value: "4.9★", caption: "Google rating, highest in the Central Florida market" },
    { value: "PCAM", caption: "Leadership credential plus 2025 CAI Chapter President" }
  ],
  subPages: [
    { title: "Meet Our Team", body: "Edison's managers, specialists, and leadership, the people who actually do the work for your board.", href: "/about/meet-our-team" },
    { title: "Testimonials", body: "What current Edison boards say about working with us, quoted, attributed, and verifiable.", href: "/testimonials" },
    { title: "Meet Your Management", body: "The community-wide event Edison runs before every new contract starts. Why it matters and how it works.", href: "/about/meet-your-management" },
    { title: "Contact", body: "Office address, phone, email, and the people who answer when you call. Same-day for board members, 24-hour for homeowners.", href: "/request-a-proposal" },
    { title: "Florida HOA Management Company", body: "What Edison delivers as a Florida HOA management company: dedicated managers, limited portfolios, and the back-office departments behind them.", href: "/services/hoa-management" },
    { title: "Condo Management", body: "Chapter 718 condominium management, including milestone inspection and Structural Integrity Reserve Study coordination.", href: "/services/condo-management" }
  ],
  quote: {
    quote: "We chose Edison because Tracy was the only person we interviewed who didn't talk about ourselves and the community in the same sentence as 'one of many.' Two years in, that's still how it feels.",
    attribution: "Board President",
    role: "HOA · 412 units",
    community: "Lake Nona, Orlando"
  }
};

export { AboutPageA, AboutPageB, ABOUT_CONTENT };
