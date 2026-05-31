import type { MenuSection as T } from "@/types/menu";

const tagColors: Record<string, { bg: string; color: string }> = {
  "fan favorite": { bg: "rgba(200,146,42,0.15)", color: "#e0a83a" },
  spicy:          { bg: "rgba(181,74,42,0.15)",  color: "#e06030" },
  signature:      { bg: "rgba(139,94,60,0.2)",   color: "#c4956a" },
  classic:        { bg: "rgba(60,90,42,0.15)",   color: "#7aaa50" },
  fresh:          { bg: "rgba(42,90,130,0.15)",  color: "#6aaad0" },
  "local legend": { bg: "rgba(100,42,140,0.15)", color: "#aa7ac8" },
  local:          { bg: "rgba(42,100,80,0.15)",  color: "#6ac0a0" },
  craft:          { bg: "rgba(100,80,42,0.15)",  color: "#c0a06a" },
};

export default function MenuSection({ section, index }: { section: T; index: number }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingBottom: "1rem", marginBottom: "1.5rem", borderBottom: "1px solid rgba(139,94,60,0.18)" }}>
        <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>{section.emoji}</span>
        <div style={{ minWidth: 0 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 700, color: "#f4ead5", lineHeight: 1.1 }}>{section.title}</h2>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.78rem", color: "#6b5a45", marginTop: "0.2rem", fontWeight: 300 }}>{section.description}</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "0.875rem" }}>
        {section.items.map((item) => (
          <div key={item.id} style={{ background: "var(--charcoal-4)", border: "1px solid rgba(139,94,60,0.18)", padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.75rem" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "0.4rem", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#f4ead5" }}>{item.name}</span>
                  {item.tags.map(tag => {
                    const c = tagColors[tag] ?? { bg: "rgba(139,94,60,0.15)", color: "#9a8570" };
                    return <span key={tag} style={{ background: c.bg, color: c.color, fontSize: "0.62rem", padding: "2px 7px", borderRadius: 999, fontFamily: "'Lato', sans-serif", fontWeight: 600 }}>{tag}</span>;
                  })}
                </div>
                <p style={{ fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.82rem", color: "#9a8570", lineHeight: 1.55, fontWeight: 300 }}>{item.description}</p>
              </div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: "#c8922a", flexShrink: 0 }}>${item.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}