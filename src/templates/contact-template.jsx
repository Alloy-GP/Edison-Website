import React, { useState as useContactState } from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, SectionHeading } from '../components/interior-components';

/* ---------- Shared form ---------- */
function ContactForm({ compact = false }) {
  const [form, setForm] = useContactState({
    name: "", role: "Board President", community: "", units: "",
    email: "", phone: "", notes: "", website: ""
  });
  const [submitted, setSubmitted] = useContactState(false);
  const [loading, setLoading] = useContactState(false);
  const [error, setError] = useContactState('');
  function set(k, v) { setForm({ ...form, [k]: v }); }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);
      const message = [
        form.role ? `Role: ${form.role}` : '',
        form.community ? `Community: ${form.community}` : '',
        form.units ? `Units: ${form.units}` : '',
        form.phone ? `Phone: ${form.phone}` : '',
        form.notes ? `\n${form.notes}` : '',
      ].filter(Boolean).join('\n');
      fd.append('message', message || '(no message)');
      fd.append('source', 'Contact page form');
      fd.append('website', form.website || '');
      const res = await fetch('/api/contact', { method: 'POST', body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }
  const inputStyle = {
    fontFamily: "var(--font-body)", fontSize: 14.5,
    padding: "12px 14px", borderRadius: 8,
    border: "1px solid var(--border-strong)", outline: "none",
    background: "#fff", color: "var(--edison-text-body)",
    width: "100%"
  };
  const labelStyle = {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
    color: "var(--edison-navy)", marginBottom: 6, display: "block"
  };

  if (submitted) {
    return (
      <div style={{
        padding: "40px 32px", textAlign: "center",
        background: "var(--edison-teal-pale)",
        border: "1px solid var(--edison-teal)",
        borderRadius: 12
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: 56, height: 56, borderRadius: 16,
          background: "var(--edison-teal)", color: "var(--edison-navy)",
          fontSize: 28, fontWeight: 700, marginBottom: 16
        }}>✓</div>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
          color: "var(--edison-navy)", margin: "0 0 8px"
        }}>Thanks, {form.name || "friend"}.</h3>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6,
          color: "var(--edison-text-body)", margin: 0
        }}>We've received your message. The Edison team will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}
          style={{
            background: "#fff",
            border: "1px solid var(--border-hairline)",
            borderRadius: 14, padding: compact ? 28 : 36,
            boxShadow: "var(--shadow-sm)",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16
          }} className="contact-a-fields">
      {/* Honeypot — hidden from humans, bots fill it in */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
        <label>Leave this empty</label>
        <input type="text" name="website" value={form.website} onChange={(e) => set("website", e.target.value)} tabIndex={-1} autoComplete="off"/>
      </div>
      <div style={{ gridColumn: "1/-1" }}>
        <label style={labelStyle}>Your Name</label>
        <input style={inputStyle} value={form.name} onChange={(e) => set("name", e.target.value)} required/>
      </div>
      <div>
        <label style={labelStyle}>Role</label>
        <select style={inputStyle} value={form.role} onChange={(e) => set("role", e.target.value)}>
          <option>Board President</option>
          <option>Board Treasurer</option>
          <option>Board Secretary</option>
          <option>Board Member</option>
          <option>Property Owner</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Community Type</label>
        <select style={inputStyle}>
          <option>HOA</option>
          <option>Condominium</option>
          <option>Townhome</option>
          <option>Self-managed (exploring)</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Community Name</label>
        <input style={inputStyle} value={form.community} onChange={(e) => set("community", e.target.value)}/>
      </div>
      <div>
        <label style={labelStyle}>Units (approx)</label>
        <input style={inputStyle} value={form.units} onChange={(e) => set("units", e.target.value)} placeholder="e.g. 450"/>
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input type="email" style={inputStyle} value={form.email} onChange={(e) => set("email", e.target.value)} required/>
      </div>
      <div>
        <label style={labelStyle}>Phone</label>
        <input style={inputStyle} value={form.phone} onChange={(e) => set("phone", e.target.value)}/>
      </div>
      <div style={{ gridColumn: "1/-1" }}>
        <label style={labelStyle}>What's your board hoping to change?</label>
        <textarea rows={4} style={{ ...inputStyle, resize: "vertical" }}
                  value={form.notes} onChange={(e) => set("notes", e.target.value)}/>
      </div>
      {error && (
        <div style={{ gridColumn: "1/-1", color: "#c0392b", fontSize: 14, padding: "10px 14px", background: "#fdf2f2", borderRadius: 8, border: "1px solid #f5c6c6" }}>
          {error}
        </div>
      )}
      <div style={{ gridColumn: "1/-1", marginTop: 4 }}>
        <InteriorButton variant="primary" size="lg" type="submit" disabled={loading}>
          {loading ? 'Sending…' : 'Send Message'}
        </InteriorButton>
      </div>
    </form>
  );
}

/* ============================================================
   CONTACT PAGE, VARIANT A (Form-Forward / Two-Column)
   Large form on the right, contact details + reassurance on the left.
   ============================================================ */
