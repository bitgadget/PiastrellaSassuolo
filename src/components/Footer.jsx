import React, { useState } from "react";
import { Mail, Phone, PackageSearch } from "lucide-react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCookie, setShowCookie] = useState(false);

  return (
    <footer className="relative z-10 px-2 py-8 bg-neutral-900 text-neutral-200 text-sm mt-8">
      {/* POWERED BY SINCERA STUDIO */}
      <div className="w-full flex justify-center mb-6">
        <a
          href="https://www.instagram.com/sincera3d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-300 font-extrabold tracking-widest text-base uppercase underline underline-offset-4 transition drop-shadow"
          style={{ letterSpacing: "0.08em" }}
        >
          POWERED BY SINCERA STUDIO
        </a>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-6 border-t border-neutral-800 pt-8">
        {/* Logo e claim */}
        <div className="flex-1 flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <img
            src="/logo.png"
            alt="Logo PiastrellaSassuolo"
            className="h-12 w-12 mb-2 rounded-full bg-white p-1 shadow"
            style={{ minWidth: 48 }}
          />
          <span className="font-semibold text-lg text-white">PiastrellaSassuolo</span>
          <span className="text-neutral-400 text-sm">
            Piastrelle italiane in pronta consegna<br />a prezzi di fabbrica.
          </span>
        </div>
        {/* Link utili ottimizzati per mobile */}
        <div className="flex-1 flex flex-col md:flex-col gap-2 mt-8 md:mt-0 items-center md:items-start">
          <span className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Link utili</span>
          <div className="flex flex-row flex-wrap gap-4 md:flex-col md:gap-2 w-full justify-center md:justify-start">
            <a href="#prodotti" className="hover:underline hover:text-white transition">Prodotti</a>
            <a href="#vantaggi" className="hover:underline hover:text-white transition">Vantaggi</a>
            <a href="#faq" className="hover:underline hover:text-white transition">FAQ</a>
            <a href="#contatti" className="hover:underline hover:text-white transition">Contatti</a>
          </div>
        </div>
        {/* Contatti */}
        <div className="flex-1 flex flex-col gap-2 mt-8 md:mt-0 items-center md:items-start">
          <span className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Contatti</span>
          <a href="mailto:info@lastraceramica.it" className="flex items-center gap-2 hover:underline hover:text-white transition">
            <Mail size={16} /> info@lastraceramica.it
          </a>
          <a href="tel:+390123456789" className="flex items-center gap-2 hover:underline hover:text-white transition">
            <Phone size={16} /> +39 349 306 1878
          </a>
          <a href="https://wa.me/393493061878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline hover:text-white transition">
            <PackageSearch size={16} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-neutral-500 text-xs flex flex-col items-center gap-1">
        <div>
          &copy; {new Date().getFullYear()} PiastrellaSassuolo. Tutti i diritti riservati.
        </div>
        <div className="flex gap-3 justify-center mt-1">
          <button
            className="underline hover:text-white transition"
            type="button"
            onClick={() => setShowPrivacy(true)}
          >
            Privacy Policy
          </button>
          <span>|</span>
          <button
            className="underline hover:text-white transition"
            type="button"
            onClick={() => setShowCookie(true)}
          >
            Cookie Policy
          </button>
        </div>
      </div>

      {/* Popup Privacy Policy */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black rounded-xl p-6 max-w-lg w-full shadow-2xl relative">
            <button
              className="absolute top-2 right-4 text-2xl font-bold"
              onClick={() => setShowPrivacy(false)}
              aria-label="Chiudi"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Privacy Policy</h2>
            <div className="text-sm max-h-[60vh] overflow-y-auto">
              {/* Inserisci qui il testo della privacy policy */}
              Questa è la Privacy Policy di PiastrellaSassuolo. I tuoi dati saranno trattati secondo la normativa vigente. Nessun dato sarà ceduto a terzi senza consenso. Per maggiori informazioni scrivici su Whatsapp.
            </div>
          </div>
        </div>
      )}

      {/* Popup Cookie Policy */}
      {showCookie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white text-black rounded-xl p-6 max-w-lg w-full shadow-2xl relative">
            <button
              className="absolute top-2 right-4 text-2xl font-bold"
              onClick={() => setShowCookie(false)}
              aria-label="Chiudi"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Cookie Policy</h2>
            <div className="text-sm max-h-[60vh] overflow-y-auto">
              {/* Inserisci qui il testo della cookie policy */}
              Questo sito utilizza solo cookie tecnici necessari al funzionamento. Nessun cookie di profilazione viene utilizzato. Per dettagli scrivici su Whatsapp.
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}