"use client";
import { useState } from "react";
import MenuSection from "@/components/MenuSection";
import menuData from "@/data/menu.json";
import type { MenuData } from "@/types/menu";

const data = menuData as MenuData;

const tabs = [
  { id: "all",           label: "All",           emoji: "✦" },
  { id: "hot-dogs",      label: "Hot Dogs",      emoji: "🌭" },
  { id: "sides",         label: "Sides",         emoji: "🥗" },
  { id: "sweets",        label: "Sweets",        emoji: "🍦" },
  { id: "on-tap",        label: "On Tap",        emoji: "🍺" },
  { id: "wines",         label: "Wines",         emoji: "🍷" },
  { id: "non-alcoholic", label: "Non-Alcoholic", emoji: "🥤" },
];

export default function MenuClient() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? data.sections
    : data.sections.filter(s => s.id === active);

  return (
    <>
      <div style={{ padding: "7rem 1.25rem 3rem", background: "linear-gradient(180deg, #0e0c09 0%, #221f1a 100%)", position: "relative" }}>
        <div className="container-md" style={{ textAlign: "center" }}>
          <span className="eyebrow" style={{ marginBottom: "0.6rem" }}>Chumley's Doghouse</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 10vw, 5.5rem)", fontWeight: 900, color: "#f4ead5", lineHeight: 1, margin: "0.5rem 0 1rem" }}>
            The Menu
          </h1>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", fontWeight: 300, lineHeight: 1.7 }}>
            Bold flavors, local beers, every dog has its day.
          </p>
        </div>
      </div>

      <div style={{ backgroundImage: "url('/chum01.PNG')",
backgroundSize: "cover",
backgroundPosition: "center", }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "0.6rem", maxWidth: 1200, margin: "0 auto" }}>
          {tabs.map(tab => {
            const isActive = active === tab.id;
            return (
              <button key={tab.id} onClick={() => setActive(tab.id)}
                style={{ padding: "0.65rem 0.5rem", fontSize: "0.75rem", fontFamily: "'Lato', Arial, sans-serif", fontWeight: 700, cursor: "pointer", border: "2px solid", background: isActive ? "#c8922a" : "#2d2820", color: isActive ? "#1a1714" : "#9a8570", borderColor: isActive ? "#c8922a" : "rgba(139,94,60,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.35rem", minHeight: 48, width: "100%" }}>
                <span>{tab.emoji}</span><span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ background: "#221f1a", minHeight: "60vh", padding: "3rem 1.25rem" }}>
        <div className="container-xl">
          {filtered.map((section, i) => (
            <MenuSection key={section.id} section={section} index={i} />
          ))}
        </div>
      </div>

      <div style={{ background: "#2d2820", borderTop: "1px solid rgba(139,94,60,0.15)", padding: "1.5rem 1.25rem", textAlign: "center" }}>
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.8rem", color: "#6b5a45" }}>
          Scanning from your table?{" "}
          <a href="/qr-menu" style={{ color: "#c8922a", textDecoration: "underline" }}>View the QR menu →</a>
        </p>
      </div>
    </>
  );
}