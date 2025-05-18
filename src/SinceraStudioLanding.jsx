import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  PackageSearch,
  Calendar as CalendarIcon,
  ChevronDown,
  CheckCircle2,
  Truck,
  Euro,
  Phone,
  Mail,
} from "lucide-react";

const PRIMARY = "#fff";
const SECONDARY = "#000";
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

export default function LastraCeramicaLanding() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalProdotto, setModalProdotto] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Blocca lo scroll quando la modale prodotto è aperta
  useEffect(() => {
    if (modalProdotto) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalProdotto]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        <img src="/logo.png" alt="Lastra Ceramica logo" className="h-20 w-auto mb-8 animate-pulse" />
        <div className="w-72 h-3 bg-neutral-200 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-black animate-loading-bar" />
        </div>
        <div className="text-black font-semibold text-lg">
          Sto cercando le migliori offerte a Sassuolo...
        </div>
        {/* Animazione barra */}
        <style>
          {`
            @keyframes loading-bar {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            .animate-loading-bar {
              animation: loading-bar 2.2s cubic-bezier(.4,0,.2,1) forwards;
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <main className="pt-24 min-h-screen scroll-smooth bg-white text-black font-sans overflow-x-hidden selection:bg-black/10 selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-white bg-opacity-95 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Lastra Ceramica logo" className="h-10 w-auto" />
        </div>
        {/* Menu desktop */}
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#prodotti" className="hover:text-black transition">
            Prodotti
          </a>
          <a href="#vantaggi" className="hover:text-black transition">
            Vantaggi
          </a>
          <a href="#faq" className="hover:text-black transition">
            FAQ
          </a>
          <a href="#contatti" className="hover:text-black transition">
            Contatti
          </a>
        </nav>
        {/* Desktop */}
        <a
          href="https://wa.me/393493061878"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          Contattaci
        </a>
        {/* Hamburger menu mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-neutral-100 transition"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Apri menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="6" y1="9" x2="22" y2="9" />
            <line x1="6" y1="15" x2="22" y2="15" />
            <line x1="6" y1="21" x2="22" y2="21" />
          </svg>
        </button>
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 flex justify-end" onClick={() => setMobileMenuOpen(false)}>
            <nav
              className="w-64 bg-white h-full shadow-lg flex flex-col p-8 gap-6"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="self-end mb-6 text-2xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Chiudi menu"
              >
                &times;
              </button>
              <a href="#prodotti" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Prodotti</a>
              <a href="#vantaggi" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Vantaggi</a>
              <a href="#faq" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contatti" className="text-lg py-2" onClick={() => setMobileMenuOpen(false)}>Contatti</a>
              <a
                href="https://wa.me/393493061878"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-full border border-black px-6 py-2 text-sm hover:bg-black hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contattaci
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-0 py-0 max-w-none mx-0 text-center overflow-hidden">
        {/* Video di sfondo SOLO nella sezione */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ minHeight: "100%", minWidth: "100%" }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay per migliorare leggibilità */}
        <div className="absolute inset-0 bg-black/5 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen">
          <motion.h2
            className="text-5xl md:text-7xl font-bold leading-tight"
            variants={stagger}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Tutto sotto<br />
            i 10 €/mq
          </motion.h2>
          <motion.p
            className="mt-4 text-2xl md:text-4xl text-white font-semibold drop-shadow max-w-prose mx-auto"
            variants={stagger}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            PIASTRELLE ITALIANE<br />
            IN PRONTA CONSEGNA<br />
            DIRETTAMENTE DALLA FABBRICA
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            variants={stagger}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href="#prodotti"
              className="rounded-md font-semibold px-6 py-3 bg-black text-white text-center hover:bg-neutral-800 transition"
            >
              Scopri i prodotti
            </a>
            <a
              href="#contatti"
              className="rounded-md border border-white px-6 py-3 text-center text-white hover:bg-white hover:text-black transition"
            >
              Contattaci
            </a>
          </motion.div>
        </div>
      </section>

      {/* Chi siamo */}
      <section className="relative z-10 px-8 py-24 max-w-4xl mx-auto text-center">
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-8 text-black"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Chi siamo
        </motion.h3>
        <motion.p
          className="text-neutral-700 text-lg md:text-xl mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          LASTRA CERAMICA nasce per offrire piastrelle di alta qualità a prezzi di fabbrica, tutte sotto i 10 €/mq. Lavoriamo direttamente con i migliori produttori italiani per garantire stock sempre aggiornati, consegne rapide e consulenza professionale.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <Layers3 size={40} className="mb-4 text-black" />
            <h4 className="font-bold text-lg mb-2">Esperienza</h4>
            <p className="text-neutral-700 text-sm text-center">
              Da oltre 10 anni nel settore ceramico, mettiamo la nostra esperienza al servizio di privati e professionisti.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <PackageSearch size={40} className="mb-4 text-black" />
            <h4 className="font-bold text-lg mb-2">Fornitori selezionati</h4>
            <p className="text-neutral-700 text-sm text-center">
              Collaboriamo solo con produttori italiani certificati, per offrire qualità e affidabilità.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
            <CalendarIcon size={40} className="mb-4 text-black" />
            <h4 className="font-bold text-lg mb-2">Consulenza dedicata</h4>
            <p className="text-neutral-700 text-sm text-center">
              Ti seguiamo dalla scelta del materiale fino alla consegna, con preventivi rapidi e assistenza personalizzata.
            </p>
          </div>
        </div>
      </section>

      {/* Prodotti */}
      <section
        id="prodotti"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Prodotti in pronta consegna
        </motion.h3>
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-green-600 text-white text-lg font-bold px-6 py-2 rounded-full shadow">
            Tutte le piastrelle</br>
            sotto i 10 €/mq
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Gres Porcellanato 60x60",
              desc: "Finitura opaca, effetto cemento chiaro.",
              img: "/prodotti/gres-60x60.png",
              badge: "Ultimi pezzi",
              prezzo: "5,90",
              quantita: "120 mq",
            },
            {
              title: "Effetto Marmo Bianco 120x60",
              desc: "Superficie lucida, ideale per ambienti eleganti.",
              img: "/prodotti/marmo-120x60.png",
              badge: "Offerta",
              prezzo: "8,50",
              quantita: "80 mq",
            },
            {
              title: "Gres Effetto Legno 20x120",
              desc: "Color rovere naturale, bordo rettificato.",
              img: "/prodotti/legno-20x120.png",
              badge: "Novità",
              prezzo: "14,00",
              quantita: "150 mq",
            },
          ].map((prod, i) => (
            <motion.div
              key={prod.title}
              className="group border border-neutral-200 rounded-2xl p-0 bg-white hover:shadow-xl hover:border-black transition overflow-hidden flex flex-col cursor-pointer"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
              onClick={() => setModalProdotto(prod)}
            >
              <div className="h-48 bg-neutral-100 flex items-center justify-center overflow-hidden relative">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition"
                />
                {prod.badge && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {prod.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-center">{prod.title}</h4>
                  <p className="mt-2 text-neutral-700 text-sm leading-relaxed text-center">
                    {prod.desc}
                  </p>
                  <div className="mt-2 text-center text-black font-bold">
                    {prod.prezzo && <span>{prod.prezzo} €/mq</span>}
                  </div>
                  <div className="mt-1 text-center text-xs text-neutral-500">
                    {prod.quantita && <span>{prod.quantita} disponibili</span>}
                  </div>
                </div>
                <a
                  href="https://wa.me/393493061878"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-md font-semibold px-6 py-2 bg-black text-white text-center hover:bg-neutral-800 transition"
                  onClick={e => e.stopPropagation()}
                >
                  Richiedi disponibilità
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        {modalProdotto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setModalProdotto(null)}
            style={{ overscrollBehavior: "contain" }}
          >
            <div
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-2xl text-black font-bold"
                onClick={() => setModalProdotto(null)}
                type="button"
                aria-label="Chiudi"
              >
                &times;
              </button>
              <img
                src={modalProdotto.img}
                alt={modalProdotto.title}
                className="w-full h-64 object-contain mb-4 rounded"
              />
              <h4 className="text-xl font-bold mb-2">{modalProdotto.title}</h4>
              <p className="text-neutral-700 mb-2">{modalProdotto.desc}</p>
              <div className="text-black font-bold mb-1">{modalProdotto.prezzo} €/mq</div>
              <div className="text-xs text-neutral-500 mb-4">{modalProdotto.quantita} disponibili</div>
              <a
                href="https://wa.me/393493061878"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md font-semibold px-6 py-2 bg-black text-white text-center hover:bg-neutral-800 transition"
              >
                Richiedi disponibilità
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Vantaggi */}
      <section
        id="vantaggi"
        className="relative z-10 px-8 py-24 max-w-5xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl font-bold mb-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Perché scegliere LASTRA CERAMICA
        </motion.h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Euro size={36} />,
              title: "Prezzi di fabbrica",
              desc: "Acquisti direttamente dalla fabbrica, senza intermediari.",
            },
            {
              icon: <Truck size={36} />,
              title: "Spedizione rapida",
              desc: "Stock sempre disponibili e consegna veloce in tutta Italia.",
            },
            {
              icon: <CheckCircle2 size={36} />,
              title: "Qualità garantita",
              desc: "Solo piastrelle selezionate dai migliori produttori.",
            },
            {
              icon: <Phone size={36} />,
              title: "Consulenza dedicata",
              desc: "Supporto professionale per ogni esigenza, dal preventivo alla posa.",
            },
          ].map((v, i) => (
            <motion.div
              key={v.title}
              className="rounded-2xl border border-neutral-200 p-8 bg-white hover:shadow-xl hover:border-black transition flex flex-col items-center"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
            >
              <div className="mb-4 text-black">{v.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{v.title}</h4>
              <p className="text-neutral-700 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Calcolatore spedizione - IMPORTANTE E ANIMATO */}
      <section
        id="calcolatore"
        className="relative z-10 px-8 py-24 max-w-2xl mx-auto text-center"
      >
        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Calcola la spedizione in pochi secondi
        </motion.h3>
        <motion.p
          className="mb-8 text-neutral-700 text-lg text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Tutte le piastrelle che vedi sono in pronta consegna, con stock limitati e prezzi esclusivi. Contattaci per ricevere foto dettagliate, campioni o un preventivo personalizzato!
        </motion.p>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ShippingCalculator />
        </motion.div>
      </section>

      {/* Testimonianze - inserito dopo sezione calcolatore */}
      <section className="relative z-10 px-8 py-24 bg-neutral-50 max-w-5xl mx-auto">
        <motion.h3
          className="text-3xl font-bold mb-12 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Cosa dicono i nostri clienti
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              nome: "Studio Architettura Moderni",
              ruolo: "Cliente business",
              testo: "Collaboriamo da due anni con Lastra Ceramica e non abbiamo mai avuto problemi di fornitura o qualità. Prezzi sempre competitivi.",
              foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
            },
            {
              nome: "Roberto Bianchi",
              ruolo: "Privato",
              testo: "Ho ristrutturato casa risparmiando quasi 2.000€ sulle piastrelle. La qualità è eccellente e il servizio clienti davvero professionale.",
              foto: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
            },
            {
              nome: "Edil Costruzioni srl",
              ruolo: "Impresa edile",
              testo: "Forniture sempre puntuali e prezzi imbattibili. La consulenza tecnica ci ha aiutato a scegliere i materiali migliori per ogni progetto.",
              foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80"
            }
          ].map((recensione, i) => (
            <motion.div
              key={recensione.nome}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              custom={i + 1}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex-1">
                <p className="text-neutral-700 italic mb-6">"{recensione.testo}"</p>
              </div>
              <div className="flex gap-4 items-center pt-4 border-t border-neutral-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                  <img src={recensione.foto} alt={recensione.nome} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{recensione.nome}</p>
                  <p className="text-sm text-neutral-500">{recensione.ruolo}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative z-10 px-8 py-24 bg-neutral-50 max-w-3xl mx-auto"
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
        <div className="mt-12 max-w-4xl mx-auto divide-y divide-neutral-200">
          {[
            {
              q: "Come posso conoscere la disponibilità dei lotti?",
              a: "Contattaci tramite il form o via email: ti risponderemo rapidamente con la disponibilità aggiornata.",
            },
            {
              q: "Effettuate spedizioni in tutta Italia?",
              a: "Sì, spediamo ovunque in Italia tramite corriere espresso.",
            },
            {
              q: "Posso vedere le piastrelle prima dell'acquisto?",
              a: "Su richiesta possiamo inviare foto dettagliate o campioni dei lotti disponibili.",
            },
            {
              q: "Fornite anche la posa?",
              a: "Collaboriamo con posatori di fiducia in molte zone: chiedici info per la tua provincia.",
            },
          ].map((item, i) => (
            <details
              key={item.q}
              className="py-5 group open:py-6 cursor-pointer"
              open={i === 0}
            >
              <summary className="list-none flex items-center justify-between text-neutral-800 hover:text-black transition">
                {item.q}
                <ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-neutral-600 text-sm leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Contatti */}
      <section
        id="contatti"
        className="relative z-10 px-8 py-24 max-w-3xl mx-auto text-center"
      >
        <motion.h3
          className="text-4xl font-bold mb-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contattaci
        </motion.h3>
        <motion.p
          className="mb-12 text-neutral-700 text-lg"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Richiedi disponibilità, preventivi o informazioni: rispondiamo in poche ore.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <a
            href="mailto:info@lastraceramica.it"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 bg-black text-white font-semibold hover:bg-neutral-800 transition"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="tel:+390123456789"
            className="inline-flex items-center gap-2 rounded-md px-6 py-3 border border-black text-black font-semibold hover:bg-black hover:text-white transition"
          >
            <Phone size={20} /> Telefono
          </a>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-4 rounded-md font-semibold px-8 py-3 bg-black text-white hover:bg-neutral-800 transition"
        >
          Richiedi informazioni
        </button>
        {/* Modal Form Preventivo */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setShowModal(false)}>
            <form
              className="bg-white rounded-xl p-8 max-w-md w-full border-2 border-black shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-4 text-2xl text-black font-bold"
                onClick={() => setShowModal(false)}
                type="button"
              >
                &times;
              </button>
              <div className="mb-4 text-xl font-bold text-black">Richiedi informazioni</div>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                className="w-full mb-3 px-4 py-2 rounded bg-neutral-100 border border-neutral-300 text-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 rounded bg-neutral-100 border border-neutral-300 text-black"
                required
              />
              <textarea
                name="messaggio"
                placeholder="Descrivi la tua richiesta"
                rows={4}
                className="w-full mb-3 px-4 py-2 rounded bg-neutral-100 border border-neutral-300 text-black"
                required
              />
              <button
                type="submit"
                className="w-full rounded-md font-semibold px-6 py-2 text-white bg-black hover:bg-neutral-800 transition"
              >
                Invia richiesta
              </button>
            </form>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-10 text-center text-neutral-600 text-sm">
        © {new Date().getFullYear()} LASTRA CERAMICA — Tutti i diritti riservati
      </footer>
    </main>
  );
}

function ShippingCalculator() {
  const [mq, setMq] = useState("");
  const [zona, setZona] = useState("");
  const [costo, setCosto] = useState(null);

  function calcola() {
    const mqNum = parseFloat(mq.replace(",", "."));
    if (isNaN(mqNum) || mqNum <= 0 || !zona) {
      setCosto(null);
      return;
    }
    let base = 40;
    let perMq = 1.5;
    if (zona === "nord") perMq = 2.5;
    if (zona === "centro") perMq = 1.5;
    if (zona === "sud") perMq = 2.5;
    if (zona === "isole") perMq = 4;
    const totale = base + perMq * mqNum;
    setCosto(totale.toFixed(2));
  }

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={e => {
        e.preventDefault();
        calcola();
      }}
    >
      <input
        type="number"
        min={1}
        step={1}
        value={mq}
        onChange={e => setMq(e.target.value)}
        placeholder="Metri quadri"
        className="px-3 py-2 rounded border border-neutral-300"
        required
      />
      <select
        value={zona}
        onChange={e => setZona(e.target.value)}
        className="px-3 py-2 rounded border border-neutral-300"
        required
      >
        <option value="">Seleziona zona</option>
        <option value="nord">Nord Italia</option>
        <option value="centro">Centro Italia</option>
        <option value="sud">Sud Italia</option>
        <option value="isole">Isole</option>
      </select>
      <button
        type="submit"
        className="rounded bg-black text-white px-4 py-2 font-semibold hover:bg-neutral-800 transition"
      >
        Calcola
      </button>
      {costo && (
        <div className="mt-2 text-black font-bold">
          Costo stimato spedizione: <span className="text-green-700">{costo} €</span>
        </div>
      )}
    </form>
  );
}
