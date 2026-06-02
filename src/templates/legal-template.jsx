import React from 'react';
import { Breadcrumb, InteriorButton, SectionHeading } from '../components/interior-components';

/* ============================================================
   Legal pages, Privacy Policy + Terms of Service
   Plain-spoken, accurate, lightly-templated. Reviewed by counsel
   before publication. Dates updated automatically.
   ============================================================ */

function LegalShell({ eyebrow, title, lastUpdated, sections, children }) {
  return (
    <main data-screen-label={`Legal, ${title}`}>
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: title }
      ]}/>

      <section className="legal-hero" style={{ background: "#fff", padding: "72px 48px 32px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>{eyebrow}</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 46, lineHeight: 1.08, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 18px"
          }}>{title}</h1>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 13.5,
            color: "var(--edison-gray-mid)", paddingBottom: 28,
            borderBottom: "1px solid var(--border-hairline)"
          }}>Last updated: {lastUpdated}</div>
        </div>
      </section>

      <section className="legal-content" style={{ background: "#fff", padding: "32px 48px 80px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          {sections.map((s, i) => (
            <section key={i} style={{ marginBottom: 36 }}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 24, lineHeight: 1.25, letterSpacing: "-0.01em",
                color: "var(--edison-navy)", margin: "0 0 14px"
              }}>{s.heading}</h2>
              {s.body.map((p, j) => (
                <p key={j} style={{
                  fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7,
                  color: "var(--edison-text-body)", margin: "0 0 16px"
                }}>{p}</p>
              ))}
              {s.list && (
                <ul style={{ padding: "0 0 0 22px", margin: "0 0 16px",
                             display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.list.map((li, k) => (
                    <li key={k} style={{
                      fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.65,
                      color: "var(--edison-text-body)"
                    }}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div style={{
            marginTop: 48, padding: "26px 28px",
            background: "var(--edison-teal-pale)",
            borderRadius: 12
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 10
            }}>Questions?</div>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
              color: "var(--edison-text-body)", margin: "0 0 14px"
            }}>If you have questions about this policy or how Edison handles your information, reach out directly.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <InteriorButton variant="primary" size="sm" href="/contact">Contact Edison</InteriorButton>
              <InteriorButton variant="ghost" size="sm" href="tel:4073175252">(407) 317-5252</InteriorButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivacyPolicyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="May 2026"
      sections={[
        { heading: "Who we are", body: ["Edison Association Management, LLC (\"Edison,\" \"we,\" \"our\") is a Florida-based HOA, condominium, and townhome management firm headquartered in Orlando. This privacy policy describes how we collect, use, and protect personal information through our website and management operations."] },
        { heading: "Information we collect", body: ["We collect information you provide directly, through contact forms, proposal requests, the resident portal, payment systems, and the Edison Education newsletter signup."], list: ["Identity and contact details (name, role, email, phone, mailing address)", "Community details (association name, unit count, governing documents shared with us)", "Account and payment information (handled through CINC Systems and credit-card processors; we don't store full card numbers)", "Communications you send to us (email, phone, portal messages)", "Browser and device information through standard website analytics"] },
        { heading: "How we use it", body: ["Personal information is used to deliver the management services we contract to provide and to operate the Edison website. We don't sell personal information."], list: ["Responding to proposal requests and contact form submissions", "Managing your association, accounting, communication, compliance, vendor coordination", "Operating the resident portal and homeowner payment systems", "Sending Edison Education content if you've opted in", "Improving the website and our operational service through analytics"] },
        { heading: "Who has access", body: ["Internally, Edison employees access personal information only when needed to perform their role. Externally, we share information with service providers (CINC Systems, payment processors, our independent CPA on audit work, the association's attorneys when escalation requires it). Service providers are contractually required to protect your information."] },
        { heading: "Cookies and analytics", body: ["The Edison website uses cookies for session management and standard analytics (Google Analytics or comparable). You can configure your browser to refuse cookies; some features of the resident portal may not function without them."] },
        { heading: "Florida resident rights", body: ["Florida residents have specific rights regarding their personal information under FL statute. You can request to know what information we hold, correct inaccuracies, and request deletion (subject to recordkeeping obligations under FL Ch. 720 / 718). Send requests to the contact details below."] },
        { heading: "Data retention", body: ["Association records are retained for the period required by FL statute (typically 7 years for financial records, longer for governing documents and major operational records). Marketing contact data is retained as long as you remain on the Edison Education list; we remove on request."] },
        { heading: "Changes to this policy", body: ["We update this policy as our practices change or as Florida law requires. The \"Last updated\" date at the top of the page reflects the most recent revision. Material changes are communicated to active clients through normal management channels."] }
      ]}
    />
  );
}

function TermsOfServicePage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      lastUpdated="May 2026"
      sections={[
        { heading: "Scope", body: ["These terms govern your use of edisonassociationmanagement.com and the publicly accessible portions of Edison Association Management's online services. Management services delivered to client associations are governed by separate written management agreements; if those terms conflict with these, the management agreement controls."] },
        { heading: "Use of the website", body: ["The Edison website is provided for informational purposes. You may browse, read, and share linked pages. You may not scrape the site systematically, attempt to access non-public areas, or use the site to send unsolicited communications."] },
        { heading: "Edison Education content", body: ["Articles published under Edison Education and the Edison Blog are written for educational purposes. They are not legal, accounting, or engineering advice, they're plain-language explanations of issues Florida boards face. For your community's specific situation, consult a licensed professional. Edison is happy to help you find one."] },
        { heading: "Third-party links and tools", body: ["The Edison website links to third-party services we use (CINC Systems portal, HomeWise Docs for estoppels, VIVE login, etc.). Those services have their own terms; we don't control them. We link to them for your convenience."] },
        { heading: "Proposal requests and intake", body: ["Submitting a proposal request through this site doesn't create a management relationship. A management relationship begins only when Edison and an authorized board representative sign a written management agreement."] },
        { heading: "Disclaimer of warranties", body: ["The website is provided \"as is.\" Edison makes no warranty about the accuracy of educational content, the availability of the website, or the suitability of any specific page for your situation. We do our best to keep content current; Florida statute changes more often than the website does."] },
        { heading: "Limitation of liability", body: ["To the extent permitted by Florida law, Edison's liability arising from your use of the website is limited to direct damages and excludes consequential, incidental, or punitive damages."] },
        { heading: "Governing law", body: ["These terms are governed by Florida law. Disputes will be resolved in state or federal courts located in Orange County, Florida."] },
        { heading: "Changes to these terms", body: ["We update these terms as practices and law evolve. The \"Last updated\" date at the top reflects the most recent revision. Continued use of the website after revisions constitutes acceptance of the updated terms."] }
      ]}
    />
  );
}


export { PrivacyPolicyPage, TermsOfServicePage };
