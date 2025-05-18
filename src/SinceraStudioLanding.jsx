import { motion } from "framer-motion";
import Workflow from "./components/Workflow";
import Hero3D from "./components/Hero3D";
import Blog from "./components/Blog";
import { useState, useEffect } from "react";
import Papa from "papaparse";

import {
  ArrowUpRight,
  Lightbulb,
  Layers3,
  Printer,
  PackageSearch,
  ChevronDown,
  Calendar as CalendarIcon,
} from "lucide-react";

const NEON = "#eaff00";
const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function SinceraStudioLanding() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blog.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => setPosts(results.data),
        });
      });
  }, []);

  return (
    <main className="pt-24 min-h-screen scroll-smooth bg-neutral-900 text-white font-sans overflow-x-hidden selection:bg-[#bfff00]/30 selection:text-white">
      {/* Neon Glow */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center">
        <div
          className="w-[520px] h-[520px] rounded-full blur-[160px]"
          style={{ background: `${NEON}33` }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-neutral-900 bg-opacity-95 border-b border-neutral-800">
        <h1 className="font-script text-4xl" style={{ color: NEON }}>
          SINCERA
          <span className="text-base block -mt-2 font-normal tracking-widest text-white/90">
            STUDIO
          </span>
        </h1>
        {/* Desktop menu */}
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#servizi" className="hover:text-white/90 transition">
            Servizi
          </a>
          <a href="#workflow" className="hover:text-white/90 transition">
            Workflow
          </a>
          <a href="#materiali" className="hover:text-white/90 transition">
            Materiali
          </a>
          <a href="#faq" className="hover:text-white/90 transition">
            FAQ
          </a>
          <a href="#blog" className="hover:text-white/90 transition">
            Blog
          </a>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm hover:border-white/60 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Apri menu"
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
              <rect x="4" y="6" width="16" height="2" rx="1" fill="#eaff00"/>
              <rect x="4" y="11" width="16" height="2" rx="1" fill="#eaff00"/>
              <rect x="4" y="16" width="16" height="2" rx="1" fill="#eaff00"/>
            </svg>
          </button>
          {/* Dropdown menu mobile con chiusura al click fuori */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 z-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div
                className="absolute top-[64px] left-0 w-full bg-neutral-900 border-b border-neutral-800 shadow-lg animate-fade-in-down"
                onClick={e => e.stopPropagation()}
              >
                <nav className="flex flex-col py-4 px-8 gap-2 text-base items-end">
                  <a
                    href="#servizi"
                    className="py-2 hover:text-[#eaff00] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Servizi
                  </a>
                  <a
                    href="#workflow"
                    className="py-2 hover:text-[#eaff00] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Workflow
                  </a>
                  <a
                    href="#materiali"
                    className="py-2 hover:text-[#eaff00] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Materiali
                  </a>
                  <a
                    href="#portfolio"
                    className="py-2 hover:text-[#eaff00] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Portfolio
                  </a>
                  <a
                    href="#faq"
                    className="py-2 hover:text-[#eaff00] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </a>
                  <a
                    href="#blog"
                    className="py-2 hover:text-[#eaff00] transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <button
                    className="py-2 text-right hover:text-[#eaff00] transition"
                    style={{ background: "none", border: "none" }}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowModal(true);
                    }}
                  >
                    Preventivo
                  </button>
                </nav>
              </div>
            </div>
          )}
        </div>
        <a
          href="#contatti"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-2 text-sm hover:border-white/60 transition"
        >
          Contattaci <ArrowUpRight size={16} />
        </a>
      </header>

      {/* Hero */}
      <section
        className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-8 py-16 max-w-5xl mx-auto text-center"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold leading-tight"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Progettiamo il{" "}
          <span className="neon-blink">futuro</span>
          <br /> in <span className="neon-blink">2D</span> e{" "}
          <span className="neon-blink">3D</span>
        </motion.h2>

        <div className="my-10 w-full flex justify-center">
          <div style={{ pointerEvents: "none" }}>
            <Hero3D disableControls={isMobile} />
          </div>
        </div>

        <motion.p
          className="mt-6 text-lg text-neutral-300 max-w-prose mx-auto"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Dal concept alla produzione finale, Sincera Studio fonde creatività,
          ingegneria e tecnologie di stampa avanzate per dare vita a modelli,
          prototipi e collezioni di prodotti con finitura professionale e
          precisione artigianale.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <a
            href="#servizi"
            className="rounded-md font-semibold px-6 py-3 text-neutral-900 text-center"
            style={{ background: NEON }}
          >
            Scopri i Servizi
          </a>
          <a
            href="#portfolio"
            className="rounded-md border border-neutral-700 px-6 py-3 text-center hover:border-white/60 transition"
          >
            Portfolio
          </a>
        </motion.div>
      </section>

      {/* Servizi */}
      <section
        id="servizi"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          I nostri servizi
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-400 max-w-2xl"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Dalla progettazione alla produzione: soluzioni su misura per ogni esigenza, con tecnologie all’avanguardia e attenzione artigianale al dettaglio.
          Utilizziamo materiali di alta qualità come <b>PLA</b> (biodegradabile), <b>PETG</b> (resistente e flessibile), <b>TPU</b> (elastico), e su richiesta <b>metallo</b>, <b>nylon</b> e <b>compositi</b>, per garantire resistenza, precisione e finiture professionali su ogni progetto. Offriamo anche servizio di assemblaggio.
        </motion.p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Progettazione 3D",
              desc: "Modellazione dettagliata per prototipi, architettura e prodotto",
              icon: <Layers3 size={32} />,
            },
            {
              title: "Stampa 3D professionale",
              desc: "PLA, ABS, PETG, resina, metallo con risoluzione fino a 25µm",
              icon: <Printer size={32} />,
            },
            {
              title: "Stampa 2D large-format",
              desc: "Poster, adesivi, packaging e display fino a 1,5m di larghezza",
              icon: <PackageSearch size={32} />,
            },
            {
              title: "Reverse engineering",
              desc: "Scansione 3D ad alta definizione e ricostruzione CAD",
              icon: <Lightbulb size={32} />,
            },
            {
              title: "Assemblaggio",
              desc: "Montaggio e assemblaggio di parti stampate per prototipi e prodotti finiti.",
              icon: <ArrowUpRight size={32} />,
            },
            {
              title: "Consulenza & formazione",
              desc: "Workshop personalizzati e supporto all’implementazione in-house",
              icon: <Lightbulb size={32} />,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              className="group border border-neutral-800 rounded-2xl p-6 bg-neutral-900/70 hover:shadow-[0_0_24px_#eaff00cc] hover:border-[#eaff00] transition"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#eaff00]/10 border border-[#eaff00] text-[#eaff00] text-3xl shadow-[0_0_16px_#eaff00cc]">
                  {card.icon}
                </span>
              </div>
              <h4 className="text-xl font-semibold text-center">{card.title}</h4>
              <p className="mt-2 text-neutral-400 text-sm leading-relaxed text-center">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contatti"
            className="inline-block rounded-md font-semibold px-8 py-3 text-neutral-900"
            style={{ background: NEON }}
          >
            Richiedi una consulenza gratuita
          </a>
        </div>
      </section>

      {/* Workflow neon tech */}
      <Workflow />

      {/* Materiali */}
      <section
        id="materiali"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Materiali principali
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-400 max-w-2xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Selezioniamo solo materiali di alta qualità per garantire resistenza, precisione e finiture professionali su ogni progetto.
        </motion.p>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "PLA",
              icon: "🌱",
              desc: "Biodegradabile, ottimo per prototipi e modelli estetici.",
            },
            {
              name: "PETG",
              icon: "🧪",
              desc: "Resistente, flessibile, ideale per parti funzionali.",
            },
            {
              name: "TPU",
              icon: "🦾",
              desc: "Elastico, perfetto per componenti flessibili e antiurto.",
            },
            {
              name: "Altri materiali",
              icon: "🧩",
              desc: "Metallo, nylon, compositi e altro su richiesta.",
              center: true,
            },
          ].map((mat, i, arr) => {
            // Centra la card se è l'ultima e la riga è dispari
            const isLast = i === arr.length - 1;
            const isOdd = arr.length % 3 !== 0;
            const gridClass =
              isLast && isOdd
                ? "sm:col-span-2 md:col-span-1 md:col-start-2"
                : "";
            return (
              <motion.div
                key={mat.name}
                className={`rounded-2xl border border-neutral-800 p-6 bg-neutral-900/70 hover:shadow-[0_0_16px_#eaff00cc] hover:border-[#eaff00] transition text-center flex flex-col items-center ${gridClass}`}
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                custom={i + 1}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-3 mx-auto">{mat.icon}</div>
                <div className="font-semibold text-lg text-[#eaff00]">{mat.name}</div>
                <div className="mt-2 text-neutral-400 text-sm">{mat.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Portfolio Placeholder */}
      <section
        id="portfolio"
        className="relative z-10 px-8 py-24 max-w-5xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-bold text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Portfolio selezionato
        </motion.h3>
        <motion.p
          className="mt-4 text-neutral-400"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Alcuni dei nostri ultimi progetti realizzati per clienti di diversi settori.
        </motion.p>
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Lampada Parametrica",
              desc: "Design organico stampato in PLA bianco, finitura satinata.",
              image: "/portfolio/lampada.png",
              tags: ["3D Print", "Design"],
            },
            {
              title: "Prototipo Meccanico",
              desc: "Assemblaggio multicomponente in PETG e acciaio.",
              image: "/portfolio/prototipo.png",
              tags: ["Prototipo", "Engineering"],
            },
            {
              title: "Scultura Generativa",
              desc: "Opera artistica stampata in PLA nero, progettazione algoritmica.",
              image: "/portfolio/scultura.png",
              tags: ["Arte", "3D Print"],
            },
            {
              title: "Portachiavi Personalizzato",
              desc: "Portachiavi con logo aziendale stampato in 3D, colori a scelta.",
              image: "/portfolio/portachiavi.png",
              tags: ["Gadget", "3D Print", "Branding"],
            },
            {
              title: "Scritta 3D Personalizzata",
              desc: "Scritte e loghi 3D per eventi, vetrine o desk, completamente personalizzabili.",
              image: "/portfolio/scritta3d.png",
              tags: ["Gadget", "3D Print", "Branding"],
            },
            {
              title: "Packaging Rigido Personalizzato",
              desc: "Scatole e confezioni rigide stampate in 3D, su misura per il tuo prodotto.",
              image: "/portfolio/packaging.png",
              tags: ["Packaging", "3D Print", "Personalizzato"],
            },
          ].map((proj, i) => (
            <motion.div
              key={proj.title}
              className="group border border-neutral-800 rounded-2xl p-0 bg-neutral-900/70 hover:shadow-[0_0_24px_#eaff00cc] hover:border-[#eaff00] transition overflow-hidden"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                loading="lazy"
                className="w-full h-40 object-contain bg-neutral-800 cursor-pointer transition hover:scale-105"
                onClick={() => {
                  setLightboxImg(proj.image);
                  setLightboxOpen(true);
                }}
                style={{ backgroundImage: "url('/placeholder.png')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="p-5">
                <h4 className="text-lg font-semibold">{proj.title}</h4>
                <p className="mt-2 text-neutral-400 text-sm">{proj.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 justify-center">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded bg-[#eaff00]/10 text-[#eaff00] text-xs font-semibold border border-[#eaff00]/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contatti"
            className="inline-block rounded-md font-semibold px-8 py-3 text-neutral-900"
            style={{ background: NEON }}
          >
            Vuoi il tuo progetto qui? Contattaci!
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative z-10 px-8 py-24 max-w-4xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-bold mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Cosa dicono di noi
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Marco Rossi",
              company: "Tech Solutions",
              text: "Servizio impeccabile, prototipi perfetti e consegna rapidissima. Consigliatissimi!",
            },
            {
              name: "Sara Bianchi",
              company: "Design Hub",
              text: "Grande attenzione al dettaglio e supporto tecnico in ogni fase del progetto.",
            },
          ].map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6 flex flex-col items-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              {/* Avatar generico */}
              <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center mb-4">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="12" r="7" fill="#bfff00" />
                  <rect x="6" y="22" width="20" height="8" rx="4" fill="#bfff00" />
                </svg>
              </div>
              <p className="text-neutral-300 italic mb-3">"{t.text}"</p>
              <div className="font-semibold text-[#eaff00]">{t.name}</div>
              <div className="text-neutral-400 text-sm">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contatti */}
      <section
        id="contatti"
        className="relative z-10 px-8 py-24 max-w-3xl mx-auto text-center"
      >
        <motion.h3
          className="text-4xl font-bold mb-3 neon-blink"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Parliamo del tuo prossimo progetto
        </motion.h3>
        <motion.p
          className="mb-12 text-neutral-300 text-lg"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Dal concept alla produzione: siamo pronti ad ascoltare la tua idea e trasformarla in realtà.
        </motion.p>
        <div className="flex justify-center mb-12">
          <motion.div
            className="w-full max-w-xl rounded-2xl border-2 border-[#eaff00] shadow-[0_0_32px_#eaff00cc] bg-neutral-900/80 p-10 flex flex-col items-center transition hover:shadow-[0_0_56px_#eaff00]"
            whileHover={{ scale: 1.03 }}
          >
            <div className="mb-4 text-5xl text-[#eaff00]">
              <PackageSearch size={56} strokeWidth={2.5} />
            </div>
            <div className="font-semibold text-2xl mb-4">Richiedi un preventivo</div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-2 rounded-md font-semibold px-10 py-4 text-xl text-neutral-900 bg-[#eaff00] shadow-[0_0_16px_#eaff00cc] hover:bg-[#d4e800] hover:shadow-[0_0_32px_#eaff00] transition"
            >
              Compila il form
            </button>
          </motion.div>
        </div>
        {/* Contatto diretto */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:info@sincerastudio.it"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-[#eaff00] text-neutral-900 font-semibold shadow-[0_0_12px_#eaff00cc] hover:bg-[#d4e800] hover:shadow-[0_0_24px_#eaff00] transition"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 7 8-7V18z"/></svg>
            Email
          </a>
          <a
            href="https://wa.me/391234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-[#25D366] text-neutral-900 font-semibold shadow-[0_0_12px_#25D366cc] hover:bg-[#1ebe57] hover:shadow-[0_0_24px_#25D366] transition"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/tuonicktelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-[#229ED9] text-white font-semibold shadow-[0_0_12px_#229ED9cc] hover:bg-[#1787b7] hover:shadow-[0_0_24px_#229ED9] transition"
          >
            Telegram
          </a>
        </div>
        {/* CTA finale */}
        <div className="mt-12 text-neutral-400 text-base">
          Non sai da dove iniziare? <span className="text-[#eaff00] font-semibold">Scrivici anche solo per un consiglio!</span>
        </div>
        {/* Modal Form Preventivo */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowModal(false)}>
            <form
              className="bg-neutral-900 rounded-xl p-8 max-w-md w-full border-2 border-[#eaff00] shadow-[0_0_32px_#eaff00cc] relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-2xl text-[#eaff00] font-bold"
                onClick={() => setShowModal(false)}
                type="button"
              >
                &times;
              </button>
              <div className="mb-4 text-xl font-bold text-[#eaff00]">Richiedi un preventivo</div>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="w-full mb-3 px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
                required
              />
              <textarea
                name="messaggio"
                placeholder="Descrivi la tua richiesta"
                rows={4}
                className="w-full mb-3 px-4 py-2 rounded bg-neutral-800 border border-neutral-700 text-white"
                required
              />
              <input
                type="file"
                name="allegato"
                className="w-full mb-3 text-neutral-400"
              />
              <button
                type="submit"
                className="w-full rounded-md font-semibold px-6 py-2 text-neutral-900 bg-[#eaff00] shadow-[0_0_12px_#eaff00cc] hover:bg-[#d4e800] hover:shadow-[0_0_24px_#eaff00] transition"
              >
                Invia richiesta
              </button>
            </form>
          </div>
        )}
      </section>

      {/* Domande frequenti SPOSTATE QUI */}
      <section
        id="faq"
        className="relative z-10 px-8 py-24 bg-neutral-950/50 backdrop-blur max-w-3xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Domande frequenti
        </motion.h3>
        <div className="mt-12 max-w-4xl mx-auto divide-y divide-neutral-800">
          {[
            {
              q: "Qual è il tempo medio di consegna?",
              a: "Prototipi singoli in 2-4 giorni, serie piccole in 7-10 giorni.",
            },
            {
              q: "Accettate file STEP o STL?",
              a: "Sì, lavoriamo con STEP, STL, OBJ; offriamo anche conversione da formati proprietari.",
            },
            {
              q: "È possibile firmare un NDA?",
              a: "Assolutamente: la protezione della proprietà intellettuale è priorità.",
            },
            {
              q: "Posso richiedere una consulenza gratuita?",
              a: "Certo! Puoi contattarci tramite il form, email o WhatsApp per una prima consulenza senza impegno.",
            },
            {
              q: "Che materiali posso scegliere per la stampa?",
              a: "I principali sono PLA, PETG, TPU. Su richiesta anche metallo, nylon e compositi. Ti aiutiamo a scegliere il materiale più adatto.",
            },
            {
              q: "Fate anche post-produzione e finitura?",
              a: "Non effettuiamo verniciatura o metallizzazione, ma offriamo servizio di assemblaggio delle parti stampate.",
            },
            {
              q: "Posso stampare un solo pezzo?",
              a: "Sì, realizziamo anche singoli prototipi o pezzi unici, oltre a piccole serie.",
            },
            {
              q: "Effettuate spedizioni in tutta Italia?",
              a: "Sì, spediamo ovunque in Italia tramite corriere espresso.",
            },
          ].map((item, i) => (
            <details
              key={item.q}
              className="py-5 group open:py-6 cursor-pointer"
              open={i === 0}
            >
              <summary className="list-none flex items-center justify-between text-neutral-200 hover:text-white transition">
                {item.q}
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Blog */}
      <Blog />

      {/* Footer */}
      <footer className="relative z-10 px-8 py-10 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} Sincera Studio — Tutti i diritti riservati
      </footer>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setLightboxOpen(false)}
          style={{ cursor: "zoom-out" }}
        >
          <img
            src={lightboxImg}
            alt="Anteprima progetto"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl border-4 border-[#eaff00]"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold"
            onClick={() => setLightboxOpen(false)}
            aria-label="Chiudi"
          >
            &times;
          </button>
        </div>
      )}
    </main>
  );
}
