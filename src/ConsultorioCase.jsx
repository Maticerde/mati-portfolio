import React from "react";
import { Github } from "lucide-react";

const SHOWCASE = "https://github.com/Maticerde/consultorio-dentista-showcase";
const COPY = {
  es: {
    tag: "clienta real · desarrollo individual",
    status: "Vendido · Piloto en curso",
    summary: "Una aplicación de escritorio para que Natalia Quintan, dentista que trabaja sola, pase de los cuadernos a gestionar pacientes, registros clínicos y turnos en su computadora.",
    read: "Leer caso de estudio",
    github: "Ver caso en GitHub",
    title: "De los cuadernos al consultorio digital",
    date: "Estado al 17 de noviembre de 2026",
    needTitle: "La necesidad",
    need: "Natalia organizaba su consultorio con cuadernos. El trabajo partió de relevar su rutina y proponer un programa para reunir la información en su computadora, con un alcance adecuado a una profesional que trabaja sola.",
    functionsTitle: "Funciones implementadas en la versión revisada",
    functions: [
      "Gestión de pacientes: alta, edición, búsqueda y activación o desactivación de fichas.",
      "Historia clínica con evoluciones, diagnósticos y tratamientos; revisiones que conservan el historial de correcciones y eliminaciones.",
      "Odontograma por pieza y superficie, con historial de hallazgos.",
      "Agenda con estados, reprogramación y detección de superposiciones; horarios de atención y duración de turnos configurables.",
      "Resumen del consultorio y búsqueda global.",
    ],
    evolutionTitle: "De una propuesta web al uso local",
    evolution: "La propuesta inicial utilizaba Supabase para autenticación y persistencia, y Cloudflare Pages para alojar la interfaz. Al revisar el uso previsto y la preferencia de evitar una suscripción de infraestructura, la solución pasó a Electron y SQLite, conservando la interfaz en React y TypeScript.",
    local: "La aplicación de escritorio permite trabajar localmente en una computadora con Windows, sin internet ni una suscripción de alojamiento o base de datos. Esto no elimina los costos de mantenimiento y soporte: también exige cuidar el equipo y mantener copias externas.",
    securityTitle: "Acceso y resguardo de la información",
    security: "La versión revisada incorpora contraseña, recuperación de acceso mediante un código, bloqueo manual y automático, cifrado de la base SQLite y respaldos cifrados con generación y restauración. La copia externa debe guardarse en otro dispositivo, como un pendrive o disco externo, para proteger frente a la pérdida del disco principal.",
    securityLimit: "Son controles implementados, no una certificación de seguridad. Su uso y los procedimientos de recuperación en el entorno de la profesional deben comprobarse durante el piloto.",
    deliveryTitle: "Entrega y acompañamiento",
    delivery: "La entrega contempla manual, capacitación y documentación con alcance y soporte definidos. La preparación de la entrega y el seguimiento del piloto forman parte del trabajo. La finalización de la capacitación y la aceptación final quedan pendientes de confirmación.",
    roleTitle: "Mi participación",
    role: "Soy Matías Cerdeña. Desarrollé el proyecto de forma individual: relevamiento, propuesta, arquitectura, desarrollo, pruebas y preparación de la entrega y el seguimiento. Utilicé IA como apoyo durante el desarrollo y las pruebas; las decisiones, la revisión de las soluciones y la responsabilidad por el trabajo estuvieron a mi cargo.",
    pilotTitle: "Implementación y validación son estados distintos",
    pilot: "El proyecto fue vendido y el piloto sigue en curso. Las funciones descritas corresponden a la versión revisada; no implican que todas estén instaladas y validadas por Natalia durante el piloto.",
    pending: "Queda por documentar la versión instalada en la computadora de destino, la aceptación funcional en la rutina diaria, el uso de los controles de acceso y el ensayo de copias externas y recuperación. No se publican métricas, testimonios ni beneficios observados, ni se declara el piloto finalizado.",
    galleryTitle: "La interfaz, con datos ficticios",
    notice: "Estas capturas provienen de una demo aislada en navegador e ilustran la interfaz compartida. No son capturas de pacientes reales, no prueban la validación del piloto ni evidencian los controles exclusivos de escritorio. Todos los registros son ficticios y los indicadores visibles no son métricas del consultorio. El aviso de Supabase pertenece a la variante web de demostración; la aplicación local utiliza SQLite.",
    cardNotice: "Captura ficticia de una demo aislada en navegador. Ilustra la interfaz compartida; no muestra pacientes reales ni controles exclusivos de escritorio. Los indicadores no son métricas del consultorio.",
    shots: ["Inicio con resumen y actividad ficticios", "Agenda con turnos y estados ficticios", "Historia clínica con registros de ejemplo", "Odontograma con hallazgos ficticios por pieza"],
    reference: "Natalia autorizó su mención y su uso como referencia profesional.",
    back: "Volver a proyectos",
  },
  en: {
    tag: "real client · solo development",
    status: "Sold · Pilot in progress",
    summary: "A desktop application helping Natalia Quintan, a dentist working on her own, move from notebooks to managing patients, clinical records and appointments on her computer.",
    read: "Read case study",
    github: "View case on GitHub",
    title: "From notebooks to a digital practice",
    date: "Status as of November 17, 2026",
    needTitle: "The need",
    need: "Natalia used notebooks to organize her practice. The work began with understanding her routine and proposing a program to bring the information together on her computer, with a scope suited to a solo practitioner.",
    functionsTitle: "Features implemented in the reviewed version",
    functions: [
      "Patient management: create, edit, search, activate and deactivate records.",
      "Clinical history with progress notes, diagnoses and treatments; revisions retain a history of corrections and deletions.",
      "Odontogram by tooth and surface, with a history of findings.",
      "Appointment statuses, rescheduling and overlap detection; configurable working hours and appointment duration.",
      "Practice overview and global search.",
    ],
    evolutionTitle: "From a web proposal to local use",
    evolution: "The initial proposal used Supabase for authentication and persistence, and Cloudflare Pages to host the interface. After reviewing the intended use and the preference to avoid an infrastructure subscription, the solution moved to Electron and SQLite, retaining the React and TypeScript interface.",
    local: "The desktop application runs locally on a Windows computer, without internet or a hosting or database subscription. This does not remove maintenance and support costs: the computer still needs care and external backups must be maintained.",
    securityTitle: "Access and data protection",
    security: "The reviewed version includes a password, access recovery through a recovery code, manual and automatic locking, SQLite database encryption, and encrypted backup creation and restoration. An external copy must be kept on another device, such as a USB drive or external disk, to protect against loss of the main disk.",
    securityLimit: "These are implemented controls, not a security certification. Their use and the recovery procedures in the practitioner's environment must be checked during the pilot.",
    deliveryTitle: "Delivery and support",
    delivery: "Delivery includes a user manual, training and documentation defining scope and support. Delivery preparation and pilot follow-up are part of the work. Completion of training and final acceptance remain to be confirmed.",
    roleTitle: "My contribution",
    role: "I am Matías Cerdeña. I worked individually on discovery, the proposal, architecture, development, testing, and preparation for delivery and follow-up. I used AI to assist with development and testing; decisions, solution review and responsibility for the work remained mine.",
    pilotTitle: "Implementation and validation are different stages",
    pilot: "The project has been sold and the pilot is ongoing. The features described belong to the reviewed version; this does not mean that all of them are installed and validated by Natalia during the pilot.",
    pending: "The version installed on the target computer, functional acceptance in daily use, adoption of access controls, and external backup and recovery trials remain to be documented. No metrics, testimonials or observed benefits are published, and the pilot is not described as completed.",
    galleryTitle: "The interface, with fictional data",
    notice: "These screenshots come from an isolated browser demo and illustrate the shared interface. They do not show real patient records, prove pilot validation or demonstrate desktop-only controls. All records are fictional and visible indicators are not practice metrics. The Supabase notice belongs to the browser demo; the local application uses SQLite.",
    cardNotice: "Fictional screenshot from an isolated browser demo illustrating the shared interface. No real patients or desktop-only controls are shown. Indicators are not practice metrics.",
    shots: ["Overview with fictional indicators and activity", "Appointments with fictional bookings and statuses", "Clinical history with example records", "Odontogram with fictional findings by tooth"],
    reference: "Natalia authorized being named and serving as a professional reference.",
    back: "Back to projects",
  },
};

