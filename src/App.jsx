import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="app bg-white text-black min-h-screen flex flex-col">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <main className="flex-grow">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/prodotti" element={<ProductsPage />} />
                  <Route path="/chi-siamo" element={<AboutPage />} />
                  <Route path="/contatti" element={<ContactPage />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}

export default App