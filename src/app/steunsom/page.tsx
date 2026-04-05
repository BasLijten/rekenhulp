"use client";

import { useState } from "react";
import Link from "next/link";

function nieuweSom() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b };
}

export default function SteunsomPage() {
  const [som, setSom] = useState(nieuweSom);

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
          }}>
            ← Terug
          </Link>
          <span style={{ color: "white", fontSize: 22, fontWeight: 900 }}>
            💡 Steunsom modus
          </span>
          <div style={{ width: 60 }} />
        </div>
      </header>

      {/* Wave */}
      <div style={{ background: "var(--color-pp-blue)", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 0H1440V20C1200 40 960 40 720 20C480 0 240 0 0 20V0Z" fill="var(--color-pp-bg)" />
        </svg>
      </div>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-8 flex flex-col gap-6">

        {/* Som blok */}
        <div style={{
          background: "white",
          borderRadius: 24,
          padding: "48px 40px",
          textAlign: "center",
          boxShadow: "0 2px 16px rgba(26,79,156,0.08)",
          border: "2px solid var(--color-pp-blue-light)"
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--color-pp-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 16 }}>
            Bereken
          </div>
          <div style={{ fontSize: 88, fontWeight: 900, color: "var(--color-pp-blue)", lineHeight: 1 }}>
            {som.a} × {som.b}
          </div>
          <div style={{ fontSize: 48, color: "var(--color-pp-muted)", marginTop: 12, fontWeight: 800 }}>
            = ?
          </div>
        </div>

        {/* Volgende som knop */}
        <button
          onClick={() => setSom(nieuweSom())}
          style={{
            background: "var(--color-pp-blue)",
            color: "white",
            border: "none",
            borderRadius: 16,
            padding: "16px 32px",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 12px rgba(26,79,156,0.3)"
          }}
        >
          Volgende som →
        </button>

      </main>
    </div>
  );
}
