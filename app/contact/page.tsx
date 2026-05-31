"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <>
      {/* Hero */}
      <div style={{ padding: "7rem 1.25rem 4rem", background: "linear-gradient(180deg, #0e0c09 0%, var(--charcoal-2) 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,146,42,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-md" style={{ position: "relative" }}>
          <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Get in Touch</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 10vw, 6rem)", fontWeight: 900, color: "#f4ead5", lineHeight: 1, margin: "0.5rem 0 1rem" }}>Contact Us</h1>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", fontWeight: 300 }}>
            Come find us, call us, or drop a note. We'd love to hear from you — and your dog.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-2)" }}>
        <div className="container-xl">
          <div className="grid-2">

            {/* Form */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 1.75rem)", fontWeight: 700, color: "#f4ead5", marginBottom: "2rem" }}>Send a Message</h2>
              {sent ? (
                <div style={{ background: "var(--charcoal-3)", border: "1px solid rgba(200,146,42,0.25)", padding: "3rem 2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🐶</div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#f4ead5", marginBottom: "0.6rem" }}>Woof! Got it.</h3>
                  <p style={{ fontFamily: "'Lato', sans-serif", color: "#9a8570", fontWeight: 300 }}>We'll get back to you faster than Chumley chased a squirrel.</p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { label: "Your Name",      id: "name",    type: "text",  placeholder: "John Smith" },
                    { label: "Email Address",  id: "email",   type: "email", placeholder: "john@example.com" },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ display: "block", fontFamily: "'Lato', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.5rem" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={form[f.id as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                        style={{ width: "100%", background: "var(--charcoal-3)", border: "1px solid rgba(139,94,60,0.25)", color: "#f4ead5", padding: "0.85rem 1rem", fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", outline: "none" }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: "block", fontFamily: "'Lato', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.5rem" }}>Message</label>
                    <textarea rows={5} placeholder="Tell us something..." value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: "100%", background: "var(--charcoal-3)", border: "1px solid rgba(139,94,60,0.25)", color: "#f4ead5", padding: "0.85rem 1rem", fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", outline: "none", resize: "none" }} />
                  </div>
                  <button onClick={() => setSent(true)} className="btn-gold" style={{ width: "100%", textAlign: "center" }}>
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 1.75rem)", fontWeight: 700, color: "#f4ead5", marginBottom: "2rem" }}>Find Us</h2>

              {/* Map */}
              <div style={{ border: "1px solid rgba(139,94,60,0.2)", height: 220, marginBottom: "2rem", overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.5!2d-85.9214!3d39.2014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDEyJzA1LjAiTiA4NcKwNTUnMTcuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%" height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.85) contrast(0.9)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Chumley's Location" />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {[
                  { icon: "📍", label: "Address", val: "123 Washington St, Columbus, IN 47201" },
                  { icon: "📞", label: "Phone",   val: "(812) 555-0100" },
                  { icon: "🕐", label: "Hours",   val: "Mon–Thu 11am–10pm · Fri–Sat 11am–12am · Sun Noon–9pm" },
                  { icon: "✉️", label: "Email",   val: "hello@chumleysdoghouse.com" },
                ].map(info => (
                  <div key={info.label} style={{ display: "flex", gap: "1rem" }}>
                    <span style={{ fontSize: "1.2rem", flexShrink: 0, marginTop: 2 }}>{info.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.2rem" }}>{info.label}</div>
                      <div style={{ fontFamily: "'Lato', sans-serif", color: "#e8d5b0", fontSize: "0.92rem", fontWeight: 300 }}>{info.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                {[
                  { href: "https://facebook.com",  label: "Facebook" },
                  { href: "https://instagram.com", label: "Instagram" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, border: "1px solid rgba(139,94,60,0.25)", padding: "0.75rem", textAlign: "center", fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#9a8570", textDecoration: "none" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
