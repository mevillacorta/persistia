import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", dark: "#0D0D0D", g700: "#374151", g500: "#6B7280",
  g400: "#9CA3AF", g200: "#E5E7EB", g100: "#F3F4F6",
  green: "#10B981", greenDk: "#064E3B", greenLt: "#D1FAE5", greenBg: "#ECFDF5",
  orange: "#F59E0B", orangeBg: "#FFFBEB", red: "#EF4444", redLt: "#FEE2E2",
  blue: "#3B82F6", purple: "#8B5CF6", accent: "#0F6FFF", cyan: "#06B6D4",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(14px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

export default function Slide5() {
  const [expandedReq, setExpandedReq] = useState(null);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "50px 20px 40px" }}>

        <FadeIn>
          <div style={{ fontSize: "10px", color: C.blue, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>QUÉ NECESITAMOS</div>
          <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
            No partimos de cero.<br/>
            Y <span style={{ color: C.blue, fontStyle: "italic" }}>no necesitamos mucho</span> para arrancar.
          </h2>
          <p style={{ fontSize: "13px", color: C.g500, marginBottom: "24px", lineHeight: 1.6 }}>
            La data ya existe. Los equipos ya existen. Los canales ya existen. Lo que construimos es la capa de inteligencia que los conecta.
          </p>
        </FadeIn>

        {/* What we HAVE vs what we NEED */}
        <FadeIn delay={150}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
            <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "18px" }}>
              <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "12px" }}>✅ LO QUE YA TENEMOS</div>
              {[
                "Data financiera en el ERP",
                "Data académica (notas, asistencia)",
                "CRM con historial de contacto y reclamos",
                "LMS con data de uso de plataforma",
                "Sistema de becas con resultados",
                "Equipo de estrategia que define las reglas",
                "Contact Center operativo",
                "Canales activos (WhatsApp, email, SMS, llamadas)",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", padding: "3px 0" }}>
                  <span style={{ color: C.green, fontSize: "10px", marginTop: "1px" }}>✓</span>
                  <span style={{ fontSize: "11px", color: C.g700 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "white", borderRadius: "12px", border: `1px solid ${C.blue}22`, padding: "18px" }}>
              <div style={{ fontSize: "10px", color: C.blue, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "12px" }}>🔧 LO QUE NECESITAMOS CONSTRUIR</div>
              {[
                "Conexión a las fuentes de data (CSVs o APIs)",
                "Motor de scoring y perfilamiento",
                "Motor de reglas NBA (configurable)",
                "Dashboard para estrategia y equipos",
                "Generador de mensajes personalizados",
                "Sistema de asignación y seguimiento",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "6px", padding: "3px 0" }}>
                  <span style={{ color: C.blue, fontSize: "10px", marginTop: "1px" }}>→</span>
                  <span style={{ fontSize: "11px", color: C.g700 }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: "8px", padding: "6px 10px", background: `${C.green}08`, borderRadius: "6px" }}>
                <span style={{ fontSize: "10px", color: C.greenDk, fontWeight: 600 }}>Todo esto se puede arrancar con herramientas que ya existen.</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Explicitly what we DON'T need */}
        <FadeIn delay={300}>
          <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "18px", marginBottom: "16px" }}>
            <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "12px" }}>🚫 LO QUE NO NECESITAMOS</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              {[
                { myth: "Cambiar los sistemas actuales", reality: "El agente se conecta a lo que ya existe. No reemplaza el ERP, el CRM ni el LMS." },
                { myth: "Data perfecta ni gobernada", reality: "Funciona con CSVs semanales y data parcialmente conectada. Arranca con lo que hay." },
                { myth: "Un equipo grande de IT", reality: "La conexión inicial se puede hacer con exports que ya existen. Se sofistica después." },
                { myth: "Que los equipos cambien cómo trabajan", reality: "Cada equipo sigue su proceso — pero recibe mejor información y acciones más claras." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "10px 12px", background: C.g100, borderRadius: "8px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: C.red, textDecoration: "line-through", marginBottom: "3px" }}>{item.myth}</div>
                  <div style={{ fontSize: "10px", color: C.g500, lineHeight: 1.4 }}>{item.reality}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* How we build it - phases */}
        <FadeIn delay={450}>
          <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "18px", marginBottom: "16px" }}>
            <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "14px" }}>🗺️ CÓMO LO CONSTRUIMOS — EN FASES</div>
            <p style={{ fontSize: "11px", color: C.g500, marginBottom: "14px", lineHeight: 1.5 }}>
              No es un proyecto de 12 meses. Es un piloto que demuestra valor rápido y se escala solo si funciona.
            </p>

            {[
              {
                phase: "FASE 1",
                title: "Mapeo y reglas",
                duration: "2 semanas",
                color: C.purple,
                summary: "Auditar las fuentes de data, definir las primeras reglas NBA basadas en nuestra experiencia, y conseguir un dataset histórico para validar.",
                detail: "No se escribe código. Es trabajo de estrategia: documentar qué data tenemos, qué campos sirven, y escribir las reglas de decisión que el equipo ya conoce pero que hoy viven en la cabeza de las personas.",
                deliverable: "Mapa de datos + 10 reglas NBA + dataset de validación",
              },
              {
                phase: "FASE 2",
                title: "Motor funcional",
                duration: "4 semanas",
                color: C.orange,
                summary: "Construir el motor de scoring, las reglas NBA, y un dashboard mínimo donde estrategia pueda ver las prescripciones.",
                detail: "Se conecta a las fuentes vía CSVs semanales. Se corre el modelo sobre alumnos reales de un ciclo pasado para verificar: ¿los que desertaron tenían score alto? ¿Las acciones prescritas tienen sentido?",
                deliverable: "Sistema que genera prescripciones reales — validado contra data histórica",
              },
              {
                phase: "FASE 3",
                title: "Piloto en vivo",
                duration: "4-6 semanas",
                color: C.green,
                summary: "Elegir una institución, dividir alumnos en grupo A (proceso actual) vs grupo B (proceso + agente), y medir resultados.",
                detail: "Estrategia revisa las prescripciones antes de ejecutar (human-in-the-loop). El Contact Center del grupo B recibe fichas con contexto. Se mide: ¿el grupo B tuvo mejor rematrícula que el grupo A?",
                deliverable: "Resultado medible: '¿El agente mejoró la retención vs el proceso actual?'",
              },
            ].map((p, i) => (
              <div key={i} style={{ marginBottom: "6px" }}>
                <button onClick={() => setExpandedReq(expandedReq === i ? null : i)} style={{
                  width: "100%", background: expandedReq === i ? `${p.color}05` : C.g100,
                  border: `1px solid ${expandedReq === i ? p.color + "22" : C.g200}`,
                  borderRadius: expandedReq === i ? "10px 10px 0 0" : "10px",
                  padding: "12px 16px", cursor: "pointer", textAlign: "left",
                  display: "flex", alignItems: "center", gap: "12px",
                  transition: "all 0.2s",
                }}>
                  <div style={{
                    padding: "3px 8px", background: p.color, borderRadius: "4px",
                    fontSize: "9px", fontWeight: 800, color: "white", fontFamily: mono, flexShrink: 0,
                  }}>{p.phase}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: C.dark }}>{p.title}</div>
                    <div style={{ fontSize: "10px", color: C.g500 }}>{p.summary}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", flexShrink: 0 }}>
                    <span style={{ fontSize: "10px", color: p.color, fontWeight: 700, fontFamily: mono }}>{p.duration}</span>
                    <span style={{ fontSize: "13px", color: C.g400, transform: expandedReq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                  </div>
                </button>
                {expandedReq === i && (
                  <div style={{
                    background: "white", border: `1px solid ${p.color}22`, borderTop: "none",
                    borderRadius: "0 0 10px 10px", padding: "14px 16px", animation: "slideUp 0.25s ease",
                  }}>
                    <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.7, marginBottom: "10px" }}>{p.detail}</div>
                    <div style={{ padding: "8px 12px", background: `${p.color}08`, borderRadius: "6px", borderLeft: `3px solid ${p.color}` }}>
                      <div style={{ fontSize: "9px", color: p.color, fontWeight: 700, marginBottom: "2px" }}>ENTREGABLE</div>
                      <div style={{ fontSize: "10px", color: C.g700 }}>{p.deliverable}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Timeline visual */}
            <div style={{ marginTop: "12px" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "4px" }}>
                {[
                  { w: "17%", c: C.purple, l: "F1" },
                  { w: "33%", c: C.orange, l: "F2" },
                  { w: "50%", c: C.green, l: "F3" },
                ].map((p, i) => (
                  <div key={i} style={{ width: p.w, height: "22px", background: p.c, borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "8px", fontWeight: 800, color: "white" }}>{p.l}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", color: C.g400, padding: "0 2px" }}>
                <span>Sem 1</span><span>Sem 4</span><span>Sem 8</span><span>Sem 10-12</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Tech & Budget */}
        <FadeIn delay={520}>
          <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "18px", marginBottom: "16px" }}>
            <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "14px" }}>💻 CAPACIDADES TÉCNICAS Y PRESUPUESTO</div>

            {/* Tech stack */}
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "12px", lineHeight: 1.5 }}>
              El stack es simple y usa herramientas probadas. No es ciencia espacial.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginBottom: "14px" }}>
              {[
                { layer: "Ingesta de data", tool: "Python + pandas", note: "Lee CSVs de cada sistema y los cruza", icon: "📥" },
                { layer: "Base de datos", tool: "PostgreSQL (Supabase)", note: "Gratis hasta 500MB — suficiente para piloto", icon: "🗄️" },
                { layer: "Motor de scoring", tool: "Python + scikit-learn", note: "Modelo de riesgo multidimensional", icon: "🧠" },
                { layer: "Reglas NBA", tool: "Motor de reglas configurable", note: "JSON editable — sin tocar código", icon: "🎯" },
                { layer: "Dashboard", tool: "React + Supabase", note: "Interfaz para estrategia y equipos", icon: "📊" },
                { layer: "Hosting", tool: "Vercel + Supabase", note: "$0-25/mes para el piloto", icon: "☁️" },
              ].map((t, i) => (
                <div key={i} style={{ padding: "10px", background: C.g100, borderRadius: "8px" }}>
                  <div style={{ fontSize: "14px", marginBottom: "4px" }}>{t.icon}</div>
                  <div style={{ fontSize: "9px", color: C.cyan, fontWeight: 700, marginBottom: "2px" }}>{t.layer}</div>
                  <div style={{ fontSize: "10px", color: C.g700, fontWeight: 600 }}>{t.tool}</div>
                  <div style={{ fontSize: "8px", color: C.g400, marginTop: "2px" }}>{t.note}</div>
                </div>
              ))}
            </div>

            {/* What we need from IT */}
            <div style={{ padding: "10px 12px", background: `${C.blue}05`, borderRadius: "8px", border: `1px solid ${C.blue}12`, marginBottom: "14px" }}>
              <div style={{ fontSize: "9px", color: C.blue, fontWeight: 700, marginBottom: "4px" }}>¿QUÉ NECESITAMOS DE IT?</div>
              <div style={{ fontSize: "10px", color: C.g700, lineHeight: 1.5 }}>
                <strong>Para el piloto: mínimo.</strong> Acceso a exports semanales (CSVs) del ERP, sistema académico, CRM y LMS. Si IT puede dar acceso vía API o base de datos, mejor — pero no es requisito para arrancar.
              </div>
            </div>

            {/* Budget breakdown */}
            <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "10px" }}>💰 PRESUPUESTO ESTIMADO</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "10px" }}>
              {[
                { phase: "Fase 1 — Mapeo", cost: "~$0", detail: "Trabajo interno del equipo de estrategia", color: C.purple },
                { phase: "Fase 2 — Motor", cost: "$1,500 - 2,500", detail: "Desarrollador part-time (10-15 hrs/sem × 4 sem) + hosting básico", color: C.orange },
                { phase: "Fase 3 — Piloto", cost: "$500 - 1,000", detail: "Mantenimiento del desarrollador + hosting", color: C.green },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px", background: C.g100, borderRadius: "6px" }}>
                  <span style={{ fontSize: "9px", fontWeight: 800, color: b.color, fontFamily: mono, width: "50px", flexShrink: 0 }}>{b.phase.split("—")[0].trim()}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "10px", color: C.g700 }}>{b.detail}</div>
                  </div>
                  <span style={{ fontSize: "13px", fontWeight: 800, color: C.dark, fontFamily: mono, flexShrink: 0 }}>{b.cost}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: "12px", background: C.dark, borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: "9px", color: C.g400, marginBottom: "2px" }}>INVERSIÓN TOTAL DEL PILOTO (10-12 SEMANAS)</div>
                <div style={{ fontSize: "20px", fontWeight: 800, color: C.green, fontFamily: mono }}>$2,000 - $3,500</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "9px", color: C.g400, marginBottom: "2px" }}>SE PAGA CON RETENER</div>
                <div style={{ fontSize: "14px", fontWeight: 800, color: C.orange, fontFamily: mono }}>2-3 alumnos</div>
                <div style={{ fontSize: "8px", color: C.g500 }}>de los que hoy se pierden</div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Decision criteria */}
        <FadeIn delay={650}>
          <div style={{ background: "white", borderRadius: "12px", border: `1px solid ${C.green}22`, padding: "18px" }}>
            <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "12px" }}>🚦 CRITERIO DE GO / NO-GO</div>
            <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.7, marginBottom: "12px" }}>
              No es un compromiso de largo plazo. Cada fase se valida antes de avanzar a la siguiente:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {[
                { gate: "Después de Fase 1", question: "¿Tenemos suficiente data cruzable para que el modelo funcione?", yes: "Avanzamos a construir el motor", no: "Ajustamos fuentes o pausamos", color: C.purple },
                { gate: "Después de Fase 2", question: "¿El scoring detecta correctamente a los alumnos que desertaron en ciclos pasados?", yes: "Arrancamos piloto en vivo", no: "Refinamos el modelo con más data", color: C.orange },
                { gate: "Después de Fase 3", question: "¿El grupo B (con agente) tuvo mejor rematrícula que el grupo A (sin agente)?", yes: "Escalamos a las 3 instituciones", no: "Evaluamos qué ajustar o si paramos", color: C.green },
              ].map((g, i) => (
                <div key={i} style={{ padding: "12px", background: `${g.color}05`, borderRadius: "8px", border: `1px solid ${g.color}12` }}>
                  <div style={{ fontSize: "9px", color: g.color, fontWeight: 700, marginBottom: "4px" }}>{g.gate}</div>
                  <div style={{ fontSize: "11px", color: C.g700, fontWeight: 600, marginBottom: "6px" }}>{g.question}</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    <div style={{ padding: "4px 8px", background: `${C.green}10`, borderRadius: "4px" }}>
                      <span style={{ fontSize: "9px", color: C.green }}>✓ Sí → {g.yes}</span>
                    </div>
                    <div style={{ padding: "4px 8px", background: C.g100, borderRadius: "4px" }}>
                      <span style={{ fontSize: "9px", color: C.g500 }}>✗ No → {g.no}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing */}
        <FadeIn delay={720}>
          <div style={{
            marginTop: "14px", padding: "16px 18px",
            background: "white", borderRadius: "12px",
            border: `1px solid ${C.accent}22`,
          }}>
            <div style={{ fontSize: "13px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.accent }}>El riesgo es bajo, el upside es enorme.</strong> Si no funciona, lo sabemos en 10 semanas y no cambiamos nada. Si funciona, tenemos un sistema que transforma cómo opera la retención en las 3 instituciones — y que puede seguir mejorando solo.
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
