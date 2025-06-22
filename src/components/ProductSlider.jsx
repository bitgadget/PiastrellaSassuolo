import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function ProductSlider({ products, onCardClick }) {
  const scrollRef = useRef(null);

  return (
    <div className="relative">
      {/* RIMOSSE LE FRECCE */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-1 py-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {products.map((prod, i) => (
          <motion.div
            key={prod.title + '-' + i}
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
        ))}
      </div>
    </div>
  );
}