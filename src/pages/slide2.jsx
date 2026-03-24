import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", dark: "#0D0D0D", g700: "#374151", g500: "#6B7280",
  g400: "#9CA3AF", g200: "#E5E7EB", g100: "#F3F4F6",
  green: "#10B981", greenDk: "#064E3B", greenLt: "#D1FAE5", greenBg: "#ECFDF5",
  orange: "#F59E0B", orangeBg: "#FFFBEB", red: "#EF4444", redLt: "#FEE2E2",
  blue: "#3B82F6", purple: "#8B5CF6", accent: "#0F6FFF",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

export default function Slide2() {
  const [expanded, setExpanded] = useState(null);

  const pains = [
    {
      icon: "🧠",
      title: "Estrategia está al límite",
      color: C.accent,
      summary: "El equipo analiza, prioriza, segmenta y orquesta todos los días — manualmente.",
      detail: "Para lograr acciones segmentadas, estrategia tiene que cruzar data constantemente, definir qué hacer con cada grupo, coordinarse con comunicaciones, contact center y cobranzas. Funciona — pero el costo es un equipo quemado y sin tiempo para pensar en lo que realmente importa: diseñar mejores soluciones de retención.",
      consequence: "El equipo que debería estar innovando está atrapado operando.",
    },
    {
      icon: "⏱️",
      title: "La información llega con desfase",
      color: C.orange,
      summary: "Las decisiones se toman con data que ya cambió para cuando se ejecutan.",
      detail: "Estrategia arma la priorización con las variables que tiene disponibles — pero no todas, y no en tiempo real. Cuando la acción llega al alumno, su situación puede haber cambiado: ya pagó, ya metió un reclamo, ya dejó de asistir. Cambiar la estrategia constantemente para adaptarse es operativamente inviable.",
      consequence: "Acciones bien pensadas que llegan al alumno equivocado o en el momento equivocado.",
    },
    {
      icon: "🔇",
      title: "Los equipos de ejecución no ven el contexto completo",
      color: C.purple,
      summary: "Cada equipo opera con su pedazo de información — nadie tiene el 360 del alumno.",
      detail: "El Contact Center recibe una lista priorizada y un script, pero no sabe que el alumno metió un reclamo por otro canal. Cobranzas gestiona la deuda sin saber que el alumno ya postuló a una beca. Comunicaciones lanza una campaña sin saber que el alumno ya fue contactado ayer por teléfono. Cada uno hace bien su parte — pero sin ver la película completa.",
      consequence: "Un alumno puede recibir un cobro mientras está esperando respuesta de su solicitud de beca.",
    },
    {
      icon: "🔄",
      title: "Escalar la orquestación es insostenible",
      color: C.red,
      summary: "Lo que funciona para un segmento no se puede replicar individualmente para 200K alumnos.",
      detail: "Hoy la segmentación funciona a nivel de grupos. Pero cada alumno tiene una combinación única de situación financiera, académica, de contacto y personal. Llegar al nivel de acción personalizada por alumno requeriría multiplicar el equipo de estrategia por 10 — o tener un sistema que lo haga.",
      consequence: "Hacemos lo mejor que podemos con los recursos que tenemos. Pero sabemos que hay alumnos que se nos escapan.",
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
          <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>LO QUE VIVIMOS HOY</div>
          <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
            La orquestación funciona.<br/>
            Pero mantenerla así <span style={{ color: C.red, fontStyle: "italic" }}>no escala</span>.
          </h2>
          <p style={{ fontSize: "13px", color: C.g500, marginBottom: "22px", lineHeight: 1.6 }}>
            Tenemos equipos capaces y procesos que funcionan. El problema no es la gente — es que el modelo actual depende de esfuerzo manual constante que consume al equipo y deja sin espacio para lo estratégico.
          </p>
        </FadeIn>

        {pains.map((p, i) => (
          <FadeIn key={i} delay={120 + i * 100}>
            <div style={{ marginBottom: "8px" }}>
              <button onClick={() => setExpanded(expanded === i ? null : i)} style={{
                width: "100%", background: "white",
                border: `1px solid ${expanded === i ? p.color + "44" : "#E5E7EB"}`,
                borderRadius: expanded === i ? "12px 12px 0 0" : "12px",
                padding: "16px 18px", cursor: "pointer", textAlign: "left",
                display: "flex", alignItems: "center", gap: "12px",
                transition: "all 0.2s",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: `${p.color}10`, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "18px", flexShrink: 0,
                }}>{p.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: C.dark, marginBottom: "2px" }}>{p.title}</div>
                  <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.4 }}>{p.summary}</div>
                </div>
                <span style={{
                  fontSize: "14px", color: C.g400,
                  transform: expanded === i ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s",
                }}>▾</span>
              </button>

              {expanded === i && (
                <div style={{
                  background: "white", border: `1px solid ${p.color}22`,
                  borderTop: "none", borderRadius: "0 0 12px 12px",
                  padding: "16px 18px", animation: "slideUp 0.25s ease",
                }}>
                  <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.7, marginBottom: "12px" }}>
                    {p.detail}
                  </div>
                  <div style={{
                    padding: "10px 14px", background: `${p.color}08`,
                    borderRadius: "8px", borderLeft: `3px solid ${p.color}`,
                  }}>
                    <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
                      <strong style={{ color: p.color }}>Consecuencia:</strong> {p.consequence}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        ))}

        <FadeIn delay={550}>
          <div style={{
            marginTop: "14px", padding: "16px 18px",
            background: "white", borderRadius: "12px",
            border: `1px solid ${C.accent}22`,
          }}>
            <div style={{ fontSize: "13px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.dark }}>El punto no es que estemos haciendo mal las cosas.</strong> El punto es que para seguir haciéndolas bien a esta escala necesitamos una capa de inteligencia que automatice lo repetitivo — y le devuelva al equipo el tiempo para hacer lo que solo las personas pueden hacer.
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
