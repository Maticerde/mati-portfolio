import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Smartphone,
  Server,
  Database,
  Cloud,
  GitBranch,
  ShieldCheck,
  FileDown,
} from "lucide-react";
import { CV_ES_B64, CV_EN_B64 } from "./cvData.js";

const C = {
  ink: "#0B1420",
  panel: "#101E30",
  panel2: "#0D1826",
  line: "#28486B",
  lineFaint: "#1B2E44",
  signal: "#5FA8FF",
  paper: "#EAF1F8",
  slate: "#7C93AC",
  amber: "#E8A33D",
};

const FONT_DISPLAY = "'Space Grotesk', sans-serif";
const FONT_BODY = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

const T = {
  en: {
    role: "/ junior developer",
    status: "open to work",
    nav: [
      { id: "profile", label: "Profile" },
      { id: "stack", label: "Stack" },
      { id: "project", label: "Project" },
      { id: "credentials", label: "Credentials" },
      { id: "contact", label: "Contact" },
    ],
    heroEyebrow: "CANELONES, URUGUAY · UTC-3",
    heroTitle: "Building the pipes between mobile apps and the data behind them.",
    heroBody:
      "Junior developer working across React Native, .NET, and Azure. Finishing an IT Analyst degree at Universidad ORT Uruguay, looking for a first professional role — full-time locally, or remote contract work anywhere.",
    ctaProject: "See the project",
    ctaContact: "Get in touch",
    arch: { client: "client", api: "api", data: "data", host: "host" },
    sections: {
      profile: "Profile",
      stack: "Stack",
      project: "Featured project",
      credentials: "Credentials",
      contact: "Contact",
    },
    profileBody:
      "IT Analyst in training at Universidad ORT Uruguay, graduating December 2026, built on a technical baccalaureate from UTU and a GeneXus 18 Junior Analyst certification. Comfortable moving from a mobile screen down to the database that feeds it. Cambridge B2 First certified in English, and used to working with international teams.",
    stackGroups: [
      { icon: "mobile", label: "Mobile", items: ["React Native", "Context API"] },
      { icon: "server", label: "Backend", items: ["C#", ".NET", "REST APIs", "JWT Auth"] },
      { icon: "database", label: "Data", items: ["PostgreSQL"] },
      {
        icon: "cloud",
        label: "Cloud & Ops",
        items: ["Azure App Service", "Azure Database for PostgreSQL", "GitHub Actions CI/CD"],
      },
    ],
    projectTag: "academic capstone · nutrition tracking",
    projectGithub: "View on GitHub",
    projectBody:
      "NutriFlow is a mobile nutrition tracker built to remove friction from logging meals. The React Native client talks to a .NET REST API secured with JWT, backed by PostgreSQL on Azure, with the Gemini API handling food recognition from photos.",
    stat1: "manual data entry reduced",
    stat2: "meal logging time",
    credentials: [
      {
        title: "Information Technology Analyst — Tecnicatura",
        org: "Universidad ORT Uruguay",
        date: "Expected Dec 2026",
      },
      {
        title: "Cambridge B2 First Certificate in English",
        org: "Cambridge Assessment English",
        date: "May 2025",
      },
      { title: "GeneXus 18 Junior Analyst", org: "GeneXus", date: "Mar 2025" },
      {
        title: "Bachillerato Tecnológico — Auxiliar Técnico en Informática",
        org: "UTU · Escuela Técnica Canelones",
        date: "Dec 2022",
      },
    ],
    contactTitle: "Let's talk about a role.",
    contactLocation: "Canelones, Uruguay · UTC-3",
    email: "Email",
    cvLabel: "Resume",
    cvEs: "CV_ES.pdf",
    cvEn: "CV_EN.pdf",
    footer: "REV 2026.08 · BUILT WITH REACT",
  },
  es: {
    role: "/ desarrollador junior",
    status: "disponible",
    nav: [
      { id: "profile", label: "Perfil" },
      { id: "stack", label: "Stack" },
      { id: "project", label: "Proyecto" },
      { id: "credentials", label: "Credenciales" },
      { id: "contact", label: "Contacto" },
    ],
    heroEyebrow: "CANELONES, URUGUAY · UTC-3",
    heroTitle: "Construyendo el puente entre las apps móviles y los datos que las sostienen.",
    heroBody:
      "Desarrollador junior con experiencia en React Native, .NET y Azure. Terminando la Tecnicatura en Análisis de TI en la Universidad ORT Uruguay, en búsqueda de mi primer rol profesional — full-time en Uruguay, o remoto para el resto del mundo.",
    ctaProject: "Ver el proyecto",
    ctaContact: "Contactarme",
    arch: { client: "cliente", api: "api", data: "datos", host: "host" },
    sections: {
      profile: "Perfil",
      stack: "Stack",
      project: "Proyecto destacado",
      credentials: "Credenciales",
      contact: "Contacto",
    },
    profileBody:
      "Estudiante de la Tecnicatura en Análisis de TI en la Universidad ORT Uruguay, con egreso previsto para diciembre de 2026, sobre la base del Bachillerato Tecnológico de UTU y la certificación GeneXus 18 Junior Analyst. Cómodo moviéndose desde la pantalla móvil hasta la base de datos que la alimenta. Certificación Cambridge B2 First en inglés, con experiencia trabajando con equipos internacionales.",
    stackGroups: [
      { icon: "mobile", label: "Mobile", items: ["React Native", "Context API"] },
      { icon: "server", label: "Backend", items: ["C#", ".NET", "REST APIs", "JWT Auth"] },
      { icon: "database", label: "Datos", items: ["PostgreSQL"] },
      {
        icon: "cloud",
        label: "Cloud & Ops",
        items: ["Azure App Service", "Azure Database for PostgreSQL", "GitHub Actions CI/CD"],
      },
    ],
    projectTag: "proyecto académico · seguimiento nutricional",
    projectGithub: "Ver en GitHub",
    projectBody:
      "NutriFlow es una app móvil de seguimiento nutricional pensada para sacarle la fricción a cargar comidas. El cliente en React Native habla con una API REST en .NET asegurada con JWT, respaldada por PostgreSQL en Azure, con la API de Gemini reconociendo alimentos a partir de fotos.",
    stat1: "menos carga manual de datos",
    stat2: "tiempo de registro de comidas",
    credentials: [
      {
        title: "Análisis de Tecnologías de la Información — Tecnicatura",
        org: "Universidad ORT Uruguay",
        date: "Egreso previsto dic. 2026",
      },
      {
        title: "Cambridge B2 First Certificate in English",
        org: "Cambridge Assessment English",
        date: "Mayo 2025",
      },
      { title: "GeneXus 18 Junior Analyst", org: "GeneXus", date: "Marzo 2025" },
      {
        title: "Bachillerato Tecnológico — Auxiliar Técnico en Informática",
        org: "UTU · Escuela Técnica Canelones",
        date: "Dic. 2022",
      },
    ],
    contactTitle: "Hablemos de una oportunidad.",
    contactLocation: "Canelones, Uruguay · UTC-3",
    email: "Email",
    cvLabel: "Currículum",
    cvEs: "CV_ES.pdf",
    cvEn: "CV_EN.pdf",
    footer: "REV 2026.08 · HECHO CON REACT",
  },
};

