import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Gem, Truck, Euro, CheckCircle2, Hammer } from "lucide-react";
import StatAnimated from "./StatAnimated";

export default function HeroComparatore() {
  const [price] = React.useState(25);

  return (
    <section
      className="relative z-10 w-full px-4 py-12 sm:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #fff 60%, #e0f2fe 100%)",
      }}
    >
      {/* Immagine di sfondo */}
      <img
        src="/bg-hero.jpg" // Cambia con il path della tua immagine
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none object-cover object-center absolute inset-0 w-full h-full z-0 opacity-30"
        style={{ filter: "blur(2px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Badge offerta */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 rounded-full font-bold shadow-lg mx-auto"
        >
          <Gem size={18} className="mr-2 animate-spin-slow" />
          OFFERTA LIMITATA: PREZZI STOCK FINO A ESAURIMENTO SCORTE
        </motion.div>

        {/* Titolo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-center mt-6"
        >
          Quanto puoi <span className="text-green-600">risparmiare</span>?
        </motion.h1>

        {/* Sottotitolo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl text-gray-600 text-center max-w-2xl mx-auto mt-4"
        >
          Confronta i nostri prezzi diretti con quelli di mercato e scopri il tuo risparmio
        </motion.p>

        {/* Comparatore */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 mx-auto w-full max-w-md md:max-w-xl lg:max-w-2xl"
        >
          <div className="flex flex-col gap-4">
            {/* Prezzo mercato */}
            <div className="flex items-center gap-2 sm:gap-3 w-full">
              <Euro className="text-red-400 flex-shrink-0" size={22} />
              <span className="font-semibold text-xs sm:text-base flex-shrink-0 w-[120px] sm:w-[150px] text-left text-neutral-600">
                Prezzo medio mercato
              </span>
              <div className="flex-1 flex items-center min-w-0 relative">
                <div className="w-full h-5 sm:h-6 bg-neutral-200 rounded-full" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-5 sm:h-6 bg-red-400 rounded-full absolute top-0 left-0"
                />
                <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-red-700 font-bold text-base sm:text-lg pointer-events-none select-none z-10">
                  25 €/mq
                </span>
              </div>
            </div>
            {/* Prezzo Lastra Ceramica */}
            <div className="flex items-center gap-2 sm:gap-3 w-full">
              <Euro className="text-green-500 flex-shrink-0" size={22} />
              <span className="font-semibold text-xs sm:text-base flex-shrink-0 w-[120px] sm:w-[150px] text-left text-green-700">
                Il nostro prezzo
              </span>
              <div className="flex-1 flex items-center min-w-0 relative">
                <div className="w-full h-5 sm:h-6 bg-neutral-200 rounded-full" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "42%" }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="h-5 sm:h-6 bg-green-500 rounded-full absolute top-0 left-0"
                />
                <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-green-900 font-bold text-base sm:text-lg pointer-events-none select-none z-10">
                  10.50 €/mq
                </span>
              </div>
            </div>
            {/* Badge risparmio */}
            {/* 
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5, type: "spring" }}
              className="mx-auto mt-1 sm:mt-2 bg-green-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-base sm:text-xl font-bold shadow-lg flex items-center gap-1 sm:gap-2"
            >
              <ArrowUpRight size={18} className="inline animate-bounce" />
              Risparmia fino al <span className="text-yellow-300 drop-shadow font-extrabold">60%</span>
            </motion.div>
            */}
          </div>
        </motion.div>

        {/* Statistiche animate */}
        <div className="flex flex-row flex-wrap justify-center gap-8 mt-8 mb-2 w-full">
          <StatAnimated value={3500} label="Clienti soddisfatti" suffix="+" />
          <StatAnimated value={120000} label="Metri quadri venduti" suffix=" mq" />
          <StatAnimated value={4.9} label="Valutazione media" suffix="/5" decimals={1} />
          <StatAnimated value={60} label="Risparmio massimo" suffix="%" />
        </div>

        {/* Vantaggi */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="flex flex-row sm:grid sm:grid-cols-3 gap-4 mt-8 max-w-md mx-auto w-full"
        >
          {[
            { icon: <Truck size={32} className="text-green-700 mx-auto" />, label: "Spedizione rapida" },
            { icon: <CheckCircle2 size={32} className="text-green-700 mx-auto" />, label: "Qualità top" },
            { icon: <Hammer size={32} className="text-green-700 mx-auto" />, label: "Solo stock selezionati" },
          ].map((v, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center text-center min-w-0"
            >
              <div className="mb-2">{v.icon}</div>
              <span className="text-xs sm:text-sm font-semibold text-neutral-700 whitespace-nowrap">{v.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottone CTA - Sempre centrato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#prodotti"
            className="px-8 py-4 bg-black text-white font-bold rounded-full shadow-lg hover:bg-neutral-800 transition-all text-lg flex items-center gap-2"
          >
            SCOPRI TUTTI I PRODOTTI <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}