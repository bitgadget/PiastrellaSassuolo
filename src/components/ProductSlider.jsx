import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProductSlider({ products, onCardClick }) {
  const scrollRef = useRef(null);

  const scroll = dir => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    scrollRef.current.scrollTo({
      left: dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        onClick={() => scroll("left")}
        aria-label="Scorri a sinistra"
      >
        <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}><polyline points="18 6 10 14 18 22" /></svg>
      </button>
      <button
        type="button"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        onClick={() => scroll("right")}
        aria-label="Scorri a destra"
      >
        <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}><polyline points="10 6 18 14 10 22" /></svg>
      </button>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-1 py-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((prod, i) => (
          <motion.div
            key={prod.title}
            className="min-w-[270px] max-w-xs flex-1 snap-center bg-white border border-neutral-200 rounded-2xl shadow hover:shadow-xl hover:border-black transition flex flex-col cursor-pointer"
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
                <p className="mt-1 text-neutral-700 text-sm leading-relaxed text-center">
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
    </div>
  );
}