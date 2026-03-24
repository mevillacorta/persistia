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

export default function Slide4() {
  const [step, setStep] = useState(0);
  const [showScript, setShowScript] = useState(false);
  const [typed, setTyped] = useState(0);

  const script = `Hola Camila 👋 Soy Ana del equipo de acompañamiento.\n\nVi que ya llevas 82 créditos en Administración — estás casi en la mitad de tu carrera.\n\nQuiero contarte que encontramos opciones de horarios nocturnos para los cursos que necesitas, y tenemos un plan de facilidades para regularizar tu situación financiera.\n\nTambién hay otras alternativas de apoyo económico que podríamos revisar juntas. ¿Tienes 5 minutos?`;

  useEffect(() => {
    if (showScript && typed < script.length) {
      const t = setTimeout(() => setTyped(c => c + 2), 12);
      return () => clearTimeout(t);
    }
  }, [showScript, typed]);

  useEffect(() => { setTyped(0); setShowScript(false); }, [step]);

  const steps = [
    {
      id: "detect",
      label: "El agente detecta",
      icon: "📡",
      color: "#6366F1",
      content: (
        <div>
          <p style={{ fontSize: "12px", color: C.g500, marginBottom: "12px", lineHeight: 1.6 }}>
            Estamos en período interciclo. Camila terminó el 5to ciclo pero no se ha matriculado. El agente cruza todas las fuentes y arma su perfil completo:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "10px" }}>
            {[
              { source: "Cobranzas / ERP", signal: "Debe 2 cuotas del ciclo que terminó", c: C.red },
              { source: "Sistema de matrícula", signal: "No se ha matriculado — el plazo se acerca", c: C.orange },
              { source: "CRM / Reclamos", signal: "Reclamo abierto: no encuentra cursos disponibles en su horario", c: C.purple },
              { source: "Becas", signal: "Postuló a beca y se la negaron", c: C.blue },
              { source: "Comunicaciones", signal: "No ha contestado ninguna comunicación de rematrícula", c: "#6366F1" },
              { source: "Sistema académico", signal: "Rendimiento bajó el último ciclo (promedio cayó de 14.8 a 12.3)", c: C.orange },
            ].map((s, i) => (
              <div key={i} style={{ padding: "10px 12px", background: `${s.c}05`, borderRadius: "8px", border: `1px solid ${s.c}12` }}>
                <div style={{ fontSize: "9px", color: s.c, fontWeight: 700, marginBottom: "3px" }}>{s.source}</div>
                <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.4 }}>{s.signal}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: "10px 14px", background: C.g100, borderRadius: "8px", marginBottom: "8px" }}>
            <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
              <strong style={{ color: "#6366F1" }}>Dato que conecta todo:</strong> Secretaría académica registra que Camila inscribió sus prácticas pre-profesionales + solicitó cambio de turno diurno a nocturno el ciclo pasado. <strong>Empezó a trabajar.</strong> Eso explica la caída de notas, la deuda, y la búsqueda de horarios que no encuentra.
            </div>
          </div>
          <div style={{ padding: "10px 14px", background: `${C.red}08`, borderRadius: "8px", borderLeft: `3px solid ${C.red}` }}>
            <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
              <strong style={{ color: C.red }}>Lo que nadie ve hoy:</strong> Cada equipo tiene su pedazo — cobranzas ve la deuda, reclamos ve el ticket, becas ve el rechazo, matrícula ve que no se inscribió. <strong>Nadie conecta que es la misma alumna con el mismo problema de fondo.</strong>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "strategy",
      label: "Qué ve Estrategia",
      icon: "🧠",
      color: C.accent,
      content: (
        <div>
          <p style={{ fontSize: "12px", color: C.g500, marginBottom: "12px", lineHeight: 1.6 }}>
            Estrategia tiene tres vistas: el caso individual, el panorama agregado, y el catálogo de acciones que configura.
          </p>

          {/* VISTA INDIVIDUAL */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px" }}>👩‍🎓</span>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.06em" }}>VISTA INDIVIDUAL — CAMILA ROJAS</div>
            </div>
            <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.7, marginBottom: "12px" }}>
              Riesgo crítico de no rematricularse. Acumula 6 señales: deuda, reclamo, beca negada, baja de notas, no contesta y no se ha matriculado. Causa raíz: empezó a trabajar — necesita horarios nocturnos y resolver la parte financiera. 82 créditos aprobados. Valor en juego: S/ 32,400.
            </div>

            <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "6px" }}>ACCIÓN RECOMENDADA POR EL AGENTE</div>
            <div style={{ padding: "10px 12px", background: C.greenBg, borderRadius: "8px", borderLeft: `3px solid ${C.green}`, marginBottom: "8px" }}>
              <div style={{ fontSize: "12px", color: C.greenDk, fontWeight: 700, marginBottom: "4px" }}>Resolver reclamo de horarios + fraccionamiento de deuda + alternativas a beca</div>
              <div style={{ fontSize: "10px", color: C.g500 }}>Canal: WhatsApp · Timing: Lunes 10AM · Escalamiento: coordinador a 48h</div>
            </div>

            <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "6px" }}>✏️ ESTRATEGIA PUEDE MODIFICAR</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
              {[
                { field: "Acción", current: "Fraccionamiento + horarios", edit: "Cambiar por otra acción del catálogo" },
                { field: "Canal", current: "WhatsApp", edit: "Cambiar a llamada, email u otro" },
                { field: "Mensaje", current: "Personalizado por el agente", edit: "Editar texto, tono o contenido" },
                { field: "Prioridad", current: "Alta — 6 señales", edit: "Subir, bajar o pausar la gestión" },
              ].map((f, i) => (
                <div key={i} style={{ padding: "8px 10px", background: C.g100, borderRadius: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "9px", color: C.g400, fontWeight: 700 }}>{f.field}</span>
                    <span style={{ fontSize: "8px", color: C.accent }}>editable</span>
                  </div>
                  <div style={{ fontSize: "10px", color: C.g700, marginTop: "2px" }}>{f.current}</div>
                  <div style={{ fontSize: "8px", color: C.g400, fontStyle: "italic", marginTop: "1px" }}>{f.edit}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "8px 12px", background: `${C.orange}08`, borderRadius: "6px", borderLeft: `3px solid ${C.orange}` }}>
              <div style={{ fontSize: "10px", color: C.g700, lineHeight: 1.5 }}>
                <strong style={{ color: C.orange }}>También puede agregar contexto humano:</strong> "Conozco a esta alumna — su papá vino la semana pasada a preguntar. Priorizar llamada personal del coordinador." Información que solo un humano tiene.
              </div>
            </div>
          </div>

          {/* VISTA AGREGADA */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px" }}>📊</span>
              <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.06em" }}>VISTA AGREGADA — PANORAMA COMPLETO</div>
            </div>
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "10px", lineHeight: 1.5 }}>
              El agente analiza a los 200K alumnos simultáneamente. Estrategia ve el panorama completo y puede tomar decisiones sobre segmentos enteros:
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px", marginBottom: "10px" }}>
              {[
                { label: "En riesgo", value: "2,340", color: C.red },
                { label: "Con acción prescrita", value: "1,890", color: C.orange },
                { label: "Pendientes aprobación", value: "450", color: C.accent },
                { label: "Gestionados esta semana", value: "1,230", color: C.green },
              ].map((m, i) => (
                <div key={i} style={{ padding: "8px", background: C.g100, borderRadius: "6px", textAlign: "center" }}>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: m.color, fontFamily: "'DM Mono', monospace" }}>{m.value}</div>
                  <div style={{ fontSize: "7px", color: C.g500, marginTop: "2px" }}>{m.label}</div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: "9px", color: C.purple, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "6px" }}>SEGMENTOS DETECTADOS POR EL AGENTE</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "10px" }}>
              {[
                { segment: "Deuda + reclamo abierto", count: "890", pct: "38%", action: "Resolver reclamo antes de cobrar", color: C.red },
                { segment: "Beca negada + no matriculados", count: "320", pct: "14%", action: "Ofrecer alternativas financieras", color: C.purple },
                { segment: "Cambio de turno + baja de notas", count: "540", pct: "23%", action: "Acompañamiento + horario flexible", color: C.orange },
                { segment: "Sin señales negativas + no matriculados", count: "590", pct: "25%", action: "Recordatorio + guía matrícula express", color: C.blue },
              ].map((seg, i) => (
                <div key={i} style={{ padding: "8px 10px", background: `${seg.color}05`, borderRadius: "6px", border: `1px solid ${seg.color}10`, display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ width: "36px", textAlign: "center", flexShrink: 0 }}>
                    <div style={{ fontSize: "12px", fontWeight: 800, color: seg.color, fontFamily: "'DM Mono', monospace" }}>{seg.pct}</div>
                    <div style={{ fontSize: "7px", color: C.g400 }}>{seg.count}</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "10px", fontWeight: 700, color: C.g700 }}>{seg.segment}</div>
                    <div style={{ fontSize: "9px", color: C.g500 }}>Acción sugerida: {seg.action}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "6px" }}>INSIGHTS QUE EL AGENTE ENCUENTRA EN LA DATA</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
              {[
                { label: "Patrón", insight: "Alumnos que pidieron cambio de turno y tienen deuda tienen 4x más probabilidad de no rematricularse que los que solo tienen deuda", color: C.purple },
                { label: "Oportunidad", insight: "Los de 4to+ ciclo con deuda < 3 cuotas responden 3x mejor a fraccionamiento que a cobro directo", color: C.green },
                { label: "Alerta", insight: "El segmento beca negada + no matriculados creció 45% vs el ciclo anterior — posible problema sistémico en el proceso de becas", color: C.red },
                { label: "Quick win", insight: "590 alumnos sin señales negativas no se matricularon — un recordatorio simple podría recuperar el 60% sin esfuerzo", color: C.blue },
              ].map((ins, i) => (
                <div key={i} style={{ padding: "8px 10px", background: `${ins.color}05`, borderRadius: "6px", border: `1px solid ${ins.color}12` }}>
                  <div style={{ fontSize: "8px", color: ins.color, fontWeight: 700, marginBottom: "3px" }}>{ins.label}</div>
                  <div style={{ fontSize: "9px", color: C.g700, lineHeight: 1.4 }}>{ins.insight}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CATÁLOGO DE ACCIONES */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px" }}>⚙️</span>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.06em" }}>CATÁLOGO DE ACCIONES — LO CONFIGURA ESTRATEGIA</div>
            </div>
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "10px", lineHeight: 1.5 }}>
              Estrategia define qué acciones existen, para qué perfil aplican, y por qué canales. El agente solo puede recomendar lo que estrategia tiene habilitado.
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "8px" }}>
              {[
                { action: "Fraccionamiento de deuda", status: "Activa", channels: "WhatsApp, Llamada", color: C.green },
                { action: "Cambio de horario/turno", status: "Activa", channels: "WhatsApp, Coordinador", color: C.green },
                { action: "Alternativas a beca", status: "Activa", channels: "Llamada, Email", color: C.green },
                { action: "Guía de matrícula express", status: "Activa", channels: "WhatsApp, SMS", color: C.green },
                { action: "Condonación parcial", status: "Deshabilitada", channels: "—", color: C.g400 },
                { action: "Descuento por pronto pago", status: "Solo CIB", channels: "WhatsApp", color: C.orange },
              ].map((a, i) => (
                <div key={i} style={{
                  padding: "8px 10px", borderRadius: "5px",
                  background: a.status === "Deshabilitada" ? C.g100 : `${a.color}05`,
                  border: `1px solid ${a.status === "Deshabilitada" ? C.g200 : a.color + "15"}`,
                  opacity: a.status === "Deshabilitada" ? 0.6 : 1,
                }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: a.status === "Deshabilitada" ? C.g400 : C.g700, textDecoration: a.status === "Deshabilitada" ? "line-through" : "none" }}>{a.action}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2px" }}>
                    <span style={{ fontSize: "8px", color: a.color, fontWeight: 600 }}>{a.status}</span>
                    <span style={{ fontSize: "8px", color: C.g400 }}>{a.channels}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "8px 10px", background: `${C.orange}08`, borderRadius: "6px", borderLeft: `3px solid ${C.orange}` }}>
              <div style={{ fontSize: "9px", color: C.g700, lineHeight: 1.5 }}>
                <strong style={{ color: C.orange }}>Estrategia controla las reglas del juego.</strong> Puede activar, desactivar o crear nuevas acciones. Si aparece una oferta comercial o una política cambia, se actualiza el catálogo y el agente se adapta inmediatamente.
              </div>
            </div>
          </div>

          {/* Key message */}
          <div style={{ padding: "12px 14px", background: `${C.accent}08`, borderRadius: "8px", borderLeft: `3px solid ${C.accent}` }}>
            <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.accent }}>Estrategia pasa de ejecutar a dirigir.</strong> Ya no arma bases ni cruza data todos los días. Revisa diagnósticos, aprueba o ajusta recomendaciones, descubre patrones en la data agregada, configura las reglas del juego, y diseña nuevas acciones. El trabajo estratégico que siempre quiso hacer pero no tenía tiempo.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "comms",
      label: "Qué ve Comunicaciones",
      icon: "✍️",
      color: C.cyan,
      content: (
        <div>
          <p style={{ fontSize: "12px", color: C.g500, marginBottom: "12px", lineHeight: 1.6 }}>
            Comunicaciones tiene dos niveles: campañas por segmento de riesgo/oportunidad, y mensajes personalizados por alumno.
          </p>

          {/* VISTA POR SEGMENTOS */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px" }}>📢</span>
              <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.06em" }}>VISTA POR SEGMENTOS — CAMPAÑAS AGRUPADAS</div>
            </div>
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "10px", lineHeight: 1.5 }}>
              El agente agrupa a los alumnos por tipo de riesgo/oportunidad y propone la comunicación para cada segmento. Comunicaciones ajusta el tono, la pieza y los canales.
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "10px" }}>
              {[
                { 
                  segment: "Deuda + reclamo abierto",
                  count: "890 alumnos",
                  tone: "Empático — resolver primero, cobrar después",
                  message: "Sabemos que tienes un tema pendiente. Queremos ayudarte a resolverlo para que puedas continuar.",
                  channels: "WhatsApp → Llamada",
                  color: C.red,
                },
                { 
                  segment: "Beca negada + no matriculados",
                  count: "320 alumnos",
                  tone: "Propositivo — hay otras opciones",
                  message: "La beca no salió, pero hay otras alternativas de apoyo que podemos revisar contigo.",
                  channels: "Email → WhatsApp",
                  color: C.purple,
                },
                { 
                  segment: "Sin señales negativas + no matriculados",
                  count: "590 alumnos",
                  tone: "Directo — recordatorio con guía",
                  message: "El plazo de matrícula se acerca. Tu horario está listo — matricúlate en 3 pasos.",
                  channels: "SMS → WhatsApp",
                  color: C.blue,
                },
              ].map((seg, i) => (
                <div key={i} style={{ padding: "12px", background: `${seg.color}05`, borderRadius: "8px", border: `1px solid ${seg.color}12` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: C.g700 }}>{seg.segment}</div>
                    <span style={{ fontSize: "9px", color: seg.color, fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>{seg.count}</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "6px" }}>
                    <div style={{ padding: "6px 8px", background: "white", borderRadius: "4px" }}>
                      <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700 }}>TONO SUGERIDO</div>
                      <div style={{ fontSize: "9px", color: C.g700, marginTop: "1px" }}>{seg.tone}</div>
                    </div>
                    <div style={{ padding: "6px 8px", background: "white", borderRadius: "4px" }}>
                      <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700 }}>SECUENCIA DE CANALES</div>
                      <div style={{ fontSize: "9px", color: C.g700, marginTop: "1px" }}>{seg.channels}</div>
                    </div>
                  </div>
                  <div style={{ padding: "6px 8px", background: "white", borderRadius: "4px" }}>
                    <div style={{ fontSize: "8px", color: seg.color, fontWeight: 700 }}>MENSAJE BASE SUGERIDO</div>
                    <div style={{ fontSize: "9px", color: C.g700, fontStyle: "italic", marginTop: "1px", lineHeight: 1.4 }}>"{seg.message}"</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "8px 12px", background: `${C.cyan}08`, borderRadius: "6px", borderLeft: `3px solid ${C.cyan}` }}>
              <div style={{ fontSize: "10px", color: C.g700, lineHeight: 1.5 }}>
                <strong style={{ color: C.cyan }}>Comunicaciones ajusta cada campaña:</strong> edita el mensaje, cambia el tono, elige las piezas gráficas y aprueba antes de lanzar. El agente propone la base — el equipo le da la identidad de marca.
              </div>
            </div>
          </div>

          {/* VISTA INDIVIDUAL */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span style={{ fontSize: "12px" }}>👩‍🎓</span>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.06em" }}>VISTA INDIVIDUAL — MENSAJE PARA CAMILA</div>
            </div>
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "10px", lineHeight: 1.5 }}>
              Dentro del segmento "Deuda + reclamo", el agente personaliza el mensaje para Camila usando sus datos específicos: sus créditos, su reclamo de horarios, su beca negada.
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ fontSize: "9px", color: C.g400, background: C.g100, padding: "2px 8px", borderRadius: "4px" }}>WhatsApp · Lunes 10AM · Personalizado</span>
            </div>
            {!showScript ? (
              <button onClick={() => setShowScript(true)} style={{
                width: "100%", padding: "12px", background: C.greenBg, border: `1px dashed ${C.green}`,
                borderRadius: "8px", cursor: "pointer", fontSize: "12px", fontWeight: 700, color: C.green,
              }}>📝 Ver el mensaje personalizado de Camila</button>
            ) : (
              <div style={{ padding: "12px", background: C.greenBg, borderRadius: "8px", borderLeft: `3px solid ${C.green}` }}>
                <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.7, whiteSpace: "pre-wrap" }}>
                  {script.slice(0, typed)}
                  {typed < script.length && <span style={{ animation: "pulse 0.8s infinite" }}>|</span>}
                </div>
              </div>
            )}
            <div style={{ marginTop: "8px", padding: "8px 10px", background: C.g100, borderRadius: "6px" }}>
              <div style={{ fontSize: "9px", color: C.g500, lineHeight: 1.5 }}>
                <strong style={{ color: C.g700 }}>890 alumnos en este segmento.</strong> Cada uno recibe un mensaje distinto porque sus datos son distintos — pero todos siguen la misma estructura y tono que comunicaciones aprobó para el segmento.
              </div>
            </div>
          </div>

          {/* Key message */}
          <div style={{ padding: "10px 14px", background: `${C.cyan}08`, borderRadius: "8px", borderLeft: `3px solid ${C.cyan}` }}>
            <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.cyan }}>Comunicaciones pasa de crear templates genéricos a dirigir campañas inteligentes.</strong> Define el tono y la estrategia por segmento, y el agente personaliza cada mensaje individual. Escala sin perder calidad ni identidad de marca.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "cobranzas",
      label: "Qué ve Cobranzas",
      icon: "💰",
      color: C.red,
      content: (
        <div>
          <p style={{ fontSize: "12px", color: C.g500, marginBottom: "12px", lineHeight: 1.6 }}>
            Camila tiene deuda de 2 cuotas. Cobranzas la gestiona primero — pero ahora con el contexto completo, no solo el monto.
          </p>

          {/* What cobranzas sees today vs with agent */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "8px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
              <div style={{ padding: "10px 12px", background: C.g100, borderRadius: "8px", borderLeft: `3px solid ${C.g200}` }}>
                <div style={{ fontSize: "9px", color: C.g400, fontWeight: 700, marginBottom: "4px" }}>HOY COBRANZAS VE</div>
                <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>Camila Rojas. Debe 2 cuotas. Monto: S/ 2,700. Acción: cobrar.</div>
                <div style={{ fontSize: "9px", color: C.red, marginTop: "4px", fontStyle: "italic" }}>No sabe nada más.</div>
              </div>
              <div style={{ padding: "10px 12px", background: C.greenBg, borderRadius: "8px", borderLeft: `3px solid ${C.green}` }}>
                <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, marginBottom: "4px" }}>CON EL AGENTE VE</div>
                <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>Debe 2 cuotas PERO empezó a trabajar, tiene reclamo por horarios, le negaron beca, bajaron sus notas. Es recuperable si se ofrece facilidad integral.</div>
              </div>
            </div>

            <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>FICHA DE GESTIÓN PARA COBRANZAS</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "8px" }}>
              {[
                { field: "Acción sugerida", value: "Fraccionamiento en 3 cuotas sin interés — NO cobro directo estándar", color: C.green },
                { field: "Contexto crítico", value: "Tiene reclamo abierto por horarios + beca negada. Si solo le cobras, se va.", color: C.red },
                { field: "Oportunidad", value: "82 créditos aprobados — alto valor de retención. Vale la pena la facilidad.", color: C.accent },
                { field: "Después de habilitar", value: "Pasa automáticamente a flujo de Contact Center para gestión de rematrícula", color: C.orange },
              ].map((f, i) => (
                <div key={i} style={{ padding: "8px 10px", background: `${f.color}05`, borderRadius: "6px", border: `1px solid ${f.color}12` }}>
                  <div style={{ fontSize: "8px", color: f.color, fontWeight: 700, marginBottom: "2px" }}>{f.field}</div>
                  <div style={{ fontSize: "10px", color: C.g700, lineHeight: 1.4 }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cobranzas also sees segments */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px" }}>📊</span>
              <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.06em" }}>VISTA AGREGADA DE COBRANZAS</div>
            </div>
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "8px", lineHeight: 1.5 }}>
              El agente también le muestra a cobranzas cómo segmentar su cartera con inteligencia:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                { segment: "Deuda + reclamo activo", count: "340", action: "Resolver reclamo primero, luego ofrecer facilidad", color: C.red },
                { segment: "Deuda + beca en proceso/negada", count: "180", action: "Esperar resolución beca / ofrecer alternativa financiera", color: C.purple },
                { segment: "Deuda simple sin otras señales", count: "520", action: "Gestión estándar de cobro", color: C.blue },
                { segment: "Deuda + alumno ya en gestión de retención", count: "210", action: "No gestionar — retención está trabajando", color: C.orange },
              ].map((seg, i) => (
                <div key={i} style={{ padding: "8px 10px", background: `${seg.color}05`, borderRadius: "6px", border: `1px solid ${seg.color}10`, display: "flex", alignItems: "center", gap: "8px" }}>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: seg.color, fontFamily: "'DM Mono', monospace", width: "30px", flexShrink: 0, textAlign: "center" }}>{seg.count}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "10px", fontWeight: 700, color: C.g700 }}>{seg.segment}</div>
                    <div style={{ fontSize: "9px", color: C.g500 }}>{seg.action}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: `${C.red}08`, borderRadius: "8px", borderLeft: `3px solid ${C.red}` }}>
            <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.red }}>Cobranzas pasa de cobrar a ciegas a gestionar con inteligencia.</strong> Sabe cuándo cobrar, cuándo ofrecer facilidad, y cuándo no tocar al alumno porque otro equipo ya lo está trabajando. Menos fricciones, más habilitaciones.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "contact",
      label: "Qué ve Contact Center",
      icon: "📞",
      color: C.orange,
      content: (
        <div>
          <p style={{ fontSize: "12px", color: C.g500, marginBottom: "12px", lineHeight: 1.6 }}>
            Cobranzas habilitó a Camila con fraccionamiento. Ahora Contact Center recibe su caso para gestionar la rematrícula — con todo el contexto de lo que ya pasó.
          </p>

          <div style={{ background: "white", borderRadius: "12px", border: `2px solid ${C.orange}`, overflow: "hidden", marginBottom: "8px" }}>
            <div style={{ background: C.orange, padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "white", fontWeight: 800, fontSize: "12px" }}>📋 Ficha de Camila Rojas</span>
              <span style={{ background: "white", color: C.orange, padding: "2px 8px", borderRadius: "4px", fontSize: "9px", fontWeight: 800 }}>REMATRÍCULA</span>
            </div>
            <div style={{ padding: "14px 16px" }}>
              {/* Timeline of what already happened */}
              <div style={{ fontSize: "9px", color: C.accent, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>LO QUE YA PASÓ CON CAMILA</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "12px" }}>
                {[
                  { when: "Hace 5 días", what: "Cobranzas le ofreció fraccionamiento en 3 cuotas — aceptó", color: C.green },
                  { when: "Hace 3 días", what: "Se resolvió su reclamo — hay horarios nocturnos disponibles para sus cursos", color: C.green },
                  { when: "Hace 2 días", what: "Recibió WhatsApp con opciones de horario — lo abrió pero no respondió", color: C.orange },
                  { when: "Hoy", what: "El agente escala a Contact Center para seguimiento por llamada", color: C.accent },
                ].map((ev, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", alignItems: "start" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: ev.color, marginTop: "5px", flexShrink: 0 }} />
                    <div>
                      <span style={{ fontSize: "8px", color: C.g400, fontFamily: "'DM Mono', monospace" }}>{ev.when}</span>
                      <div style={{ fontSize: "10px", color: C.g700, lineHeight: 1.4 }}>{ev.what}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "10px" }}>
                <div style={{ padding: "8px 10px", background: C.g100, borderRadius: "6px" }}>
                  <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700 }}>OBJETIVO DE LA LLAMADA</div>
                  <div style={{ fontSize: "11px", color: C.g700, marginTop: "2px" }}>Confirmar que vio los horarios nocturnos y guiarla para completar su rematrícula ahora.</div>
                </div>
                <div style={{ padding: "8px 10px", background: C.greenBg, borderRadius: "6px" }}>
                  <div style={{ fontSize: "8px", color: C.green, fontWeight: 700 }}>CONTEXTO CLAVE</div>
                  <div style={{ fontSize: "11px", color: C.g700, marginTop: "2px" }}>Ya tiene deuda resuelta (fraccionamiento). Ya tiene horarios disponibles. Solo falta que se matricule.</div>
                </div>
              </div>

              <div style={{ padding: "10px 12px", background: C.orangeBg, borderRadius: "8px", borderLeft: `3px solid ${C.orange}` }}>
                <div style={{ fontSize: "9px", color: C.orange, fontWeight: 700, marginBottom: "4px" }}>SCRIPT SUGERIDO</div>
                <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.6, fontStyle: "italic" }}>
                  "Hola Camila, te llamo de [universidad]. Vimos que ya resolviste el tema de las cuotas y que hay horarios nocturnos disponibles para tus cursos. ¿Necesitas ayuda para completar tu matrícula? Te puedo guiar en 5 minutos."
                </div>
              </div>
            </div>
          </div>

          {/* Timing concept */}
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px" }}>⏱️</span>
              <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.06em" }}>EL TIMING SE AJUSTA EN TIEMPO REAL</div>
            </div>
            <div style={{ fontSize: "11px", color: C.g500, marginBottom: "10px", lineHeight: 1.5 }}>
              Las decisiones no son estáticas. El agente va ajustando la estrategia según lo que pasa:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                { condition: "Si Camila se matricula después de la llamada", next: "Caso cerrado exitosamente. El agente registra qué funcionó.", color: C.green },
                { condition: "Si dice que necesita más tiempo", next: "Se programa follow-up en 3 días. No se insiste antes.", color: C.blue },
                { condition: "Si plantea un problema nuevo (ej: horario específico no disponible)", next: "El agente recalcula y propone nueva acción — puede escalar a coordinador.", color: C.orange },
                { condition: "Si el plazo de matrícula está por cerrar", next: "Se sube la urgencia y se activan todos los canales en paralelo.", color: C.red },
              ].map((t, i) => (
                <div key={i} style={{ padding: "8px 10px", background: `${t.color}05`, borderRadius: "6px", border: `1px solid ${t.color}10` }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: C.g700 }}>{t.condition}</div>
                  <div style={{ fontSize: "9px", color: t.color, marginTop: "2px" }}>→ {t.next}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: "10px 14px", background: `${C.orange}08`, borderRadius: "8px", borderLeft: `3px solid ${C.orange}` }}>
            <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.6 }}>
              <strong style={{ color: C.orange }}>Contact Center ya no llega a ciegas.</strong> Sabe qué pasó antes, qué se resolvió, y qué falta. El script está adaptado al momento exacto del journey de Camila. Y si algo cambia, el agente ajusta la siguiente acción en tiempo real.
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "result",
      label: "El resultado",
      icon: "📊",
      color: C.green,
      content: (
        <div>
          <p style={{ fontSize: "12px", color: C.g500, marginBottom: "14px", lineHeight: 1.6 }}>
            Después de la gestión, el agente registra qué pasó y aprende:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "14px" }}>
            {[
              { label: "Acción ejecutada", value: "Horario nocturno + fraccionamiento + alternativa a beca", color: C.orange },
              { label: "Canal que funcionó", value: "WhatsApp (respondió a las 4h)", color: C.cyan },
              { label: "Resultado", value: "Se rematriculó antes del cierre", color: C.green },
            ].map((r, i) => (
              <div key={i} style={{ padding: "12px", background: "white", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700 }}>{r.label}</div>
                <div style={{ fontSize: "11px", color: r.color, fontWeight: 700, marginTop: "4px" }}>{r.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: "white", borderRadius: "10px", border: `1px solid ${C.green}22`, padding: "16px" }}>
            <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>🔄 LO QUE APRENDE EL AGENTE</div>
            <div style={{ fontSize: "12px", color: C.g700, lineHeight: 1.7 }}>
              Para alumnas de perfil similar a Camila (ciclo avanzado, deuda reciente, empezó a trabajar, beca negada, reclamo por horarios), la combinación <strong>resolución de horario + fraccionamiento + alternativas de apoyo económico por WhatsApp</strong> tiene una tasa de rematrícula del 45%. Esta regla se refuerza y se aplica automáticamente al siguiente caso similar.
            </div>
          </div>
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, padding: "12px", background: C.greenBg, borderRadius: "8px", textAlign: "center" }}>
              <div style={{ fontSize: "8px", color: C.g400 }}>Valor salvado</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: C.green, fontFamily: mono }}>S/ 32,400</div>
              <div style={{ fontSize: "9px", color: C.g500 }}>24 cuotas restantes</div>
            </div>
            <div style={{ flex: 1, padding: "12px", background: "white", borderRadius: "8px", textAlign: "center", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "8px", color: C.g400 }}>Tiempo total del proceso</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: C.accent, fontFamily: mono }}>4 horas</div>
              <div style={{ fontSize: "9px", color: C.g500 }}>de detección a rematrícula</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        @keyframes slideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "50px 20px 40px" }}>

        <FadeIn>
          <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>CASO EN VIVO</div>
          <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "16px" }}>
            Veamos qué haría el agente<br/>con una alumna real.
          </h2>
        </FadeIn>

        {/* Student card */}
        <FadeIn delay={80}>
          <div style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "12px 16px", marginBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>👩‍🎓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "14px", fontWeight: 700 }}>Camila Rojas</div>
              <div style={{ fontSize: "11px", color: C.g500 }}>Administración · Terminó 5to ciclo · 82 créditos (41%) · Período de rematrícula abierto</div>
            </div>
            <div style={{ padding: "4px 8px", borderRadius: "5px", background: C.redLt, fontSize: "9px", fontWeight: 800, color: C.red }}>NO MATRICULADA</div>
          </div>
        </FadeIn>

        {/* Step selector */}
        <FadeIn delay={150}>
          <div style={{ display: "flex", gap: "3px", marginBottom: "6px", overflowX: "auto" }}>
            {steps.map((s, i) => (
              <button key={s.id} onClick={() => setStep(i)} style={{
                flex: "1 0 auto", padding: "8px 6px", border: "none", borderRadius: "8px",
                cursor: "pointer", textAlign: "center", transition: "all 0.2s", minWidth: "65px",
                background: step === i ? s.color : "white",
                border: `1px solid ${step === i ? s.color : "#E5E7EB"}`,
                color: step === i ? "white" : C.g500,
                fontSize: "10px", fontWeight: step === i ? 700 : 500,
                borderBottom: step === i ? `2px solid ${s.color}` : "2px solid transparent",
              }}>
                <div style={{ fontSize: "14px", marginBottom: "1px" }}>{s.icon}</div>
                {s.label.split(" ").slice(-1)[0]}
              </button>
            ))}
          </div>
          <div style={{ fontSize: "9px", color: C.g400, marginBottom: "12px", textAlign: "center" }}>
            Paso {step + 1} de {steps.length} — toca cada paso para recorrer el flujo completo
          </div>
        </FadeIn>

        {/* Active step content */}
        <div key={step} style={{ animation: "slideUp 0.3s ease" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: steps[step].color, marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "18px" }}>{steps[step].icon}</span>
              {steps[step].label}
            </div>
            <div style={{ display: "flex", gap: "4px" }}>
              {steps.map((_, i) => (
                <div key={i} style={{ width: i === step ? "14px" : "6px", height: "3px", borderRadius: "2px", background: i === step ? steps[step].color : "#E5E7EB", transition: "all 0.3s" }} />
              ))}
            </div>
          </div>
          {steps[step].content}
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "18px" }}>
          <button onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0} style={{
            padding: "8px 16px", background: step === 0 ? C.g100 : "white",
            border: "1px solid #E5E7EB", borderRadius: "7px",
            fontSize: "11px", fontWeight: 600, cursor: step === 0 ? "default" : "pointer",
            color: step === 0 ? C.g400 : C.dark, opacity: step === 0 ? 0.5 : 1,
          }}>← Anterior</button>
          <span style={{ fontSize: "10px", color: C.g400, alignSelf: "center" }}>{step + 1} / {steps.length}</span>
          <button onClick={() => step < steps.length - 1 && setStep(step + 1)} disabled={step === steps.length - 1} style={{
            padding: "8px 16px",
            background: step === steps.length - 1 ? C.g100 : C.dark,
            border: "none", borderRadius: "7px",
            fontSize: "11px", fontWeight: 700, cursor: step === steps.length - 1 ? "default" : "pointer",
            color: step === steps.length - 1 ? C.g400 : "white",
            opacity: step === steps.length - 1 ? 0.5 : 1,
          }}>Siguiente →</button>
        </div>
      </div>
    </div>
  );
}
