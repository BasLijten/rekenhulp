"use client";

import { useState } from "react";
import Link from "next/link";

const SOMMEN: { vraag: string; antwoord: number; steunsom: string; stap: string }[] = [];

type Fase = "steunsom" | "antwoord" | "goed" | "fout";

export default function SteunsomPage() {
  const [index, setIndex] = useState(0);
  const [fase, setFase] = useState<Fase>("steunsom");
  const [invoer, setInvoer] = useState("");
  const [foutTeller, setFoutTeller] = useState(0);

  const som = SOMMEN[index];

  function controleer() {
    const waarde = parseInt(invoer, 10);
    if (fase === "steunsom") {
      // Ga door naar antwoord-fase
      setFase("antwoord");
      setInvoer("");
    } else if (fase === "antwoord") {
      if (waarde === som.antwoord) {
        setFase("goed");
      } else {
        setFoutTeller((f) => f + 1);
        setFase("fout");
        setInvoer("");
      }
    }
  }

  function volgende() {
    setIndex((i) => (i + 1) % SOMMEN.length);
    setFase("steunsom");
    setInvoer("");
  }

  function opnieuw() {
    setFase("antwoord");
    setInvoer("");
  }

  if (SOMMEN.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "var(--color-pp-bg)" }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>🚧</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "var(--color-pp-blue)" }}>Sommen komen er binnenkort aan!</div>
        <Link href="/" style={{ marginTop: 24, color: "var(--color-pp-blue)", fontWeight: 700, fontSize: 16 }}>← Terug naar home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-pp-bg)" }}>

      {/* Header */}
      <header style={{ background: "var(--color-pp-blue)", boxShadow: "0 4px 12px rgba(26,79,156,0.3)" }}>
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between" style={{ minHeight: 72 }}>
          <Link href="/" style={{
            color: "rgba(255,255,255,0.75)",
            fontWeight: 700,
            fontSize: 15,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 6
          }}>
            ← Terug
          </Link>
          <span style={{ color: "white", fontSize: 22, fontWeight: 900 }}>
            💡 Steunsom modus
          </span>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: 20,
            padding: "5px 14px",
            color: "white",
            fontSize: 14,
            fontWeight: 700
          }}>
            {index + 1} / {SOMMEN.length}
          </div>
        </div>
      </header>

      {/* Wave */}
      <div style={{ background: "var(--color-pp-blue)", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0H1440V20C1200 40 960 40 720 20C480 0 240 0 0 20V0Z" fill="var(--color-pp-bg)" />
        </svg>
      </div>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-8 flex flex-col gap-6">

        {/* De som */}
        <div style={{
          background: "white",
          borderRadius: 24,
          padding: "36px 40px",
          textAlign: "center",
          boxShadow: "0 2px 16px rgba(26,79,156,0.08)",
          border: "2px solid var(--color-pp-blue-light)"
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--color-pp-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 12 }}>
            Bereken
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "var(--color-pp-blue)", lineHeight: 1 }}>
            {som.vraag}
          </div>
          <div style={{ fontSize: 18, color: "var(--color-pp-muted)", marginTop: 8, fontWeight: 600 }}>
            = ?
          </div>
        </div>

        {/* Steunsom stap */}
        <div style={{
          background: "var(--color-pp-orange-light)",
          borderRadius: 20,
          padding: "24px 32px",
          border: "2px solid #f5c980",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "var(--color-pp-orange)", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 20 }}>💡</span>
            Gebruik een steunsom!
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{
              background: "white",
              borderRadius: 12,
              padding: "12px 20px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--color-pp-text)",
              border: "2px solid #f5c980"
            }}>
              ✓ {som.steunsom}
            </div>
            <div style={{
              background: "white",
              borderRadius: 12,
              padding: "12px 20px",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--color-pp-text)",
              border: "2px solid #f5c980",
              opacity: fase === "steunsom" ? 0.4 : 1,
              transition: "opacity 0.3s"
            }}>
              + {som.stap}
            </div>
          </div>
        </div>

        {/* Invoerveld */}
        {fase !== "goed" && (
          <div style={{
            background: "white",
            borderRadius: 20,
            padding: "24px 32px",
            boxShadow: "0 2px 16px rgba(26,79,156,0.08)",
            border: "2px solid var(--color-pp-blue-light)",
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: "var(--color-pp-text)" }}>
              {fase === "steunsom"
                ? "Typ de uitkomst van de steunsom:"
                : `Wat is dan ${som.vraag}?`}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <input
                type="number"
                value={invoer}
                onChange={(e) => setInvoer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && invoer !== "" && controleer()}
                placeholder="?"
                autoFocus
                style={{
                  flex: 1,
                  fontSize: 36,
                  fontWeight: 900,
                  textAlign: "center",
                  border: fase === "fout" ? "3px solid var(--color-pp-red)" : "3px solid var(--color-pp-blue-light)",
                  borderRadius: 16,
                  padding: "12px 16px",
                  outline: "none",
                  fontFamily: "inherit",
                  color: "var(--color-pp-text)",
                  background: fase === "fout" ? "var(--color-pp-red-light)" : "white"
                }}
              />
              <button
                onClick={controleer}
                disabled={invoer === ""}
                style={{
                  background: invoer === "" ? "#ccc" : "var(--color-pp-blue)",
                  color: "white",
                  border: "none",
                  borderRadius: 16,
                  padding: "12px 28px",
                  fontSize: 20,
                  fontWeight: 800,
                  cursor: invoer === "" ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s"
                }}
              >
                OK →
              </button>
            </div>
            {fase === "fout" && (
              <div style={{ color: "var(--color-pp-red)", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 22 }}>❌</span>
                Probeer het nog een keer!
              </div>
            )}
          </div>
        )}

        {/* Goed gedaan */}
        {fase === "goed" && (
          <div style={{
            background: "var(--color-pp-green-light)",
            borderRadius: 20,
            padding: "28px 32px",
            border: "2px solid #8fd8a8",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16
          }}>
            <div style={{ fontSize: 52 }}>🎉</div>
            <div style={{ fontSize: 26, fontWeight: 900, color: "var(--color-pp-green)" }}>
              Super goed! {som.vraag} = {som.antwoord}
            </div>
            <button
              onClick={volgende}
              style={{
                background: "var(--color-pp-green)",
                color: "white",
                border: "none",
                borderRadius: 16,
                padding: "16px 40px",
                fontSize: 20,
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: "0 4px 12px rgba(45,158,79,0.4)"
              }}
            >
              Volgende som →
            </button>
          </div>
        )}

      </main>
    </div>
  );
}
