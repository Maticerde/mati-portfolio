import React, { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Moon, Sun, Download, MapPin, Code2, Layers, Database, Cloud, Check } from "lucide-react";
import { T } from "./portfolioContent.js";
import ConsultorioCase from "./ConsultorioCase.jsx";
import cvEs from "../CVs/Matias_Cerdena_CV.pdf?url";
import cvEn from "../CVs/Matias_Cerdena_CV_EN.pdf?url";

const COLORS = {
  ink: "var(--bg)", panel: "var(--surface)", panel2: "var(--soft)",
  line: "var(--line)", lineFaint: "var(--line)", signal: "var(--accent)",
  paper: "var(--text)", slate: "var(--muted)", amber: "var(--amber)",
};
function savedPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
}
function Corner() { return null; }
function Tag({ children }) { return <span className="tech-tag">{children}</span>; }
function SectionTitle({ number, label, title }) {
  return <div className="section-intro"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2></div>;
}
const ICONS = { mobile: Code2, server: Layers, database: Database, cloud: Cloud };

export default function Portfolio() {
  const [lang, setLang] = useState(() => savedPreference("portfolio-language", "es") === "en" ? "en" : "es");
  const [theme, setTheme] = useState(() => savedPreference("portfolio-theme", "light") === "dark" ? "dark" : "light");
  const t = T[lang];
  const es = lang === "es";
  const copy = es ? {
    work: "Desarrollo software para necesidades reales.",
    intro: "Soy Matías Cerdeña, desarrollador Full Stack. Conecto interfaces, APIs y datos para crear aplicaciones móviles y de escritorio, desde la primera idea hasta la entrega.",
    available: "Disponible para nuevas oportunidades", role: "Full Stack Developer",
    profile: "De la interfaz a los datos.", projects: "Dos proyectos, distintos desafíos.",
    skills: "Las herramientas detrás del trabajo.", education: "Formación y aprendizaje continuo.",
    contact: "¿Trabajamos juntos?", contactBody: "Busco sumarme a un equipo donde pueda aportar, aprender y seguir construyendo. Disponible para trabajo presencial, híbrido o remoto.",
    profileBody: "Soy desarrollador de software con foco en React Native, C#, .NET, Azure y PostgreSQL. Me interesa entender el problema completo: cómo se usa una aplicación, cómo circulan sus datos y qué necesita para funcionar en el día a día.",
    profileMore: "Curso el último semestre de Analista en Tecnologías de la Información en la Universidad ORT Uruguay y obtuve el título intermedio de Programador Web. Trabajo con APIs de IA, arquitectura en capas y prácticas de desarrollo ágil. Mi inglés es B2, certificado por Cambridge.",
    projectIntro: "Una solución de nutrición desarrollada en equipo y una aplicación local para una clienta real. Dos maneras de llevar una necesidad a un producto.",
    educationNote: "En curso · último semestre. Título intermedio obtenido: Programador Web.",
    cv: "Descargar CV", light: "Cambiar a modo claro", dark: "Cambiar a modo oscuro", location: "Canelones, Uruguay", view: "Explorar proyectos", about: "Sobre mí", back: "Volver arriba", capstone: "Proyecto final de carrera · en equipo",
    flowNote: "Aplicación móvil, API e infraestructura cloud: una solución de extremo a extremo.",
    numbers: ["menos ingreso manual", "registro de una comida", "pantallas móviles"],
  } : {
    work: "Building software for real needs.",
    intro: "I'm Matías Cerdeña, a Full Stack developer. I connect interfaces, APIs and data to build mobile and desktop applications, from the first idea to delivery.",
    available: "Open to new opportunities", role: "Full Stack Developer",
    profile: "From the interface to the data.", projects: "Two projects, different challenges.",
    skills: "The tools behind the work.", education: "Education and continuous learning.",
    contact: "Let's work together.", contactBody: "I'm looking to join a team where I can contribute, learn and keep building. Available for on-site, hybrid or remote work.",
    profileBody: "I'm a software developer focused on React Native, C#, .NET, Azure and PostgreSQL. I enjoy understanding the whole problem: how an application is used, how its data flows, and what it needs to work day to day.",
    profileMore: "I'm in the final semester of the Information Technology Analyst program at Universidad ORT Uruguay and have earned the intermediate Web Programmer credential. I work with AI APIs, layered architecture and agile development practices. My English is B2, certified by Cambridge.",
    projectIntro: "A nutrition solution built with a team and a local application for a real client. Two ways of turning a need into a product.",
    educationNote: "In progress · final semester. Intermediate credential earned: Web Programmer.",
    cv: "Download resume", light: "Switch to light mode", dark: "Switch to dark mode", location: "Canelones, Uruguay", view: "Explore projects", about: "About me", back: "Back to top", capstone: "Capstone project · team development",
    flowNote: "Mobile app, API and cloud infrastructure: an end-to-end solution.",
    numbers: ["less manual input", "meal logging", "mobile screens"],
  };
  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem("portfolio-language", lang); } catch { /* Storage may be unavailable. */ }
  }, [lang]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);

  return <div id="top" className="portfolio">
    <a className="skip-link" href="#main">{es ? "Ir al contenido" : "Skip to content"}</a>
    <header className="site-header"><div className="header-inner">
      <a href="#top" className="wordmark" aria-label="Matías Cerdeña">mc<span>.</span></a>
      <nav aria-label={es ? "Navegación principal" : "Main navigation"}>{["profile", "project", "stack", "credentials", "contact"].map(id => <a key={id} href={`#${id}`}>{id === "profile" ? copy.about : t.nav.find(n=>n.id===id).label}</a>)}</nav>
      <div className="header-controls"><div className="language-switch" role="group" aria-label="Idioma / Language">{["es", "en"].map(code => <button key={code} type="button" onClick={() => setLang(code)} aria-pressed={lang === code}>{code.toUpperCase()}</button>)}</div><button type="button" className="theme-switch" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={theme === "light" ? copy.dark : copy.light} title={theme === "light" ? copy.dark : copy.light}>{theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}</button></div>
    </div></header>
    <main id="main">
      <section className="hero page-width"><div className="hero-copy">
        <p className="availability"><span />{copy.available}</p><p className="hero-name">Matías Cerdeña <span>/ {copy.role}</span></p><h1>{copy.work}</h1><p className="hero-description">{copy.intro}</p>
        <div className="button-row"><a className="button primary" href="#project">{copy.view}<ArrowDown size={17}/></a><a className="button text-button" href={es ? cvEs : cvEn} download>{copy.cv}<Download size={17}/></a></div><p className="location"><MapPin size={14}/>{copy.location} <span>· UTC−3</span></p>
      </div><aside className="hero-aside" aria-label={es ? "Áreas de trabajo" : "Work areas"}>
        <div className="visual-orbit" aria-hidden="true"><div className="orbit-ring ring-one"/><div className="orbit-ring ring-two"/><div className="orbit-center"><Code2 size={42} strokeWidth={1.4}/></div><span className="orbit-label label-ui">React Native</span><span className="orbit-label label-api">.NET / API</span><span className="orbit-label label-data">SQL</span></div><div className="aside-caption"><span>01 — 02</span><p>{es ? "Mobile, web y escritorio.\nEl problema define la solución." : "Mobile, web and desktop.\nThe problem shapes the solution."}</p></div>
      </aside></section>

      <section id="profile" className="profile-section page-width section-space"><SectionTitle number="01" label={copy.about} title={copy.profile}/><div className="profile-text"><p className="lead">{copy.profileBody}</p><p>{copy.profileMore}</p><div className="profile-facts"><span><Check size={15}/>{es ? "Programador Web · ORT" : "Web Programmer · ORT"}</span><span><Check size={15}/>English B2 · Cambridge</span></div></div></section>

      <section id="project" className="projects-section section-space"><div className="page-width"><SectionTitle number="02" label={t.sections.project} title={copy.projects}/><p className="section-description">{copy.projectIntro}</p>
        <article className="project-card nutriflow-card" aria-labelledby="nutriflow-title"><div className="project-heading"><div><p className="eyebrow">01 / {copy.capstone}</p><h3 id="nutriflow-title">NutriFlow</h3><p className="project-subtitle">{copy.flowNote}</p></div><span className="project-mark" aria-hidden="true">N<span>↗</span></span></div>
          <div className="project-body"><p>{t.projectBody}</p><div className="tech-list">{["React Native", "C# / .NET", "PostgreSQL", "Azure", "Gemini API", "GitHub Actions"].map(tech => <Tag key={tech}>{tech}</Tag>)}</div>
            <div className="project-stats">{["70%", "3m → <30s", "12"].map((v,i) => <div key={v}><strong>{v}</strong><span>{copy.numbers[i]}</span></div>)}</div>
            <div className="nutriflow-gallery">{t.projectShots.map(s => <a key={s.src} href={s.src} target="_blank" rel="noreferrer" aria-label={s.alt}><img src={s.src} alt={s.alt} loading="lazy"/></a>)}</div>
            <div className="project-links"><a className="button primary" href="https://nutriflowort.github.io/NutriFlow-Landing/" target="_blank" rel="noreferrer">{t.projectLive}<ArrowUpRight size={16}/></a><a className="button secondary" href="https://github.com/Maticerde/NutriFlow-Showcase" target="_blank" rel="noreferrer"><Github size={16}/>{t.projectGithub}</a></div>
          </div></article>
        <ConsultorioCase lang={lang} colors={COLORS} Tag={Tag} Corner={Corner}/>
      </div></section>

      <section id="stack" className="page-width section-space"><SectionTitle number="03" label={t.sections.stack} title={copy.skills}/><div className="stack-grid">{[
        {icon:"mobile",label:es?"Interfaces":"Interfaces",items:["React", "React Native", "TypeScript", "JavaScript", "Expo", "HTML / CSS"]},
        {icon:"server",label:"Backend",items:["C#", ".NET", "REST APIs", "JWT", es?"Arquitectura en capas":"Layered architecture"]},
        {icon:"database",label:es?"Datos y escritorio":"Data & desktop",items:["PostgreSQL", "SQL", "SQLite", "Electron"]},
        {icon:"cloud",label:"Cloud & workflow",items:["Azure", "GitHub Actions", "Git", "Gemini API", "Scrum"]},
      ].map(g => { const Icon = ICONS[g.icon]; return <div className="stack-card" key={g.label}><Icon size={24} strokeWidth={1.5}/><h3>{g.label}</h3><div className="tech-list">{g.items.map(item => <Tag key={item}>{item}</Tag>)}</div></div>; })}</div></section>

      <section id="credentials" className="page-width section-space education-section"><SectionTitle number="04" label={t.sections.credentials} title={copy.education}/><div className="education-list">{t.credentials.map((c,i) => <div key={c.title} className="education-row"><span className="education-number">0{i+1}</span><div><h3>{c.title}</h3><p>{c.org}</p>{i===0 && <p className="education-note">{copy.educationNote}</p>}</div><span className="education-date">{c.date}</span></div>)}</div></section>

      <section id="contact" className="page-width section-space"><div className="contact-panel"><p className="eyebrow">05 / {t.sections.contact}</p><h2>{copy.contact}</h2><p>{copy.contactBody}</p><a className="contact-email" href="mailto:maticerde.dev@gmail.com">maticerde.dev@gmail.com<ArrowUpRight size={24}/></a><div className="contact-bottom"><div className="button-row"><a className="button secondary" href="https://linkedin.com/in/matias-cerdena" target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn</a><a className="button secondary" href="https://github.com/Maticerde" target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a></div><div className="cv-links"><span>{t.cvLabel}</span><a href={cvEs} download="Matias_Cerdena_CV.pdf">Español<Download size={14}/></a><a href={cvEn} download="Matias_Cerdena_CV_EN.pdf">English<Download size={14}/></a></div></div></div></section>
    </main>
    <footer className="site-footer page-width"><a href="#top" className="footer-name">Matías Cerdeña<span> / Full Stack Developer</span></a><span>© 2026</span><a href="#top">{copy.back} ↑</a></footer>
  </div>;
}
