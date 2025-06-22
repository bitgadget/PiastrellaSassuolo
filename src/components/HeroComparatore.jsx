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
      <video
        src="/banner2.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="pointer-events-none select-none object-cover object-center absolute inset-0 w-full h-full z-0"
        
      />
      

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
        

        {/* Titolo */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight text-center mt-6"
          style={{
            textShadow: `
              0 4px 32px #fff,
              0 0px 32px #fff,
              0 0 16px #fff,
              0 2px 8px #fff,
              0 0 2px #fff
            `,
            textTransform: "uppercase"
          }}
        >
          QUANTO PUOI <span className="text-green-600">RISPARMIARE</span>?
        </motion.h1>

        {/* Sottotitolo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl text-gray-700 text-center max-w-2xl mx-auto mt-4"
          style={{
            textShadow: `
              0 2px 16px #fff,
              0 0px 32px #fff,
              0 0 8px #fff,
              0 0 2px #fff
            `,
            textTransform: "uppercase"
          }}
        >
          CONFRONTA I NOSTRI PREZZI CON QUELLI DI MERCATO E SCOPRI <br />IL TUO RISPARMIO
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
          <StatAnimated
            value={3500}
            label={<span style={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff" }}>Clienti soddisfatti</span>}
            suffix="+"
            valueStyle={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff", color: "#fff" }}
          />
          <StatAnimated
            value={120000}
            label={<span style={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff" }}>Metri quadri venduti</span>}
            suffix=" mq"
            valueStyle={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff", color: "#fff" }}
            format={value => value.toLocaleString('it-IT')}
          />
          <StatAnimated
            value={4.9}
            label={<span style={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff" }}>Valutazione media</span>}
            suffix="/5"
            decimals={1}
            valueStyle={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff", color: "#fff" }}
          />
          <StatAnimated
            value={60}
            label={<span style={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff" }}>Risparmio massimo</span>}
            suffix="%"
            valueStyle={{ textShadow: "0 2px 12px #fff, 0 0 8px #fff", color: "#fff" }}
          />
        </div>

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