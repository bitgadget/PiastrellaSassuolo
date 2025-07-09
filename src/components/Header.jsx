import React from "react";
import { Link } from "react-router-dom";

export default function Header({ setMobileMenuOpen, mobileMenuOpen }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-white bg-opacity-95 border-b border-neutral-200">
      <div className="flex flex-col items-start gap-0">
        <div className="flex items-center gap-3">
          <a href="#top" className="focus:outline-none">
            <img
              src="/logo.png"
              alt="Logo PiastrellaSassuolo"
              className="h-10 w-10 object-contain"
              style={{ minWidth: 40 }}
            />
          </a>
          <div className="flex flex-col">
            <a href="#top" className="focus:outline-none">
              <span className="font-bold text-2xl tracking-tight text-black">PiastrellaSassuolo</span>
            </a>
            <span className="text-xs text-neutral-500 font-semibold mt-0.5">
              I pavimenti si comprano a Sassuolo
            </span>
          </div>
        </div>
      </div>
      {/* Menu desktop */}
      <nav className="hidden md:flex gap-10 text-sm">
        <a href="#prodotti" className="hover:text-black transition">
          Prodotti
        </a>
        <a href="#calcolatore" className="hover:text-black transition">
          Calcolo spedizione
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
            <a href="#top" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#chi-siamo" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Chi siamo</a>
            <a href="#prodotti" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Prodotti</a>
            <a href="#calcolatore" className="text-lg py-2 border-b border-neutral-200" onClick={() => setMobileMenuOpen(false)}>Calcolo spedizione</a>
            <a href="#contatti" className="text-lg py-2" onClick={() => setMobileMenuOpen(false)}>Contatti</a>
          </nav>
        </div>
      )}
    </header>
  );
}