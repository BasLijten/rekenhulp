"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-pp-bg)", fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>

      {/* Header */}
      <header style={{ background: "var(--color-pp-blue)", boxShadow: "0 4px 12px rgba(26,79,156,0.3)" }}>
        <div className="max-w-4xl mx-auto px-6 py-0 flex items-center justify-between" style={{ minHeight: 72 }}>
          <div className="flex items-center gap-3">
            <div style={{
              background: "var(--color-pp-yellow)",
              borderRadius: 12,
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
            }}>
              ✖
            </div>
            <span style={{ color: "white", fontSize: 28, fontWeight: 900, letterSpacing: "-0.5px" }}>
              Reken<span style={{ color: "var(--color-pp-yellow)" }}>hulp</span>
            </span>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 20,
            padding: "6px 16px",
            color: "white",
            fontSize: 14,
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 6
          }}>
            <span style={{ fontSize: 16 }}>⭐</span>
            Groep 4
          </div>
        </div>
      </header>

      {/* Decorative wave */}
      <div style={{ background: "var(--color-pp-blue)", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0H1440V20C1200 40 960 40 720 20C480 0 240 0 0 20V0Z" fill="var(--color-pp-bg)" />
        </svg>
      </div>

      {/* Main content */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8">

        {/* Welcome banner */}
        <div style={{
          background: "white",
          borderRadius: 20,
          padding: "24px 32px",
          marginBottom: 32,
          boxShadow: "0 2px 16px rgba(26,79,156,0.08)",
          display: "flex",
          alignItems: "center",
          gap: 20,
          border: "2px solid var(--color-pp-blue-light)"
        }}>
          <div style={{
            fontSize: 52,
            lineHeight: 1,
            flexShrink: 0
          }}>
            👋
          </div>
          <div>
            <h1 style={{
              fontSize: 26,
              fontWeight: 900,
              color: "var(--color-pp-blue)",
              margin: 0,
              lineHeight: 1.2
            }}>
              Hoi! Wat wil je oefenen?
            </h1>
            <p style={{
              fontSize: 16,
              color: "var(--color-pp-muted)",
              margin: "6px 0 0",
              fontWeight: 600
            }}>
              Kies een manier om te werken met de tafels.
            </p>
          </div>
        </div>

        {/* Mode cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>

          {/* Toon modus */}
          <ModeCard
            emoji="👀"
            accentColor="#1a4f9c"
            accentLight="#d6e6f9"
            title="Toon modus"
            subtitle="Kijk en leer"
            description="Bekijk de sommen samen met de antwoorden. Handig om te leren!"
            buttonLabel="Beginnen"
            number="1"
          />

          {/* Steunsom modus */}
          <ModeCard
            emoji="💡"
            accentColor="#e8820c"
            accentLight="#fff0dc"
            title="Steunsom modus"
            subtitle="Gebruik een truc"
            description="Gebruik een som die je al kent om een moeilijkere som op te lossen."
            buttonLabel="Beginnen"
            number="2"
          />

          {/* Oefen modus */}
          <ModeCard
            emoji="✏️"
            accentColor="#2d9e4f"
            accentLight="#d4f0de"
            title="Oefen modus"
            subtitle="Los het zelf op"
            description="Bereken de sommen zelf. Hoe snel kun jij ze allemaal goed doen?"
            buttonLabel="Beginnen"
            number="3"
          />
        </div>

        {/* Progress stars */}
        <div style={{
          marginTop: 32,
          background: "white",
          borderRadius: 20,
          padding: "20px 28px",
          boxShadow: "0 2px 16px rgba(26,79,156,0.08)",
          border: "2px solid var(--color-pp-blue-light)",
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap"
        }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: "var(--color-pp-muted)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            Jouw sterren
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            {[1,2,3,4,5].map((i) => (
              <span key={i} style={{ fontSize: 28, filter: i <= 2 ? "none" : "grayscale(1) opacity(0.3)" }}>⭐</span>
            ))}
          </div>
          <span style={{ fontSize: 14, color: "var(--color-pp-muted)", fontWeight: 600, marginLeft: "auto" }}>
            2 van 5 sterren
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "16px",
        fontSize: 13,
        color: "var(--color-pp-muted)",
        fontWeight: 600
      }}>
        Rekenhulp — Groep 4 · Tafels oefenen
      </footer>
    </div>
  );
}

function ModeCard({
  emoji,
  accentColor,
  accentLight,
  title,
  subtitle,
  description,
  buttonLabel,
  number,
}: {
  emoji: string;
  accentColor: string;
  accentLight: string;
  title: string;
  subtitle: string;
  description: string;
  buttonLabel: string;
  number: string;
}) {
  return (
    <div style={{
      background: "white",
      borderRadius: 20,
      overflow: "hidden",
      boxShadow: "0 2px 16px rgba(26,79,156,0.08)",
      border: `2px solid ${accentLight}`,
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.15s ease, box-shadow 0.15s ease",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 28px ${accentColor}30`;
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(26,79,156,0.08)";
    }}>

      {/* Card top strip */}
      <div style={{
        background: accentColor,
        padding: "20px 24px 16px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }}>
        <div>
          <div style={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: 8,
            display: "inline-block",
            padding: "2px 10px",
            fontSize: 12,
            color: "white",
            fontWeight: 800,
            marginBottom: 8,
            letterSpacing: "0.3px"
          }}>
            {subtitle}
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, color: "white", lineHeight: 1.2 }}>
            {title}
          </div>
        </div>
        <div style={{
          fontSize: 40,
          lineHeight: 1,
          background: "rgba(255,255,255,0.18)",
          borderRadius: 16,
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }}>
          {emoji}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{
          margin: 0,
          fontSize: 15,
          color: "var(--color-pp-text)",
          fontWeight: 600,
          lineHeight: 1.6
        }}>
          {description}
        </p>

        <button style={{
          marginTop: "auto",
          background: accentColor,
          color: "white",
          border: "none",
          borderRadius: 14,
          padding: "14px 20px",
          fontSize: 17,
          fontWeight: 800,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          boxShadow: `0 4px 12px ${accentColor}50`,
          fontFamily: "inherit",
          letterSpacing: "0.2px"
        }}>
          {buttonLabel}
          <span style={{ fontSize: 20 }}>→</span>
        </button>
      </div>
    </div>
  );
}
