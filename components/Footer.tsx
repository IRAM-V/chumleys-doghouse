import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#0e0c09", borderTop: "1px solid rgba(139,94,60,0.15)", padding: "4rem 1.5rem 2rem" }}>
      <style>{`
        .footer-link { font-family: 'Lato', sans-serif; color: #6b5a45; font-size: 0.875rem; text-decoration: none; font-weight: 300; transition: color 0.2s; }
        .footer-link:hover { color: #c8922a; }
        .footer-social { font-family: 'Lato', sans-serif; color: #6b5a45; font-size: 0.875rem; text-decoration: none; font-weight: 300; transition: color 0.2s; }
        .footer-social:hover { color: #c8922a; }
      `}</style>
      <div className="container-xl">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", fontWeight: 900, color: "#f4ead5", letterSpacing: "-0.01em", marginBottom: 4 }}>CHUMLEY'S</div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.75rem", fontStyle: "italic", color: "#c8922a", letterSpacing: "0.15em", marginBottom: "1rem" }}>DOGHOUSE</div>
            <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#6b5a45", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "1rem" }}>"The only doghouse you WANT to be in."</p>
            <p style={{ fontFamily: "'Lato', sans-serif", color: "#4a3f32", fontSize: "0.8rem", lineHeight: 1.7, fontWeight: 300 }}>Family-owned. Dog-friendly.<br />Indiana proud.</p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8922a", marginBottom: "1.25rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[{ href: "/menu", l: "View Menu" }, { href: "/about", l: "Our Story" }, { href: "/events", l: "Events" }, { href: "/contact", l: "Contact" }, { href: "/qr-menu", l: "QR Menu" }].map(i => (
                <li key={i.href}><Link href={i.href} className="footer-link">{i.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8922a", marginBottom: "1.25rem" }}>Hours</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {[["Mon – Thu", "11am – 10pm"], ["Fri – Sat", "11am – Midnight"], ["Sunday", "Noon – 9pm"]].map(([d, h]) => (
                <div key={d} style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: "#6b5a45", fontSize: "0.8rem", fontWeight: 300 }}>{d}</span>
                  <span style={{ fontFamily: "'Lato', sans-serif", color: "#9a8570", fontSize: "0.8rem" }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8922a", marginBottom: "1.25rem" }}>Follow Along</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(139,94,60,0.1)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", color: "#3a3028" }}>© 2024 Chumley's Doghouse · Columbus, Indiana</p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", color: "#3a3028" }}>Built by <span style={{ color: "#6b5a45" }}>Crossroads Canvas Co.</span></p>
        </div>
      </div>
    </footer>
  );
}
