import { useState, useEffect, lazy, Suspense } from "react";

const pages = [
  { 
    id: "agente-retencion", 
    component: lazy(() => import("./pages/agente-retencion")),
    title: "Agente de Retención IA",
    emoji: "🧠",
    audience: "Proyecto interno",
  },
  { 
    id: "partner-pitch", 
    component: lazy(() => import("./pages/partner-pitch")),
    title: "Partner Pitch",
    emoji: "🤝",
    audience: "Socio potencial",
  },
  { 
    id: "pitch-deck", 
    component: lazy(() => import("./pages/pitch-deck")),
    title: "Pitch Deck (Inversores)",
    emoji: "💰",
    audience: "Inversores / Full deck",
  },
  { 
    id: "course-pitch", 
    component: lazy(() => import("./pages/course-pitch")),
    title: "Pitch Curso",
    emoji: "🎤",
    audience: "Curso emprendimiento",
  },
  { 
    id: "tech-deep-dive", 
    component: lazy(() => import("./pages/tech-deep-dive")),
    title: "Technical Deep Dive",
    emoji: "⚙️",
    audience: "Detalle técnico",
  },
];

const ADMIN_PASS = "persistia2026";

function NotFound() {
  return (
    <div style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      background: "#FAFAF8", color: "#0D0D0D", minHeight: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Instrument+Serif&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
      <div style={{ textAlign: "center", maxWidth: "400px", padding: "0 20px" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px", opacity: 0.3 }}>🔒</div>
        <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "24px", marginBottom: "8px" }}>
          Este enlace no existe
        </div>
        <div style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.5 }}>
          Si recibiste un link de presentación, verifica que esté completo.
        </div>
        <div style={{ marginTop: "24px", fontSize: "10px", color: "#9CA3AF" }}>Persistia · 2026</div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);
  const [copied, setCopied] = useState(null);
  const baseUrl = window.location.origin + window.location.pathname;
  const copyLink = (id) => { navigator.clipboard.writeText(`${baseUrl}#/${id}`); setCopied(id); setTimeout(() => setCopied(null), 2000); };

  if (!authed) {
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAF8", color: "#0D0D0D", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;800&family=DM+Mono&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; }`}</style>
        <div style={{ textAlign: "center", maxWidth: "320px", padding: "0 20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "linear-gradient(135deg, #6366F1, #0891B2)" }} />
            <span style={{ fontWeight: 800, fontSize: "15px" }}>Persistia</span>
          </div>
          <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "16px" }}>Panel de administración</div>
          <input type="password" placeholder="Contraseña" value={pass}
            onChange={e => setPass(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && pass === ADMIN_PASS) setAuthed(true); }}
            style={{ width: "100%", padding: "10px 14px", background: "white", border: "1px solid #E5E7EB", borderRadius: "8px", color: "#0D0D0D", fontSize: "13px", outline: "none", marginBottom: "8px", fontFamily: "'DM Mono', monospace" }}
          />
          <button onClick={() => { if (pass === ADMIN_PASS) setAuthed(true); }}
            style={{ width: "100%", padding: "10px", background: "#6366F1", border: "none", borderRadius: "8px", color: "white", fontSize: "12px", fontWeight: 700, cursor: "pointer" }}>
            Entrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAF8", color: "#0D0D0D", minHeight: "100vh", padding: "0 20px" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;800&family=DM+Mono&family=Instrument+Serif&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } a { text-decoration: none; color: inherit; }`}</style>
      <div style={{ maxWidth: "700px", margin: "0 auto", paddingTop: "50px", paddingBottom: "40px" }}>
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "linear-gradient(135deg, #6366F1, #0891B2)" }} />
            <span style={{ fontWeight: 800, fontSize: "15px" }}>Persistia</span>
            <span style={{ fontSize: "9px", color: "#6B7280", fontFamily: "'DM Mono', monospace", background: "#F3F4F6", padding: "2px 8px", borderRadius: "4px" }}>ADMIN</span>
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "28px", fontWeight: 400, lineHeight: 1.1, marginBottom: "8px" }}>
            Presentaciones de Persistia.
          </h1>
          <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.5 }}>
            Cada link es independiente. La persona que lo recibe solo ve esa presentación.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {pages.map((p) => (
            <div key={p.id} style={{ background: "white", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "20px", flexShrink: 0 }}>{p.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: 700 }}>{p.title}</div>
                <div style={{ fontSize: "10px", color: "#6B7280" }}>{p.audience}</div>
              </div>
              <a href={`#/${p.id}`} target="_blank" rel="noopener" style={{ padding: "5px 10px", background: "#F3F4F6", borderRadius: "5px", fontSize: "10px", color: "#6B7280", cursor: "pointer" }}>Ver ↗</a>
              <button onClick={() => copyLink(p.id)} style={{
                padding: "5px 12px", background: copied === p.id ? "#10B981" : "#6366F1",
                border: "none", borderRadius: "5px", fontSize: "10px", fontWeight: 700,
                color: "white", cursor: "pointer", transition: "all 0.2s", minWidth: "80px",
              }}>{copied === p.id ? "✓ Copiado" : "Copiar link"}</button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "20px", textAlign: "center", fontSize: "10px", color: "#9CA3AF" }}>
          Persistia · Admin Panel · 2026
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#FAFAF8", color: "#0D0D0D", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: "24px", height: "24px", border: "2px solid #E5E7EB", borderTopColor: "#6366F1", borderRadius: "50%", animation: "spin 0.6s linear infinite", margin: "0 auto 12px" }} />
        <div style={{ fontSize: "12px", color: "#6B7280" }}>Cargando...</div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash.replace("#/", "") || "");
  useEffect(() => {
    const h = () => setRoute(window.location.hash.replace("#/", "") || "");
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);

  if (!route) return <NotFound />;
  if (route === "admin") return <AdminDashboard />;

  const page = pages.find(p => p.id === route);
  if (!page) return <NotFound />;

  const Comp = page.component;
  return (
    <Suspense fallback={<Loading />}>
      <Comp />
    </Suspense>
  );
}
