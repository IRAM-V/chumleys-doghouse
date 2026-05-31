const events = [
  { date: "Jun 7",  day: "FRI", title: "Live Music: The Rusty Nails",      time: "7:00 PM", type: "music",   desc: "Acoustic Americana and indie folk on the patio. Grab a cold Upland and settle in." },
  { date: "Jun 10", day: "TUE", title: "Trivia Night",                      time: "7:00 PM", type: "trivia",  desc: "Teams of up to 6. $5/person. First place wins a $50 Chumley's tab." },
  { date: "Jun 14", day: "FRI", title: "Live Music: Blue River Boys",       time: "8:00 PM", type: "music",   desc: "Classic country and Southern rock — best enjoyed with a Hog Molly in hand." },
  { date: "Jun 15", day: "SAT", title: "Yappy Hour",                        time: "4:00 PM", type: "special", desc: "Bring your dog! Dog treat bar, doggy photo booth, and $1 off all drafts." },
  { date: "Jun 21", day: "FRI", title: "Live Music: Maggie & the Mutts",    time: "7:30 PM", type: "music",   desc: "An Indy band known for raw energy and crowd singalongs. Don't miss this one." },
  { date: "Jun 28", day: "FRI", title: "End of June Bash",                  time: "6:00 PM", type: "special", desc: "Summer kick-off party. Live music all night, 450 North tap takeover, and summer specials." },
];

const specials = [
  { day: "Monday",    title: "Mutt Mondays",      desc: "$2 off all hot dogs, $1 off drafts all day." },
  { day: "Tuesday",   title: "Trivia Tuesdays",   desc: "7pm trivia. Discounted appetizers for all players." },
  { day: "Wednesday", title: "Woof Wednesday",    desc: "Buy any dog, get a free side. All day." },
  { day: "Thursday",  title: "Thirsty Thursday",  desc: "Happy hour prices run all day. Indiana drafts at $4." },
  { day: "Friday",    title: "Live Music",         desc: "Local artists every Friday starting at 7pm." },
  { day: "Saturday",  title: "Yappy Hour",         desc: "4–6pm. Dogs welcome, drink specials, patio fun." },
];

const typeAccent: Record<string, string> = {
  music:   "#c8922a",
  trivia:  "#5a9ab0",
  special: "#9a6ab0",
};

const typeLabel: Record<string, string> = {
  music:   "🎸 Live Music",
  trivia:  "🧠 Trivia",
  special: "🎉 Special Event",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ padding: "7rem 1.25rem 4rem", background: "linear-gradient(180deg, #0e0c09 0%, var(--charcoal-2) 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(200,146,42,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container-md" style={{ position: "relative" }}>
          <span className="eyebrow" style={{ marginBottom: "0.75rem" }}>What's Happening</span>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.5rem, 10vw, 6rem)", fontWeight: 900, color: "#f4ead5", lineHeight: 1, margin: "0.5rem 0 1rem" }}>Events</h1>
          <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", fontWeight: 300 }}>
            Live music, trivia, yappy hours — always something at Chumley's.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal-2)" }}>
        <div className="container-xl">
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: "#f4ead5", marginBottom: "0.5rem" }}>Upcoming Events</h2>
            <div style={{ height: 2, width: 48, background: "#c8922a" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {events.map((ev, i) => (
              <div key={i} style={{
                background: "var(--charcoal-3)",
                border: "1px solid rgba(139,94,60,0.18)",
                borderLeft: `3px solid ${typeAccent[ev.type] ?? "#c8922a"}`,
                padding: "1.25rem 1.5rem",
                display: "flex", gap: "1.25rem", alignItems: "flex-start",
              }}>
                {/* Date block */}
                <div style={{ textAlign: "center", flexShrink: 0, minWidth: 48 }}>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b5a45" }}>{ev.day}</div>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 900, color: typeAccent[ev.type] ?? "#c8922a", lineHeight: 1 }}>{ev.date.split(" ")[1]}</div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.6rem", color: "#6b5a45" }}>{ev.date.split(" ")[0]}</div>
                </div>
                {/* Info */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1rem, 2.5vw, 1.1rem)", fontWeight: 700, color: "#f4ead5" }}>{ev.title}</h3>
                    <span style={{ background: `${typeAccent[ev.type]}22`, color: typeAccent[ev.type] ?? "#c8922a", fontSize: "0.62rem", padding: "2px 9px", fontFamily: "'Lato', sans-serif", fontWeight: 600, letterSpacing: "0.05em", flexShrink: 0 }}>
                      {typeLabel[ev.type]}
                    </span>
                  </div>
                  <div style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.72rem", color: "#6b5a45", marginBottom: "0.4rem" }}>{ev.time}</div>
                  <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "0.88rem", lineHeight: 1.6, fontWeight: 300 }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly Specials */}
      <div style={{ padding: "4.5rem 1.25rem", background: "var(--charcoal)" }}>
        <div className="container-xl">
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: "#f4ead5", marginBottom: "0.5rem" }}>Weekly Specials</h2>
            <div style={{ height: 2, width: 48, background: "#c8922a" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))", gap: "1rem" }}>
            {specials.map(s => (
              <div key={s.day} className="card" style={{ padding: "1.75rem 1.5rem" }}>
                <p style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.4rem" }}>{s.day}</p>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#f4ead5", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Lato', Arial, sans-serif", color: "#9a8570", fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
