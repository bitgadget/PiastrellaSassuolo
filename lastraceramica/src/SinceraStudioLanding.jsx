import React from "react";
import ProductSlider from "./components/ProductSlider";

export default function LastraCeramicaLanding() {
  return (
    <main className="pt-24 min-h-screen scroll-smooth bg-white text-black font-sans overflow-x-hidden selection:bg-black/10 selection:text-black">
      {/* Other sections of the landing page */}

      {/* Prodotti */}
      <section
        id="prodotti"
        className="relative z-10 px-8 py-24 max-w-7xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">
          Prodotti in pronta consegna
        </h3>
        <ProductSlider />
      </section>

      {/* Other sections of the landing page */}
    </main>
  );
}