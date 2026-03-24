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

const SECS = ["hook", "problem", "solution", "demo", "market", "business", "team", "close"];
const LABS = ["Persistia", "Problema", "Solución", "Demo", "Mercado", "Negocio", "Equipo", "Cierre"];

export default function CoursePitch() {
  const [sec, setSec] = useState(0);
  const nav = (d) => { if (d > 0 && sec < SECS.length - 1) setSec(x => x + 1); if (d < 0 && sec > 0) setSec(x => x - 1); };
  useEffect(() => { const h = (e) => { if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nav(1); } if (e.key === "ArrowLeft") { e.preventDefault(); nav(-1); } }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [sec]);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", background: C.bg, minHeight: "100vh", color: C.dark }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=DM+Mono:wght@400;500&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes slideUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Nav */}
      <div style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "740px", margin: "0 auto", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.green})` }} />
            <span style={{ fontWeight: 800, fontSize: "13px" }}>Persistia</span>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {SECS.map((_, i) => (
              <button key={i} onClick={() => setSec(i)} style={{ width: sec === i ? "16px" : "5px", height: "5px", borderRadius: "3px", background: sec === i ? C.accent : i < sec ? `${C.accent}33` : C.border, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "740px", margin: "0 auto", padding: "0 20px 80px" }}>

        {/* 1. HOOK */}
        {sec === 0 && (
          <div style={{ paddingTop: "80px", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FadeIn>
              <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.green})`, marginBottom: "20px" }} />
              <h1 style={{ fontFamily: serif, fontSize: "clamp(30px,5.5vw,46px)", fontWeight: 400, lineHeight: 1.08, marginBottom: "18px", letterSpacing: "-0.02em" }}>
                Cada año, <span style={{ color: C.red }}>1 de cada 3</span><br/>
                universitarios abandona.<br/><br/>
                No porque quiera irse —<br/>
                porque <span style={{ color: C.accent, fontStyle: "italic" }}>nadie supo qué<br/>hacer a tiempo</span>.
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <p style={{ fontSize: "15px", color: C.g500, lineHeight: 1.7, maxWidth: "480px" }}>
                <strong style={{ color: C.dark }}>Persistia</strong> es un agente de IA que le dice a las universidades exactamente qué hacer con cada alumno en riesgo — personalizado, por el canal correcto, en el momento justo.
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ marginTop: "36px", display: "flex", gap: "16px", alignItems: "center" }}>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.green})` }} />
                <span style={{ fontSize: "12px", color: C.g400 }}>Persistia · Pitch 2026</span>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 2. PROBLEM */}
        {sec === 1 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EL PROBLEMA</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "8px" }}>
                La deserción universitaria es una<br/>crisis silenciosa en LATAM.
              </h2>
              <p style={{ fontSize: "13px", color: C.g500, marginBottom: "18px", lineHeight: 1.6 }}>
                Las universidades saben que pierden alumnos. Lo que no tienen es una forma inteligente de evitarlo.
              </p>
            </FadeIn>

            <FadeIn delay={150}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
                {[
                  { n: "50%+", d: "deserción acumulada en LATAM", c: C.red },
                  { n: "42%", d: "abandona por factores económicos", c: C.orange },
                  { n: "$17M+", d: "pérdida anual promedio por institución", c: C.accent },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: s.c, fontFamily: mono }}>{s.n}</div>
                    <div style={{ fontSize: "9px", color: C.g500, marginTop: "3px" }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px", marginBottom: "10px" }}>
                <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "10px" }}>¿POR QUÉ NO LO RESUELVEN?</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { pain: "La data del alumno está dispersa en 5-6 sistemas que no se hablan entre sí", icon: "🔀" },
                    { pain: "Las universidades pequeñas no tienen equipo de retención — el coordinador hace todo", icon: "🏫" },
                    { pain: "Las medianas trabajan con Excel y reuniones semanales — la info llega con desfase", icon: "📊" },
                    { pain: "Las grandes tienen equipos pero la orquestación manual no escala", icon: "🎓" },
                    { pain: "Las soluciones existentes cuestan $50K+/año, son genéricas, o solo muestran dashboards", icon: "💸" },
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                      <span style={{ fontSize: "14px", flexShrink: 0 }}>{p.icon}</span>
                      <span style={{ fontSize: "11px", color: C.g600, lineHeight: 1.5 }}>{p.pain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={450}>
              <div style={{ padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.red}22` }}>
                <div style={{ fontSize: "12px", color: C.g600, lineHeight: 1.6 }}>
                  <strong style={{ color: C.dark }}>El gap:</strong> No existe una solución en LATAM que no solo diagnostique quién se va, sino que prescriba qué hacer, y orqueste la ejecución con los equipos que ya tiene la universidad.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 3. SOLUTION */}
        {sec === 2 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>NUESTRA SOLUCIÓN</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "8px" }}>
                Un agente de IA que piensa<br/>por la universidad — y le dice a<br/>cada equipo <span style={{ color: C.accent, fontStyle: "italic" }}>qué hacer</span>.
              </h2>
              <p style={{ fontSize: "13px", color: C.g500, marginBottom: "20px", lineHeight: 1.6, maxWidth: "540px" }}>
                Persistia cruza toda la data dispersa del alumno, diagnostica la causa raíz de por qué está en riesgo, y prescribe la acción exacta — personalizada, por el canal correcto, en el momento justo. Después, orquesta la ejecución con los equipos que ya tiene la universidad.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "18px" }}>
                {[
                  { step: "1", icon: "📡", title: "Diagnostica", desc: "Cruza datos financieros, académicos, CRM, LMS, becas y reclamos. Arma el perfil 360 del alumno.", color: "#6366F1" },
                  { step: "2", icon: "🎯", title: "Prescribe", desc: "Define qué hacer con cada alumno: la acción, el canal, el mensaje, el timing, y el plan B.", color: C.orange },
                  { step: "3", icon: "⚡", title: "Orquesta", desc: "Le dice a cada equipo qué hacer con contexto completo. Mide resultados y aprende.", color: C.green },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "24px", marginBottom: "6px" }}>{s.icon}</div>
                    <div style={{ fontSize: "8px", color: s.color, fontWeight: 800, fontFamily: mono, marginBottom: "4px" }}>PASO {s.step}</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "4px" }}>{s.title}</div>
                    <div style={{ fontSize: "10px", color: C.g500, lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={380}>
              <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>SE ADAPTA A CUALQUIER UNIVERSIDAD</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {[
                  { icon: "🏫", type: "Pequeña", value: "\"Tu equipo de retención completo — sin contratar a nadie\"" },
                  { icon: "🏛️", type: "Mediana", value: "\"Deja de trabajar con Excel. El agente cruza la data y decide por ti.\"" },
                  { icon: "🎓", type: "Grande", value: "\"Escala tu operación a 200K alumnos sin multiplicar el equipo.\"" },
                ].map((v, i) => (
                  <div key={i} style={{ padding: "10px 14px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, display: "flex", gap: "10px", alignItems: "center" }}>
                    <span style={{ fontSize: "16px" }}>{v.icon}</span>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: C.g700, width: "60px", flexShrink: 0 }}>{v.type}</span>
                    <span style={{ fontSize: "11px", color: C.g500, fontStyle: "italic" }}>{v.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* 4. DEMO - Camila */}
        {sec === 3 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>DEMO</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "16px" }}>
                Camila tiene 6 problemas en 6 sistemas.<br/>
                <span style={{ color: C.orange }}>El agente los conecta en segundos.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
                {/* Student */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>👩‍🎓</div>
                  <div>
                    <span style={{ fontSize: "12px", fontWeight: 700 }}>Camila Rojas</span>
                    <span style={{ fontSize: "10px", color: C.g500 }}> · 5to ciclo · 82 créditos · Período de rematrícula</span>
                  </div>
                </div>

                {/* Signals */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3px", marginBottom: "12px" }}>
                  {["Debe 2 cuotas", "Reclamo por horarios", "Beca negada", "Notas bajaron", "No contesta", "No se matriculó"].map((s, i) => (
                    <div key={i} style={{ padding: "5px", background: C.redLt, borderRadius: "4px", fontSize: "8px", color: C.red, textAlign: "center", fontWeight: 600 }}>{s}</div>
                  ))}
                </div>

                {/* Connection */}
                <div style={{ padding: "10px 12px", background: `${C.accent}08`, borderRadius: "8px", borderLeft: `3px solid ${C.accent}`, marginBottom: "8px" }}>
                  <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, marginBottom: "3px" }}>LO QUE EL AGENTE CONECTA</div>
                  <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
                    Registró prácticas pre-profesionales + pidió cambio a turno nocturno. <strong>Empezó a trabajar.</strong> Eso explica la deuda, las notas, el reclamo por horarios. No quiere irse — su vida cambió y nadie lo conectó.
                  </div>
                </div>

                {/* Prescription */}
                <div style={{ padding: "10px 12px", background: C.greenBg, borderRadius: "8px", borderLeft: `3px solid ${C.green}`, marginBottom: "8px" }}>
                  <div style={{ fontSize: "10px", color: C.greenDk, fontWeight: 700, marginBottom: "3px" }}>LO QUE PRESCRIBE</div>
                  <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
                    Resolver horarios nocturnos + fraccionamiento de deuda + alternativas a beca → WhatsApp personalizado → si no responde en 48h, llamada con contexto completo → rematrícula guiada.
                  </div>
                </div>

                {/* Orchestration */}
                <div style={{ padding: "10px 12px", background: C.orangeBg, borderRadius: "8px", borderLeft: `3px solid ${C.orange}`, marginBottom: "12px" }}>
                  <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, marginBottom: "3px" }}>LO QUE ORQUESTA</div>
                  <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
                    Cobranzas recibe contexto completo (no solo el monto). Contact Center recibe la ficha con el historial de lo que ya pasó. Comunicaciones genera el mensaje personalizado. Cada equipo sabe qué hacer sin pisarse.
                  </div>
                </div>

                {/* Result */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                  {[
                    { l: "Resultado", v: "Se rematriculó", c: C.green },
                    { l: "Valor salvado", v: "S/ 32,400", c: C.orange },
                    { l: "Tiempo total", v: "4 horas (no 7 días)", c: C.accent },
                  ].map((r, i) => (
                    <div key={i} style={{ padding: "10px", background: C.g100, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "8px", color: C.g500 }}>{r.l}</div>
                      <div style={{ fontSize: "13px", fontWeight: 800, color: r.c }}>{r.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 5. MARKET */}
        {sec === 4 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.blue, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>OPORTUNIDAD DE MERCADO</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                3,500+ universidades privadas en LATAM.<br/>
                <span style={{ color: C.blue, fontStyle: "italic" }}>Ninguna tiene esta solución.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
                {[
                  { label: "TAM", value: "$18.3B", sub: "EdTech LATAM 2025", detail: "→ $51.3B en 2034 (CAGR 11.8%)", color: C.blue },
                  { label: "SAM", value: "$2.1B", sub: "Retención + empleabilidad", detail: "Universidades privadas LATAM", color: C.accent },
                  { label: "SOM (Año 3)", value: "$7.1M", sub: "35-50 universidades", detail: "ARPU $1,400/mes × 12 meses", color: C.green },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "9px", color: m.color, fontWeight: 700, marginBottom: "4px" }}>{m.label}</div>
                    <div style={{ fontSize: "24px", fontWeight: 800, fontFamily: mono }}>{m.value}</div>
                    <div style={{ fontSize: "9px", color: C.g600, fontWeight: 600, marginTop: "2px" }}>{m.sub}</div>
                    <div style={{ fontSize: "8px", color: C.g400, marginTop: "4px" }}>{m.detail}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={380}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <div style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, padding: "14px" }}>
                  <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, marginBottom: "8px" }}>COMPETENCIA</div>
                  {[
                    { name: "Ellucian/EAB", gap: "Solo diagnóstico. $50K+/año. No prescriben." },
                    { name: "CRMs educativos", gap: "Gestionan contacto. No analizan ni prescriben." },
                    { name: "Dashboards BI", gap: "Muestran datos. No dicen qué hacer." },
                  ].map((c, i) => (
                    <div key={i} style={{ marginBottom: "6px" }}>
                      <div style={{ fontSize: "10px", fontWeight: 700 }}>{c.name}</div>
                      <div style={{ fontSize: "9px", color: C.g500 }}>{c.gap}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.green}22`, padding: "14px" }}>
                  <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, marginBottom: "8px" }}>VENTAJA COMPETITIVA</div>
                  {[
                    "Única solución con diagnóstico + prescripción + orquestación",
                    "Precio accesible para LATAM ($800-3,500/mes)",
                    "Equipo con acceso a datos reales de 200K alumnos",
                    "Visión de largo plazo: retención → empleabilidad → credit scoring",
                  ].map((v, i) => (
                    <div key={i} style={{ fontSize: "9px", color: C.g600, padding: "2px 0", display: "flex", gap: "4px" }}>
                      <span style={{ color: C.green }}>✓</span> {v}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ marginTop: "10px", padding: "10px 14px", background: C.greenBg, borderRadius: "8px" }}>
                <div style={{ fontSize: "10px", color: C.greenDk }}>
                  <strong>Validación:</strong> Quipu (Colombia) levantó $1.1M en 2025 con tesis similar — confirma que hay apetito de mercado.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 6. BUSINESS MODEL */}
        {sec === 5 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>MODELO DE NEGOCIO</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                SaaS B2B. Fee mensual que<br/>escala con el cliente.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
                {[
                  { tier: "Starter", price: "$800", per: "/mes", for: "< 5K alumnos", desc: "Scoring + prescripción por segmento", color: C.blue },
                  { tier: "Growth", price: "$1,800", per: "/mes", for: "5-30K alumnos", desc: "Personalización por alumno + multicanal", color: C.accent },
                  { tier: "Enterprise", price: "$3,500+", per: "/mes", for: "30K+ alumnos", desc: "API + ML propio + multi-sede", color: C.green },
                ].map((t, i) => (
                  <div key={i} style={{ padding: "16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "10px", color: t.color, fontWeight: 800 }}>{t.tier}</div>
                    <div style={{ marginTop: "4px" }}>
                      <span style={{ fontSize: "24px", fontWeight: 800, fontFamily: mono }}>{t.price}</span>
                      <span style={{ fontSize: "10px", color: C.g500 }}>{t.per}</span>
                    </div>
                    <div style={{ fontSize: "9px", color: C.g400, marginTop: "4px" }}>{t.for}</div>
                    <div style={{ fontSize: "9px", color: C.g500, marginTop: "6px", lineHeight: 1.3 }}>{t.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={350}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px", marginBottom: "16px" }}>
                {[
                  { label: "ARPU", value: "$1,400", sub: "/mes", c: C.green },
                  { label: "CAC", value: "$2-4K", sub: "piloto → conversión", c: C.orange },
                  { label: "LTV (24m)", value: "$33.6K", sub: "por cliente", c: C.accent },
                  { label: "LTV:CAC", value: "8-16x", sub: "saludable", c: C.cyan },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "10px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "8px", color: m.c, fontWeight: 700 }}>{m.label}</div>
                    <div style={{ fontSize: "15px", fontWeight: 800, fontFamily: mono }}>{m.value}</div>
                    <div style={{ fontSize: "8px", color: C.g500 }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={480}>
              <div style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, padding: "16px" }}>
                <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "8px" }}>VISIÓN DE LARGO PLAZO</div>
                <div style={{ display: "flex", gap: "4px" }}>
                  {[
                    { phase: "HOY", label: "Agente de Retención IA", c: C.accent },
                    { phase: "AÑO 2", label: "Retención + Empleabilidad", c: C.cyan },
                    { phase: "AÑO 3+", label: "EduScore (Credit Scoring)", c: C.orange },
                    { phase: "AÑO 5+", label: "Credit Marketplace", c: C.green },
                  ].map((v, i) => (
                    <div key={i} style={{ flex: 1, padding: "8px 6px", background: `${v.c}08`, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "7px", color: v.c, fontWeight: 800, fontFamily: mono }}>{v.phase}</div>
                      <div style={{ fontSize: "8px", color: C.g700, fontWeight: 600, marginTop: "2px" }}>{v.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 7. TEAM */}
        {sec === 6 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EQUIPO FUNDADOR</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                Tres perfiles complementarios.<br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>El problema, la plataforma y los modelos.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
                {[
                  {
                    initials: "MV", name: "Mario Villacorta",
                    role: "CEO — Negocio & Dominio",
                    color: C.accent,
                    bg: [C.accent, C.green],
                    skills: ["Retention Strategy Manager — Laureate Education", "Opera retención para 200K+ alumnos en 3 instituciones", "6 años banca + 2 tech + 2 educación", "Las reglas NBA como IP — sabe qué funciona"],
                    brings: "El problema, los datos y el primer cliente",
                  },
                  {
                    initials: "—", name: "Co-founder",
                    role: "CTO — Producto & Plataforma",
                    color: C.cyan,
                    bg: [C.cyan, C.blue],
                    skills: ["Plataforma de empleabilidad universitaria con IA", "Pilotos activos con universidades", "Infraestructura tech para escalar", "Experiencia en producto B2B EdTech"],
                    brings: "La plataforma, el equipo tech y la capa de empleabilidad",
                  },
                  {
                    initials: "—", name: "Co-founder",
                    role: "CDO — Data Science & Modelos",
                    color: C.orange,
                    bg: [C.orange, C.red],
                    skills: ["Ciencia de datos / Machine Learning", "Modelos predictivos y scoring", "Feature engineering sobre datos educativos", "Pipelines de datos y automatización"],
                    brings: "Los modelos que hacen que el agente sea inteligente",
                  },
                ].map((m, i) => (
                  <div key={i} style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "16px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `linear-gradient(135deg, ${m.bg[0]}, ${m.bg[1]})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 800, color: "white", marginBottom: "10px" }}>{m.initials}</div>
                    <div style={{ fontSize: "13px", fontWeight: 800, marginBottom: "2px" }}>{m.name}</div>
                    <div style={{ fontSize: "10px", color: m.color, fontWeight: 600, marginBottom: "10px" }}>{m.role}</div>
                    {m.skills.map((s, j) => (
                      <div key={j} style={{ fontSize: "9px", color: C.g500, padding: "2px 0", display: "flex", gap: "4px", lineHeight: 1.3 }}>
                        <span style={{ color: m.color, flexShrink: 0 }}>·</span> {s}
                      </div>
                    ))}
                    <div style={{ marginTop: "10px", padding: "8px", background: `${m.color}08`, borderRadius: "6px" }}>
                      <div style={{ fontSize: "9px", color: m.color, fontWeight: 600 }}>Trae: {m.brings}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.green}22` }}>
                <div style={{ fontSize: "12px", color: C.g600, lineHeight: 1.6 }}>
                  <strong style={{ color: C.dark }}>¿Por qué nosotros?</strong> No es una idea de escritorio. Uno de nosotros opera retención para 200K alumnos todos los días. Otro ya tiene una plataforma con pilotos activos. El tercero construye los modelos que lo hacen inteligente. Conocemos el problema, tenemos acceso al mercado, y podemos construir la solución.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 8. CLOSE */}
        {sec === 7 && (
          <div style={{ paddingTop: "80px", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FadeIn>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(26px,5vw,38px)", fontWeight: 400, lineHeight: 1.12, marginBottom: "24px" }}>
                Cada semestre, miles de alumnos<br/>
                abandonan la universidad<br/>
                por algo que se podía resolver.<br/><br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>Persistia existe para que eso<br/>deje de pasar.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "28px", maxWidth: "500px" }}>
                {[
                  { icon: "📡", label: "Diagnostica", sub: "por qué se va" },
                  { icon: "🎯", label: "Prescribe", sub: "qué hacer para que se quede" },
                  { icon: "⚡", label: "Orquesta", sub: "quién hace qué, cuándo" },
                ].map((p, i) => (
                  <div key={i} style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "18px", marginBottom: "4px" }}>{p.icon}</div>
                    <div style={{ fontSize: "11px", fontWeight: 700 }}>{p.label}</div>
                    <div style={{ fontSize: "9px", color: C.g500 }}>{p.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, padding: "16px", marginBottom: "20px", maxWidth: "500px" }}>
                <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.06em", marginBottom: "10px" }}>PRÓXIMOS PASOS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { step: "1", text: "Validar el MVP con data real de Laureate Education (ya tenemos acceso)", time: "Mes 1-2", color: C.accent },
                    { step: "2", text: "Piloto A/B con una institución: grupo con agente vs grupo sin agente", time: "Mes 3-4", color: C.orange },
                    { step: "3", text: "Medir resultados y buscar inversión pre-seed ($50-150K) para escalar", time: "Mes 5-6", color: C.green },
                  ].map((s, i) => (
                    <div key={i} style={{ display: "flex", gap: "10px", alignItems: "start" }}>
                      <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: `${s.color}12`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: 800, color: s.color, flexShrink: 0, fontFamily: mono }}>{s.step}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "11px", color: C.dark, lineHeight: 1.4 }}>{s.text}</div>
                      </div>
                      <span style={{ fontSize: "9px", color: s.color, fontWeight: 700, fontFamily: mono, flexShrink: 0 }}>{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={650}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.green})` }} />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800 }}>Persistia</div>
                  <div style={{ fontSize: "10px", color: C.g500 }}>2026</div>
                </div>
              </div>
            </FadeIn>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 50, background: "rgba(250,250,248,0.95)", backdropFilter: "blur(12px)", borderTop: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "740px", margin: "0 auto", padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button onClick={() => nav(-1)} disabled={sec === 0} style={{ padding: "7px 16px", background: sec === 0 ? C.g100 : C.card, border: `1px solid ${C.border}`, borderRadius: "7px", cursor: sec === 0 ? "default" : "pointer", fontSize: "11px", fontWeight: 600, color: sec === 0 ? C.g400 : C.dark, opacity: sec === 0 ? 0.4 : 1 }}>←</button>
          <span style={{ fontSize: "10px", color: C.g500 }}>{sec + 1}/{SECS.length} · {LABS[sec]}</span>
          <button onClick={() => nav(1)} disabled={sec === SECS.length - 1} style={{ padding: "7px 16px", background: sec === SECS.length - 1 ? C.g100 : C.accent, border: "none", borderRadius: "7px", cursor: sec === SECS.length - 1 ? "default" : "pointer", fontSize: "11px", fontWeight: 700, color: sec === SECS.length - 1 ? C.g400 : "white", opacity: sec === SECS.length - 1 ? 0.4 : 1 }}>→</button>
        </div>
      </div>
    </div>
  );
}
