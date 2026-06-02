import React, { useState as useRfpState } from 'react';
import { Breadcrumb, FinalCTA, InteriorButton, SectionHeading } from '../components/interior-components';
import { PullQuote } from '../components/template-sections';

/* ============================================================
   REQUEST A PROPOSAL, VARIANT A (Multi-Step Structured Form)
   Conversion-focused. Form is split into 3 visible stages so the
   board sees scope before committing. Trust sidebar on the right.
   ============================================================ */
function ProposalPageA() {
  const [step, setStep] = useRfpState(1);
  const [submitted, setSubmitted] = useRfpState(false);
  const [loading, setLoading] = useRfpState(false);
  const [error, setError] = useRfpState('');
  const [form, setForm] = useRfpState({
    name: "", role: "Board President", phone: "", email: "",
    community: "", type: "HOA", units: "", current: "",
    needs: [], notes: "", timeline: "Just exploring", website: ""
  });
  function set(k, v) { setForm({ ...form, [k]: v }); }
  function toggleNeed(n) {
    const next = form.needs.includes(n)
      ? form.needs.filter(x => x !== n)
      : [...form.needs, n];
    set("needs", next);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (step < 3) { setStep(step + 1); return; }
    setLoading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('name', form.name);
      fd.append('email', form.email);
      fd.append('company', form.community || '');
      fd.append('phone', form.phone || '');
      const goal = [
        `Role: ${form.role}`,
        `Type: ${form.type}`,
        form.units ? `Units: ${form.units}` : '',
        form.current ? `Current company: ${form.current}` : '',
        form.needs.length ? `Driving factors: ${form.needs.join(', ')}` : '',
        `Timeline: ${form.timeline}`,
        form.notes ? `Notes: ${form.notes}` : '',
      ].filter(Boolean).join('\n');
      fd.append('goal', goal);
      fd.append('source', 'Request a Proposal form');
      fd.append('website', form.website || '');
      const res = await fetch('/api/lead', { method: 'POST', body: fd });
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
    background: "#fff", color: "var(--edison-text-body)", width: "100%"
  };
  const labelStyle = {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
    color: "var(--edison-navy)", marginBottom: 6, display: "block"
  };

  if (submitted) {
    return (
      <main data-screen-label="Proposal, Variant A · Submitted">
        <section style={{ padding: "120px 48px", background: "#fff" }}>
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 80, height: 80, borderRadius: 20,
              background: "var(--edison-teal)", color: "var(--edison-navy)",
              fontSize: 40, fontWeight: 800, marginBottom: 20
            }}>✓</div>
            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 44, lineHeight: 1.08, color: "var(--edison-navy)",
              margin: "0 0 16px"
            }}>Thanks, {form.name || "friend"}.</h1>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 17.5, lineHeight: 1.6,
              color: "var(--edison-text-body)", margin: "0 0 32px"
            }}>We've received your information. The Edison team will be in touch within one business day. Same-day for board members, 24-hour for homeowners, non-negotiable.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <InteriorButton variant="ghost" href="/">Back to home</InteriorButton>
              <InteriorButton variant="primary" href="/about">Read more about Edison</InteriorButton>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main data-screen-label="Proposal, Variant A">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Request a Proposal" }
      ]}/>

      <section className="rfp-section" style={{ background: "#fff", padding: "72px 48px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal-dark)", marginBottom: 18
          }}>Request a Proposal</div>
          <h1 className="rfp-intro-h1" style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 52, lineHeight: 1.06, letterSpacing: "-0.02em",
            color: "var(--edison-navy)", margin: "0 0 22px", maxWidth: 880
          }}>Tell us about your community, we'll get back within one business day.</h1>
          <p className="rfp-intro-p" style={{
            fontFamily: "var(--font-body)", fontSize: 18, lineHeight: 1.6,
            color: "var(--edison-text-body)", margin: "0 0 56px", maxWidth: 720
          }}>This intake takes about 3 minutes. We use it to deliver a written, fixed-scope proposal sized for your governing documents, capital plan, and homeowner count, not a generic template.</p>

          <div className="rfp-layout" style={{ display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 56, alignItems: "start" }}>
            <form onSubmit={handleSubmit} className="rfp-form"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--border-hairline)",
                    borderRadius: 14, padding: 36,
                    boxShadow: "var(--shadow-sm)"
                  }}>
              {/* Honeypot — hidden from humans, bots fill it in */}
              <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
                <label>Leave this empty</label>
                <input type="text" name="website" value={form.website} onChange={(e) => set("website", e.target.value)} tabIndex={-1} autoComplete="off"/>
              </div>
              {/* Step indicator */}
              <div style={{
                display: "flex", alignItems: "center", gap: 12,
                marginBottom: 28, paddingBottom: 22,
                borderBottom: "1px solid var(--border-hairline)"
              }}>
                {[1, 2, 3].map(n => (
                  <React.Fragment key={n}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 999,
                      background: n <= step ? "var(--edison-teal)" : "var(--edison-teal-pale)",
                      color: n <= step ? "var(--edison-navy)" : "var(--edison-gray-mid)",
                      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
                      display: "inline-flex", alignItems: "center", justifyContent: "center"
                    }}>{n}</div>
                    {n < 3 && (
                      <div style={{
                        flex: 1, height: 2,
                        background: n < step ? "var(--edison-teal)" : "var(--edison-teal-pale)"
                      }}/>
                    )}
                  </React.Fragment>
                ))}
                <div style={{
                  marginLeft: 12,
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5,
                  color: "var(--edison-navy)"
                }}>
                  Step {step} of 3 · {step === 1 ? "About you" : step === 2 ? "Your community" : "Your goals"}
                </div>
              </div>

              {step === 1 && (
                <div className="rfp-step-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={labelStyle}>Your Name</label>
                    <input style={inputStyle} value={form.name} onChange={(e) => set("name", e.target.value)} required/>
                  </div>
                  <div>
                    <label style={labelStyle}>Role on Board</label>
                    <select style={inputStyle} value={form.role} onChange={(e) => set("role", e.target.value)}>
                      <option>Board President</option>
                      <option>Board Vice President</option>
                      <option>Board Treasurer</option>
                      <option>Board Secretary</option>
                      <option>Board Member</option>
                      <option>Property Owner</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input style={inputStyle} value={form.phone} onChange={(e) => set("phone", e.target.value)}/>
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={labelStyle}>Email</label>
                    <input type="email" style={inputStyle} value={form.email} onChange={(e) => set("email", e.target.value)} required/>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="rfp-step-fields" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={labelStyle}>Community Name</label>
                    <input style={inputStyle} value={form.community} onChange={(e) => set("community", e.target.value)} required/>
                  </div>
                  <div>
                    <label style={labelStyle}>Community Type</label>
                    <select style={inputStyle} value={form.type} onChange={(e) => set("type", e.target.value)}>
                      <option>HOA (Single-Family)</option>
                      <option>HOA (Townhome)</option>
                      <option>Condominium</option>
                      <option>Lifestyle / 55+</option>
                      <option>Self-managed (exploring)</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Number of Units</label>
                    <input style={inputStyle} value={form.units} onChange={(e) => set("units", e.target.value)} placeholder="e.g. 450"/>
                  </div>
                  <div style={{ gridColumn: "1/-1" }}>
                    <label style={labelStyle}>Current Management Company (optional)</label>
                    <input style={inputStyle} value={form.current} onChange={(e) => set("current", e.target.value)}/>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div>
                    <label style={labelStyle}>What's driving the conversation?</label>
                    <div className="rfp-check-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {["Manager unresponsive", "Financial concerns", "Compliance / legal exposure",
                        "Switching companies", "Self-managed → professional", "New community / new board"].map(n => (
                        <label key={n} style={{
                          display: "flex", alignItems: "center", gap: 10,
                          padding: "11px 14px",
                          background: form.needs.includes(n) ? "var(--edison-teal-pale)" : "#fff",
                          border: `1px solid ${form.needs.includes(n) ? "var(--edison-teal)" : "var(--border-strong)"}`,
                          borderRadius: 8, cursor: "pointer",
                          fontFamily: "var(--font-body)", fontSize: 14,
                          color: "var(--edison-navy)"
                        }}>
                          <input type="checkbox" checked={form.needs.includes(n)}
                                 onChange={() => toggleNeed(n)}
                                 style={{ accentColor: "var(--edison-teal-dark)" }}/>
                          {n}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Timeline</label>
                    <select style={inputStyle} value={form.timeline} onChange={(e) => set("timeline", e.target.value)}>
                      <option>Just exploring</option>
                      <option>Within 60 days</option>
                      <option>Within 90 days</option>
                      <option>This budget cycle</option>
                      <option>Urgent, current situation untenable</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Anything else we should know?</label>
                    <textarea rows={4} style={{ ...inputStyle, resize: "vertical" }}
                              value={form.notes} onChange={(e) => set("notes", e.target.value)}/>
                  </div>
                </div>
              )}

              <div className="rfp-form-footer" style={{
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                marginTop: 28, paddingTop: 22,
                borderTop: "1px solid var(--border-hairline)"
              }}>
                {step > 1 ? (
                  <button type="button" onClick={() => setStep(step - 1)}
                          style={{
                            appearance: "none", background: "transparent", border: 0,
                            color: "var(--edison-navy)", cursor: "pointer",
                            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14
                          }}>← Back</button>
                ) : <div/>}
                <InteriorButton variant="primary" size="lg" type="submit" disabled={loading}>
                  {step < 3 ? "Continue →" : loading ? "Sending…" : "Submit request"}
                </InteriorButton>
              </div>
              {error && (
                <div style={{ marginTop: 12, color: "#c0392b", fontSize: 14, padding: "10px 14px", background: "#fdf2f2", borderRadius: 8, border: "1px solid #f5c6c6" }}>
                  {error}
                </div>
              )}
            </form>

            <aside className="rfp-sidebar" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <div style={{
                background: "var(--edison-navy)", color: "#fff",
                borderRadius: 14, padding: "26px 28px"
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--edison-teal)", marginBottom: 14
                }}>Prefer to talk?</div>
                <a href="tel:4073175252" style={{
                  display: "block", color: "#fff", textDecoration: "none", borderBottom: 0,
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24,
                  marginBottom: 6
                }}>(407) 317-5252</a>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 13.5,
                  color: "rgba(255,255,255,.72)"
                }}>M–F 9am–5pm ET. A real person answers.</div>
              </div>

              <div style={{
                background: "var(--edison-teal-pale)",
                borderRadius: 14, padding: "26px 28px"
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--edison-teal-dark)", marginBottom: 14
                }}>What to expect</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0,
                             display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "One-business-day reply",
                    "Brief discovery call (15–30 min)",
                    "Written, fixed-scope proposal in 5–7 days",
                    "No high-pressure follow-ups"
                  ].map((x, i) => (
                    <li key={i} style={{
                      display: "flex", gap: 10,
                      fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55,
                      color: "var(--edison-text-body)"
                    }}>
                      <span style={{ color: "var(--edison-teal-dark)", fontWeight: 800 }}>✓</span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: "#fff", border: "1px solid var(--border-hairline)",
                borderRadius: 14, padding: "24px 26px"
              }}>
                <blockquote style={{
                  fontFamily: "var(--font-display)", fontWeight: 600, fontStyle: "italic",
                  fontSize: 16, lineHeight: 1.5,
                  color: "var(--edison-navy)", margin: "0 0 14px"
                }}>"We expected a sales pitch. Tracy spent the call asking about our governing docs and the last manager's exit. We knew before the proposal that this was different."</blockquote>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
                  color: "var(--edison-navy)"
                }}>Board President</div>
                <div style={{
                  fontFamily: "var(--font-body)", fontSize: 12.5,
                  color: "var(--edison-gray-mid)"
                }}>HOA · 268 units · Lake Mary</div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   REQUEST A PROPOSAL, VARIANT B (Single-Screen, Visual Hero)
   One generous form, no steps, with a dark image hero up top and
   trust signals as a strip below the form. For boards who'd
   rather just fill it in once.
   ============================================================ */
