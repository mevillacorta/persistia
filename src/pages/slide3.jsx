import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", dark: "#0D0D0D", g700: "#374151", g500: "#6B7280",
  g400: "#9CA3AF", g200: "#E5E7EB", g100: "#F3F4F6",
  green: "#10B981", greenDk: "#064E3B", greenLt: "#D1FAE5", greenBg: "#ECFDF5",
  orange: "#F59E0B", orangeBg: "#FFFBEB", red: "#EF4444",
  blue: "#3B82F6", purple: "#8B5CF6", accent: "#0F6FFF", cyan: "#06B6D4",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

export default function Slide3() {
  const [activeRole, setActiveRole] = useState(null);

  const roles = [
    {
      team: "Estrategia",
      icon: "🧠",
      color: C.accent,
      today: "Cruza data de múltiples fuentes, analiza, segmenta alumnos, define qué acción lanzar, coordina con todos los equipos. Todos los días. Manual.",
      withAgent: "El agente cruza la data automáticamente y propone la acción óptima para cada alumno. Estrategia revisa, ajusta y aprueba — enfocándose en diseñar mejores soluciones, no en armar bases.",
      freed: "De operar → a pensar estratégicamente",
    },
    {
      team: "Comunicaciones",
      icon: "✍️",
      color: C.cyan,
      today: "Recibe el brief de estrategia, arma piezas de comunicación, coordina con los canales para lanzar. Templates generales para segmentos amplios.",
      withAgent: "El agente genera el mensaje personalizado por alumno — adaptado a su situación, su canal preferido y su contexto. Comunicaciones supervisa el tono, la marca y aprueba las piezas.",
      freed: "De producir en volumen → a cuidar calidad y marca",
    },
    {
      team: "Contact Center",
      icon: "📞",
      color: C.orange,
      today: "Recibe la lista priorizada y los scripts de estrategia. Ejecuta llamadas o gestiona rebotes de WhatsApp. Pero no tiene el contexto completo del alumno.",
      withAgent: "El agente le entrega al operador una ficha con el contexto completo: por qué este alumno está en riesgo, qué ya pasó con él, y el script personalizado para su caso específico. El operador conecta en la primera interacción.",
      freed: "De ejecutar a ciegas → a conectar con contexto",
    },
    {
      team: "Cobranzas",
      icon: "💰",
      color: C.red,
      today: "Gestiona la deuda para habilitar al alumno. Arma su propia estrategia con pocas variables. No sabe si el alumno postuló a beca, si metió un reclamo, o si ya fue contactado por otro equipo.",
      withAgent: "El agente le muestra a cobranzas el contexto completo antes de gestionar: este alumno tiene beca en proceso, este otro ya fue contactado ayer, este tiene un reclamo abierto. Cobranzas decide con información, no a ciegas.",
      freed: "De cobrar sin contexto → a gestionar con inteligencia",
    },
    {
      team: "Soporte / Canales",
      icon: "📡",
      color: C.purple,
      today: "Programa las comunicaciones en cada canal según lo que recibe de estrategia y comunicaciones. Ejecución manual canal por canal.",
      withAgent: "El agente orquesta la secuencia automáticamente: primer contacto por WhatsApp, si no responde en 48h escala a llamada, si no responde en 5 días activa otro canal. Soporte supervisa la ejecución, no la programa.",
      freed: "De programar manualmente → a supervisar flujos",
    },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "50px 20px 40px" }}>

        <FadeIn>
          <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EL AGENTE DE RETENCIÓN IA</div>
          <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
            Imagina un miembro del equipo que<br/>
            ve <span style={{ color: C.accent, fontStyle: "italic" }}>todo</span>, no duerme, y le dice a<br/>
            cada persona qué hacer.
          </h2>
          <p style={{ fontSize: "13px", color: C.g500, marginBottom: "10px", lineHeight: 1.6 }}>
            El Agente de Retención IA es un sistema que trabaja en paralelo con cada equipo. No toma decisiones finales — las propone. No contacta al alumno — prepara todo para que el equipo lo haga mejor.
          </p>
        </FadeIn>

        {/* Simple explanation */}
        <FadeIn delay={150}>
          <div style={{
            background: "white", borderRadius: "14px", border: "1px solid #E5E7EB",
            padding: "18px", marginBottom: "20px",
          }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: C.g400, marginBottom: "14px" }}>EN SIMPLE: ¿QUÉ HACE?</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {[
                {
                  step: "1", icon: "📥", title: "Lee toda la data",
                  desc: "Cruza información de todos los sistemas — financiero, académico, CRM, LMS — y arma el perfil completo de cada alumno. En segundos.",
                  color: "#6366F1",
                },
                {
                  step: "2", icon: "🎯", title: "Define la mejor acción",
                  desc: "Para cada alumno, evalúa qué acción tiene mayor probabilidad de funcionar dado su perfil, su contexto y los recursos que tenemos.",
                  color: C.orange,
                },
                {
                  step: "3", icon: "⚡", title: "Prepara al equipo",
                  desc: "Le entrega a cada equipo lo que necesita: la ficha del alumno, el mensaje sugerido, el canal óptimo y el plan si no hay respuesta.",
                  color: C.green,
                },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: "14px", background: `${s.color}05`,
                  borderRadius: "10px", border: `1px solid ${s.color}15`,
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: "22px", marginBottom: "6px" }}>{s.icon}</div>
                  <div style={{
                    fontSize: "9px", fontWeight: 800, color: s.color,
                    fontFamily: mono, marginBottom: "4px",
                  }}>PASO {s.step}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: C.dark, marginBottom: "4px" }}>{s.title}</div>
                  <div style={{ fontSize: "10px", color: C.g500, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Per-team impact */}
        <FadeIn delay={300}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: C.g400, marginBottom: "10px" }}>
            ¿CÓMO CAMBIA EL DÍA A DÍA DE CADA EQUIPO?
          </div>
        </FadeIn>

        {roles.map((r, i) => (
          <FadeIn key={i} delay={350 + i * 70}>
            <div style={{ marginBottom: "6px" }}>
              <button onClick={() => setActiveRole(activeRole === i ? null : i)} style={{
                width: "100%", background: "white",
                border: `1px solid ${activeRole === i ? r.color + "44" : "#E5E7EB"}`,
                borderRadius: activeRole === i ? "10px 10px 0 0" : "10px",
                padding: "12px 16px", cursor: "pointer", textAlign: "left",
                display: "flex", alignItems: "center", gap: "10px",
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "8px",
                  background: `${r.color}10`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "16px", flexShrink: 0,
                }}>{r.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: C.dark }}>{r.team}</div>
                  <div style={{ fontSize: "10px", color: r.color, fontWeight: 600 }}>{r.freed}</div>
                </div>
                <span style={{
                  fontSize: "14px", color: C.g400,
                  transform: activeRole === i ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}>▾</span>
              </button>

              {activeRole === i && (
                <div style={{
                  background: "white", border: `1px solid ${r.color}22`,
                  borderTop: "none", borderRadius: "0 0 10px 10px",
                  padding: "14px 16px", animation: "slideUp 0.25s ease",
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                    <div style={{
                      padding: "12px", background: C.g100, borderRadius: "8px",
                      borderLeft: `3px solid ${C.g200}`,
                    }}>
                      <div style={{ fontSize: "9px", color: C.g400, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>HOY</div>
                      <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.6 }}>{r.today}</div>
                    </div>
                    <div style={{
                      padding: "12px", background: C.greenBg, borderRadius: "8px",
                      borderLeft: `3px solid ${C.green}`,
                    }}>
                      <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "4px" }}>CON EL AGENTE</div>
                      <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.6 }}>{r.withAgent}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={720}>
          <div style={{
            marginTop: "14px", padding: "16px 18px",
            background: "white", borderRadius: "12px",
            border: `1px solid ${C.green}22`,
          }}>
            <div style={{ fontSize: "13px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.green }}>El mismo equipo. Las mismas personas. Pero cada una con el contexto completo y la chamba operativa resuelta.</strong> El agente no reemplaza a nadie — hace que cada persona se enfoque en lo que solo un humano puede hacer.
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
