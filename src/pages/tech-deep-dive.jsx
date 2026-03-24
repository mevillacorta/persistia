import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", card: "#FFFFFF", card2: "#F5F5F3", border: "#E5E7EB",
  g700: "#374151", g600: "#4B5563", g500: "#6B7280", g400: "#9CA3AF", g200: "#E5E7EB", g100: "#F3F4F6",
  green: "#10B981", greenDk: "#065F46", greenBg: "#ECFDF5",
  orange: "#F59E0B", orangeBg: "#FFFBEB", red: "#EF4444", redLt: "#FEE2E2",
  blue: "#3B82F6", purple: "#8B5CF6", cyan: "#0891B2",
  accent: "#6366F1", dark: "#0D0D0D",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

const SECS = ["overview", "layers", "data", "causal", "nba", "autonomy", "mvp", "arch"];
const LABS = ["Overview", "6 Capas", "Data Model", "Diagnóstico causal", "Motor NBA", "Autonomía", "MVP 90 días", "Arquitectura"];

export default function TechDeepDive() {
  const [sec, setSec] = useState(0);
  const [expandedLayer, setExpandedLayer] = useState(null);
  const nav = (d) => { if (d > 0 && sec < SECS.length - 1) setSec(x => x + 1); if (d < 0 && sec > 0) setSec(x => x - 1); };
  useEffect(() => { const h = (e) => { if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nav(1); } if (e.key === "ArrowLeft") { e.preventDefault(); nav(-1); } }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [sec]);
  useEffect(() => { setExpandedLayer(null); }, [sec]);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes slideUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})` }} />
            <span style={{ fontWeight: 800, fontSize: "13px" }}>Persistia</span>
            <span style={{ fontSize: "8px", color: C.g500, fontFamily: mono, background: C.g100, padding: "2px 6px", borderRadius: "3px" }}>TECHNICAL DEEP DIVE</span>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {SECS.map((_, i) => (
              <button key={i} onClick={() => setSec(i)} style={{ width: sec === i ? "14px" : "4px", height: "4px", borderRadius: "2px", background: sec === i ? C.accent : i < sec ? `${C.accent}33` : C.border, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 20px 80px" }}>

        {/* 1. OVERVIEW */}
        {sec === 0 && (
          <div style={{ paddingTop: "70px", minHeight: "75vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "14px", fontFamily: mono }}>TECHNICAL DEEP DIVE</div>
              <h1 style={{ fontFamily: serif, fontSize: "clamp(28px,5vw,42px)", fontWeight: 400, lineHeight: 1.1, marginBottom: "18px" }}>
                Persistia no es un dashboard<br/>con un score.<br/><br/>
                Es un <span style={{ color: C.accent, fontStyle: "italic" }}>sistema operativo<br/>agentivo</span> de retención.
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <p style={{ fontSize: "14px", color: C.g500, lineHeight: 1.7, maxWidth: "520px", marginBottom: "24px" }}>
                Este documento detalla la arquitectura funcional, el modelo de datos, el motor de diagnóstico causal, el motor NBA, los niveles de autonomía y el plan de construcción del MVP.
              </p>
            </FadeIn>
            <FadeIn delay={450}>
              <div style={{ padding: "14px 16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.accent}22`, maxWidth: "520px" }}>
                <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, marginBottom: "6px" }}>NORTH STAR METRIC</div>
                <div style={{ fontSize: "13px", color: C.dark, fontWeight: 700 }}>Ingresos retenidos recuperados por acciones coordinadas dentro de Persistia.</div>
                <div style={{ fontSize: "11px", color: C.g500, marginTop: "4px" }}>No medimos actividad. No medimos llamadas. Medimos revenue salvado.</div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 2. 6 FUNCTIONAL LAYERS */}
        {sec === 1 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>ARQUITECTURA FUNCIONAL</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                6 capas que construyen<br/>el valor completo del sistema.
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "16px", lineHeight: 1.5 }}>Cada capa depende de la anterior. Juntas convierten data dispersa en decisiones coordinadas y medibles.</p>
            </FadeIn>
            {[
              { id: "L1", name: "Data unificada", icon: "📥", color: "#6366F1", summary: "Consolida señales académicas, financieras, operativas y de contacto en un perfil 360.", modules: "M1. Data ingestion & unification → M2. Student 360", output: "Perfil 360 del alumno con timeline de eventos normalizados.", detail: "Conecta SIS, ERP/pagos, CRM, LMS, tickets y otras fuentes. Acepta batch (CSVs) o APIs. Versiona cada ingesta para saber con qué datos se tomaron decisiones." },
              { id: "L2", name: "Diagnóstico causal", icon: "🔍", color: C.orange, summary: "No solo 'riesgo alto'. Explica POR QUÉ el alumno está en riesgo y con qué evidencias.", modules: "M3. Risk & diagnostic engine", output: "Score + causal principal + causales secundarias + evidencias + severidad.", detail: "Taxonomía de 5 causales: económica, académica, engagement, experiencia/servicio, mixta. Cada diagnóstico incluye nivel de confianza y es explicable." },
              { id: "L3", name: "Motor NBA", icon: "🎯", color: C.green, summary: "Define la siguiente mejor acción: qué hacer, quién, cuándo, por qué canal, con qué mensaje.", modules: "M4. NBA / Policy engine", output: "Acción recomendada + owner + canal + timing + plan de escalamiento.", detail: "Considera: causal principal, score, historial de canal, intención previa, saturación de contacto, capacidad operativa y fechas críticas. Configurable por institución." },
              { id: "L4", name: "Orquestación inter-áreas", icon: "🔄", color: C.cyan, summary: "Coordina retención, cobranzas, experiencia y académico. Evita que se pisen.", modules: "M5. Case & workflow manager", output: "Owner primario, reglas de precedencia, bloqueos temporales, SLA y bitácora única.", detail: "Define quién lidera el caso, detecta conflictos cuando varias áreas quieren tocar al mismo alumno, programa semáforos de saturación, y mantiene historial unificado." },
              { id: "L5", name: "Capa agentiva", icon: "🤖", color: C.accent, summary: "Automatiza tareas de bajo riesgo. Deja las decisiones sensibles al humano.", modules: "M6. Advisor console + Agent layer", output: "Tareas automáticas + cola priorizada para humanos + trazabilidad completa.", detail: "Autónomo: crear tareas, recalcular score, priorizar cola, generar borradores de mensaje. Human-in-the-loop: aprobar derivaciones, ajustar owner. No autónomo: decisiones financieras complejas." },
              { id: "L6", name: "Loop de aprendizaje", icon: "📊", color: C.red, summary: "Captura qué funcionó y qué no. Mejora las reglas NBA con cada resultado.", modules: "M7. Analytics & ROI", output: "Conversión por causal/canal/equipo/NBA. Revenue recuperado. Ranking de efectividad.", detail: "Cada outcome retroalimenta el motor. Las reglas que convierten se refuerzan. Las que no, se ajustan. El sistema mejora con cada ciclo académico." },
            ].map((l, i) => (
              <FadeIn key={l.id} delay={80 + i * 50}>
                <div style={{ marginBottom: "5px" }}>
                  <button onClick={() => setExpandedLayer(expandedLayer === i ? null : i)} style={{
                    width: "100%", background: C.card,
                    border: `1px solid ${expandedLayer === i ? l.color + "44" : C.border}`,
                    borderRadius: expandedLayer === i ? "10px 10px 0 0" : "10px",
                    padding: "12px 14px", cursor: "pointer", textAlign: "left",
                    display: "flex", alignItems: "center", gap: "10px",
                  }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: `${l.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>{l.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "8px", color: l.color, fontWeight: 800, fontFamily: mono }}>{l.id}</span>
                        <span style={{ fontSize: "12px", fontWeight: 700 }}>{l.name}</span>
                      </div>
                      <div style={{ fontSize: "10px", color: C.g500, marginTop: "1px" }}>{l.summary}</div>
                    </div>
                    <span style={{ fontSize: "12px", color: C.g400, transform: expandedLayer === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
                  </button>
                  {expandedLayer === i && (
                    <div style={{ background: C.card, border: `1px solid ${l.color}22`, borderTop: "none", borderRadius: "0 0 10px 10px", padding: "14px", animation: "slideUp 0.25s ease" }}>
                      <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.6, marginBottom: "10px" }}>{l.detail}</div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                        <div style={{ padding: "8px 10px", background: C.g100, borderRadius: "6px" }}>
                          <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700 }}>MÓDULOS</div>
                          <div style={{ fontSize: "9px", color: C.g600, marginTop: "2px" }}>{l.modules}</div>
                        </div>
                        <div style={{ padding: "8px 10px", background: `${l.color}08`, borderRadius: "6px" }}>
                          <div style={{ fontSize: "8px", color: l.color, fontWeight: 700 }}>OUTPUT</div>
                          <div style={{ fontSize: "9px", color: C.g600, marginTop: "2px" }}>{l.output}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* 3. DATA MODEL */}
        {sec === 2 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.blue, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>MODELO DE DATOS</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                15 entidades que conectan<br/>señales, decisiones y resultados.
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "16px", lineHeight: 1.5 }}>El modelo debe responder siempre 3 preguntas: qué sabíamos, qué hicimos y qué pasó después.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px" }}>
                {[
                  { group: "CONTEXTO", color: "#6366F1", entities: [
                    { name: "Alumno", desc: "Perfil base, programa, ciclo, estado" },
                    { name: "Periodo académico", desc: "Ciclo, fechas, hitos" },
                    { name: "Matrícula", desc: "Estado, cursos, créditos" },
                    { name: "Estado financiero", desc: "Deuda, cuotas, acuerdos" },
                    { name: "Evento engagement", desc: "Asistencia, LMS, interacciones" },
                  ]},
                  { group: "DIAGNÓSTICO", color: C.orange, entities: [
                    { name: "Score de riesgo", desc: "Valor, dimensiones, fecha" },
                    { name: "Causal de riesgo", desc: "Tipo, evidencias, confianza" },
                    { name: "Ticket / incidencia", desc: "Reclamos, solicitudes" },
                    { name: "Canal", desc: "Preferencia, historial, apertura" },
                    { name: "Owner / equipo", desc: "Responsable, área, capacidad" },
                  ]},
                  { group: "ACCIÓN", color: C.green, entities: [
                    { name: "Caso", desc: "Estado, prioridad, SLA, bitácora" },
                    { name: "NBA recomendada", desc: "Acción, canal, timing, versión" },
                    { name: "Intervención", desc: "Acción ejecutada, quién, cuándo" },
                    { name: "Outcome", desc: "Resultado, revenue, timestamp" },
                    { name: "Decision log", desc: "Regla usada, inputs, trazabilidad" },
                  ]},
                ].map((g, gi) => (
                  <div key={gi} style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, overflow: "hidden" }}>
                    <div style={{ padding: "8px 10px", background: `${g.color}08`, borderBottom: `1px solid ${C.border}` }}>
                      <div style={{ fontSize: "8px", color: g.color, fontWeight: 800, letterSpacing: "0.08em" }}>{g.group}</div>
                    </div>
                    {g.entities.map((e, ei) => (
                      <div key={ei} style={{ padding: "8px 10px", borderBottom: ei < g.entities.length - 1 ? `1px solid ${C.g100}` : "none" }}>
                        <div style={{ fontSize: "10px", fontWeight: 700 }}>{e.name}</div>
                        <div style={{ fontSize: "8px", color: C.g400 }}>{e.desc}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ marginTop: "10px", padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.accent}22` }}>
                <div style={{ fontSize: "11px", color: C.g600, lineHeight: 1.5 }}>
                  <strong style={{ color: C.accent }}>La clave:</strong> El modelo no solo almacena entidades — soporta un timeline que conecta señales → decisiones → resultados. Cada recomendación queda versionada con los inputs que se usaron para generarla.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 4. CAUSAL DIAGNOSTIC */}
        {sec === 3 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>MOTOR DE DIAGNÓSTICO CAUSAL</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                No basta con decir "riesgo alto".<br/>
                Hay que explicar <span style={{ color: C.orange, fontStyle: "italic" }}>por qué</span>.
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "16px", lineHeight: 1.5 }}>Taxonomía causal inicial con 5 categorías. Cada diagnóstico incluye: causal principal, causales secundarias, evidencias y nivel de confianza.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { causal: "Económica", signals: "Deuda, cuotas vencidas, freno en pago, alta intención previa pero sin capacidad", action: "Intervención financiera coordinada con retención: fraccionamiento, alternativas a beca, opciones de apoyo", color: C.red, pct: "42%" },
                  { causal: "Académica", signals: "Ausencias, bajo rendimiento, baja carga, desconexión del estudio, cambio de turno", action: "Soporte académico, tutoría, seguimiento preventivo, ajuste de horario", color: C.orange, pct: "23%" },
                  { causal: "Engagement", signals: "No respuesta a comunicaciones, poca actividad en LMS, intención no declarada o tibia", action: "Reenganche por canal con mayor propensión, mensaje personalizado, follow-up escalonado", color: C.blue, pct: "18%" },
                  { causal: "Experiencia / Servicio", signals: "Reclamos abiertos, fricción operativa, mala experiencia reciente, ticket sin resolver", action: "Derivación prioritaria a experiencia, contención, resolución antes de gestión de retención", color: C.purple, pct: "12%" },
                  { causal: "Mixta", signals: "Ninguna causal domina o conviven varias barreras simultáneas (como el caso Camila)", action: "Caso coordinado con owner principal y apoyo cruzado de múltiples áreas", color: C.g600, pct: "5%" },
                ].map((c, i) => (
                  <div key={i} style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, padding: "14px 16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: c.color }}>{c.causal}</div>
                      <div style={{ fontSize: "10px", fontWeight: 800, color: c.color, fontFamily: mono }}>{c.pct}</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                      <div style={{ padding: "8px", background: C.g100, borderRadius: "6px" }}>
                        <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700, marginBottom: "2px" }}>SEÑALES TÍPICAS</div>
                        <div style={{ fontSize: "9px", color: C.g600, lineHeight: 1.4 }}>{c.signals}</div>
                      </div>
                      <div style={{ padding: "8px", background: `${c.color}05`, borderRadius: "6px" }}>
                        <div style={{ fontSize: "8px", color: c.color, fontWeight: 700, marginBottom: "2px" }}>ACCIÓN INICIAL SUGERIDA</div>
                        <div style={{ fontSize: "9px", color: C.g600, lineHeight: 1.4 }}>{c.action}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={450}>
              <div style={{ marginTop: "10px", padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.orange}22` }}>
                <div style={{ fontSize: "11px", color: C.g600, lineHeight: 1.5 }}>
                  <strong style={{ color: C.orange }}>V1 usa reglas expertas + score ponderado.</strong> La sofisticación algorítmica crece después. La prioridad inicial es que el output sea útil, explicable y operacional — no un modelo de caja negra.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 5. NBA ENGINE */}
        {sec === 4 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>MOTOR NBA (NEXT BEST ACTION)</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                El corazón operativo del producto.
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "16px", lineHeight: 1.5 }}>Debe contestar con claridad: qué hacer, quién debe hacerlo, por qué, cuándo y por qué canal.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "12px" }}>
                <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "12px" }}>7 VARIABLES QUE CONSIDERA EL MOTOR</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                  {[
                    { variable: "Causal principal", role: "Define la naturaleza del caso y el equipo líder", icon: "🔍" },
                    { variable: "Score y urgencia", role: "Determinan prioridad y timing de intervención", icon: "🎯" },
                    { variable: "Historial de canal", role: "Prioriza el canal con mejor respuesta esperada", icon: "📱" },
                    { variable: "Intención previa", role: "Modula la agresividad o tono del seguimiento", icon: "💬" },
                    { variable: "Saturación de contacto", role: "Evita sobrecontacto y fricción con el alumno", icon: "🚦" },
                    { variable: "Capacidad operativa", role: "Distribuye carga y asigna dueños disponibles", icon: "👥" },
                    { variable: "Fecha crítica", role: "Ajusta prioridad según vencimientos o hitos", icon: "📅" },
                  ].map((v, i) => (
                    <div key={i} style={{ padding: "8px 10px", background: C.g100, borderRadius: "6px", display: "flex", gap: "8px", alignItems: "start" }}>
                      <span style={{ fontSize: "12px", flexShrink: 0 }}>{v.icon}</span>
                      <div>
                        <div style={{ fontSize: "10px", fontWeight: 700 }}>{v.variable}</div>
                        <div style={{ fontSize: "9px", color: C.g500 }}>{v.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
                <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "12px" }}>OUTPUT DEL MOTOR NBA</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "10px" }}>
                  {[
                    { field: "Acción", example: "Fraccionamiento + cambio de horario", color: C.green },
                    { field: "Owner", example: "Cobranzas → luego Contact Center", color: C.orange },
                    { field: "Canal", example: "WhatsApp (89% apertura)", color: C.cyan },
                    { field: "Timing", example: "Lunes 10AM (mayor tasa respuesta)", color: C.blue },
                    { field: "Mensaje", example: "Personalizado con datos del alumno", color: C.purple },
                    { field: "Escalamiento", example: "Si no responde 48h → llamada con ficha", color: C.red },
                  ].map((f, i) => (
                    <div key={i} style={{ padding: "10px", background: `${f.color}05`, borderRadius: "6px", border: `1px solid ${f.color}10` }}>
                      <div style={{ fontSize: "8px", color: f.color, fontWeight: 700 }}>{f.field}</div>
                      <div style={{ fontSize: "10px", color: C.g700, marginTop: "2px" }}>{f.example}</div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: "10px", background: C.greenBg, borderRadius: "6px" }}>
                  <div style={{ fontSize: "10px", color: C.greenDk, lineHeight: 1.5 }}>
                    <strong>Trazabilidad:</strong> Cada recomendación se registra con la versión de reglas que la generó, los inputs que se usaron, y el resultado final. Esto permite auditar, aprender y mejorar.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 6. AUTONOMY LEVELS */}
        {sec === 5 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>NIVELES DE AUTONOMÍA</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                Autonomía acotada y segura.<br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>El humano siempre tiene control.</span>
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "18px", lineHeight: 1.5 }}>Definir qué hace solo el sistema vs qué necesita aprobación humana es clave para la adopción institucional.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { level: "AUTÓNOMO", color: C.green, desc: "El sistema ejecuta sin intervención humana", items: [
                    "Crear y asignar tareas automáticamente",
                    "Recalcular score cuando llega nueva data",
                    "Priorizar la cola de trabajo diaria",
                    "Resumir casos y generar fichas para equipos",
                    "Alertar sobre conflictos inter-áreas",
                    "Generar borradores de mensaje personalizados",
                    "Detectar sobrecontacto y bloquear envíos",
                  ]},
                  { level: "HUMAN-IN-THE-LOOP", color: C.orange, desc: "El sistema recomienda, el humano aprueba", items: [
                    "Aprobar acciones sensibles antes de ejecutar",
                    "Validar derivaciones complejas entre áreas",
                    "Ajustar owner en casos ambiguos o escalados",
                    "Modificar el mensaje antes del envío",
                    "Cambiar la acción prescrita por otra del catálogo",
                    "Agregar contexto cualitativo que la data no captura",
                  ]},
                  { level: "NO AUTÓNOMO (V1)", color: C.red, desc: "Requiere decisión humana completa — el sistema solo informa", items: [
                    "Otorgar descuentos o condonaciones",
                    "Cerrar decisiones financieras complejas",
                    "Intervenir en temas sensibles (bienestar, legal)",
                    "Modificar reglas globales del motor NBA",
                    "Desactivar o crear nuevas acciones en el catálogo",
                  ]},
                ].map((l, i) => (
                  <div key={i} style={{ background: C.card, borderRadius: "12px", border: `1px solid ${l.color}22`, padding: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <div style={{ padding: "3px 8px", background: l.color, borderRadius: "4px", fontSize: "8px", fontWeight: 800, color: "white", fontFamily: mono }}>{l.level}</div>
                      <span style={{ fontSize: "11px", color: C.g500 }}>{l.desc}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px" }}>
                      {l.items.map((item, j) => (
                        <div key={j} style={{ fontSize: "10px", color: C.g600, padding: "3px 0", display: "flex", gap: "4px" }}>
                          <span style={{ color: l.color, fontSize: "8px", marginTop: "3px" }}>●</span> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* 7. MVP 90 DAYS */}
        {sec === 6 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>PLAN DE CONSTRUCCIÓN</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                MVP en 90 días.<br/>5 bloques de 2 semanas.
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "16px", lineHeight: 1.5 }}>El criterio de éxito no es "muchas features" sino que un equipo real pueda operar con menos fricción y demostrar mejora medible.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
                {[
                  { weeks: "Sem 1-2", title: "Arquitectura y diseño", deliverable: "Modelo de datos, taxonomía causal, reglas NBA v1, diseño de pantallas principales", color: C.purple },
                  { weeks: "Sem 3-5", title: "Core engine", deliverable: "Ingesta de fuentes, perfil 360, score v1, creación de caso y dashboard básico", color: "#6366F1" },
                  { weeks: "Sem 6-8", title: "Operación", deliverable: "Cola priorizada del asesor, registro de acciones, owner, estados y reporting inicial", color: C.orange },
                  { weeks: "Sem 9-10", title: "Outcomes y ROI", deliverable: "Captura de resultados, revenue recuperado, QA funcional y ajustes de UX", color: C.green },
                  { weeks: "Sem 11-12", title: "Piloto y refinamiento", deliverable: "Piloto controlado con cohorte real, refinamiento de reglas y demo comercial", color: C.cyan },
                ].map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "start", padding: "12px 14px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}` }}>
                    <div style={{ padding: "4px 8px", background: b.color, borderRadius: "4px", fontSize: "8px", fontWeight: 800, color: "white", fontFamily: mono, flexShrink: 0, minWidth: "55px", textAlign: "center" }}>{b.weeks}</div>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: b.color }}>{b.title}</div>
                      <div style={{ fontSize: "10px", color: C.g500, lineHeight: 1.4, marginTop: "2px" }}>{b.deliverable}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              {/* Timeline bar */}
              <div style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, padding: "14px" }}>
                <div style={{ display: "flex", gap: "2px", marginBottom: "6px" }}>
                  {[
                    { w: "17%", c: C.purple }, { w: "25%", c: "#6366F1" }, { w: "25%", c: C.orange },
                    { w: "17%", c: C.green }, { w: "16%", c: C.cyan },
                  ].map((p, i) => (
                    <div key={i} style={{ width: p.w, height: "8px", background: p.c, borderRadius: "4px" }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "8px", color: C.g400 }}>
                  <span>Sem 1</span><span>Sem 3</span><span>Sem 6</span><span>Sem 9</span><span>Sem 11</span><span>Sem 12</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ marginTop: "10px", padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.green}22` }}>
                <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, marginBottom: "4px" }}>ROADMAP POST-MVP (12 MESES)</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "3px" }}>
                  {[
                    { f: "F1", title: "Decision Intelligence", desc: "Score, causal, NBA, cola, outcomes", c: C.accent },
                    { f: "F2", title: "Orquestación", desc: "Control de conflictos y carga operativa", c: C.orange },
                    { f: "F3", title: "Automatización", desc: "Tareas y secuencias de bajo riesgo", c: C.green },
                    { f: "F4", title: "Aprendizaje", desc: "Ranking NBA por efectividad", c: C.cyan },
                    { f: "F5", title: "Expansión", desc: "Primer ciclo, reingreso, empleabilidad", c: C.purple },
                  ].map((f, i) => (
                    <div key={i} style={{ padding: "8px 6px", background: `${f.c}05`, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: f.c, fontWeight: 800, fontFamily: mono }}>{f.f}</div>
                      <div style={{ fontSize: "8px", fontWeight: 700, marginTop: "2px" }}>{f.title}</div>
                      <div style={{ fontSize: "7px", color: C.g500, marginTop: "1px" }}>{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 8. ARCHITECTURE */}
        {sec === 7 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: "#6366F1", fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>STACK TÉCNICO</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "6px" }}>
                Optimizado para velocidad de<br/>construcción, no para complejidad.
              </h2>
              <p style={{ fontSize: "12px", color: C.g500, marginBottom: "16px", lineHeight: 1.5 }}>En V1 importa más tener un sistema robusto y entendible que una pila excesivamente sofisticada.</p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "14px" }}>
                {[
                  { layer: "Backend", tech: "Python + FastAPI", why: "Rápido de construir, bien documentado, ecosystem ML nativo", color: C.green },
                  { layer: "Base de datos", tech: "PostgreSQL / Supabase", why: "Relacional, gratis para piloto, auth incluido, real-time", color: C.blue },
                  { layer: "Frontend", tech: "React / Next.js", why: "Ecosystem grande, fácil de iterar, SSR para SEO", color: C.cyan },
                  { layer: "Procesamiento", tech: "Jobs batch + workers", why: "Cálculo de scores y sincronización de fuentes en background", color: C.orange },
                  { layer: "Auth", tech: "Supabase Auth + roles", why: "Multi-institución, permisos por perfil, sin construir desde cero", color: C.purple },
                  { layer: "IA / LLM", tech: "Uso acotado", why: "Resúmenes, explicación natural, asistencia al asesor — NO como núcleo del score", color: C.accent },
                ].map((t, i) => (
                  <div key={i} style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: "9px", color: t.color, fontWeight: 700, marginBottom: "4px" }}>{t.layer}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "2px" }}>{t.tech}</div>
                    <div style={{ fontSize: "9px", color: C.g500, lineHeight: 1.4 }}>{t.why}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "12px" }}>
                <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "10px" }}>RIESGOS CRÍTICOS Y MITIGACIONES</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                  {[
                    { risk: "Calidad de datos", mitigation: "Validaciones, data contracts, score de completitud, graceful degradation", color: C.red },
                    { risk: "Adopción del equipo", mitigation: "UX simple, valor claro para asesor, captura rápida de resultados", color: C.orange },
                    { risk: "Sobrepromesa de IA", mitigation: "V1 = decision intelligence + orchestration, no 'autonomía total'", color: C.purple },
                    { risk: "Integraciones lentas", mitigation: "Iniciar con batch exports antes de integraciones profundas", color: C.blue },
                    { risk: "Sesgo o decisiones opacas", mitigation: "Explicabilidad, trazabilidad, reglas claras, revisión humana", color: C.accent },
                    { risk: "Confianza institucional", mitigation: "Gobierno desde día 1: versión de reglas, permisos, logs, aprobación humana", color: C.green },
                  ].map((r, i) => (
                    <div key={i} style={{ padding: "8px 10px", background: C.g100, borderRadius: "6px" }}>
                      <div style={{ fontSize: "9px", color: r.color, fontWeight: 700, marginBottom: "2px" }}>{r.risk}</div>
                      <div style={{ fontSize: "9px", color: C.g500, lineHeight: 1.3 }}>{r.mitigation}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={550}>
              <div style={{ padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.green}22` }}>
                <div style={{ fontSize: "12px", color: C.g600, lineHeight: 1.6 }}>
                  <strong style={{ color: C.dark }}>Conclusión:</strong> Persistia tiene una tesis potente porque nace de un dolor real y de experiencia operativa real. El salto necesario es convertir ese conocimiento en un producto que detecte, explique, coordine y demuestre resultados. Si logra ese paso con foco, puede convertirse en una pieza central del stack de universidades privadas de LATAM.
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => nav(-1)} disabled={sec === 0} style={{ padding: "7px 16px", background: sec === 0 ? C.g100 : C.card, border: `1px solid ${C.border}`, borderRadius: "7px", cursor: sec === 0 ? "default" : "pointer", fontSize: "11px", fontWeight: 600, color: sec === 0 ? C.g400 : C.dark, opacity: sec === 0 ? 0.4 : 1 }}>←</button>
          <span style={{ fontSize: "10px", color: C.g500 }}>{sec + 1}/{SECS.length} · {LABS[sec]}</span>
          <button onClick={() => nav(1)} disabled={sec === SECS.length - 1} style={{ padding: "7px 16px", background: sec === SECS.length - 1 ? C.g100 : C.accent, border: "none", borderRadius: "7px", cursor: sec === SECS.length - 1 ? "default" : "pointer", fontSize: "11px", fontWeight: 700, color: sec === SECS.length - 1 ? C.g400 : "white", opacity: sec === SECS.length - 1 ? 0.4 : 1 }}>→</button>
        </div>
      </div>
    </div>
  );
}