function ProposalPageB() {
  const [submitted, setSubmitted] = useRfpState(false);
  const [form, setForm] = useRfpState({ name: "", role: "Board President" });

  const inputStyle = {
    fontFamily: "var(--font-body)", fontSize: 14.5,
    padding: "12px 14px", borderRadius: 8,
    border: "1px solid var(--border-strong)", outline: "none",
    background: "#fff", color: "var(--edison-text-body)", width: "100%"
  };
  const labelStyle = {
    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
    color: "var(--edison-navy)", marginBottom: 6, display: "block"
  };

  return (
    <main data-screen-label="Proposal, Variant B">
      <Breadcrumb trail={[
        { label: "Home", href: "/" },
        { label: "Request a Proposal" }
      ]}/>

      <section style={{
        backgroundImage: "linear-gradient(180deg, rgba(15,29,51,.78) 0%, rgba(15,29,51,.94) 100%), url(assets/img-community-aerial.jpg)",
        backgroundSize: "cover", backgroundPosition: "center",
        color: "#fff", padding: "104px 48px 200px"
      }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5,
            letterSpacing: "0.16em", textTransform: "uppercase",
            color: "var(--edison-teal)", marginBottom: 18
          }}>Request a Proposal</div>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: 56, lineHeight: 1.06, letterSpacing: "-0.02em",
            color: "#fff", margin: "0 0 22px"
          }}>Let's talk about your community.</h1>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.55,
            color: "rgba(255,255,255,.85)", margin: "0 auto", maxWidth: 700
          }}>One quick form. One business day to a written, fixed-scope proposal sized for your association.</p>
        </div>
      </section>

      <section style={{ marginTop: -130, position: "relative", padding: "0 48px 96px" }}>
        <div style={{
          maxWidth: 900, margin: "0 auto",
          background: "#fff",
          border: "1px solid var(--border-hairline)",
          borderRadius: 16,
          boxShadow: "var(--shadow-lg)",
          padding: 44
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "32px 16px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 64, height: 64, borderRadius: 18,
                background: "var(--edison-teal)", color: "var(--edison-navy)",
                fontSize: 32, fontWeight: 800, marginBottom: 18
              }}>✓</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26,
                color: "var(--edison-navy)", margin: "0 0 10px"
              }}>Thanks, {form.name || "friend"}.</h3>
              <p style={{ fontSize: 16, color: "var(--edison-text-body)", margin: 0 }}>
                We've received your request. The Edison team will be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={labelStyle}>Your Name</label>
                <input style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required/>
              </div>
              <div>
                <label style={labelStyle}>Role on Board</label>
                <select style={inputStyle}>
                  <option>Board President</option>
                  <option>Board Vice President</option>
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
                  <option>HOA (Single-Family)</option>
                  <option>HOA (Townhome)</option>
                  <option>Condominium</option>
                  <option>Self-managed</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Community Name</label>
                <input style={inputStyle}/>
              </div>
              <div>
                <label style={labelStyle}>Number of Units</label>
                <input style={inputStyle} placeholder="e.g. 450"/>
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input type="email" style={inputStyle} required/>
              </div>
              <div>
                <label style={labelStyle}>Phone</label>
                <input style={inputStyle}/>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={labelStyle}>Current Management Company (optional)</label>
                <input style={inputStyle}/>
              </div>
              <div style={{ gridColumn: "1/-1" }}>
                <label style={labelStyle}>What's your board hoping to change?</label>
                <textarea rows={4} style={{ ...inputStyle, resize: "vertical" }}/>
              </div>
              <div style={{ gridColumn: "1/-1", marginTop: 6 }}>
                <InteriorButton variant="primary" size="lg" type="submit">Submit Request</InteriorButton>
              </div>
            </form>
          )}
        </div>

        <div style={{
          maxWidth: 900, margin: "32px auto 0",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16
        }}>
          {[
            { v: "1 day", c: "Reply guarantee" },
            { v: "5–7 days", c: "Written proposal" },
            { v: "PCAM", c: "Leadership credential" },
            { v: "4.9★", c: "Google rating" }
          ].map((s, i) => (
            <div key={i} style={{
              background: "#fff", border: "1px solid var(--border-hairline)",
              borderRadius: 10, padding: "16px 18px", textAlign: "center"
            }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 24,
                color: "var(--edison-navy)", lineHeight: 1
              }}>{s.v}</div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 12.5,
                color: "var(--edison-gray-mid)", marginTop: 8
              }}>{s.c}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export { ProposalPageA, ProposalPageB };
