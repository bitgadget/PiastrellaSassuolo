import React, { useState } from "react";

export default function ZoomableImage({ src, alt }) {
  const [zoom, setZoom] = useState(false);
  const fallback = "/placeholder-tile.jpg";
  const imageSrc = src && src.length > 5 ? src : fallback;

  return (
    <div className="relative mb-4">
      <img
        src={imageSrc}
        alt={alt}
        className="w-full h-64 object-contain rounded cursor-zoom-in transition-transform duration-200"
        style={zoom ? { cursor: "zoom-out" } : {}}
        onClick={() => setZoom((z) => !z)}
      />
      {/* Icona lente sopra l'immagine, overlay, sempre cliccabile l'immagine */}
      {!zoom && (
        <span className="absolute bottom-2 right-2 z-30 bg-white/80 rounded-full p-1 shadow text-black pointer-events-none">
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      )}
      {!zoom && (
        <div className="text-xs text-neutral-500 text-center mt-1 select-none">
          Clicca per ingrandire
        </div>
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