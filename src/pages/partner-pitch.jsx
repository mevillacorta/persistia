import { useState, useEffect } from "react";

const C = {
  bg: "#FAFAF8", card: "#FFFFFF", card2: "#F5F5F3", border: "#E5E7EB",
  g600: "#6B7280", g500: "#6B7280", g400: "#9CA3AF", g300: "#374151",
  green: "#10B981", greenLt: "#065F46", greenBg: "#ECFDF5",
  orange: "#F59E0B", orangeBg: "#FFFBEB", red: "#EF4444",
  blue: "#3B82F6", purple: "#8B5CF6", cyan: "#0891B2",
  accent: "#6366F1", white: "#0D0D0D",
};
const mono = "'DM Mono', monospace";
const serif = "'Instrument Serif', Georgia, serif";

const FadeIn = ({ children, delay = 0 }) => {
  const [v, setV] = useState(false);
  useEffect(() => { const t = setTimeout(() => setV(true), delay); return () => clearTimeout(t); }, [delay]);
  return <div style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(12px)", transition: "all 0.55s cubic-bezier(0.22,1,0.36,1)" }}>{children}</div>;
};

const SECS = ["problem", "solution", "camila", "business", "synergy", "profile"];
const LABS = ["El dolor", "Qué vendemos", "Caso real", "El negocio", "Juntos", "Mi perfil"];