function ContactPageA() {
  return (
    <main data-screen-label="Contact, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Contact" }
      ]}/>

      <section className="contact-a-section" style={{ background: "#fff", padding: "72px 48px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Contact Edison</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px", maxWidth: 880
          }}>When you call Edison, a real person answers.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
            color: "var(--edison-text-body)", margin: "0 0 56px", maxWidth: 720
          }}>Send us the basics about your community and we'll respond within one business day. Board members get a same-day reply; homeowners within 24 hours. Non-negotiable.</p>

          <div className="contact-a-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, alignItems: "start" }}>
            <div className="contact-a-sidebar" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{
                background: "var(--edison-teal-pale)", borderRadius: 12, padding: "26px 26px"
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)", marginBottom: 12
                }}>Office</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18,
                  color: "var(--edison-navy)", marginBottom: 6
                }}>Edison Association Management</div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.65,
                  color: "var(--edison-text-body)"
                }}>
                  619 E Colonial Dr<br/>
                  Orlando, Florida 32803<br/>
                  M–F 9am–5pm ET<br/>
                  <a href="/services/hoa-management/orlando" style={{
                    color: "var(--edison-teal-dark)", textDecoration: "none", borderBottom: 0,
                    fontWeight: 600
                  }}>Serving Orlando & Central Florida ↗</a>
                </div>
              </div>

              <div style={{
                background: "var(--edison-navy)", color: "#fff",
                borderRadius: 12, padding: "26px 26px"
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-teal)", marginBottom: 12
                }}>Direct line</div>
                <a href="tel:4073175252" style={{
                  display: "block", color: "#fff", textDecoration: "none", borderBottom: 0,
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26,
                  marginBottom: 8
                }}>(407) 317-5252</a>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.6,
                  color: "rgba(255,255,255,.72)"
                }}>When you call, we answer. Same-day for board members. 24-hour for homeowners.</div>
              </div>

              <div style={{
                background: "#fff", border: "1px solid var(--border-hairline)",
                borderRadius: 12, padding: "26px 26px"
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)", marginBottom: 14
                }}>Homeowner portals</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0,
                             display: "flex", flexDirection: "column", gap: 10 }}>
                  <li>
                    <a href="https://edison.cincwebaxis.com" style={{
                      color: "var(--edison-navy)", textDecoration: "none", borderBottom: 0,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14
                    }}>Resident Portal ↗</a>
                  </li>
                  <li>
                    <a href="https://www.homewisedocs.com" style={{
                      color: "var(--edison-navy)", textDecoration: "none", borderBottom: 0,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14
                    }}>Estoppel Request ↗</a>
                  </li>
                  <li>
                    <a href="https://app.getvived.com" style={{
                      color: "var(--edison-navy)", textDecoration: "none", borderBottom: 0,
                      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14
                    }}>VIVE Login ↗</a>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm/>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--edison-teal-pale)", padding: "0" }}>
        <div style={{
          width: "100%", height: 380,
          backgroundImage: "url(assets/img-neighborhood-aerial.jpg)",
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.92)"
        }}/>
      </section>
    </main>
  );
}

/* ============================================================
   CONTACT PAGE, VARIANT B (Multi-Channel Tiles + Form Below)
   Phone / Office / Portal cards on top, large form below,
   then a map placeholder. Friendlier for people who want a quick
   answer, not a long form.
   ============================================================ */
function ContactPageB() {
  return (
    <main data-screen-label="Contact, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Contact" }
      ]}/>

      <section className="contact-b-hero" style={{
        background: "linear-gradient(180deg, var(--edison-navy) 0%, var(--edison-navy) 60%, transparent 100%)",
        color: "#fff",
        padding: "96px 48px 200px",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{ maxWidth: 1080, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>Get in touch</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 58, lineHeight: 1.06, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 22px"
          }}>Three ways to reach us. A person answers every one of them.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
            color: "rgba(255,255,255,.85)", margin: "0 auto", maxWidth: 720
          }}>Call, email, or send us a note about your community. Board members get a same-day reply; homeowners within 24 hours.</p>
        </div>
      </section>

      <section style={{ padding: "0 48px", marginTop: -120, position: "relative", zIndex: 2 }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18
        }}>
          {[
            {
              eyebrow: "Call",
              title: "(407) 317-5252",
              body: "M–F 9am–5pm ET. When you call Edison, a real person answers.",
              cta: { label: "Call now", href: "tel:4073175252" }
            },
            {
              eyebrow: "Email",
              title: "hello@edisonam.com",
              body: "For boards: questions, proposals, and switching conversations. Replies within one business day.",
              cta: { label: "Send email", href: "mailto:hello@edisonam.com" }
            },
            {
              eyebrow: "Visit",
              title: "Orlando, FL",
              body: "Our office is in downtown Orlando. Stop by during business hours or schedule a meeting in advance.",
              cta: { label: "Get directions", href: "#" }
            }
          ].map((c, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid var(--border-hairline)",
              borderRadius: 14,
              padding: "28px 28px",
              boxShadow: "var(--shadow-lg)",
              display: "flex", flexDirection: "column", gap: 14
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--edison-teal-dark)"
              }}>{c.eyebrow}</div>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: 22, lineHeight: 1.25,
                color: "var(--edison-navy)"
              }}>{c.title}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                color: "var(--edison-text-body)", flex: 1
              }}>{c.body}</div>
              <a href={c.cta.href} style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                color: "var(--edison-teal-dark)",
                textDecoration: "none", borderBottom: 0,
                display: "inline-flex", alignItems: "center", gap: 6
              }}>{c.cta.label} →</a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#fff", padding: "96px 48px" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: "var(--edison-teal-dark)", marginBottom: 14
            }}>Or send us a note</div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 36, lineHeight: 1.18, letterSpacing: "-0.01em",
              color: "var(--edison-navy)", margin: 0
            }}>Tell us about your community</h2>
          </div>
          <ContactForm compact/>
        </div>
      </section>

      <section style={{ background: "var(--edison-teal-pale)", padding: "0" }}>
        <div style={{
          width: "100%", height: 320,
          backgroundImage: "url(assets/img-neighborhood-aerial.jpg)",
          backgroundSize: "cover", backgroundPosition: "center"
        }}/>
      </section>
    </main>
  );
}

export { ContactPageA, ContactPageB };
