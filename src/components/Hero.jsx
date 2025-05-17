import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-black/50 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/images/hero-tiles.jpg" 
          alt="Piastrelle di qualità" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            LASTRA <span className="text-gray-300">CERAMICA</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Piastrelle di qualità direttamente dalla fabbrica a prezzi stock
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/prodotti" 
              className="cta-button px-8 py-3 rounded-full text-lg font-semibold bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Scopri le offerte
            </Link>
            <Link 
              to="/contatti" 
              className="px-8 py-3 rounded-full text-lg font-semibold bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Richiedi preventivo
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling tiles animation */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-16 bg-white flex overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full w-40 bg-black mx-2 opacity-20"
            animate={{
              x: ["0%", "-1000%"]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}