function useGoogleFonts() {
  useEffect(() => {
    const id = "portfolio-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

function Corner({ pos }) {
  const base = { position: "absolute", width: 14, height: 14, opacity: 0.55 };
  const styles = {
    tl: { top: -1, left: -1, borderTop: `1px solid ${C.signal}`, borderLeft: `1px solid ${C.signal}` },
    tr: { top: -1, right: -1, borderTop: `1px solid ${C.signal}`, borderRight: `1px solid ${C.signal}` },
    bl: { bottom: -1, left: -1, borderBottom: `1px solid ${C.signal}`, borderLeft: `1px solid ${C.signal}` },
    br: { bottom: -1, right: -1, borderBottom: `1px solid ${C.signal}`, borderRight: `1px solid ${C.signal}` },
  };
  return <span style={{ ...base, ...styles[pos] }} />;
}

function SpecLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span style={{ fontFamily: FONT_MONO, color: C.signal, fontSize: 13, letterSpacing: "0.08em" }}>
        {index}
      </span>
      <span style={{ height: 1, width: 32, background: C.line }} />
      <h2
        style={{ fontFamily: FONT_DISPLAY, color: C.paper, fontSize: 13, letterSpacing: "0.18em" }}
        className="uppercase font-semibold"
      >
        {title}
      </h2>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span
      style={{
        fontFamily: FONT_MONO,
        fontSize: 12,
        color: C.paper,
        border: `1px solid ${C.line}`,
        background: C.panel2,
      }}
      className="px-2.5 py-1 rounded"
    >
      {children}
    </span>
  );
}

const ICONS = {
  mobile: <Smartphone size={16} />,
  server: <Server size={16} />,
  database: <Database size={16} />,
  cloud: <Cloud size={16} />,
};

function StackGroup({ icon, label, items }) {
  return (
    <div className="relative p-5 rounded-md" style={{ background: C.panel, border: `1px solid ${C.lineFaint}` }}>
      <Corner pos="tl" />
      <Corner pos="br" />
      <div className="flex items-center gap-2 mb-3">
        <span style={{ color: C.signal }}>{ICONS[icon]}</span>
        <span style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 11, letterSpacing: "0.1em" }} className="uppercase">
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <Tag key={it}>{it}</Tag>
        ))}
      </div>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="p-5 rounded-md" style={{ background: C.panel2, border: `1px solid ${C.lineFaint}` }}>
      <div style={{ fontFamily: FONT_DISPLAY, color: C.amber, fontSize: 30 }} className="font-bold leading-none mb-2">
        {value}
      </div>
      <div style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 12 }}>{label}</div>
    </div>
  );
}

