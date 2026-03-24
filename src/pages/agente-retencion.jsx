import { useState, useEffect, lazy, Suspense } from "react";

const slides = [
  { component: lazy(() => import("./slide1")), label: "Intro" },
  { component: lazy(() => import("./slide2")), label: "Dolores" },
  { component: lazy(() => import("./slide3")), label: "El Agente" },
  { component: lazy(() => import("./slide4")), label: "Caso Camila" },
  { component: lazy(() => import("./slide5")), label: "Qué necesitamos" },
  { component: lazy(() => import("./slide6")), label: "Cierre" },
];

const C = {
  accent: "#0F6FFF", g400: "#9CA3AF", g500: "#6B7280", g100: "#F3F4F6",
  border: "#E5E7EB", dark: "#0D0D0D",
};

export default function BossPresentation() {
  const [sec, setSec] = useState(0);
  const nav = (d) => { if (d > 0 && sec < slides.length - 1) setSec(x => x + 1); if (d < 0 && sec > 0) setSec(x => x - 1); };
  useEffect(() => { const h = (e) => { if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nav(1); } if (e.key === "ArrowLeft") { e.preventDefault(); nav(-1); } }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [sec]);

  const Comp = slides[sec].component;

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');`}</style>
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#FAFAF8" }} />}>
        <Comp />
      </Suspense>
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => nav(-1)} disabled={sec === 0} style={{ padding: "7px 16px", background: sec === 0 ? C.g100 : "white", border: `1px solid ${C.border}`, borderRadius: "7px", cursor: sec === 0 ? "default" : "pointer", fontSize: "11px", fontWeight: 600, color: sec === 0 ? C.g400 : C.dark, opacity: sec === 0 ? 0.4 : 1 }}>←</button>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => setSec(i)} style={{ width: sec === i ? "14px" : "5px", height: "4px", borderRadius: "2px", background: sec === i ? C.accent : i < sec ? `${C.accent}33` : C.border, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
              ))}
            </div>
            <span style={{ fontSize: "9px", color: C.g500, fontFamily: "'DM Mono', monospace" }}>{sec + 1}/{slides.length} · {slides[sec].label}</span>
          </div>
          <button onClick={() => nav(1)} disabled={sec === slides.length - 1} style={{ padding: "7px 16px", background: sec === slides.length - 1 ? C.g100 : C.accent, border: "none", borderRadius: "7px", cursor: sec === slides.length - 1 ? "default" : "pointer", fontSize: "11px", fontWeight: 700, color: sec === slides.length - 1 ? C.g400 : "white", opacity: sec === slides.length - 1 ? 0.4 : 1 }}>→</button>
        </div>
      </div>
    </div>
  );
}
