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

const SECS = ["hook","problem","solution","camila","product","market","business","traction","competition","team","vision","ask"];
const LABS = ["Persistia","Problema","Solución","Caso real","Producto","Mercado","Negocio","Tracción","Competencia","Equipo","Visión","El ask"];

export default function PitchDeckFull() {
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
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})` }} />
            <span style={{ fontWeight: 800, fontSize: "13px" }}>Persistia</span>
            <span style={{ fontSize: "8px", color: C.g500, fontFamily: mono, background: C.g100, padding: "2px 6px", borderRadius: "3px" }}>PITCH DECK</span>
          </div>
          <div style={{ display: "flex", gap: "2px" }}>
            {SECS.map((_, i) => (
              <button key={i} onClick={() => setSec(i)} style={{ width: sec === i ? "14px" : "4px", height: "4px", borderRadius: "2px", background: sec === i ? C.accent : i < sec ? `${C.accent}33` : C.border, border: "none", cursor: "pointer", transition: "all 0.3s" }} />
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
              <h1 style={{ fontFamily: serif, fontSize: "clamp(32px,6vw,50px)", fontWeight: 400, lineHeight: 1.08, marginBottom: "18px", letterSpacing: "-0.02em" }}>
                Las universidades pierden<br/>
                al <span style={{ color: C.red }}>33%</span> de sus alumnos.<br/><br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>Persistia</span> les dice exactamente<br/>
                qué hacer para evitarlo.
              </h1>
            </FadeIn>
            <FadeIn delay={300}>
              <p style={{ fontSize: "15px", color: C.g500, lineHeight: 1.7, maxWidth: "480px" }}>
                Agente de IA que cruza toda la data del alumno, diagnostica por qué se va, y prescribe la acción exacta para retenerlo — personalizada, por el canal correcto, en el momento justo.
              </p>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ marginTop: "32px", fontSize: "10px", color: C.g400 }}>Persistia · Pitch Deck · 2026</div>
            </FadeIn>
          </div>
        )}

        {/* 2. PROBLEM */}
        {sec === 1 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.red, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EL PROBLEMA</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                La deserción es una crisis de<br/>$18B+ — y nadie la resuelve bien.
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "16px" }}>
                {[
                  { n: "50%+", d: "deserción acumulada LATAM", c: C.red },
                  { n: "42%", d: "por factores económicos", c: C.orange },
                  { n: "3,500+", d: "universidades privadas LATAM", c: C.accent },
                ].map((s, i) => (
                  <div key={i} style={{ padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "22px", fontWeight: 800, color: s.c, fontFamily: mono }}>{s.n}</div>
                    <div style={{ fontSize: "9px", color: C.g500, marginTop: "3px" }}>{s.d}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              {[
                { type: "🏫 Universidad pequeña", pain: "No tiene equipo de retención. El coordinador hace todo solo. Cuando se entera que un alumno se va, ya se fue." },
                { type: "🏛️ Universidad mediana", pain: "Tiene equipo básico pero trabaja con Excel y reuniones semanales. La información llega con días de desfase." },
                { type: "🎓 Universidad grande", pain: "La orquestación entre equipos es insostenible. El equipo de estrategia se quema manteniendo la segmentación al día." },
              ].map((u, i) => (
                <div key={i} style={{ padding: "12px 14px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, marginBottom: "4px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700 }}>{u.type}</span>
                  <span style={{ fontSize: "11px", color: C.g500 }}> — {u.pain}</span>
                </div>
              ))}
            </FadeIn>
            <FadeIn delay={450}>
              <div style={{ marginTop: "12px", padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.accent}22` }}>
                <div style={{ fontSize: "12px", color: C.g600, lineHeight: 1.6 }}>
                  Las soluciones existentes en LATAM son <strong style={{ color: C.dark }}>caras ($50K+/año), genéricas, o solo muestran dashboards sin decir qué hacer</strong>. No hay una solución que prescriba la acción correcta para cada alumno y orqueste la ejecución.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 3. SOLUTION */}
        {sec === 2 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>LA SOLUCIÓN</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "8px" }}>
                Un agente de IA que piensa<br/>por la universidad.
              </h2>
              <p style={{ fontSize: "13px", color: C.g500, marginBottom: "20px", lineHeight: 1.6, maxWidth: "520px" }}>
                No es un dashboard más. Es un sistema que cruza toda la data dispersa, diagnostica la causa raíz de cada alumno, y prescribe exactamente qué hacer — personalizado, por el canal correcto, en el momento justo.
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "18px" }}>
                {[
                  { step: "1", icon: "📡", title: "Cruza toda la data", desc: "Financiera, académica, CRM, LMS, becas, reclamos — arma el perfil 360 del alumno en segundos.", color: "#6366F1" },
                  { step: "2", icon: "🎯", title: "Prescribe la acción", desc: "Para cada alumno: qué hacer, por qué canal, con qué mensaje, y qué hacer si no responde.", color: C.orange },
                  { step: "3", icon: "⚡", title: "Orquesta los equipos", desc: "Le dice a cada equipo qué hacer con contexto completo. Evita que se pisen. Mide y aprende.", color: C.green },
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
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "10px" }}>
                {[
                  { t: "No reemplaza equipos", d: "Los potencia. Cada persona recibe mejor información y acciones más claras.", icon: "👥" },
                  { t: "No requiere data perfecta", d: "Arranca con CSVs semanales. Se sofistica después.", icon: "🔌" },
                  { t: "Se adapta a cada institución", d: "Canales, acciones y reglas configurables por universidad.", icon: "⚙️" },
                  { t: "Mejora solo", d: "Cada resultado retroalimenta el modelo. Aprende qué funciona.", icon: "🔄" },
                ].map((f, i) => (
                  <div key={i} style={{ padding: "10px 12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, display: "flex", gap: "8px", alignItems: "start" }}>
                    <span style={{ fontSize: "14px" }}>{f.icon}</span>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700 }}>{f.t}</div>
                      <div style={{ fontSize: "9px", color: C.g500, lineHeight: 1.4 }}>{f.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.green}22` }}>
                <div style={{ fontSize: "9px", color: C.green, fontWeight: 700, marginBottom: "4px" }}>NORTH STAR METRIC</div>
                <div style={{ fontSize: "11px", color: C.g600, lineHeight: 1.5 }}>
                  <strong style={{ color: C.dark }}>Ingresos retenidos recuperados</strong> por acciones coordinadas dentro de Persistia. No medimos actividad — medimos revenue salvado.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 4. CAMILA */}
        {sec === 3 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>CASO REAL</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "16px" }}>
                6 problemas. 6 sistemas. <span style={{ color: C.orange }}>Nadie los conecta.</span><br/>El agente sí.
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.accent}, ${C.cyan})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>👩‍🎓</div>
                  <div><span style={{ fontSize: "12px", fontWeight: 700 }}>Camila Rojas</span><span style={{ fontSize: "10px", color: C.g500 }}> · 5to ciclo · 82 créditos · Período interciclo</span></div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3px", marginBottom: "10px" }}>
                  {["Debe 2 cuotas", "Reclamo por horarios", "Beca negada", "Notas bajaron", "No contesta", "No se matriculó"].map((s, i) => (
                    <div key={i} style={{ padding: "5px", background: C.redLt, borderRadius: "4px", fontSize: "8px", color: C.red, textAlign: "center", fontWeight: 600 }}>{s}</div>
                  ))}
                </div>
                <div style={{ padding: "10px", background: `${C.accent}08`, borderRadius: "8px", borderLeft: `3px solid ${C.accent}`, marginBottom: "8px" }}>
                  <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
                    <strong style={{ color: C.accent }}>El agente conecta:</strong> Registró prácticas + pidió turno nocturno → empezó a trabajar. Eso explica todo.
                  </div>
                </div>
                <div style={{ padding: "10px", background: C.greenBg, borderRadius: "8px", borderLeft: `3px solid ${C.green}`, marginBottom: "10px" }}>
                  <div style={{ fontSize: "11px", color: C.g700, lineHeight: 1.5 }}>
                    <strong style={{ color: C.greenDk }}>Prescribe:</strong> Horarios nocturnos + fraccionamiento + alternativas a beca → WhatsApp personalizado → escalamiento a llamada con contexto.
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                  {[
                    { l: "Resultado", v: "Se rematriculó", c: C.green },
                    { l: "Valor salvado", v: "S/ 32,400", c: C.orange },
                    { l: "Tiempo", v: "4 horas (no 7 días)", c: C.accent },
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

        {/* 5. PRODUCT */}
        {sec === 4 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EL PRODUCTO</div>
              <h2 style={{ fontFamily: serif, fontSize: "26px", fontWeight: 400, lineHeight: 1.2, marginBottom: "16px" }}>
                Se adapta a cualquier universidad.<br/>Desde la pequeña hasta la red de 200K.
              </h2>
            </FadeIn>
            <FadeIn delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { icon: "🏫", client: "Universidad pequeña", hook: "Tu equipo de retención completo — sin contratar a nadie", detail: "El agente detecta, decide y prepara la comunicación. El coordinador solo aprueba.", color: C.red },
                  { icon: "🏛️", client: "Universidad mediana", hook: "Deja de trabajar con Excel y reuniones semanales", detail: "Reemplaza el proceso manual de cruzar datos. El equipo pasa de operar a supervisar.", color: C.orange },
                  { icon: "🎓", client: "Universidad grande / Red", hook: "Escala la operación sin multiplicar el equipo", detail: "Orquestación individual para 200K+ alumnos. Cada equipo recibe contexto completo.", color: C.purple },
                ].map((v, i) => (
                  <div key={i} style={{ padding: "14px 16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ fontSize: "16px" }}>{v.icon}</span>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: v.color }}>{v.client}</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "3px" }}>{v.hook}</div>
                    <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.5 }}>{v.detail}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={350}>
              <div style={{ marginTop: "12px", padding: "14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.green}22` }}>
                <div style={{ fontSize: "12px", color: C.g600, lineHeight: 1.6 }}>
                  <strong style={{ color: C.dark }}>Un solo producto que escala con el cliente.</strong> Misma tecnología, diferente profundidad de funcionalidades según el plan.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 6. MARKET */}
        {sec === 5 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.blue, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>MERCADO</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                $18.3B en EdTech LATAM.<br/>
                <span style={{ color: C.blue, fontStyle: "italic" }}>Creciendo 12% anual.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
                {[
                  { label: "TAM", value: "$18.3B", sub: "EdTech LATAM 2025 → $51.3B en 2034", color: C.blue },
                  { label: "SAM", value: "$2.1B", sub: "Retención + empleabilidad universitaria privada", color: C.accent },
                  { label: "SOM (Año 3)", value: "$7.1M", sub: "35-50 universidades × $1,400 ARPU × 12 meses", color: C.green },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "9px", color: m.color, fontWeight: 700, marginBottom: "4px" }}>{m.label}</div>
                    <div style={{ fontSize: "24px", fontWeight: 800, fontFamily: mono }}>{m.value}</div>
                    <div style={{ fontSize: "9px", color: C.g500, marginTop: "4px" }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={380}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {[
                  { label: "Perú", value: "1,100+", sub: "universidades privadas", color: C.accent },
                  { label: "LATAM", value: "3,500+", sub: "universidades privadas", color: C.cyan },
                  { label: "CAGR EdTech", value: "11.8%", sub: "2025-2034", color: C.orange },
                  { label: "Validación", value: "Quipu", sub: "Colombia — levantó $1.1M con tesis similar (2025)", color: C.green },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "8px", color: m.color, fontWeight: 700 }}>{m.label}</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, fontFamily: mono }}>{m.value}</div>
                    <div style={{ fontSize: "8px", color: C.g500 }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* 7. BUSINESS MODEL */}
        {sec === 6 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>MODELO DE NEGOCIO</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                SaaS B2B. Fee mensual que<br/>
                <span style={{ color: C.green, fontStyle: "italic" }}>escala con el cliente</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "14px" }}>
                {[
                  { tier: "Starter", price: "$800/mes", alumnos: "< 5K alumnos", features: "Scoring + prescripción por segmento + dashboard básico", color: C.blue },
                  { tier: "Growth", price: "$1,800/mes", alumnos: "5-30K alumnos", features: "Todo Starter + personalización por alumno + orquestación multicanal", color: C.accent },
                  { tier: "Enterprise", price: "$3,500+/mes", alumnos: "30K+ alumnos", features: "Todo Growth + API + ML propio + multi-sede + onboarding dedicado", color: C.green },
                ].map((t, i) => (
                  <div key={i} style={{ padding: "16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: "10px", color: t.color, fontWeight: 800, marginBottom: "4px" }}>{t.tier}</div>
                    <div style={{ fontSize: "22px", fontWeight: 800, fontFamily: mono, marginBottom: "2px" }}>{t.price}</div>
                    <div style={{ fontSize: "9px", color: C.g500, marginBottom: "8px" }}>{t.alumnos}</div>
                    <div style={{ fontSize: "9px", color: C.g400, lineHeight: 1.4 }}>{t.features}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={380}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "6px" }}>
                {[
                  { label: "ARPU", value: "$1,400", sub: "/mes", c: C.green },
                  { label: "CAC", value: "$2-4K", sub: "piloto → conversión", c: C.orange },
                  { label: "LTV (24m)", value: "$33.6K", sub: "por cliente", c: C.accent },
                  { label: "LTV:CAC", value: "8-16x", sub: "saludable", c: C.cyan },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "10px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "8px", color: m.c, fontWeight: 700 }}>{m.label}</div>
                    <div style={{ fontSize: "16px", fontWeight: 800, fontFamily: mono }}>{m.value}</div>
                    <div style={{ fontSize: "8px", color: C.g500 }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* 8. TRACTION */}
        {sec === 7 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>TRACCIÓN</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                No es una idea.<br/>
                <span style={{ color: C.orange, fontStyle: "italic" }}>Es un problema que opero todos los días.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  { icon: "🔑", title: "Acceso a datos reales", detail: "Opero retención para 200K+ alumnos en 3 instituciones (UPC, Cibertec, UPN). Conozco la data, los procesos y los dolores desde adentro.", color: C.accent },
                  { icon: "🧠", title: "Reglas NBA como IP", detail: "Las reglas de decisión que el agente usa las escribí yo — basadas en 2 años de experiencia real gestionando retención y rematrícula.", color: C.orange },
                  { icon: "🏢", title: "Primer cliente piloto listo", detail: "Laureate Education Perú. No necesito salir a vender desde cero — puedo validar el producto en mi propia operación.", color: C.green },
                  { icon: "🤝", title: "Socio potencial en empleabilidad", detail: "En conversación con emprendedor que tiene plataforma de empleabilidad con IA + pilotos activos con universidades. Sinergia natural.", color: C.cyan },
                  { icon: "📊", title: "Prototipo funcional", detail: "Motor de scoring, reglas NBA, y caso de demo construidos. No es PowerPoint — es lógica que funciona sobre data real.", color: C.purple },
                ].map((t, i) => (
                  <div key={i} style={{ padding: "12px 14px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, display: "flex", gap: "12px", alignItems: "start" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${t.color}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{t.icon}</div>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: t.color, marginBottom: "2px" }}>{t.title}</div>
                      <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.5 }}>{t.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* 9. COMPETITION */}
        {sec === 8 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.purple, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>COMPETENCIA</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                Hay jugadores. Pero nadie hace<br/>
                <span style={{ color: C.purple, fontStyle: "italic" }}>lo que nosotros hacemos</span>.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: "0", fontSize: "9px" }}>
                  {["", "Diagnóstico", "Prescripción", "Orquestación", "Precio LATAM"].map((h, i) => (
                    <div key={i} style={{ padding: "10px 8px", background: C.g100, fontWeight: 700, color: C.g500, borderBottom: `1px solid ${C.border}`, textAlign: i > 0 ? "center" : "left" }}>{h}</div>
                  ))}
                  {[
                    { name: "Equipo interno (status quo)", d: "Manual", p: "Intuición", o: "Excel + reuniones", price: "$$$$ en sueldos", highlight: false },
                    { name: "Ellucian/EAB (EE.UU.)", d: "✓", p: "Parcial", o: "✗", price: "$50K+/año", highlight: false },
                    { name: "Dashboards BI genéricos", d: "✓", p: "✗", o: "✗", price: "$5-15K/año", highlight: false },
                    { name: "CRMs educativos LATAM", d: "Parcial", p: "✗", o: "Parcial", price: "$10-30K/año", highlight: false },
                    { name: "Quipu (Colombia)", d: "✓", p: "✓", o: "✗", price: "Desconocido", highlight: false },
                    { name: "Persistia", d: "✓", p: "✓", o: "✓", price: "$800-3.5K/mes", highlight: true },
                  ].map((r, i) => (
                    ["name", "d", "p", "o", "price"].map((col, j) => (
                      <div key={`${i}-${j}`} style={{
                        padding: "10px 8px", borderBottom: `1px solid ${C.border}`,
                        background: r.highlight ? `${C.accent}08` : "transparent",
                        fontWeight: r.highlight || (j === 0) ? 700 : 400,
                        color: r.highlight ? C.accent : col === "name" ? C.dark : r[col] === "✓" ? C.green : r[col] === "✗" ? C.red : C.g500,
                        textAlign: j > 0 ? "center" : "left",
                        fontSize: "10px",
                      }}>{r[col]}</div>
                    ))
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ marginTop: "10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                <div style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: "9px", color: C.purple, fontWeight: 700, marginBottom: "6px" }}>COMPETIDOR REAL #1: EL STATUS QUO</div>
                  <div style={{ fontSize: "10px", color: C.g600, lineHeight: 1.5 }}>
                    La mayoría de universidades "resuelven" retención con equipos internos, Excel y reuniones. Funciona parcialmente pero no escala, depende de personas clave, y no se puede replicar.
                  </div>
                </div>
                <div style={{ padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: "9px", color: C.accent, fontWeight: 700, marginBottom: "6px" }}>NUESTRA VENTAJA DEFENSIBLE</div>
                  <div style={{ fontSize: "10px", color: C.g600, lineHeight: 1.5 }}>
                    Las reglas NBA son IP construida con años de experiencia operando retención real. No se puede copiar con un dashboard. Y cada cliente que usa Persistia genera data que mejora el modelo para todos.
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={550}>
              <div style={{ marginTop: "8px", padding: "12px", background: C.card, borderRadius: "8px", border: `1px solid ${C.accent}22` }}>
                <div style={{ fontSize: "11px", color: C.g600, lineHeight: 1.6 }}>
                  <strong style={{ color: C.accent }}>Persistia es la única solución en LATAM que cubre las 3 capas:</strong> diagnóstico (¿quién está en riesgo?), prescripción (¿qué hago con cada uno?), y orquestación (¿quién ejecuta qué, cuándo?). A un precio accesible para la región.
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 10. TEAM */}
        {sec === 9 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.accent, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>EQUIPO</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
                Conozco el problema desde adentro.<br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>Busco al equipo para construir.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ background: C.card, borderRadius: "12px", border: `1px solid ${C.border}`, padding: "20px", marginBottom: "12px" }}>
                <div style={{ display: "flex", gap: "14px", alignItems: "start", marginBottom: "14px" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `linear-gradient(135deg, ${C.accent}, ${C.green})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", flexShrink: 0 }}>MV</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 800 }}>Mario Villacorta</div>
                    <div style={{ fontSize: "11px", color: C.accent }}>Founder — Retention & Engagement Strategy Manager</div>
                    <div style={{ fontSize: "10px", color: C.g500 }}>Laureate Education · Perú</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "12px" }}>
                  {[
                    { y: "6 años", a: "Banca", d: "Carteras masivas, riesgo, cobranza" },
                    { y: "2 años", a: "Tecnología", d: "IA aplicada, prototipos, dashboards" },
                    { y: "2 años", a: "Educación", d: "Retención, rematrícula, revenue" },
                  ].map((e, i) => (
                    <div key={i} style={{ padding: "10px", background: C.g100, borderRadius: "6px", textAlign: "center" }}>
                      <div style={{ fontSize: "16px", fontWeight: 800, color: C.accent, fontFamily: mono }}>{e.y}</div>
                      <div style={{ fontSize: "9px", fontWeight: 700, marginTop: "2px" }}>{e.a}</div>
                      <div style={{ fontSize: "8px", color: C.g500, marginTop: "2px" }}>{e.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={350}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <div style={{ background: C.card, borderRadius: "10px", border: `1px dashed ${C.orange}44`, padding: "16px" }}>
                  <div style={{ fontSize: "10px", color: C.orange, fontWeight: 700, marginBottom: "8px" }}>🔍 BUSCANDO: CTO / CO-FOUNDER TÉCNICO</div>
                  {["Python + ML básico", "React / frontend", "Supabase o PostgreSQL", "Part-time para MVP → full-time después"].map((r, i) => (
                    <div key={i} style={{ fontSize: "10px", color: C.g500, padding: "2px 0" }}>→ {r}</div>
                  ))}
                </div>
                <div style={{ background: C.card, borderRadius: "10px", border: `1px dashed ${C.cyan}44`, padding: "16px" }}>
                  <div style={{ fontSize: "10px", color: C.cyan, fontWeight: 700, marginBottom: "8px" }}>🤝 EN CONVERSACIÓN: SOCIO EMPLEABILIDAD</div>
                  {["Plataforma de empleabilidad con IA", "Pilotos activos con universidades", "Sinergia: retención + empleabilidad", "Juntos = ciclo de vida completo"].map((r, i) => (
                    <div key={i} style={{ fontSize: "10px", color: C.g500, padding: "2px 0" }}>→ {r}</div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        )}

        {/* 11. VISION */}
        {sec === 10 && (
          <div style={{ paddingTop: "50px" }}>
            <FadeIn>
              <div style={{ fontSize: "10px", color: C.green, fontWeight: 700, letterSpacing: "0.12em", marginBottom: "10px", fontFamily: mono }}>VISIÓN</div>
              <h2 style={{ fontFamily: serif, fontSize: "28px", fontWeight: 400, lineHeight: 1.2, marginBottom: "20px" }}>
                Retención es la puerta de entrada.<br/>
                <span style={{ color: C.green, fontStyle: "italic" }}>El destino es mucho más grande.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { phase: "AHORA", title: "Agente de Retención IA", desc: "Prescripción y orquestación para reducir deserción. SaaS para universidades LATAM.", color: C.accent, active: true },
                  { phase: "AÑO 2-3", title: "Persistia Platform", desc: "Retención + empleabilidad en una plataforma. Ciclo de vida estudiantil completo. Datos longitudinales únicos.", color: C.cyan, active: false },
                  { phase: "AÑO 3-5", title: "EduScore", desc: "Credit scoring alternativo basado en datos educativos. El alumno usa su historial académico como activo financiero para acceder a créditos.", color: C.orange, active: false },
                  { phase: "AÑO 5+", title: "Credit Marketplace", desc: "Marketplace donde fintechs acceden a perfiles educativos verificados. Ingresos por transacción. El estudiante es dueño de su data.", color: C.green, active: false },
                ].map((v, i) => (
                  <div key={i} style={{ padding: "14px 16px", background: C.card, borderRadius: "10px", border: `1px solid ${v.active ? v.color + "44" : C.border}`, display: "flex", gap: "12px", alignItems: "start", opacity: v.active ? 1 : 0.8 }}>
                    <div style={{ padding: "3px 8px", background: v.active ? v.color : C.g100, borderRadius: "4px", fontSize: "8px", fontWeight: 800, color: v.active ? "white" : C.g500, fontFamily: mono, flexShrink: 0, marginTop: "2px" }}>{v.phase}</div>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: v.color }}>{v.title}</div>
                      <div style={{ fontSize: "11px", color: C.g500, lineHeight: 1.5 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        )}

        {/* 12. THE ASK */}
        {sec === 11 && (
          <div style={{ paddingTop: "80px", minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <FadeIn>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(26px,5vw,38px)", fontWeight: 400, lineHeight: 1.15, marginBottom: "24px" }}>
                El problema existe.<br/>
                La solución funciona.<br/>
                El mercado es enorme.<br/><br/>
                <span style={{ color: C.accent, fontStyle: "italic" }}>Solo falta construir.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={300}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "24px", maxWidth: "520px" }}>
                {[
                  { icon: "💰", title: "Inversión", detail: "Pre-seed $50-150K para MVP + piloto con 3 instituciones + primeras 5 ventas.", color: C.green },
                  { icon: "🤝", title: "Socio técnico", detail: "CTO / co-founder con experiencia en Python, ML y producto. Part-time → full-time.", color: C.orange },
                  { icon: "🚀", title: "Pilotos", detail: "Universidades que quieran ser early adopters. Tengo acceso a las primeras 3.", color: C.accent },
                ].map((a, i) => (
                  <div key={i} style={{ padding: "16px", background: C.card, borderRadius: "10px", border: `1px solid ${C.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: "24px", marginBottom: "8px" }}>{a.icon}</div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: a.color, marginBottom: "4px" }}>{a.title}</div>
                    <div style={{ fontSize: "10px", color: C.g500, lineHeight: 1.4 }}>{a.detail}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={500}>
              <div style={{ padding: "16px 18px", background: C.card, borderRadius: "10px", border: `1px solid ${C.green}22`, maxWidth: "520px" }}>
                <div style={{ fontSize: "13px", color: C.g600, lineHeight: 1.6 }}>
                  <strong style={{ color: C.dark }}>Mario Villacorta</strong> · Lima, Perú
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={600}>
              <div style={{ marginTop: "24px", fontSize: "10px", color: C.g400 }}>Persistia · Pitch Deck · 2026 · Confidencial</div>
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