export default function PartnerPitchV3() {
  const [sec, setSec] = useState(0);
  const [activeTier, setActiveTier] = useState(1);
  const [showCombined, setShowCombined] = useState(false);

  const nav = (d) => {
    if (d > 0 && sec < SECS.length - 1) setSec(x => x + 1);
    if (d < 0 && sec > 0) setSec(x => x - 1);
  };

  useEffect(() => {
    const h = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nav(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); nav(-1); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [sec]);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${C.accent}22; }
        @keyframes slideUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Nav */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "740px", margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})` }} />
            <span style={{ fontWeight: 800, fontSize: "13px" }}>Persistia</span>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {SECS.map((_, i) => (
              <button key={i} onClick={() => setSec(i)} style={{
                width: sec === i ? "20px" : "5px", height: "5px", borderRadius: "3px",
                background: sec === i ? C.accent : i < sec ? `${C.accent}22` : C.border,
                border: "none", cursor: "pointer", transition: "all 0.3s",
              }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 20px 80px" }}>

        {/* ===== 1. PROBLEM — University Pain ===== */}
        {sec === 0 && (
          <div style={{ paddingTop: "60px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "14px", fontFamily: mono }}>
                EL DOLOR DEL CLIENTE
              </div>
              <h1 style={{ fontFamily: serif, fontSize: "clamp(26px,5vw,38px)", fontWeight: 400, lineHeight: 1.1, marginBottom: "18px" }}>
                Las universidades pierden <span style={{ color: C.red }}>33%</span><br/>de sus alumnos. Y la mayoría no<br/>tiene cómo evitarlo.
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p style={{ fontSize: "13px", color: C.g400, lineHeight: 1.7, maxWidth: "540px", marginBottom: "20px" }}>
                No es que no les importe. Es que retener alumnos de forma inteligente requiere un equipo especializado, acceso a datos cruzados, y capacidad de orquestación que la mayoría no tiene.
              </p>
            </FadeIn>

            <FadeIn delay={350}>
              <div style={{ fontSize: "9px", color: C.orange, fontWeight: 700, letterSpacing: "0.08em", marginBottom: "10px" }}>LO QUE VIVE CADA TIPO DE UNIVERSIDAD</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                {[
                  {
                    type: "Universidad pequeña (< 5K alumnos)",
                    pain: "No tiene equipo de retención. El coordinador académico hace todo: detectar, llamar, convencer. Cuando se entera que un alumno se va, ya se fue.",
                    color: C.red,
                    icon: "🏫",
                  },
                  {
                    type: "Universidad mediana (5K-30K alumnos)",
                    pain: "Tiene un equipo básico pero sin tecnología. Trabajan con Excel, listas manuales y reuniones semanales para decidir a quién contactar. La información llega con días de desfase.",
                    color: C.orange,
                    icon: "🏛️",
                  },
                  {
                    type: "Universidad grande (30K+ alumnos)",
                    pain: "Tiene equipos especializados pero la orquestación es insostenible. Mantener la segmentación al día quema al equipo de estrategia. Los equipos de ejecución no tienen el contexto completo del alumno.",
                    color: C.purple,
                    icon: "🎓",
                  },
                ].map((u, i) => (
                  <div key={i} style={{ padding: "14px 16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, display: "flex", gap: "12px", alignItems: "start" }}>
                    <div style={{ fontSize: "20px", flexShrink: 0 }}>{u.icon}</div>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: u.color, marginBottom: "3px" }}>{u.type}</div>
                      <div style={{ fontSize: "11px", color: C.g400, lineHeight: 1.6 }}>{u.pain}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "14px" }}>
                {[
                  { n: "50%+", d: "deserción acumulada en LATAM", c: C.red },
                  { n: "42%", d: "abandona por factores económicos", c: C.orange },
                  { n: "$17M+", d: "pérdida anual promedio por universidad", c: C.accent },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "18px", fontWeight: 800, color: s.c, fontFamily: mono }}>{s.n}</div>
                    <div style={{ fontSize: "9px", color: C.g500, marginTop: "2px" }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <div style={{ padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.accent}22` }}>
                <div style={{ fontSize: "12px", color: C.g400, lineHeight: 1.6 }}>
                  <strong style={{ color: C.white }}>Las universidades SABEN que necesitan resolver esto.</strong> Pero las opciones en LATAM son caras, genéricas, o solo muestran dashboards sin decir qué hacer. No hay una solución que prescriba la acción correcta para cada alumno y orqueste la ejecución con los equipos que ya existen.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ===== 2. SOLUTION — What We Sell ===== */}
        {sec === 1 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>LO QUE VENDEMOS</div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(26px,4.5vw,36px)", fontWeight: 400, lineHeight: 1.1, marginBottom: "8px" }}>
                Un agente de IA que piensa<br/>
                por la universidad — y le dice<br/>
                a cada equipo <span style={{ color: C.accent, fontStyle: "italic" }}>qué hacer</span>.
              </h2>
              <p style={{ fontSize: "13px", color: C.g400, marginBottom: "18px", lineHeight: 1.6, maxWidth: "540px" }}>
                La universidad no necesita armar un equipo de retención con 10 años de experiencia. Necesita un sistema que ya tenga esa inteligencia incorporada y que se adapte a su realidad.
              </p>
            </FadeIn>

            {/* Value prop by university size */}
            <FadeIn delay={200}>
              <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, letterSpacing: "0.08em", marginBottom: "10px" }}>PROPUESTA DE VALOR POR TIPO DE CLIENTE</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                {[
                  {
                    type: "Para la pequeña",
                    hook: "\"Tu equipo de retención completo — sin contratar a nadie\"",
                    detail: "El agente detecta quién está en riesgo, decide qué hacer, y prepara la comunicación. El coordinador solo tiene que aprobar y ejecutar.",
                    icon: "🏫", color: C.red,
                  },
                  {
                    type: "Para la mediana",
                    hook: "\"Deja de trabajar con Excel y reuniones semanales\"",
                    detail: "El agente reemplaza el proceso manual de cruzar datos y priorizar. El equipo pasa de operar a supervisar y diseñar estrategia.",
                    icon: "🏛️", color: C.orange,
                  },
                  {
                    type: "Para la grande",
                    hook: "\"Escala tu operación sin multiplicar el equipo\"",
                    detail: "El agente lleva la orquestación al nivel individual — 200K alumnos con acción personalizada — sin quemar al equipo de estrategia.",
                    icon: "🎓", color: C.purple,
                  },
                ].map((v, i) => (
                  <div key={i} style={{ padding: "14px 16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                      <span style={{ fontSize: "16px" }}>{v.icon}</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: v.color }}>{v.type}</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: C.white, marginBottom: "4px" }}>{v.hook}</div>
                    <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.5 }}>{v.detail}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* How it works - compressed */}
            <FadeIn delay={400}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
                <div style={{ fontSize: "9px", color: C.cyan, fontWeight: 700, letterSpacing: "0.08em", marginBottom: "12px" }}>CÓMO FUNCIONA EN 3 PASOS</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px" }}>
                  {[
                    { step: "1", icon: "📡", title: "Cruza toda la data", desc: "Conecta los sistemas que ya tiene la universidad y arma el perfil 360 de cada alumno.", color: "#6366F1" },
                    { step: "2", icon: "🎯", title: "Prescribe la acción", desc: "Para cada alumno: qué hacer, por qué canal, con qué mensaje, y qué hacer si no responde.", color: C.orange },
                    { step: "3", icon: "⚡", title: "Orquesta los equipos", desc: "Le dice a cada persona de la universidad exactamente qué hacer — con contexto completo.", color: C.green },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: "14px", background: C.card2, borderRadius: "8px", textAlign: "center" }}>
                      <div style={{ fontSize: "20px", marginBottom: "6px" }}>{s.icon}</div>
                      <div style={{ fontSize: "8px", color: s.color, fontWeight: 800, fontFamily: mono, marginBottom: "3px" }}>PASO {s.step}</div>
                      <div style={{ fontSize: "12px", fontWeight: 700, marginBottom: "3px" }}>{s.title}</div>
                      <div style={{ fontSize: "9px", color: C.g500, lineHeight: 1.4 }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ===== 3. CAMILA ===== */}
        {sec === 2 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>CASO REAL</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "16px" }}>
                Camila tiene 6 problemas<br/>en 6 sistemas distintos.<br/>
                <span style={{ color: C.orange }}>Hoy nadie los conecta.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={150}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, overflow: "hidden" }}>
                <div style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>👩‍🎓</div>
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: 700 }}>Camila Rojas</span>
                    <span style={{ fontSize: "10px", color: C.g500 }}> · Administración · 5to ciclo · 82 créditos</span>
                  </div>
                </div>

                <div style={{ padding: "16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "4px", marginBottom: "12px" }}>
                    {["Debe 2 cuotas", "Reclamo por horarios", "Beca negada", "Notas bajaron", "No contesta", "No se matriculó"].map((s, i) => (
                      <div key={i} style={{ padding: "6px", background: `${C.red}10`, borderRadius: "4px", fontSize: "9px", color: C.g400, textAlign: "center" }}>{s}</div>
                    ))}
                  </div>

                  <div style={{ padding: "10px 12px", background: `${C.accent}10`, borderRadius: "8px", borderLeft: `3px solid ${C.accent}`, marginBottom: "10px" }}>
                    <div style={{ fontSize: "9px", color: C.accent, fontWeight: 700, marginBottom: "3px" }}>EL AGENTE CONECTA TODO</div>
                    <div style={{ fontSize: "11px", color: C.g300, lineHeight: 1.6 }}>
                      Registró prácticas + pidió cambio a turno nocturno → <strong style={{ color: C.white }}>empezó a trabajar</strong>. Eso explica la deuda, las notas, el reclamo. No quiere irse — su vida cambió.
                    </div>
                  </div>

                  <div style={{ padding: "10px 12px", background: `${C.green}10`, borderRadius: "8px", borderLeft: `3px solid ${C.green}`, marginBottom: "10px" }}>
                    <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, marginBottom: "3px" }}>PRESCRIBE Y ORQUESTA</div>
                    <div style={{ fontSize: "11px", color: C.g300, lineHeight: 1.5 }}>
                      Horarios nocturnos + fraccionamiento + alternativas a beca → WhatsApp personalizado → si no responde, llamada con contexto → se rematriculó.
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                    <div style={{ padding: "10px", background: C.card2, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: C.g500 }}>Resultado</div>
                      <div style={{ fontSize: "12px", fontWeight: 800, color: C.green }}>Se quedó</div>
                    </div>
                    <div style={{ padding: "10px", background: C.card2, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: C.g500 }}>Valor salvado</div>
                      <div style={{ fontSize: "12px", fontWeight: 800, color: C.orange, fontFamily: mono }}>S/ 32,400</div>
                    </div>
                    <div style={{ padding: "10px", background: C.card2, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: C.g500 }}>Tiempo</div>
                      <div style={{ fontSize: "12px", fontWeight: 800, color: C.accent, fontFamily: mono }}>4 horas</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bridge to employability */}
            <FadeIn delay={350}>
              <div style={{ marginTop: "12px", background: `linear-gradient(135deg, ${C.card}, ${C.greenBg})`, borderRadius: "12px", padding: "18px", border: `1px solid ${C.cyan}33` }}>
                <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "10px" }}>🔗 EL CICLO COMPLETO</div>
                <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", alignItems: "center", marginBottom: "10px" }}>
                  {[
                    { t: "En riesgo", c: C.red },
                    { t: "→" },
                    { t: "Agente prescribe", c: C.orange },
                    { t: "→" },
                    { t: "Se queda", c: C.green },
                    { t: "→" },
                    { t: "Se gradúa", c: C.accent },
                    { t: "→" },
                    { t: "Consigue empleo", c: C.cyan },
                  ].map((s, i) => (
                    <span key={i} style={{
                      fontSize: s.c ? "9px" : "11px", fontWeight: s.c ? 700 : 400,
                      color: s.c || C.g600, background: s.c ? `${s.c}15` : "none",
                      padding: s.c ? "3px 8px" : 0, borderRadius: "4px",
                    }}>{s.t}</span>
                  ))}
                </div>
                <div style={{ fontSize: "12px", color: C.white, fontWeight: 600 }}>
                  Sin retención, Camila nunca llega a la plataforma de empleabilidad. Con Persistia, es una graduada empleada — y la universidad mide el impacto de punta a punta.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ===== 4. BUSINESS — Monetization ===== */}
        {sec === 3 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EL NEGOCIO</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                SaaS por suscripción mensual.<br/>
                <span style={{ color: C.green, fontStyle: "italic" }}>Escala con el cliente.</span>
              </h2>
            </FadeIn>

            {/* Tiers */}
            <FadeIn delay={200}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
                {[
                  { label: "Starter", sub: "< 5K alumnos" },
                  { label: "Growth", sub: "5-30K alumnos" },
                  { label: "Enterprise", sub: "30K+ alumnos" },
                ].map((t, i) => (
                  <button key={i} onClick={() => setActiveTier(i)} style={{
                    flex: 1, padding: "10px 6px", background: activeTier === i ? C.card2 : C.card,
                    border: `1px solid ${activeTier === i ? C.green + "44" : C.border}`,
                    borderRadius: "8px", cursor: "pointer", textAlign: "center",
                  }}>
                    <div style={{ fontSize: "12px", fontWeight: activeTier === i ? 800 : 500, color: activeTier === i ? C.green : C.g500 }}>{t.label}</div>
                    <div style={{ fontSize: "9px", color: C.g600 }}>{t.sub}</div>
                  </button>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              {[
                {
                  name: "Starter", price: "$800", period: "/mes", alumnos: "Hasta 5,000 alumnos",
                  features: ["Scoring de riesgo por alumno", "Prescripción de acción por segmento", "Dashboard de seguimiento básico", "Soporte por email"],
                  excludes: ["Personalización de mensajes por alumno", "Orquestación multicanal", "API de integración"],
                  client: "Universidades pequeñas que hoy no tienen proceso de retención",
                  roi: "Retener 1 alumno/mes ya paga el servicio",
                },
                {
                  name: "Growth", price: "$1,800", period: "/mes", alumnos: "5,000 - 30,000 alumnos",
                  features: ["Todo lo de Starter", "Prescripción individualizada por alumno", "Mensajes personalizados por IA", "Orquestación multicanal (WhatsApp, email, llamada)", "Dashboard para estrategia + equipos operativos"],
                  excludes: ["API custom", "Modelo de ML propio"],
                  client: "Universidades medianas que quieren pasar de Excel a inteligencia",
                  roi: "Con retener 2 alumnos/mes recuperan 3x la inversión",
                },
                {
                  name: "Enterprise", price: "$3,500+", period: "/mes", alumnos: "30,000+ alumnos",
                  features: ["Todo lo de Growth", "API de integración con sistemas propios", "Modelo de ML entrenado con datos de la institución", "Catálogo de acciones configurable por la universidad", "Multi-sede / multi-programa", "Soporte dedicado + onboarding"],
                  excludes: [],
                  client: "Redes universitarias y grandes instituciones que necesitan escalar operación",
                  roi: "Retener 5 alumnos/mes genera ROI de 10x+",
                },
              ][activeTier] && (() => {
                const tier = [
                  {
                    name: "Starter", price: "$800", period: "/mes", alumnos: "Hasta 5,000 alumnos",
                    features: ["Scoring de riesgo por alumno", "Prescripción de acción por segmento", "Dashboard de seguimiento básico", "Soporte por email"],
                    client: "Universidades pequeñas que hoy no tienen proceso de retención",
                    roi: "Retener 1 alumno/mes ya paga el servicio",
                  },
                  {
                    name: "Growth", price: "$1,800", period: "/mes", alumnos: "5,000 - 30,000 alumnos",
                    features: ["Todo lo de Starter", "Prescripción individualizada por alumno", "Mensajes personalizados por IA", "Orquestación multicanal", "Dashboard para estrategia + equipos operativos"],
                    client: "Universidades medianas que quieren pasar de Excel a inteligencia",
                    roi: "Retener 2 alumnos/mes = 3x la inversión",
                  },
                  {
                    name: "Enterprise", price: "$3,500+", period: "/mes", alumnos: "30,000+ alumnos",
                    features: ["Todo lo de Growth", "API de integración con sistemas propios", "ML entrenado con datos de la institución", "Catálogo de acciones configurable", "Multi-sede / multi-programa", "Onboarding + soporte dedicado"],
                    client: "Redes universitarias que necesitan escalar sin multiplicar equipos",
                    roi: "Retener 5 alumnos/mes = ROI de 10x+",
                  },
                ][activeTier];
                return (
                  <div key={activeTier} style={{ animation: "slideUp 0.3s ease" }}>
                    <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.green}22`, padding: "20px", marginBottom: "12px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "14px" }}>
                        <div>
                          <div style={{ fontSize: "14px", fontWeight: 800, color: C.green }}>{tier.name}</div>
                          <div style={{ fontSize: "10px", color: C.g500 }}>{tier.alumnos}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <span style={{ fontSize: "28px", fontWeight: 800, color: C.white, fontFamily: mono }}>{tier.price}</span>
                          <span style={{ fontSize: "12px", color: C.g500 }}>{tier.period}</span>
                        </div>
                      </div>
                      <div style={{ marginBottom: "12px" }}>
                        {tier.features.map((f, i) => (
                          <div key={i} style={{ display: "flex", gap: "6px", padding: "3px 0" }}>
                            <span style={{ color: C.green, fontSize: "10px" }}>✓</span>
                            <span style={{ fontSize: "11px", color: C.g300 }}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: "10px 12px", background: `${C.orange}10`, borderRadius: "6px", borderLeft: `3px solid ${C.orange}` }}>
                        <div style={{ fontSize: "9px", color: C.orange, fontWeight: 700, marginBottom: "2px" }}>CLIENTE IDEAL</div>
                        <div style={{ fontSize: "10px", color: C.g400 }}>{tier.client}</div>
                      </div>
                      <div style={{ marginTop: "8px", padding: "10px 12px", background: `${C.green}10`, borderRadius: "6px", borderLeft: `3px solid ${C.green}` }}>
                        <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, marginBottom: "2px" }}>ROI PARA EL CLIENTE</div>
                        <div style={{ fontSize: "10px", color: C.g400 }}>{tier.roi}</div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </FadeIn>

            {/* Unit economics */}
            <FadeIn delay={450}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "12px" }}>
                <div style={{ fontSize: "9px", color: C.accent, fontWeight: 700, letterSpacing: "0.08em", marginBottom: "12px" }}>UNIT ECONOMICS</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
                  {[
                    { label: "ARPU", value: "$1,400", sub: "por universidad/mes", c: C.green },
                    { label: "CAC estimado", value: "$2-4K", sub: "piloto gratis → conversión", c: C.orange },
                    { label: "LTV (24 meses)", value: "$33.6K", sub: "por cliente", c: C.accent },
                    { label: "LTV:CAC", value: "8-16x", sub: "saludable", c: C.cyan },
                  ].map((m, i) => (
                    <div key={i} style={{ padding: "10px", background: C.card2, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: m.c, fontWeight: 700 }}>{m.label}</div>
                      <div style={{ fontSize: "16px", fontWeight: 800, color: C.white, fontFamily: mono }}>{m.value}</div>
                      <div style={{ fontSize: "8px", color: C.g500, marginTop: "2px" }}>{m.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Market */}
            <FadeIn delay={550}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
                <div style={{ fontSize: "9px", color: C.orange, fontWeight: 700, letterSpacing: "0.08em", marginBottom: "12px" }}>MERCADO</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {[
                    { label: "EdTech LATAM 2025", value: "$18.3B", sub: "→ $51.3B en 2034", c: C.accent },
                    { label: "Unis privadas LATAM", value: "3,500+", sub: "Mercado potencial", c: C.cyan },
                    { label: "Si captamos 1%", value: "35 unis", sub: "= $588K MRR", c: C.green },
                  ].map((m, i) => (
                    <div key={i} style={{ textAlign: "center", padding: "12px", background: C.card2, borderRadius: "8px" }}>
                      <div style={{ fontSize: "8px", color: m.c, fontWeight: 700 }}>{m.label}</div>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: C.white, fontFamily: mono }}>{m.value}</div>
                      <div style={{ fontSize: "8px", color: C.g500, marginTop: "2px" }}>{m.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ===== 5. SYNERGY ===== */}
        {sec === 4 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>POR QUÉ JUNTOS</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                Retención + Empleabilidad =<br/>
                <span style={{ color: C.green, fontStyle: "italic" }}>el ciclo de vida completo</span>.
              </h2>
            </FadeIn>

            <FadeIn delay={150}>
              <div style={{ display: "flex", gap: "4px", marginBottom: "14px" }}>
                <button onClick={() => setShowCombined(false)} style={{
                  flex: 1, padding: "10px", background: !showCombined ? C.card2 : C.card,
                  border: `1px solid ${!showCombined ? C.accent + "44" : C.border}`,
                  borderRadius: "8px", cursor: "pointer", fontSize: "11px", fontWeight: 700,
                  color: !showCombined ? C.accent : C.g500,
                }}>Cada uno por separado</button>
                <button onClick={() => setShowCombined(true)} style={{
                  flex: 1, padding: "10px", background: showCombined ? C.card2 : C.card,
                  border: `1px solid ${showCombined ? C.green + "44" : C.border}`,
                  borderRadius: "8px", cursor: "pointer", fontSize: "11px", fontWeight: 700,
                  color: showCombined ? C.green : C.g500,
                }}>Juntos como Persistia</button>
              </div>
            </FadeIn>

            {!showCombined ? (
              <FadeIn delay={250}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "14px" }}>
                  <div style={{ background: C.card, borderRadius: "12px", padding: "16px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, marginBottom: "10px" }}>PLATAFORMA DE EMPLEABILIDAD · SOLA</div>
                    {["Portal con IA para match alumno-empresa", "Pilotos activos con universidades", "Tracción temprana"].map((f, i) => (
                      <div key={i} style={{ fontSize: "10px", color: C.g400, padding: "2px 0", display: "flex", gap: "6px" }}>
                        <span style={{ color: C.cyan }}>✓</span> {f}
                      </div>
                    ))}
                    <div style={{ marginTop: "10px", padding: "8px", background: `${C.red}10`, borderRadius: "6px" }}>
                      <div style={{ fontSize: "10px", color: C.red }}>Limitación: solo sirve al alumno que se gradúa.</div>
                      <div style={{ fontSize: "9px", color: C.g500 }}>El 33% que deserta nunca llega a la plataforma.</div>
                    </div>
                  </div>
                  <div style={{ background: C.card, borderRadius: "12px", padding: "16px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, marginBottom: "10px" }}>AGENTE DE RETENCIÓN IA · SOLO</div>
                    {["Agente prescriptivo por alumno", "Acceso a datos de 200K alumnos", "Reglas NBA como IP"].map((f, i) => (
                      <div key={i} style={{ fontSize: "10px", color: C.g400, padding: "2px 0", display: "flex", gap: "6px" }}>
                        <span style={{ color: C.accent }}>✓</span> {f}
                      </div>
                    ))}
                    <div style={{ marginTop: "10px", padding: "8px", background: `${C.red}10`, borderRadius: "6px" }}>
                      <div style={{ fontSize: "10px", color: C.red }}>Limitación: necesita infraestructura tech para escalar.</div>
                      <div style={{ fontSize: "9px", color: C.g500 }}>Sin plataforma, es un modelo que no escala solo.</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ) : (
              <FadeIn delay={250}>
                <div style={{ background: `linear-gradient(135deg, ${C.greenBg}, ${C.card})`, borderRadius: "14px", padding: "22px", border: `1px solid ${C.green}33`, marginBottom: "14px" }}>
                  <div style={{ textAlign: "center", marginBottom: "16px" }}>
                    <div style={{ fontSize: "10px", color: C.green, fontWeight: 800, letterSpacing: "0.1em", marginBottom: "4px" }}>PERSISTIA</div>
                    <div style={{ fontSize: "15px", fontWeight: 800 }}>Plataforma de ciclo de vida estudiantil completo</div>
                  </div>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "12px" }}>
                    {[
                      { metric: "Ticket promedio", solo: "$1,400/mes", junto: "$2,200/mes", delta: "+57%", color: C.green },
                      { metric: "Propuesta al cliente", solo: "Resuelve 1 dolor", junto: "Resuelve 2 dolores", delta: "2x valor", color: C.accent },
                      { metric: "Usuarios de la plataforma", solo: "Solo graduados", junto: "Graduados + retenidos", delta: "+33% TAM", color: C.cyan },
                      { metric: "Data disponible", solo: "Solo retención o empleo", junto: "Ciclo completo del alumno", delta: "IP única", color: C.orange },
                    ].map((m, i) => (
                      <div key={i} style={{ padding: "10px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}` }}>
                        <div style={{ fontSize: "8px", color: C.g400, fontWeight: 700, marginBottom: "4px" }}>{m.metric}</div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontSize: "9px", color: C.g400, textDecoration: "line-through" }}>{m.solo}</div>
                            <div style={{ fontSize: "11px", color: C.dark, fontWeight: 700 }}>{m.junto}</div>
                          </div>
                          <div style={{ padding: "2px 6px", background: `${m.color}12`, borderRadius: "4px" }}>
                            <span style={{ fontSize: "9px", color: m.color, fontWeight: 800 }}>{m.delta}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    {[
                      "La universidad compra UNA plataforma para DOS problemas — venta más fácil, ticket más alto",
                      "Argumento de venta imbatible: 'no solo retenemos a tus alumnos — los empleamos'",
                      "Datos longitudinales del alumno que ningún competidor tiene — moat defensible",
                    ].map((v, i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", padding: "3px 0" }}>
                        <span style={{ color: C.green, fontSize: "12px", flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: "11px", color: C.greenLt, lineHeight: 1.5 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            <FadeIn delay={400}>
              <div style={{ padding: "14px 16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.accent}22` }}>
                <div style={{ fontSize: "12px", color: C.g400, lineHeight: 1.6 }}>
                  <strong style={{ color: C.white }}>La propuesta:</strong> Explorar un piloto conjunto con una institución. Sin compromisos formales todavía — solo validar que la sinergia funciona en la práctica antes de estructurar algo más grande.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* ===== 6. PROFILE ===== */}
        {sec === 5 && (
          <div style={{ paddingTop: "60px", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "12px", fontFamily: mono }}>QUIÉN SOY</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "20px" }}>
                Conozco el problema desde adentro.<br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>Opero retención para 200K alumnos.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div style={{ background: C.card, borderRadius: "14px", border: `1px solid ${C.border}`, padding: "22px", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "start", marginBottom: "16px" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `linear-gradient(135deg, ${C.accent}, ${C.green})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>MV</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 800 }}>Mario Villacorta</div>
                    <div style={{ fontSize: "11px", color: C.accent }}>Retention & Engagement Strategy Manager</div>
                    <div style={{ fontSize: "11px", color: C.g500 }}>Laureate Education · Perú</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
                  {[
                    { years: "6", area: "Banca", detail: "Carteras masivas, riesgo, cobranza" },
                    { years: "2", area: "Tecnología", detail: "Prototipos, IA aplicada, dashboards" },
                    { years: "2", area: "Educación", detail: "Retención, rematrícula, revenue" },
                  ].map((e, i) => (
                    <div key={i} style={{ padding: "12px", background: C.card2, borderRadius: "8px", textAlign: "center" }}>
                      <div style={{ fontSize: "22px", fontWeight: 800, color: C.accent, fontFamily: mono }}>{e.years}</div>
                      <div style={{ fontSize: "10px", fontWeight: 700, marginTop: "2px" }}>años en {e.area}</div>
                      <div style={{ fontSize: "9px", color: C.g500, marginTop: "4px" }}>{e.detail}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>LO QUE TRAIGO A LA MESA</div>
                {[
                  "Acceso directo a datos reales de 200K+ alumnos en 3 instituciones",
                  "Las reglas NBA como IP — sé qué funciona para qué perfil de alumno",
                  "Primer cliente piloto listo (Laureate) — sin necesidad de vender desde cero",
                  "Red de decisores en universidades de Perú y LATAM",
                ].map((a, i) => (
                  <div key={i} style={{ fontSize: "11px", color: C.g400, padding: "3px 0", display: "flex", gap: "6px" }}>
                    <span style={{ color: C.accent }}>+</span> {a}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div style={{ background: `linear-gradient(135deg, ${C.card}, ${C.greenBg})`, borderRadius: "12px", padding: "18px", border: `1px solid ${C.green}22`, maxWidth: "520px" }}>
                <div style={{ fontSize: "13px", color: C.white, lineHeight: 1.6 }}>
                  Tengo la experiencia, los datos, y el primer cliente. Del otro lado está la plataforma, el equipo tech, y la capa de empleabilidad. <strong style={{ color: C.greenLt }}>Separados somos dos proyectos early-stage. Juntos somos la primera plataforma de ciclo de vida estudiantil completo en LATAM.</strong>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={550}>
              <div style={{ marginTop: "28px", fontSize: "10px", color: C.g600 }}>
                Persistia · Documento exploratorio · Marzo 2026 · Confidencial
              </div>
            </FadeIn>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "740px", margin: "0 auto", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => nav(-1)} disabled={sec === 0} style={{
            padding: "7px 16px", background: sec === 0 ? C.card : C.card2,
            border: `1px solid ${C.border}`, borderRadius: "7px",
            cursor: sec === 0 ? "default" : "pointer", fontSize: "11px", fontWeight: 600,
            color: sec === 0 ? C.g600 : C.white, opacity: sec === 0 ? 0.4 : 1,
          }}>←</button>
          <span style={{ fontSize: "10px", color: C.g600 }}>{LABS[sec]}</span>
          <button onClick={() => nav(1)} disabled={sec === SECS.length - 1} style={{
            padding: "7px 16px", background: sec === SECS.length - 1 ? C.card : C.accent,
            border: "none", borderRadius: "7px",
            cursor: sec === SECS.length - 1 ? "default" : "pointer", fontSize: "11px", fontWeight: 700,
            color: sec === SECS.length - 1 ? C.g600 : "white",
            opacity: sec === SECS.length - 1 ? 0.4 : 1,
          }}>→</button>
        </div>
      </div>
    </div>
  );
}
