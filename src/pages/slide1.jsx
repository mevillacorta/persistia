import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", dark: "#0D0D0D", g700: "#374151", g500: "#6B7280",
  g400: "#9CA3AF", g200: "#E5E7EB", g100: "#F3F4F6",
  green: "#10B981", greenDk: "#064E3B", greenLt: "#D1FAE5", greenBg: "#ECFDF5",
  orange: "#F59E0B", red: "#EF4444", blue: "#3B82F6", purple: "#8B5CF6", accent: "#0F6FFF",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

export default function Slide1() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        <FadeIn>
          <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "16px", fontFamily: mono }}>
            PROYECTO INTERNO · AGENTE DE RETENCIÓN IA
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(30px,5.5vw,46px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}>
            ¿Qué pasaría si la organización<br/>
            supiera <span style={{ color: C.accent, fontStyle: "italic" }}>exactamente</span> qué hacer<br/>
            con cada alumno en riesgo<br/>
            <span style={{ color: C.green }}>— en tiempo real</span>?
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p style={{ fontSize: "15px", color: C.g500, lineHeight: 1.7, maxWidth: "540px", marginBottom: "32px" }}>
            Un agente de IA que analiza al alumno con todas las variables que hoy están dispersas, define la mejor acción posible, y le dice a cada equipo de la organización qué hacer, cuándo y cómo. Sin desfase. Sin depender de que alguien cruce todo manual.
          </p>
        </FadeIn>

        <FadeIn delay={450}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[
              { icon: "🧠", label: "Analiza", desc: "Cruza toda la data del alumno en segundos" },
              { icon: "🎯", label: "Decide", desc: "Prescribe la mejor acción según perfil y contexto" },
              { icon: "⚡", label: "Orquesta", desc: "Le dice a cada equipo qué hacer con quién" },
            ].map((p, i) => (
              <div key={i} style={{
                flex: "1 1 180px", padding: "14px 16px", background: "white",
                borderRadius: "10px", border: "1px solid #E5E7EB",
              }}>
                <div style={{ fontSize: "20px", marginBottom: "6px" }}>{p.icon}</div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: C.dark, marginBottom: "2px" }}>{p.label}</div>
                <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.4 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={580}>
          <div style={{ marginTop: "28px", padding: "14px 18px", background: "white", borderRadius: "10px", border: `1px solid ${C.accent}22`, maxWidth: "480px" }}>
            <div style={{ fontSize: "12px", color: C.g500, lineHeight: 1.6 }}>
              <strong style={{ color: C.dark }}>No reemplaza al equipo — lo potencia.</strong> Quitamos la chamba operativa repetitiva para que el equipo se enfoque en lo que realmente importa: mejorar la experiencia del alumno, encontrar nuevos insights y diseñar soluciones que de verdad retengan.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={680}>
          <div style={{ marginTop: "24px", fontSize: "10px", color: C.g400 }}>
            Proyecto Agente de Retención IA · Marzo 2026
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
