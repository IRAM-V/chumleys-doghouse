import Link from "next/link";

const values = [
  { icon: "🏠", title: "Family Owned",     desc: "Started by a family with a beagle named Chumley and a love for bold food." },
  { icon: "🌽", title: "Indiana Proud",    desc: "Zaharako's ice cream, ZwanzigZ beer, 450 North drafts — we source local first." },
  { icon: "🍺", title: "Craft Beer First", desc: "Rotating Indiana taps, always fresh, always supporting the local brewing community." },
  { icon: "🐾", title: "Dogs Welcome",     desc: "Your pups are VIPs here. Water bowls, dog treats, and a patio they'll love." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ padding: "7rem 1.25rem 4rem", background: "linear-gradient(180deg, #0e0c09 0%, var(--charcoal-2) 100%)", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(139,94,60,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-md" style={{ position: "relative" }}>
          <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>Our Story</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 10vw, 5.5rem)", fontWeight: 900, color: "#f4ead5", lineHeight: 1.05, margin: "0.5rem 0 1.25rem" }}>
            It Started With<br />
            <em style={{ color: "#c8922a", fontStyle: "italic" }}>a Dog.</em>
          </h1>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)", lineHeight: 1.8, fontWeight: 300 }}>
            Chumley was a beagle with a stubborn streak and an appetite for adventure. When he wasn't getting into trouble, he was leading us to the best spots in Columbus. This place is named in his honor.
          </p>
        </div>
      </div>

      {/* Story */}
      <div style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-2)" }}>
        <div className="container-xl">
          <div className="grid-2">
            <div>
              <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>The Beginning</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#f4ead5", margin: "0.5rem 0 1.25rem", lineHeight: 1.2 }}>
                A Place for<br /><em style={{ color: "#c8922a" }}>Everyone</em>
              </h2>
              <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", lineHeight: 1.9, marginBottom: "1.25rem", fontWeight: 300, fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
                We opened Chumley's because Columbus, Indiana deserved a place where you could bring the whole family — including the four-legged ones. A spot where the beer is local, the food is bold, and nobody leaves hungry.
              </p>
              <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", lineHeight: 1.9, marginBottom: "2rem", fontWeight: 300, fontSize: "clamp(0.9rem, 2vw, 1rem)" }}>
                We're not a chain. We're not trying to be. We're your neighbors, serving Indiana flavors with a whole lot of love and a little bit of bark.
              </p>
              <div style={{ borderLeft: "2px solid #c8922a", paddingLeft: "1.25rem" }}>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#f4ead5", fontSize: "1.05rem", lineHeight: 1.6 }}>
                  "The only doghouse you WANT to be in."
                </p>
              </div>
            </div>

            <div style={{ background: "var(--charcoal-3)", border: "1px solid rgba(139,94,60,0.2)", padding: "3rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(200,146,42,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "relative" }}>
                <div style={{ fontSize: "4.5rem", marginBottom: "1rem" }}>🐶</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#f4ead5", marginBottom: "0.4rem" }}>Chumley</h3>
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#c8922a", fontSize: "0.82rem", letterSpacing: "0.06em", marginBottom: "1.25rem" }}>The Original Good Boy · 2015–2024</p>
                <div style={{ height: 1, background: "rgba(200,146,42,0.2)", marginBottom: "1.25rem" }} />
                <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#6b5a45", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300, fontStyle: "italic" }}>
                  "He never met a stranger, always knew when to bark, and somehow always got the last bite."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal)" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.6rem" }}>What We Stand For</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#f4ead5", marginTop: "0.5rem" }}>Our Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "1.1rem" }}>
            {values.map(v => (
              <div key={v.title} className="card" style={{ padding: "2rem 1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.875rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#f4ead5", marginBottom: "0.6rem" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", lineHeight: 1.7, fontSize: "0.88rem", fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-3)", textAlign: "center" }}>
        <div className="container-md">
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#f4ead5", marginBottom: "1rem" }}>Come Find Us</h2>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", marginBottom: "2rem", fontWeight: 300 }}>Columbus, Indiana is waiting. So is the patio.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/menu" className="btn-gold">View Menu</Link>
            <Link href="/contact" className="btn-outline">Get Directions</Link>
          </div>
        </div>
      </div>
    </>
  );
}
