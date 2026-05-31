import menuData from "@/data/menu.json";
import type { MenuData } from "@/types/menu";

const data = menuData as MenuData;

export default function QRMenuPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#1a1714", padding: "1.5rem 1.25rem 5rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", padding: "1.5rem 0 2rem", borderBottom: "1px solid rgba(200,146,42,0.2)", marginBottom: "2rem" }}>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 900, color: "#f4ead5", lineHeight: 1 }}>CHUMLEY'S</div>
        <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "0.9rem", color: "#c8922a", letterSpacing: "0.15em", margin: "0.3rem 0 0.75rem" }}>DOGHOUSE</div>
        <div style={{ fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.65rem", color: "#6b5a45", letterSpacing: "0.2em", textTransform: "uppercase" }}>Columbus, Indiana</div>
      </div>

      {/* Sections */}
      <div style={{ maxWidth: 540, margin: "0 auto" }}>
        {data.sections.map(section => (
          <div key={section.id} style={{ marginBottom: "2.5rem" }}>
            {/* Section title */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", paddingBottom: "0.75rem", borderBottom: "1px solid rgba(139,94,60,0.2)" }}>
              <span style={{ fontSize: "1.5rem" }}>{section.emoji}</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#f4ead5" }}>{section.title}</h2>
            </div>

            {/* Items */}
            {section.items.map(item => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", padding: "0.9rem 0", borderBottom: "1px solid rgba(139,94,60,0.1)" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#f4ead5", marginBottom: "0.25rem", lineHeight: 1.2 }}>
                    {item.name}
                  </div>
                  <div style={{ fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.82rem", color: "#6b5a45", lineHeight: 1.5, fontWeight: 300 }}>
                    {item.description}
                  </div>
                  {item.tags.length > 0 && (
                    <div style={{ display: "flex", gap: "0.3rem", marginTop: "0.35rem", flexWrap: "wrap" }}>
                      {item.tags.map(tag => (
                        <span key={tag} style={{ fontSize: "0.6rem", color: "#c8922a", border: "1px solid rgba(200,146,42,0.3)", padding: "1px 7px", borderRadius: 999, fontFamily: "'Lato', sans-serif" }}>{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#c8922a", flexShrink: 0 }}>
                  ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", paddingTop: "2rem", borderTop: "1px solid rgba(139,94,60,0.15)" }}>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.75rem", color: "#4a3f32" }}>🐾 Ask your server about today's specials</p>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", color: "#3a3028", marginTop: "0.4rem" }}>chumleysdoghouse.com</p>
      </div>
    </div>
  );
}
