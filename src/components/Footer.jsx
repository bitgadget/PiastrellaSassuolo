import React from "react";
import { Mail, Phone, PackageSearch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 px-2 py-8 bg-neutral-900 text-neutral-200 text-sm mt-8">
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
        {/* Link utili */}
        <div className="flex-1 flex flex-col gap-2 mt-8 md:mt-0 items-center md:items-start">
          <span className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Link utili</span>
          <a href="#prodotti" className="hover:underline hover:text-white transition">Prodotti</a>
          <a href="#vantaggi" className="hover:underline hover:text-white transition">Vantaggi</a>
          <a href="#faq" className="hover:underline hover:text-white transition">FAQ</a>
          <a href="#contatti" className="hover:underline hover:text-white transition">Contatti</a>
        </div>
        {/* Contatti */}
        <div className="flex-1 flex flex-col gap-2 mt-8 md:mt-0 items-center md:items-start">
          <span className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Contatti</span>
          <a href="mailto:info@lastraceramica.it" className="flex items-center gap-2 hover:underline hover:text-white transition">
            <Mail size={16} /> info@lastraceramica.it
          </a>
          <a href="tel:+390123456789" className="flex items-center gap-2 hover:underline hover:text-white transition">
            <Phone size={16} /> +39 0123 456789
          </a>
          <a href="https://wa.me/393493061878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline hover:text-white transition">
            <PackageSearch size={16} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-neutral-500 text-xs">
        &copy; {new Date().getFullYear()} PiastrellaSassuolo. Tutti i diritti riservati.
      </div>
    </footer>
  );
}