"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "6rem 1.25rem 4rem",
        overflow: "hidden",
      }}>
        {/* Background layers — all z-index below content */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: "url('/chum02.PNG')",
          backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(160deg, rgba(14,12,9,0.82) 0%, rgba(26,20,16,0.75) 50%, rgba(36,28,18,0.82) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, zIndex: 2,
          background: "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(200,146,42,0.08) 0%, transparent 70%)" }} />

        {/* Paw prints */}
        <div aria-hidden style={{ position: "absolute", top: "10%", left: "4%", fontSize: "3rem", opacity: 0.05, transform: "rotate(15deg)", pointerEvents: "none", zIndex: 3 }}>🐾</div>
        <div aria-hidden style={{ position: "absolute", bottom: "15%", right: "5%", fontSize: "2.5rem", opacity: 0.05, transform: "rotate(-20deg)", pointerEvents: "none", zIndex: 3 }}>🐾</div>

        {/* Hero content — always visible, no opacity animations */}
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", width: "100%", maxWidth: 760, margin: "0 auto" }}>

          {/* Est badge */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1.25rem" }}>
            <div style={{ height: 1, width: 32, background: "linear-gradient(to right, transparent, rgba(200,146,42,0.5))" }} />
            <span style={{ fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.62rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#c8922a" }}>Est. 2024 · Columbus, Indiana</span>
            <div style={{ height: 1, width: 32, background: "linear-gradient(to left, transparent, rgba(200,146,42,0.5))" }} />
          </div>

          {/* Main heading */}
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, lineHeight: 1, marginBottom: "0.75rem" }}>
            <span style={{ display: "block", fontSize: "clamp(3rem, 14vw, 8rem)", color: "#f4ead5", letterSpacing: "-0.02em" }}>Chumley's</span>
            <span style={{ display: "block", fontSize: "clamp(1.75rem, 8vw, 4.5rem)", color: "#c8922a", fontStyle: "italic", letterSpacing: "0.04em" }}>Doghouse</span>
          </h1>

          {/* Slogan */}
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "clamp(0.95rem, 3vw, 1.3rem)", color: "#d4b078", marginBottom: "1.75rem", lineHeight: 1.5 }}>
            "The only doghouse you{" "}
            <em style={{ fontStyle: "normal", color: "#e0a83a", fontWeight: 700 }}>WANT</em>
            {" "}to be in."
          </p>

          {/* Gold divider */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1.5rem" }}>
            <div style={{ height: 1, width: 48, background: "linear-gradient(to right, transparent, rgba(200,146,42,0.4))" }} />
            <span style={{ color: "#c8922a", fontSize: "0.9rem" }}>✦</span>
            <div style={{ height: 1, width: 48, background: "linear-gradient(to left, transparent, rgba(200,146,42,0.4))" }} />
          </div>

          {/* Descriptor */}
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#c4b090", fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)", lineHeight: 1.8, marginBottom: "2rem", fontWeight: 300 }}>
            Handcrafted hot dogs. Indiana craft beer on tap.<br />
            A patio where dogs are always welcome.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/menu" className="btn-gold">View Menu</Link>
            <Link href="/contact" className="btn-outline">Find Us</Link>
          </div>

          {/* Trust bar */}
          <div style={{ display: "flex", justifyContent: "center", gap: "1.25rem", flexWrap: "wrap", marginTop: "2.5rem", paddingTop: "1.75rem", borderTop: "1px solid rgba(200,146,42,0.2)" }}>
            {["🐾 Dog Friendly", "🍺 Craft Beer", "🌭 Indiana Dogs", "📍 Columbus, IN"].map(b => (
              <span key={b} style={{ fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a8070" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-2)" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.6rem" }}>Why Chumley's</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 700, color: "#f4ead5", marginTop: "0.5rem" }}>
              More Than a Meal
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "🌭", title: "Handcrafted Hot Dogs", desc: "From the classic All-American to the bold Owen — every dog piled high on a toasted brioche bun." },
              { icon: "🍺", title: "Indiana Craft Beer",   desc: "Rotating taps from Upland, 450 North, ZwanzigZ and Hog Molly — always local, always cold." },
              { icon: "🐾", title: "Dog-Friendly Patio",  desc: "Leash up and come on in. Your four-legged crew is always welcome on our sprawling patio." },
              { icon: "🏡", title: "Family Owned",         desc: "Not a chain, not a franchise — just a family with a dog, a grill, and a love for good food." },
            ].map(f => (
              <div key={f.title} className="card" style={{ padding: "2rem 1.5rem" }}>
                <div style={{ fontSize: "2.25rem", marginBottom: "0.875rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#f4ead5", marginBottom: "0.6rem" }}>{f.title}</h3>
                <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", lineHeight: 1.7, fontSize: "0.9rem", fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-3)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,146,42,0.055) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-md" style={{ position: "relative", textAlign: "center" }}>
          <span className="eyebrow" style={{ marginBottom: "0.6rem" }}>The Menu</span>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 700, color: "#f4ead5", margin: "0.5rem 0 1rem" }}>
            Bold Flavors, Local Roots
          </h2>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "clamp(0.9rem, 2.5vw, 1rem)", lineHeight: 1.8, marginBottom: "2rem", fontWeight: 300 }}>
            Hot dogs piled high, sides made fresh daily, and Indiana craft beers on tap.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 220px), 1fr))", gap: "0.875rem", marginBottom: "2rem", textAlign: "left" }}>
            {[
              { name: "The Owen",     price: "$9.00", desc: "Cream cheese, jalapeño bacon jam, sriracha" },
              { name: "Chili Dog",    price: "$8.50", desc: "House chili, cheddar, white onion" },
              { name: "Low Country",  price: "$9.00", desc: "Pimento cheese, crispy shallots" },
              { name: "All American", price: "$7.50", desc: "Classic Chicago-style done right" },
            ].map(item => (
              <div key={item.name} style={{ background: "rgba(26,23,20,0.7)", border: "1px solid rgba(139,94,60,0.18)", padding: "1rem 1.1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.5rem", marginBottom: "0.35rem" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "#f4ead5", fontSize: "0.92rem" }}>{item.name}</span>
                  <span style={{ color: "#c8922a", fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, flexShrink: 0 }}>{item.price}</span>
                </div>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", color: "#6b5a45", fontWeight: 300, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/menu" className="btn-gold">Explore Full Menu →</Link>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-2)" }}>
        <div className="container-xl">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="eyebrow" style={{ marginBottom: "0.6rem" }}>The Vibe</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 700, color: "#f4ead5", marginTop: "0.5rem" }}>
              Come As You Are
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "0.875rem" }}>
            {[
              { img: "/chum01.PNG", label: "The Dogs",      h: 220 },
              { img: "/chum02.PNG", label: "Cold Drafts",   h: 180 },
              { img: "/chum03.PNG", label: "Patio Life",    h: 180 },
              { img: "/chum01.PNG", label: "Live Music",    h: 220 },
              { img: "/chum02.PNG", label: "The Space",     h: 180 },
              { img: "/chum03.PNG", label: "Indiana Proud", h: 180 },
            ].map((g, i) => (
              <div key={i} style={{
                backgroundImage: `url('${g.img}')`,
                backgroundSize: "cover", backgroundPosition: "center",
                border: "1px solid rgba(139,94,60,0.18)",
                height: g.h,
                display: "flex", alignItems: "flex-end",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,12,9,0.75) 0%, transparent 60%)" }} />
                <div style={{ position: "relative", zIndex: 1, padding: "0.75rem 1rem", fontFamily: "'Lato', sans-serif", fontSize: "0.67rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8d5b0" }}>{g.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS TEASER ── */}
      <section style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal)" }}>
        <div className="container-xl">
          <div className="grid-2">
            <div>
              <span className="eyebrow" style={{ marginBottom: "0.6rem" }}>What's Happening</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 4.5vw, 2.6rem)", fontWeight: 700, color: "#f4ead5", margin: "0.5rem 0 1rem", lineHeight: 1.2 }}>
                Live Music &<br />Weekly Specials
              </h2>
              <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", lineHeight: 1.8, marginBottom: "1.75rem", fontWeight: 300, fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
                From local musicians on the patio to Tuesday trivia nights — there's always something going on at Chumley's.
              </p>
              <Link href="/events" className="btn-outline">See All Events</Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
              {[
                { icon: "🎸", label: "Live Music",   sub: "Fri & Sat · 7pm" },
                { icon: "🧠", label: "Trivia Night", sub: "Tuesdays · 7pm" },
                { icon: "🍺", label: "Happy Hour",   sub: "Mon–Fri · 3–6pm" },
                { icon: "🐶", label: "Yappy Hour",   sub: "Saturdays · 4pm" },
              ].map(ev => (
                <div key={ev.label} className="card" style={{ padding: "1.5rem 1rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{ev.icon}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: "#f4ead5", fontSize: "0.88rem", marginBottom: 3 }}>{ev.label}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.67rem", color: "#6b5a45" }}>{ev.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-3)", textAlign: "center" }}>
        <div className="container-md">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: "1.5rem" }}>
            <div style={{ height: 1, flex: 1, maxWidth: 72, background: "rgba(200,146,42,0.28)" }} />
            <span style={{ color: "#c8922a", fontSize: "0.85rem" }}>✦</span>
            <div style={{ height: 1, flex: 1, maxWidth: 72, background: "rgba(200,146,42,0.28)" }} />
          </div>
          <blockquote style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 4vw, 2rem)", fontStyle: "italic", color: "#f4ead5", lineHeight: 1.55, marginBottom: "1.25rem" }}>
            "Made here, by hand,<br />for your table — and your pup."
          </blockquote>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6b5a45" }}>
            — The Chumley's Family
          </p>
        </div>
      </section>
    </>
  )
}
