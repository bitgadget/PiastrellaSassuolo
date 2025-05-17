import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Marmo Bianco Carrara',
    category: 'interni',
    price: 24.90,
    oldPrice: 32.50,
    image: '/images/products/marmo-bianco.jpg',
    isNew: true,
    isStock: true
  },
  {
    id: 2,
    name: 'Cemento Grigio',
    category: 'interni',
    price: 19.90,
    image: '/images/products/cemento-grigio.jpg',
    isStock: true
  },
  {
    id: 3,
    name: 'Terracotta Rustica',
    category: 'esterni',
    price: 28.50,
    image: '/images/products/terracotta.jpg',
    isNew: true,
    isStock: true
  },
  {
    id: 4,
    name: 'Effetto Legno Scuro',
    category: 'esterni',
    price: 22.90,
    oldPrice: 29.90,
    image: '/images/products/legno-scuro.jpg',
    isStock: true
  },
  {
    id: 5,
    name: 'Bianco Lucido',
    category: 'bagno',
    price: 18.90,
    image: '/images/products/bianco-lucido.jpg',
    isStock: true
  },
  {
    id: 6,
    name: 'Gres Porcellanato',
    category: 'cucina',
    price: 26.50,
    oldPrice: 34.90,
    image: '/images/products/gres-porcellanato.jpg',
    isStock: true
  }
]

export default function Products() {
  const [filter, setFilter] = useState('tutti')
  
  const filteredProducts = filter === 'tutti' 
    ? products 
    : products.filter(p => p.category === filter)

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I NOSTRI PRODOTTI
        </motion.h2>
        
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Scopri la nostra selezione di piastrelle di alta qualità disponibili immediatamente a prezzi stock
        </motion.p>
        
        {/* Filtri */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {['tutti', 'interni', 'esterni', 'bagno', 'cucina'].map((item) => (
            <motion.button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-2 rounded-full capitalize text-sm sm:text-base ${
                filter === item 
                  ? 'bg-black text-white' 
                  : 'bg-white text-gray-800 border border-gray-200 hover:border-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item === 'tutti' ? 'Tutte le categorie' : item}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Griglia prodotti */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}