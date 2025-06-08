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
import ProductSlider from "./components/ProductSlider";
import FloorConfigurator3D from "./components/FloorConfigurator3D";
import StockChart from "./components/StockChart";

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
        <style>
          {`
            @keyframes loading-bar {
              0% { width: 0%; }
              100% { width: 100%; }
            }
            .animate-loading-bar {
              animation: loading-bar 2.2s cubic-bezier(.4,0,.2,1) forwards;
            }
            @keyframes spin-slow {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
            .animate-spin-slow {
              animation: spin-slow 1.2s linear infinite;
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
          <img
            src="/logo.png"
            alt="Logo PiastrellaSassuolo"
            className="h-10 w-10 object-contain"
            style={{ minWidth: 40 }}
          />
          <span className="font-bold text-2xl tracking-tight text-black">PiastrellaSassuolo</span>
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

      {/* Grafico stock per categoria */}
      <section className="relative z-20 w-full max-w-3xl mx-auto -mt-24 mb-4 md:mb-12">
        <StockChart />
      </section>

      {/* Chi siamo */}
      <section className="relative z-10 px-8 py-8 md:py-16 max-w-4xl mx-auto text-center">
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

      {/* Configuratore 3D */}
      {false && (
        <section className="relative z-10 px-8 pt-16 pb-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Configura il tuo pavimento in 3D</h3>
          <FloorConfigurator3D />
        </section>
      )}

      {/* Prodotti */}
      <section
        id="prodotti"
        className="relative z-10 px-8 pt-12 pb-4 max-w-7xl mx-auto"
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
        <div className="flex justify-center mb-6 text-center">
          <span className="inline-block mx-auto block bg-green-600 text-white text-lg font-bold px-10 py-2 rounded-full shadow">
            Tutti i prezzi sono IVA esclusa
          </span>
        </div>

        {/* Effetto Legno */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Legno</h4>
          <ProductSlider
            products={[
              {
                title: "Pavimento in gres porcellanato effetto legno rovere miele 22,5x90 cm",
                desc: "Piastrella rettificata e monocalibro, superficie ad alta definizione grafica, Made in Italy.",
                prezzo: "8,90",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-4920.webp?v=1727451701&width=849",
                stock: 320,
              },
              {
                title: "Gres effetto Legno maxiplancia 25x180 rovere",
                desc: "Grande formato, rettificato e monocalibro, stampa HD digitale, produzione italiana.",
                prezzo: "9,50",
                img: "https://lastraceramica.shop/cdn/shop/files/22E4649F-A77D-422F-B3A0-372353876FCB.jpg?v=1726300212&width=1920",
                stock: 210,
              },
              {
                title: "FAP – Fapnest 20x120",
                desc: "Serie Fapnest di FAP, rettificato, monocalibro e grafica ad alta risoluzione.",
                prezzo: "9,90",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-5080.jpg?v=1727714650&width=1536",
                stock: 150,
              },
              {
                title: "Gres effetto legno 20x120",
                desc: "Rettificata e monocalibro, aspetto naturale legno, posa facilitata e continuità estetica.",
                prezzo: "15,50",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-3649.jpg?v=1726140014&width=1024",
                stock: 180,
              },
              {
                title: "ASCOT – Legati Havana 20x120",
                desc: "Superficie rettificata con grafica HD dall’aspetto naturale.",
                prezzo: "9,80",
                img: "https://lastraceramica.shop/cdn/shop/files/9E97AD89-4654-404F-95C0-55A99AB27B12.jpg?v=1726216928&width=3024",
                stock: 240,
              },
              {
                title: "EFFETTO LEGNO - prezzo bomba",
                desc: "Rettificato, alta qualità estetica, ideale per grandi metrature (offerta speciale).",
                prezzo: "9,80",
                img: "https://lastraceramica.shop/cdn/shop/files/2860C1D6-5AE9-4221-A98C-A79A529D8FF1.jpg?v=1729868796&width=1152",
                stock: 600,
              },
              {
                title: "RICCHETTI – Megeve Iroko 20x120",
                desc: "Effetto legno Iroko, rettificato e resistente, venature fedeli.",
                prezzo: "9,70",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-4193.jpg?v=1726613211&width=1600",
                stock: 300,
              },
              {
                title: "Pavimento in gres porcellanato effetto legno caramel 22x90 spina di pesce/ lisca",
                desc: "Rettificata 22×90 cm, tonalità caldo-caramello, ideale per posa a spina di pesce.",
                prezzo: "9,90",
                img: "https://lastraceramica.shop/cdn/shop/files/8965F70F-8455-4391-9549-910FD290058D.jpg?v=1727717115&width=1536",
                stock: 450,
              },
              {
                title: "RICCHETTI – Soft Sugar 25x180",
                desc: "Effetto legno chiaro, grande formato, rettificato e monocalibro, look nordico.",
                prezzo: "12,50",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-3874.jpg?v=1726299336&width=1026",
                stock: 500,
              },
              {
                title: "Effetto legno soft honey 20x120 + lastra amazzonite",
                desc: "Combinazione di Soft Honey 20×120 cm con lastra decorativa effetto amazzonite, rettificato.",
                prezzo: "9,90",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-6388.jpg?v=1747511948&width=1080",
                stock: 350,
              },
            ]}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Effetto Marmo */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Marmo</h4>
          <ProductSlider
            products={[
              {
                title: "RICCHETTI – Negresco 60×60 cm",
                desc: "Marmo nero, superficie levigata e rettificata, aspetto elegante e lucido.",
                prezzo: "7,00",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-5324.jpg?v=1728059059&width=1500",
                stock: 180,
              },
              {
                title: "Gres effetto marmo statuario 60x60 levigato",
                desc: "Finitura levigata lucida, rettificata e monocalibro, grafica digitale HD.",
                prezzo: "8,90",
                img: "https://lastraceramica.shop/cdn/shop/files/9A5E8A39-1C2F-4BDA-BF0D-ACDAF16EB4B8.jpg?v=1733935218&width=1080",
                stock: 220,
              },
              {
                title: "Le scelte di Billy ! Statuario 60x120 satinato",
                desc: "Satinato, rettificato, monocalibro, superficie opaca elegante.",
                prezzo: "11,00",
                img: "https://lastraceramica.shop/cdn/shop/files/FullSizeRender_cf25d68f-235d-458a-96dd-027e3ce3fab8.jpg?v=1726219079&width=1290",
                stock: 160,
              },
              {
                title: "Gres porcellanato tipo travertino 60x120 beige",
                desc: "Lastra effetto travertino beige, rettificata e colorata in massa, venature naturali.",
                prezzo: "11,50",
                img: "https://lastraceramica.shop/cdn/shop/files/2FC8DEAD-9E52-41E5-86E7-A317C9F998CF.jpg?v=1747429258&width=1080",
                stock: 190,
              },
              {
                title: "FONDOVALLE – STATUARIO EXTRA MATT 60×120 cm",
                desc: "Finitura matt, rettificato, grafica HD ultra-realistica.",
                prezzo: "9,90",
                img: "https://lastraceramica.shop/cdn/shop/files/2109D9FC-B64A-4625-9447-DED224556B66.jpg?v=1729532746&width=912",
                stock: 210,
              },
              {
                title: "Statuario 60x60 satinato",
                desc: "Finitura satinata, rettificata e monocalibro, superficie opaca elegante.",
                prezzo: "8,90",
                img: "https://lastraceramica.shop/cdn/shop/files/DA78163B-3D2E-4970-95BD-990771149835.jpg?v=1726172432&width=1200",
                stock: 160,
              },
              {
                title: "Effetto marmo onice – crystal white matt 60x120",
                desc: "Lastra effetto onice bianco, finitura matt, rettificata e monocalibro, venature cristalline.",
                prezzo: "11,00",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-7732.jpg?v=1731740969&width=767",
                stock: 250,
              },
              {
                title: "RICCHETTI – Carrara Pure 60x120",
                desc: "Effetto marmo Carrara puro, superficie lucida, rettificato; ideale per bagni di lusso.",
                prezzo: "11,50",
                img: "https://lastraceramica.shop/cdn/shop/files/IMG-5596.jpg?v=1728580269&width=2200",
                stock: 220,
              },
            ]}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Effetto Cemento */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Cemento</h4>
          <ProductSlider
            products={[
              {
                title: "60×60 cm economico",
                desc: "Rettificato e monocalibro, soluzione economica per grandi superfici.",
                prezzo: "5,80",
                img: "",
                stock: 600,
              },
              {
                title: "Gres effetto cemento 60×60 cm",
                desc: "Effetto cemento grigio, superficie opaca, rettificata per fughe ridotte.",
                prezzo: "9,80",
                img: "",
                stock: 350,
              },
              {
                title: "Ricchetti – Easy Extra White 60×60 cm",
                desc: "Effetto cemento/resina bianco, rettificato e luminoso.",
                prezzo: "5,90",
                img: "",
                stock: 500,
              },
              {
                title: "FONDOVALLE – REFRAME TAUPE 80×80 cm",
                desc: "Effetto cemento taupe, rettificato, spessore elevato.",
                prezzo: "13,50",
                img: "",
                stock: 150,
              },
              {
                title: "FONDOVALLE – HOMESCAPE MATCHA 120×120 cm",
                desc: "Lastra effetto cemento Matcha, rettificata e monocalibro, finitura matt verde-grigia.",
                prezzo: "13,50",
                img: "",
                stock: 180,
              },
            ]}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Effetto Pietra */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 text-left">Effetto Pietra</h4>
          <ProductSlider
            products={[
              {
                title: "Kone beige 60×60 cm",
                desc: "Effetto pietra beige (serie Kone), rettificato e ingelivo, texture naturale.",
                prezzo: "9,50",
                img: "",
                stock: 240,
              },
              {
                title: "Pietra grigio 75×75 cm",
                desc: "Finitura matt, rettificata e resistente all’usura, adatta anche per esterni coperti.",
                prezzo: "9,50",
                img: "",
                stock: 300,
              },
              {
                title: "Esterno R11 30×60 cm",
                desc: "Antiscivolo R11, superficie strutturata, resistente agli agenti atmosferici.",
                prezzo: "9,90",
                img: "",
                stock: 450,
              },
              {
                title: "FONDOVALLE – Planeto Venus 60×120 cm",
                desc: "Lastra effetto pietra, rettificata, superficie satinata con venature naturali.",
                prezzo: "9,90",
                img: "",
                stock: 180,
              },
              {
                title: "Pietra Almond 120×120 cm",
                desc: "Colore Almond (beige chiaro), rettificato a bordo rettilineo, ideale per grandi formati.",
                prezzo: "9,90",
                img: "",
                stock: 210,
              },
            ]}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Lastre Grande Formato */}
        <div className="mb-12">
          <h4 className="text-2xl font-bold mb-4 text-left">Lastre Grande Formato</h4>
          <ProductSlider
            products={[
              {
                title: "FONDOVALLE – Portland Jordan 120×120 cm",
                desc: "Grande lastra effetto cemento, rettificata e levigata, spessore 6 mm.",
                prezzo: "25,00",
                img: "",
                stock: 150,
              },
              {
                title: "Lastra XXL 160×320 cm (rettificata)",
                desc: "Lastra XXL in gres porcellanato, finitura rettificata, perfetta per rivestimenti continui.",
                prezzo: "27,00",
                img: "",
                stock: 120,
              },
              {
                title: "Travertino 60×120 cm + lastra Capraia",
                desc: "Combinazione di gres effetto travertino e lastra Capraia, materiali rettificati e levigati.",
                prezzo: "29,00",
                img: "",
                stock: 180,
              },
              {
                title: "Lastra effetto cemento 120×280 cm",
                desc: "Grande lastra effetto cemento, superficie matt rettificata, look industriale.",
                prezzo: "15,90",
                img: "",
                stock: 210,
              },
              {
                title: "Lastra effetto marmo 120×280 cm",
                desc: "Finitura lucida, rettificata, imitazione marmo naturale in formati extra large.",
                prezzo: "28,00",
                img: "",
                stock: 160,
              },
              {
                title: "Lastra statuario levigato 120×280 cm",
                desc: "Finitura levigata lucida, rettificata, alto spessore per rivestimenti di pregio.",
                prezzo: "28,00",
                img: "",
                stock: 140,
              },
            ]}
            onCardClick={setModalProdotto}
          />
        </div>

        {/* Rivestimenti Bagno */}
        <div className="mb-0">
          <h4 className="text-2xl font-bold mb-4 text-left">Rivestimenti Bagno</h4>
          <ProductSlider
            products={[
              {
                title: "Gres porcellanato tipo travertino 60×120 cm (Rivestimento)",
                desc: "Effetto travertino beige, finitura matt, piastrella rettificata con venature naturali.",
                prezzo: "9,80",
                img: "",
                stock: 300,
              },
              {
                title: "Effetto marmo onice – Crystal White Matt 60×120 cm (Rivestimento)",
                desc: "Lastra effetto onice bianco, finitura matt, rettificata e monocalibro, venature cristalline.",
                prezzo: "11,00",
                img: "",
                stock: 250,
              },
              {
                title: "RICCHETTI – Carrara Pure 60×120 cm (Rivestimento)",
                desc: "Effetto marmo Carrara puro, superficie lucida, rettificato; ideale per bagni di lusso.",
                prezzo: "11,50",
                img: "",
                stock: 220,
              },
              {
                title: "OUTFIT Bagno 60×120 cm + lastra Marquinia 75×150 cm",
                desc: "Combinazione gres effetto legno 60×120 cm e lastra Marble Marquinia 75×150 cm, rettificati.",
                prezzo: "11,50",
                img: [
                  "https://lastraceramica.shop/cdn/shop/files/IMG-4812.jpg?v=1743714998&width=500",
                  "https://lastraceramica.shop/cdn/shop/files/IMG-4813.jpg?v=1743714997&width=500"
                ],
                stock: 180,
              },
              {
                title: "FONDOVALLE – Travertino griseo 60×120 cm (Rivestimento)",
                desc: "Effetto travertino grigio, rettificato e opaco, stile naturale e contemporaneo.",
                prezzo: "12,70",
                img: "",
                stock: 190,
              },
            ]}
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
            >
              <button
                className="absolute top-3 right-4 text-2xl text-black font-bold"
                onClick={() => setModalProdotto(null)}
                type="button"
                aria-label="Chiudi"
              >
                &times;
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
                className="inline-block rounded-md font-semibold px-6 py-2 bg-black text-white text-center hover:bg-neutral-800 transition"
              >
                Richiedi disponibilità
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
              <ShippingCalculator />
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Banner calcolatore spedizione */}
      <div className="fixed top-24 left-0 w-full z-40 flex justify-center pointer-events-none animate-fade-in-down">
        <div className="pointer-events-auto bg-green-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full shadow-lg flex items-center gap-2 sm:gap-3">
          <Truck size={18} className="inline" />
          <span className="font-semibold text-xs sm:text-sm">Calcola subito la spedizione per la tua zona!</span>
          <a
            href="#calcolatore"
            className="ml-2 sm:ml-3 px-3 py-1 bg-white text-green-700 font-bold rounded-full text-xs hover:bg-green-100 transition"
          >
            Calcola ora
          </a>
        </div>
        <style>
          {`
            @keyframes fade-in-down {
              0% { opacity: 0; transform: translateY(-24px);}
              100% { opacity: 1; transform: translateY(0);}
            }
            .animate-fade-in-down {
              animation: fade-in-down 0.8s cubic-bezier(.4,0,.2,1);
            }
          `}
        </style>
      </div>

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
      <footer className="relative z-10 px-8 py-12 bg-neutral-900 text-neutral-200 text-sm mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
          {/* Logo e claim */}
          <div className="flex-1 flex flex-col gap-3 items-start">
            {/* Logo rimosso */}
            <span className="font-semibold text-lg text-white">PiastrellaSassuolo</span>
            <span className="text-neutral-400">Piastrelle italiane in pronta consegna a prezzi di fabbrica.</span>
          </div>
          {/* Link utili */}
          <div className="flex-1 flex flex-col gap-2 mt-8 md:mt-0">
            <span className="font-semibold text-white mb-2">Link utili</span>
            <a href="#prodotti" className="hover:underline hover:text-white transition">Prodotti</a>
            <a href="#vantaggi" className="hover:underline hover:text-white transition">Vantaggi</a>
            <a href="#faq" className="hover:underline hover:text-white transition">FAQ</a>
            <a href="#contatti" className="hover:underline hover:text-white transition">Contatti</a>
          </div>
          {/* Contatti */}
          <div className="flex-1 flex flex-col gap-2 mt-8 md:mt-0">
            <span className="font-semibold text-white mb-2">Contatti</span>
            <a href="mailto:info@lastraceramica.it" className="flex items-center gap-2 hover:underline hover:text-white transition">
              <Mail size={16} /> info@lastraceramica.it
            </a>
            <a href="tel:+390123456789" className="flex items-center gap-2 hover:underline hover:text-white transition">
              <Phone size={16} /> +39 0123 456789
            </a>
            <a href="https://wa.me/393493061878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline hover:text-white transition">
              <svg width="16" height="16" fill="currentColor" className="inline" viewBox="0 0 24 24"><path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.463 3.484 1.341 4.997l-1.409 5.164a1.001 1.001 0 0 0 1.213 1.213l5.164-1.409a9.953 9.953 0 0 0 4.997 1.341c5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 18.001a7.96 7.96 0 0 1-4.073-1.143l-.291-.174-3.067.837.822-3.012-.189-.309a7.963 7.963 0 0 1-1.202-4.2c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.842c-.242-.121-1.434-.707-1.655-.788-.222-.081-.384-.121-.546.121-.161.242-.626.788-.768.95-.141.161-.283.181-.525.06-.242-.121-1.022-.377-1.946-1.201-.72-.642-1.207-1.433-1.35-1.675-.141-.242-.015-.373.106-.494.109-.109.242-.283.363-.424.121-.141.161-.242.242-.404.081-.161.04-.303-.02-.424-.06-.121-.546-1.318-.748-1.803-.197-.474-.398-.409-.546-.416l-.464-.008c-.161 0-.424.06-.646.303-.222.242-.848.828-.848 2.018s.868 2.342.989 2.504c.121.161 1.708 2.613 4.142 3.563.579.199 1.029.318 1.38.406.579.147 1.106.126 1.523.077.465-.055 1.434-.586 1.637-1.152.202-.566.202-1.051.141-1.152-.06-.101-.22-.161-.462-.282z"/></svg>
              WhatsApp
            </a>
            <span className="text-neutral-400 mt-2">Via delle Piastrelle 10, 41049 Sassuolo (MO)</span>
            <span className="text-neutral-400">P.IVA 01234567890</span>
          </div>
        </div>
        <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-neutral-400 text-xs">
          © {new Date().getFullYear()} PiastrellaSassuolo — Tutti i diritti riservati
        </div>
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
      className="flex flex-col gap-4 items-center"
      onSubmit={e => {
        e.preventDefault();
        calcola();
      }}
    >
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <input
          type="number"
          min={1}
          step={1}
          value={mq}
          onChange={e => setMq(e.target.value)}
          placeholder="Metri quadri"
          className="flex-1 px-4 py-3 rounded-lg border-2 border-green-400/50 focus:border-green-600 outline-none text-lg shadow-sm"
          required
        />
        <select
          value={zona}
          onChange={e => setZona(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border-2 border-green-400/50 focus:border-green-600 outline-none text-lg shadow-sm"
          required
        >
          <option value="">Zona</option>
          <option value="nord">Nord Italia</option>
          <option value="centro">Centro Italia</option>
          <option value="sud">Sud Italia</option>
          <option value="isole">Isole</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-2 rounded-full bg-green-600 text-white px-8 py-3 font-bold text-lg shadow hover:bg-green-700 transition"
      >
        Calcola spedizione
      </button>
      {costo && (
        <div className="mt-4 text-xl font-bold text-green-700 bg-green-100 rounded-lg px-6 py-3 shadow text-center">
          Costo stimato spedizione:
          <br className="block sm:hidden" />
          <span className="text-green-900 block sm:inline">{costo} €</span>
        </div>
      )}
    </form>
  );
}

function ZoomableImage({ src, alt }) {
  const [zoom, setZoom] = React.useState(false);
  return (
    <div className="relative mb-4">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-contain rounded cursor-zoom-in transition-transform duration-200"
        style={zoom ? { cursor: "zoom-out" } : {}}
        onClick={() => setZoom(z => !z)}
      />
      {/* Icona lente sopra l'immagine, overlay, sempre cliccabile l'immagine */}
      {!zoom && (
        <span className="absolute bottom-2 right-2 z-30 bg-white/80 rounded-full p-1 shadow text-black pointer-events-none">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      )}
      {!zoom && (
        <div className="text-xs text-neutral-500 text-center mt-1 select-none">Clicca per ingrandire</div>
      )}
      {zoom && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoom(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            style={{ cursor: "zoom-out" }}
          />
        </div>
      )}
    </div>
  );
}

function ZoomableImageSlider({ images, title }) {
  const [index, setIndex] = React.useState(0);
  const [zoom, setZoom] = React.useState(false);

  function prev() {
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <>
      <div className="relative mb-4">
        <img
          src={images[index]}
          alt={title}
          className="w-full h-64 object-contain rounded cursor-zoom-in transition-transform duration-200"
          style={zoom ? { cursor: "zoom-out" } : {}}
          onClick={() => setZoom(z => !z)}
        />
        {/* Icona lente sopra l'immagine, overlay, sempre cliccabile l'immagine */}
        {!zoom && (
          <span className="absolute bottom-2 right-2 z-30 bg-white/80 rounded-full p-1 shadow text-black pointer-events-none">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        )}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white z-20"
              onClick={e => { e.stopPropagation(); prev(); }}
              aria-label="Immagine precedente"
              type="button"
            >
              ‹
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow hover:bg-white z-20"
              onClick={e => { e.stopPropagation(); next(); }}
              aria-label="Immagine successiva"
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>
      {!zoom && (
        <div className="text-xs text-neutral-500 text-center mt-1 select-none">Clicca per ingrandire</div>
      )}
      {zoom && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoom(false)}
        >
          <img
            src={images[index]}
            alt={title}
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            style={{ cursor: "zoom-out" }}
          />
        </div>
      )}
    </>
  );
}
