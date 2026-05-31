"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/",        label: "Home" },
  { href: "/menu",    label: "Menu" },
  { href: "/about",   label: "Our Story" },
  { href: "/events",  label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: scrolled ? "0.6rem 0" : "1rem 0",
        background: scrolled ? "rgba(26,23,20,0.96)" : "rgba(26,23,20,0.4)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(200,146,42,0.15)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 900, color: "#f4ead5", lineHeight: 1 }}>CHUMLEY'S</div>
            <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "0.58rem", fontStyle: "italic", color: "#c8922a", letterSpacing: "0.2em", marginTop: 2 }}>DOGHOUSE</div>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "'Lato', Arial, sans-serif", fontSize: "0.72rem", fontWeight: 700,
                letterSpacing: "0.13em", textTransform: "uppercase", textDecoration: "none",
                color: pathname === l.href ? "#c8922a" : "#e8d5b0",
                borderBottom: pathname === l.href ? "1px solid #c8922a" : "1px solid transparent",
                paddingBottom: 2, transition: "color 0.2s",
              }}>
                {l.label}
              </Link>
            ))}
            <Link href="/menu" className="btn-gold" style={{ padding: "0.55rem 1.25rem", fontSize: "0.68rem" }}>
              View Menu
            </Link>
          </nav>

          {/* Burger — mobile only */}
          <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu" className="nav-burger"
            style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem", display: "flex", flexDirection: "column", gap: 5, zIndex: 201 }}>
            <span style={{ display: "block", width: 22, height: 2, background: "#f4ead5", transition: "transform 0.25s", transform: open ? "rotate(45deg) translate(4px, 5px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#f4ead5", transition: "opacity 0.2s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "#f4ead5", transition: "transform 0.25s", transform: open ? "rotate(-45deg) translate(4px, -5px)" : "none" }} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 199,
        background: "rgba(22,19,16,0.98)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: "2.5rem", padding: "2rem",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "all" : "none",
        transition: "opacity 0.25s ease",
      }}>
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 8vw, 2.5rem)", fontWeight: 700,
            color: pathname === l.href ? "#c8922a" : "#f4ead5",
            textDecoration: "none", textAlign: "center",
          }}>
            {l.label}
          </Link>
        ))}
        <Link href="/menu" className="btn-gold" style={{ textAlign: "center", marginTop: "0.5rem" }}>
          View Menu
        </Link>
      </div>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-burger  { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
