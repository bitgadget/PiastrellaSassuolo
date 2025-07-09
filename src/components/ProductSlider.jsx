import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProductSlider({ products, onCardClick }) {
  const scrollRef = useRef(null);

  // Funzione per scorrere a destra/sinistra
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const scrollAmount = current.offsetWidth * 0.8;
    if (direction === "left") current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    if (direction === "right") current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Freccia sinistra */}
      <button
        type="button"
        className="flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        onClick={() => scroll("left")}
        aria-label="Scorri a sinistra"
        style={{ display: products.length > 1 ? "flex" : "none" }}
      >
        <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}><polyline points="18 6 10 14 18 22" /></svg>
      </button>
      {/* Freccia destra */}
      <button
        type="button"
        className="flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        onClick={() => scroll("right")}
        aria-label="Scorri a destra"
        style={{ display: products.length > 1 ? "flex" : "none" }}
      >
        <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}><polyline points="10 6 18 14 10 22" /></svg>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 py-2 pr-24 md:pr-4"
        style={{
          scrollSnapType: "x mandatory",
          scrollPaddingRight: "96px", // aiuta lo snap sull'ultima card
        }}
      >
        {products.map((prod, idx) =>
          prod.isWhatsAppCard ? (
            <div
              key={`wa-card-${idx}`}
              className={`min-w-[260px] max-w-[320px] flex flex-col items-center justify-center bg-green-50 border-2 border-green-200 rounded-2xl shadow-lg p-6 mx-2 my-4 hover:bg-green-100 transition cursor-pointer
        ${idx === products.length - 1 ? "mr-16 md:mr-0 snap-end" : ""}`}
              onClick={() => {
                window.open(
                  `https://wa.me/393493061878?text=${encodeURIComponent(prod.waMsg)}`,
                  "_blank"
                );
              }}
              style={{ minHeight: 260 }}
            >
              <span className="text-green-700 text-2xl mb-2 font-extrabold text-center">
                {prod.title}
              </span>
              <p className="text-green-900 text-sm text-center mb-4">{prod.desc}</p>
              {/* Testo centrale in nero e maiuscolo solo sull'ultima card, dinamico per categoria */}
              {idx === products.length - 1 && (
                <div className="my-4 text-black text-center font-extrabold text-base uppercase">
                  {prod.category === "legno" && "+ DI 30 PAVIMENTI EFFETTO LEGNO"}
                  {prod.category === "marmo" && "+ DI 20 PAVIMENTI EFFETTO MARMO"}
                  {prod.category === "cemento" && "+ DI 15 PAVIMENTI EFFETTO CEMENTO"}
                  {prod.category === "pietra" && "+ DI 10 PAVIMENTI EFFETTO PIETRA"}
                  {/* Aggiungi altre categorie se necessario */}
                </div>
              )}
              <button
                className="mt-auto px-6 py-2 rounded-full bg-green-600 text-white font-bold shadow hover:bg-green-700 transition"
                type="button"
              >
                Scrivici su WhatsApp
              </button>
            </div>
          ) : (
            <motion.div
              key={prod.title + '-' + idx}
              className={`min-w-[270px] max-w-xs flex-1 snap-center bg-white border border-neutral-200 rounded-2xl shadow hover:shadow-xl hover:border-black transition flex flex-col cursor-pointer
        ${idx === products.length - 1 ? "mr-16 md:mr-0 snap-end" : ""}`}
              whileHover={{ scale: 1.03 }}
              onClick={() => onCardClick(prod)}
            >
              <div className="h-44 bg-neutral-100 flex items-center justify-center overflow-hidden relative rounded-t-2xl">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="object-cover w-full h-full transition"
                  loading="lazy"
                />
                {prod.badge && (
                  <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {prod.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-center">{prod.title}</h4>
                  <p className="mt-1 text-neutral-700 text-sm leading-relaxed text-center min-h-[40px]">
                    {prod.desc}
                  </p>
                  {/* Riga prezzo + mq allineati */}
                  <div className="mt-3 flex items-center justify-center gap-2 min-h-[28px]">
                    {prod.prezzo && (
                      <span className="text-black font-bold text-base">{prod.prezzo} €/mq</span>
                    )}
                    {typeof prod.stock === "number" && (
                      <span className="text-xs text-neutral-500 font-medium">| {prod.stock} mq disponibili</span>
                    )}
                  </div>
                </div>
                {/* Barra di disponibilità stock */}
                {typeof prod.stock === "number" && (
                  <div className="mt-2 w-full">
                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (prod.stock / 600) * 100)}%` }}
                        transition={{ duration: 1 }}
                        className="h-2 bg-green-500"
                        style={{
                          borderRadius: "9999px",
                        }}
                      />
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-1 text-center">
                      {`${prod.stock} mq in pronta consegna`}
                    </div>
                  </div>
                )}
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
          )
        )}
      </div>
    </div>
  );
}