function ArchDiagram({ arch }) {
  const box = { background: C.panel, border: `1px solid ${C.line}`, color: C.paper };
  const label = { fontFamily: FONT_MONO, fontSize: 10, color: C.slate, letterSpacing: "0.08em" };
  const steps = [
    { key: arch.client, icon: <Smartphone size={18} color={C.signal} />, tech: "React Native" },
    { key: arch.api, icon: <Server size={18} color={C.signal} />, tech: ".NET + JWT" },
    { key: arch.data, icon: <Database size={18} color={C.signal} />, tech: "PostgreSQL" },
    { key: arch.host, icon: <Cloud size={18} color={C.signal} />, tech: "Azure" },
  ];
  return (
    <div className="w-full flex items-center justify-center py-2">
      <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center">
        {steps.map((s, i) => (
          <React.Fragment key={s.key}>
            {i > 0 && (
              <div style={{ color: C.line }} className="text-lg px-1">
                →
              </div>
            )}
            <div className="flex flex-col items-center">
              <div style={label} className="mb-2 uppercase">
                {s.key}
              </div>
              <div style={box} className="rounded-md p-3 flex flex-col items-center gap-1 w-28">
                {s.icon}
                <span style={{ fontFamily: FONT_MONO, fontSize: 11 }}>{s.tech}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function openPdf(base64) {
  const win = window.open();
  if (win) {
    win.document.write(
      `<iframe src="data:application/pdf;base64,${base64}" style="border:0;position:fixed;inset:0;width:100%;height:100%;"></iframe>`
    );
  }
}

export default function Portfolio() {
  useGoogleFonts();
  const [lang, setLang] = useState("en");
  const t = T[lang];

  return (
    <div
      style={{ background: C.ink, color: C.paper, fontFamily: FONT_BODY, minHeight: "100vh" }}
      className="w-full"
    >
      <style>{`
        html { scroll-behavior: smooth; }
        a.nav-link { position: relative; }
        a.nav-link:focus-visible, button:focus-visible, a:focus-visible {
          outline: 2px solid ${C.signal};
          outline-offset: 2px;
        }
        a.nav-link::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          width: 0%; height: 1px;
          background: ${C.signal};
          transition: width 0.2s ease;
        }
        a.nav-link:hover::after { width: 100%; }
        .cta-primary { transition: transform 0.15s ease, background 0.15s ease; }
        .cta-primary:hover { transform: translateY(-1px); }
        .lang-btn { transition: background 0.15s ease, color 0.15s ease; }
        @media (prefers-reduced-motion: reduce) {
          .cta-primary { transition: none; }
          a.nav-link::after { transition: none; }
          .lang-btn { transition: none; }
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `linear-gradient(${C.lineFaint} 1px, transparent 1px), linear-gradient(90deg, ${C.lineFaint} 1px, transparent 1px)`,
          backgroundSize: "42px 42px",
          opacity: 0.35,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="relative" style={{ zIndex: 1 }}>
        {/* header */}
        <header
          className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-4"
          style={{ background: "rgba(11,20,32,0.85)", backdropFilter: "blur(6px)", borderBottom: `1px solid ${C.lineFaint}` }}
        >
          <div className="flex items-baseline gap-2">
            <span style={{ fontFamily: FONT_DISPLAY, fontSize: 16 }} className="font-semibold">
              MATIAS CERDEÑA
            </span>
            <span style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 11 }} className="hidden sm:inline">
              {t.role}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {t.nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="nav-link"
                style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.slate, letterSpacing: "0.06em" }}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div
              className="flex rounded-full overflow-hidden"
              style={{ border: `1px solid ${C.line}` }}
              role="group"
              aria-label="Language / Idioma"
            >
              <button
                type="button"
                onClick={() => setLang("es")}
                className="lang-btn px-2.5 py-1"
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  background: lang === "es" ? C.signal : "transparent",
                  color: lang === "es" ? C.ink : C.slate,
                }}
                aria-pressed={lang === "es"}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className="lang-btn px-2.5 py-1"
                style={{
                  fontFamily: FONT_MONO,
                  fontSize: 11,
                  background: lang === "en" ? C.signal : "transparent",
                  color: lang === "en" ? C.ink : C.slate,
                }}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full" style={{ border: `1px solid ${C.line}` }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "#4ADE80" }} />
              <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.slate }}>{t.status}</span>
            </div>
          </div>
        </header>

        {/* hero */}
        <section className="px-6 md:px-10 pt-14 pb-10 max-w-5xl mx-auto">
          <div style={{ fontFamily: FONT_MONO, color: C.signal, fontSize: 12, letterSpacing: "0.1em" }} className="mb-4">
            {t.heroEyebrow}
          </div>
          <h1
            style={{ fontFamily: FONT_DISPLAY, fontSize: "clamp(28px, 5vw, 48px)", lineHeight: 1.1 }}
            className="font-bold max-w-3xl mb-5"
          >
            {t.heroTitle}
          </h1>
          <p style={{ color: C.slate, fontSize: 16, maxWidth: 560 }} className="mb-8">
            {t.heroBody}
          </p>
          <div className="flex flex-wrap gap-3 mb-14">
            <a
              href="#project"
              className="cta-primary flex items-center gap-2 px-4 py-2 rounded-md font-semibold"
              style={{ background: C.signal, color: C.ink, fontFamily: FONT_BODY, fontSize: 14 }}
            >
              {t.ctaProject} <ArrowUpRight size={16} />
            </a>
            <a
              href="mailto:maticerde.dev@gmail.com"
              className="cta-primary flex items-center gap-2 px-4 py-2 rounded-md"
              style={{ border: `1px solid ${C.line}`, color: C.paper, fontFamily: FONT_BODY, fontSize: 14 }}
            >
              {t.ctaContact}
            </a>
          </div>
          <div className="relative rounded-lg p-6" style={{ background: C.panel2, border: `1px solid ${C.lineFaint}` }}>
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
            <ArchDiagram arch={t.arch} />
          </div>
        </section>

        {/* profile */}
        <section id="profile" className="px-6 md:px-10 py-14 max-w-5xl mx-auto scroll-mt-20">
          <SpecLabel index="01" title={t.sections.profile} />
          <p style={{ color: C.paper, fontSize: 16, lineHeight: 1.7, maxWidth: 640 }}>{t.profileBody}</p>
        </section>

        {/* stack */}
        <section id="stack" className="px-6 md:px-10 py-14 max-w-5xl mx-auto scroll-mt-20">
          <SpecLabel index="02" title={t.sections.stack} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.stackGroups.map((g) => (
              <StackGroup key={g.label} icon={g.icon} label={g.label} items={g.items} />
            ))}
          </div>
        </section>

        {/* project */}
        <section id="project" className="px-6 md:px-10 py-14 max-w-5xl mx-auto scroll-mt-20">
          <SpecLabel index="03" title={t.sections.project} />
          <div className="relative rounded-lg p-6 md:p-8" style={{ background: C.panel, border: `1px solid ${C.lineFaint}` }}>
            <Corner pos="tl" />
            <Corner pos="br" />
            <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
              <div>
                <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 26 }} className="font-bold">
                  NutriFlow
                </h3>
                <p style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 12 }} className="mt-1">
                  {t.projectTag}
                </p>
              </div>
              <a
                href="https://github.com/MC307656"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md"
                style={{ border: `1px solid ${C.line}`, fontFamily: FONT_MONO, fontSize: 12 }}
              >
                <Github size={14} /> {t.projectGithub}
              </a>
            </div>
            <p style={{ color: C.paper, fontSize: 15, lineHeight: 1.7, maxWidth: 620 }} className="mb-6">
              {t.projectBody}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6 max-w-md">
              <Stat value="↓70%" label={t.stat1} />
              <Stat value="3m → <30s" label={t.stat2} />
            </div>
            <div className="flex flex-wrap gap-2">
              {["React Native", "C# / .NET", "PostgreSQL", "Azure App Service", "Gemini API", "GitHub Actions", "Scrum"].map(
                (tag) => (
                  <Tag key={tag}>{tag}</Tag>
                )
              )}
            </div>
          </div>
        </section>

        {/* credentials */}
        <section id="credentials" className="px-6 md:px-10 py-14 max-w-5xl mx-auto scroll-mt-20">
          <SpecLabel index="04" title={t.sections.credentials} />
          <div className="space-y-0">
            {t.credentials.map((c, i, arr) => (
              <div
                key={c.title}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: i < arr.length - 1 ? `1px solid ${C.lineFaint}` : "none" }}
              >
                <span style={{ color: C.signal, marginTop: 2 }}>
                  <ShieldCheck size={15} />
                </span>
                <div className="flex-1">
                  <div style={{ color: C.paper, fontSize: 15 }} className="font-medium">
                    {c.title}
                  </div>
                  <div style={{ color: C.slate, fontSize: 13 }}>{c.org}</div>
                </div>
                <div style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 12 }} className="whitespace-nowrap">
                  {c.date}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="px-6 md:px-10 py-16 max-w-5xl mx-auto scroll-mt-20">
          <SpecLabel index="05" title={t.sections.contact} />
          <div
            className="relative rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ background: C.panel2, border: `1px solid ${C.lineFaint}` }}
          >
            <Corner pos="tl" />
            <Corner pos="br" />
            <div>
              <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 22 }} className="font-bold mb-2">
                {t.contactTitle}
              </h3>
              <div className="flex items-center gap-2" style={{ color: C.slate, fontSize: 13 }}>
                <MapPin size={14} /> {t.contactLocation}
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start md:items-end">
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:maticerde.dev@gmail.com"
                  className="cta-primary flex items-center gap-2 px-4 py-2 rounded-md font-semibold"
                  style={{ background: C.signal, color: C.ink, fontSize: 14 }}
                >
                  <Mail size={16} /> {t.email}
                </a>
                <a
                  href="https://linkedin.com/in/matias-cerdena"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md"
                  style={{ border: `1px solid ${C.line}`, fontSize: 14 }}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/MC307656"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-md"
                  style={{ border: `1px solid ${C.line}`, fontSize: 14 }}
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <span
                  style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 11, letterSpacing: "0.08em" }}
                  className="uppercase self-center"
                >
                  {t.cvLabel}
                </span>
                <button
                  type="button"
                  onClick={() => openPdf(CV_ES_B64)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md"
                  style={{ border: `1px solid ${C.line}`, fontSize: 13, background: "transparent", color: C.paper }}
                >
                  <FileDown size={14} /> {t.cvEs}
                </button>
                <button
                  type="button"
                  onClick={() => openPdf(CV_EN_B64)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md"
                  style={{ border: `1px solid ${C.line}`, fontSize: 13, background: "transparent", color: C.paper }}
                >
                  <FileDown size={14} /> {t.cvEn}
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="px-6 md:px-10 py-6 flex items-center justify-between" style={{ borderTop: `1px solid ${C.lineFaint}` }}>
          <span style={{ fontFamily: FONT_MONO, color: C.slate, fontSize: 11 }}>{t.footer}</span>
          <div className="flex items-center gap-1" style={{ color: C.slate }}>
            <GitBranch size={13} />
            <span style={{ fontFamily: FONT_MONO, fontSize: 11 }}>main</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