const IMAGES = ["01-inicio.jpg", "02-agenda.jpg", "03-historia-clinica.jpg", "04-odontograma.jpg"];

export default function ConsultorioCase({ lang, colors: C, Tag, Corner }) {
  const t = COPY[lang];
  const panel = { background: C.panel, border: `1px solid ${C.lineFaint}` };
  const heading = { fontFamily: "inherit", fontSize: 22, fontWeight: 700 };
  const body = { color: C.paper, fontSize: 15, lineHeight: 1.8 };
  const link = { border: `1px solid ${C.line}`, fontSize: 13 };
  return (
    <>
      <article id="consultorio-case" aria-labelledby="consultorio-case-title" className="project-card consultorio-case scroll-mt-24" style={panel}>
        <Corner pos="tl" /><Corner pos="br" />
        <p className="eyebrow">02 / {t.tag}</p><p className="case-status">{t.status}</p>
        <h3 id="consultorio-case-title" style={{ ...heading, fontSize: 28 }}>Consultorio Natalia Quintan</h3>
        <p className="case-subtitle">{t.title}</p><p className="case-summary">{t.summary}</p><div className="tech-list mb-6">{["React", "TypeScript", "Electron", "SQLite"].map(tech => <Tag key={tech}>{tech}</Tag>)}</div><p className="case-date">{t.date}</p>
        <div className="case-content" style={body}>
          <section><h4 style={heading}>{t.needTitle}</h4><p className="mt-3">{t.need}</p></section>
          <section><h4 style={heading}>{t.functionsTitle}</h4><ul className="list-disc pl-5 mt-3 space-y-2">{t.functions.map(item => <li key={item}>{item}</li>)}</ul></section>
          <section><h4 style={heading}>{t.evolutionTitle}</h4><p className="mt-3">{t.evolution}</p><p className="mt-3">{t.local}</p></section>
          <section><h4 style={heading}>{t.securityTitle}</h4><p className="mt-3">{t.security}</p><p className="mt-3">{t.securityLimit}</p></section>
          <section><h4 style={heading}>{t.deliveryTitle}</h4><p className="mt-3">{t.delivery}</p></section>
          <section><h4 style={heading}>{t.roleTitle}</h4><p className="mt-3">{t.role}</p></section>
          <section className="rounded-md p-5" style={{ background: C.panel2, borderLeft: `3px solid ${C.amber}` }}><h4 style={heading}>{t.pilotTitle}</h4><p className="mt-3">{t.pilot}</p><p className="mt-3">{t.pending}</p></section>
          <section aria-describedby="consultorio-image-notice">
            <h4 style={heading}>{t.galleryTitle}</h4>
            <p id="consultorio-image-notice" className="mt-3 mb-6 text-sm" style={{ color: C.slate }}>{t.notice}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {IMAGES.map((file, i) => <figure key={file} className="min-w-0">
                <a href={`/consultorio/${file}`} target="_blank" rel="noreferrer" className="block rounded-md overflow-hidden" style={{ border: `1px solid ${C.line}` }} aria-label={`${t.shots[i]} — ${lang === "es" ? "abrir imagen completa" : "open full image"}`}>
                  <img src={`/consultorio/${file}`} alt={t.shots[i]} loading="lazy" width="1265" height="712" className="w-full h-auto block" />
                </a>
                <figcaption className="mt-2 text-xs leading-relaxed" style={{ color: C.slate }}>{t.shots[i]}</figcaption>
              </figure>)}
            </div>
          </section>
          <div className="pt-6" style={{ borderTop: `1px solid ${C.lineFaint}` }}>
            <p>{t.reference}</p><p className="font-semibold mt-1">Referencia disponible a solicitud</p>
            <div className="flex flex-wrap gap-4 mt-5">
              <a href={SHOWCASE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-4 py-2" style={link}><Github size={16} />{t.github}</a>
              <a href="#project" className="inline-flex items-center gap-2 text-sm" style={{ color: C.signal }}>{t.back} ↑</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
