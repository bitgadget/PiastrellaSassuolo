import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Componenti principali
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula caricamento iniziale
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <Router>
      <div className="app bg-white text-black min-h-screen">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/prodotti" element={<ProductsPage />} />
                <Route path="/chi-siamo" element={<AboutPage />} />
                <Route path="/contatti" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

function LoadingScreen() {
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <h1 className="text-white text-4xl font-bold">LASTRA CERAMICA</h1>
      </motion.div>
    </motion.div>
  );
}

// Pagine
function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProducts />
      <QualitySection />
    </motion.div>
  );
}

// Altri componenti e pagine...

export default App;