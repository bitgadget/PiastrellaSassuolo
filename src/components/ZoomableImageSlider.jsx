import React, { useState, useRef } from "react";

export default function ZoomableImageSlider({ images, title, height = "h-48", showArrows = true }) {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const touchStartX = useRef(null);

  function prev() {
    setIndex(i => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIndex(i => (i === images.length - 1 ? 0 : i + 1));
  }

  // Gestione swipe touch
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) prev();
    if (deltaX < -40) next();
    touchStartX.current = null;
  }

  return (
    <>
      <div
        className={`relative mb-2 w-full ${height} flex items-center justify-center`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[index]}
          alt={title}
          loading="lazy"
          className={`w-full ${height} object-contain rounded cursor-zoom-in transition-transform duration-200`}
        />
        {/* Icona lente sopra l'immagine */}
        {!zoom && (
          <span className="absolute bottom-2 right-2 z-30 bg-white/80 rounded-full p-1 shadow text-black pointer-events-none">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        )}
        {/* Frecce slide visibili solo se più immagini e non zoom */}
        {showArrows && images.length > 1 && !zoom && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow hover:bg-green-100 z-20 flex items-center justify-center border border-green-600 transition-all"
              onClick={e => { e.stopPropagation(); prev(); }}
              aria-label="Immagine precedente"
              type="button"
              style={{
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40,
                fontSize: 22,
                lineHeight: 1,
                boxShadow: "0 2px 8px 0 rgba(16, 185, 129, 0.10)"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow hover:bg-green-100 z-20 flex items-center justify-center border border-green-600 transition-all"
              onClick={e => { e.stopPropagation(); next(); }}
              aria-label="Immagine successiva"
              type="button"
              style={{
                width: 40,
                height: 40,
                minWidth: 40,
                minHeight: 40,
                fontSize: 22,
                lineHeight: 1,
                boxShadow: "0 2px 8px 0 rgba(16, 185, 129, 0.10)"
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </>
        )}
        {/* Indicatori pallini */}
        {images.length > 1 && !zoom && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-green-700" : "bg-neutral-300"} inline-block`}
              />
            ))}
          </div>
        )}
      </div>
      {!zoom && (
        <div className="text-xs text-neutral-500 text-center mt-1 select-none">Swipe o clicca per ingrandire</div>
      )}
      {zoom && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setZoom(false)}
        >
          <img
            src={images[index]}
            alt={title}
            loading="lazy"
            className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
            style={{ cursor: "zoom-out" }}
          />
        </div>
      )}
    </>
  );
}