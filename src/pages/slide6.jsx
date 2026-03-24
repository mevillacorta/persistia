import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", dark: "#0D0D0D", g700: "#374151", g500: "#6B7280",
  g400: "#9CA3AF", g200: "#E5E7EB", g100: "#F3F4F6",
  green: "#10B981", greenDk: "#064E3B", greenLt: "#D1FAE5", greenBg: "#ECFDF5",
  orange: "#F59E0B", accent: "#0F6FFF",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

export default function Slide6() {
  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        <FadeIn>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(26px,5vw,40px)", fontWeight: 400, lineHeight: 1.15, marginBottom: "24px" }}>
            Hoy nuestro equipo logra resultados<br/>
            a pesar del proceso.<br/><br/>
            Imagina lo que logra<br/>
            <span style={{ color: C.green, fontStyle: "italic" }}>con un agente que trabaje<br/>para ellos</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={300}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "28px", maxWidth: "520px" }}>
            {[
              { top: "Estrategia", bottom: "pasa de operar a dirigir", icon: "🧠" },
              { top: "Ejecución", bottom: "pasa de ejecutar a ciegas a conectar", icon: "⚡" },
              { top: "El alumno", bottom: "recibe lo que necesita, cuando lo necesita", icon: "🎓" },
            ].map((p, i) => (
              <div key={i} style={{ padding: "14px", background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", textAlign: "center" }}>
                <div style={{ fontSize: "20px", marginBottom: "6px" }}>{p.icon}</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: C.dark }}>{p.top}</div>
                <div style={{ fontSize: "10px", color: C.g500, marginTop: "2px" }}>{p.bottom}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div style={{ padding: "18px 20px", background: "white", borderRadius: "12px", border: `1px solid ${C.green}22`, maxWidth: "520px" }}>
            <div style={{ fontSize: "14px", color: C.g700, lineHeight: 1.7, marginBottom: "10px" }}>
              <strong style={{ color: C.dark }}>10 semanas. $2,000-3,500. Cero riesgo operativo.</strong>
            </div>
            <div style={{ fontSize: "13px", color: C.g500, lineHeight: 1.6 }}>
              Si funciona, transformamos cómo opera retención en las 3 instituciones. Si no funciona, lo sabemos rápido y no cambiamos nada.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={680}>
          <div style={{ marginTop: "32px", fontSize: "10px", color: C.g400 }}>
            Proyecto Agente de Retención IA · Marzo 2026
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
