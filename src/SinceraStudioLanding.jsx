import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  Gem,
  Hammer,
  Mountain,
  Calendar as CalendarIcon,
  ChevronDown,
  CheckCircle2,
  Truck,
  Euro,
  Phone,
  Mail,
  Lightbulb,
  PackageSearch,
} from "lucide-react";
import ProductSlider from "./components/ProductSlider";
import StockChart from "./components/StockChart";
import ShippingCalculator from "./components/ShippingCalculator";
import ShippingCalculatorItalia from "./components/ShippingCalculatorItalia";
import ZoomableImage from "./components/ZoomableImage";
import ZoomableImageSlider from "./components/ZoomableImageSlider";
import { Typewriter } from 'react-simple-typewriter';
import Footer from "./components/Footer";
import products from "./data/products"; // <--- IMPORTA QUI

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

// --- SPOSTA QUI LA FUNZIONE FUORI DAL COMPONENTE ---
export function scrollToCategoria(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const yOffset = -120; // offset per banner/header
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function LastraCeramicaLanding() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalProdotto, setModalProdotto] = useState(null);
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Blocca lo scroll quando la modale prodotto è aperta
  useEffect(() => {
    let scrollY = 0;
    if (modalProdotto) {
      scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      // Salva la posizione nello scope del componente
      window.__lastraScrollY = scrollY;
    } else {
      // Recupera la posizione salvata
      const y = window.__lastraScrollY || 0;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
      // Pulisci la variabile globale
      delete window.__lastraScrollY;
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [modalProdotto]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        <img
          src="/logo.png"
          alt="Logo PiastrellaSassuolo"
          className="h-24 w-24 mb-4 animate-spin-slow"
          style={{ minWidth: 96 }}
        />
        <span className="mb-8 text-2xl font-bold text-black tracking-tight">PiastrellaSassuolo</span>
        <div className="w-72 h-3 bg-neutral-200 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-black animate-loading-bar" />
        </div>
        <div className="text-black font-semibold text-lg">
          Sto cercando le migliori offerte a Sassuolo...
        </div>
      </div>
    );
  }

  return (
    <main id="top" className="pt-24 min-h-screen scroll-smooth bg-white text-black font-sans overflow-x-hidden selection:bg-black/10 selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-white bg-opacity-95 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <a href="#top" className="focus:outline-none">
            <img
              src="/logo.png"
              alt="Logo PiastrellaSassuolo"
              className="h-10 w-10 object-contain"
              style={{ minWidth: 40 }}
            />
          </a>
          <a href="#top" className="focus:outline-none">
            <span className="font-bold text-2xl tracking-tight text-black">PiastrellaSassuolo</span>
          </a>
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
          <a href="#calcolatore" className="hover:text-black transition">
            Calcolo spedizione
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
              <a href="#calcolatore" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Calcolo spedizione</a>
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
      <section className="relative z-10 flex flex-col items-center justify-center w-full px-0 py-0 max-w-none mx-0 text-center overflow-hidden min-h-[60vh] md:min-h-[80vh]">
        {/* Sfondo video */}
        <video
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src="/banner2.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            // Riduci l'altezza all'80% solo su mobile
            maxHeight: "80vh",
          }}
        />
        <style>
          {`
            @media (max-width: 640px) {
              section > video {
                height: 80% !important;
                max-height: 80% !important;
              }
            }
          `}
        </style>
        <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-[60vh] md:min-h-[80vh] px-2 sm:px-4">
          <motion.h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl  font-bold leading-tight break-words"
            style={{
              wordBreak: "break-word",
              lineHeight: "1.1",
              maxWidth: "95vw",
              textShadow: "0 2px 8px rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.25)"
            }}
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <Typewriter
              words={[
                'OLTRE 100 ARTICOLI',
                'SOTTO i 10 €/mq',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={30}
              delaySpeed={900}
            />
          </motion.h2>
          <motion.p
            className="mt-3 text-base xs:text-lg md:text-2xl text-white font-semibold drop-shadow max-w-prose mx-auto"
            variants={stagger}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              lineHeight: "1.2",
              maxWidth: "95vw",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.35), 0 1px 2px rgba(0,0,0,0.25)"
            }}
          >
            CONFRONTA I PREZZI<br />
            DI MERCATO<br />
            RISPARMIA FINO AL <span className="text-green-300 neon-flash">60%</span>!
          </motion.p>
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center w-full max-w-xs sm:max-w-none"
            variants={stagger}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href="#prodotti"
              className="rounded-md font-semibold px-6 py-3 bg-black text-white text-center hover:bg-neutral-800 transition w-full sm:w-auto"
            >
              Scopri i prodotti
            </a>
            <a
              href="#contatti"
              className="rounded-md border border-white px-6 py-3 text-center text-white hover:bg-white hover:text-black transition w-full sm:w-auto"
            >
              Contattaci
            </a>
          </motion.div>
        </div>
      </section>

      {/* Grafico stock per categoria */}
      <section className="relative z-20 w-full max-w-3xl mx-auto -mt-24 mb-4 md:mb-12">
        <StockChart />
      </section>

      {/* Chi siamo - versione ultra compatta */}
      <section className="relative z-10 px-6 py-8 max-w-md mx-auto text-center">
        <motion.h3
          className="text-xl md:text-2xl font-bold mb-3 text-black tracking-tight"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Siamo una <span className="text-green-700">STOCK HOUSE</span> <br />di pavimenti
        </motion.h3>
        <motion.p
          className="text-neutral-700 text-sm md:text-base mb-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true }}
        >
          Ricerchiamo i migliori prezzi delle migliori marche di piastrelle in gres porcellanato prodotte a Sassuolo.
        </motion.p>
        <div className="flex justify-center gap-2 md:gap-6">
          <div className="flex flex-col items-center">
            <Gem size={28} className="mb-1 text-blue-700" />
            <span className="text-[11px] font-semibold text-blue-900">Marche Top</span>
          </div>
          <div className="flex flex-col items-center">
            <Euro size={28} className="mb-1 text-green-700" />
            <span className="text-[11px] font-semibold text-green-900">Prezzi Stock</span>
          </div>
          <div className="flex flex-col items-center">
            <Truck size={28} className="mb-1 text-yellow-700" />
            <span className="text-[11px] font-semibold text-yellow-900">Pronta consegna</span>
          </div>
        </div>
      </section>

      

      {/* Prodotti */}
      <section
        id="prodotti"
        className="relative z-10 px-8 pt-12 pb-4 max-w-7xl mx-auto"
      >
        <motion.h3
          className="text-3xl font-bold mb-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Prodotti in pronta consegna
        </motion.h3>
        <div className="mb-2 text-left">
          <span className="text-sm text-neutral-500 font-normal whitespace-nowrap">
            Tutti i prezzi sono IVA esclusa
          </span>
        </div>
        <div className="flex justify-center mb-6">
          <span className="bg-green-600 text-white text-lg font-bold px-10 py-2 rounded-full shadow text-center w-auto">
            VIENI A TROVARCI A SASSUOLO
          </span>
        </div>
        {/* Effetto Legno */}
        <div className="mb-12" id="categoria-legno">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Legno</h4>
          <ProductSlider
            products={products.legno}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Effetto Marmo */}
        <div className="mb-12" id="categoria-marmo">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Marmo</h4>
          <ProductSlider
            products={products.marmo}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Effetto Cemento */}
        <div className="mb-12" id="categoria-cemento">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Cemento</h4>
          <ProductSlider
            products={products.cemento}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Effetto Pietra */}
        <div className="mb-12" id="categoria-pietra">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Pietra</h4>
          <ProductSlider
            products={products.pietra}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Lastre Grande Formato */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 text-left">Lastre Grande Formato</h4>
          <ProductSlider
            products={products.lastre}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Rivestimenti Bagno */}
        <div className="mb-0">
          <h4 className="text-2xl font-bold mb-4 text-left">Rivestimenti Bagno</h4>
          <ProductSlider
            products={products.bagno}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Modale prodotto */}
        {modalProdotto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setModalProdotto(null)}
            style={{ overscrollBehavior: "contain" }}
          >
            <div
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
              style={{ marginTop: 'max(100px, 8vh)' }}
            >
              {/* Bottone chiudi modale, sempre in primo piano */}
              <button
                className="absolute top-2.5 right-2.5 z-30 bg-white border-2 border-neutral-300 rounded-full shadow-lg flex items-center justify-center text-black font-bold hover:bg-neutral-100 transition"
                style={{
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  minHeight: 44,
                  fontSize: 28,
                  padding: 0,
                  boxSizing: "border-box",
                  touchAction: "manipulation"
                }}
                onClick={e => {
                  e.stopPropagation();
                  setModalProdotto(null);
                }}
                type="button"
                aria-label="Chiudi"
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    fontWeight: 700,
                    fontFamily: "inherit",
                    lineHeight: 1,
                    fontSize: 28,
                    marginTop: "-2px" // correzione ottica verticale
                  }}
                >
                  &times;
                </span>
              </button>

              {/* Gestione immagini zoomabili e slider se array */}
              {modalProdotto.img && Array.isArray(modalProdotto.img) ? (
                <ZoomableImageSlider images={modalProdotto.img} title={modalProdotto.title} />
              ) : modalProdotto.img ? (
                <ZoomableImage src={modalProdotto.img} alt={modalProdotto.title} />
              ) : null}
              <h4 className="text-xl font-bold mb-2">{modalProdotto.title}</h4>
              <p className="text-neutral-700 mb-2">{modalProdotto.desc}</p>
              <div className="text-black font-bold mb-1">
                {modalProdotto.prezzo} €<span className="text-sm font-normal text-neutral-500">/mq</span>
              </div>
              {typeof modalProdotto.stock === "number" && (
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-neutral-500">Stock</span>
                    <span className="font-semibold text-black">{modalProdotto.stock} mq</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all"
                      style={{
                        width: `${Math.min(100, (modalProdotto.stock / 600) * 100)}%`
                      }}
                    />
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-1 text-center">
                    {`${modalProdotto.stock} mq in pronta consegna`}
                  </div>
                </div>
              )}
              <a
                href="https://wa.me/393493061878"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-4 block rounded-full font-bold px-10 py-2 bg-black text-white text-center shadow-lg hover:scale-105 hover:bg-neutral-800 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black"
                style={{ maxWidth: 340, minWidth: 220, letterSpacing: "0.03em" }}
              >
                <span className="inline-flex items-center gap-2">
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="inline">
                    <path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.463 3.484 1.341 4.997l-1.409 5.164a1.001 1.001 0 0 0 1.213 1.213l5.164-1.409a9.953 9.953 0 0 0 4.997 1.341c5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 18.001a7.96 7.96 0 0 1-4.073-1.143l-.291-.174-3.067.837.822-3.012-.189-.309a7.963 7.963 0 0 1-1.202-4.2c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.842c-.242-.121-1.434-.707-1.655-.788-.222-.081-.384-.121-.546.121-.161.242-.626.788-.768.95-.141.161-.283.181-.525.06-.242-.121-1.022-.377-1.946-1.201-.72-.642-1.207-1.433-1.35-1.675-.141-.242-.015-.373.106-.494.109-.109.242-.283.363-.424.121-.141.161-.242.242-.404.081-.161.04-.303-.02-.424-.06-.121-.546-1.318-.748-1.803-.197-.474-.398-.409-.546-.416l-.464-.008c-.161 0-.424.06-.646.303-.222.242-.848.828-.848 2.018s.868 2.342.989 2.504c.121.161 1.708 2.613 4.142 3.563.579.199 1.029.318 1.38.406.579.147 1.106.126 1.523.077.465-.055 1.434-.586 1.637-1.152.202-.566.202-1.051.141-1.152-.06-.101-.22-.161-.462-.282z"/>
                  </svg>
                  Richiedi disponibilità
                </span>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Calcolatore spedizione - IMPORTANTE E ANIMATO */}
      {!modalProdotto && (
        <section
          id="calcolatore"
          className="relative z-10 px-8 pt-2 pb-8 max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-100 via-white to-blue-100 rounded-2xl shadow-xl p-10 border-2 border-green-400/30"
          >
            <Truck className="mx-auto mb-2 text-green-600" size={36} />
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4 text-green-700 flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Calcola la spedizione in pochi secondi
            </motion.h3>
            <motion.p
              className="mb-8 text-neutral-700 text-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tutte le piastrelle che vedi sono in pronta consegna,<br />
              con stock limitati e prezzi esclusivi.<br />
              <span className="text-green-700 font-semibold">Scopri subito il costo di spedizione!</span>
            </motion.p>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ShippingCalculatorItalia />
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Banner calcolatore spedizione */}
      {!modalProdotto && (
        <div className="fixed top-[97px] left-0 w-full z-40 flex justify-center pointer-events-none animate-fade-in-down">
          <div className="pointer-events-auto bg-green-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg flex flex-row flex-nowrap items-center gap-1 sm:gap-3">
            <Truck size={18} className="inline" />
            <span className="font-semibold text-xs sm:text-sm">Calcola subito la spedizione per la tua zona!</span>
            <a
              href="#calcolatore"
              className="ml-1 sm:ml-3 px-2 py-1 sm:px-3 sm:py-1 bg-white text-green-700 font-extrabold rounded-full text-[10px] sm:text-xs hover:bg-green-100 transition uppercase text-center"
              style={{ letterSpacing: "0.04em", minWidth: 80, display: "inline-block" }}
            >
              CALCOLA ORA
            </a>
          </div>
        </div>
      )}

      {/* Vantaggi */}
      {!modalProdotto && (
        <section
          id="vantaggi"
          className="relative z-10 px-8 py-12 max-w-5xl mx-auto text-center"
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
      )}

      {/* Testimonianze */}
      <section className="relative z-10 px-8 py-12 bg-neutral-50 max-w-5xl mx-auto">
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
              a: "Contattaci tramite whatsapp o telefonicamente: ti risponderemo rapidamente con la disponibilità aggiornata.",
            },
            {
              q: "Effettuate spedizioni in tutta Italia?",
              a: "Sì, tramite nostro corriere di fiducia con aziende specializzate in trasporti.",
            },
            {
              q: "Posso vedere le piastrelle prima dell'acquisto?",
              a: "Possiamo fornire foto e video dal vivo oppure potete venirci a trovare a Sassuolo.",
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
      <Footer />

      {/* Quick Menu Mobile */}
      {!modalProdotto && (
        <>
          {/* Bottone visibile solo su mobile */}
          <button
            className="fixed bottom-5 right-5 z-50 bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center md:hidden hover:bg-green-700 transition"
            onClick={() => setShowQuickMenu(true)}
            aria-label="Vai agli effetti"
            type="button"
          >
            <Lightbulb size={28} className="text-white" />
          </button>
          {/* Finestra effetti mobile */}
          {showQuickMenu && (
            <div
              className="fixed inset-0 z-50 flex items-end justify-end md:hidden"
              onClick={() => setShowQuickMenu(false)}
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <div className="w-full max-w-xs mx-auto mb-4 bg-white rounded-t-2xl p-6 shadow-xl animate-slide-up relative">
                <button
                  className="absolute top-3 right-4 text-2xl text-black font-bold"
                  onClick={() => setShowQuickMenu(false)}
                  type="button"
                  aria-label="Chiudi"
                >
                  &times;
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowQuickMenu(false);
                      setTimeout(() => scrollToCategoria("categoria-legno"), 100);
                    }}
                    className="flex flex-col items-center justify-center bg-green-50 hover:bg-green-100 rounded-xl p-4 shadow transition w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1605367615038-4e3f139fa991?q=80&w=2125&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Effetto Legno"
                      className="mb-2 rounded shadow object-cover w-16 h-16"
                    />
                    <span className="font-semibold text-sm text-green-900">Legno</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowQuickMenu(false);
                      setTimeout(() => scrollToCategoria("categoria-marmo"), 100);
                    }}
                    className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 rounded-xl p-4 shadow transition w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1558346648-9757f2fa4474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Effetto Marmo"
                      className="mb-2 rounded shadow object-cover w-16 h-16"
                    />
                    <span className="font-semibold text-sm text-blue-900">Marmo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowQuickMenu(false);
                      setTimeout(() => scrollToCategoria("categoria-cemento"), 100);
                    }}
                    className="flex flex-col items-center justify-center bg-neutral-100 hover:bg-neutral-200 rounded-xl p-4 shadow transition w-full"
                  >
                    <img
                      src="https://plus.unsplash.com/premium_photo-1733317213152-64f2d68df05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Effetto Cemento"
                      className="mb-2 rounded shadow object-cover w-16 h-16"
                    />
                    <span className="font-semibold text-sm text-neutral-900">Cemento</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowQuickMenu(false);
                      setTimeout(() => scrollToCategoria("categoria-pietra"), 100);
                    }}
                    className="flex flex-col items-center justify-center bg-yellow-50 hover:bg-yellow-100 rounded-xl p-4 shadow transition w-full"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1525468568166-6f2cd17c7ec9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Effetto Pietra"
                      className="mb-2 rounded shadow object-cover w-16 h-16"
                    />
                    <span className="font-semibold text-sm text-yellow-900">Pietra</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}
