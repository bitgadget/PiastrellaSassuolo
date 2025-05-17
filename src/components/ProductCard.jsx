import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold rounded-full">
            NUOVO
          </div>
        )}
        {product.isStock && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full">
            STOCK
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{product.name}</h3>
          <span className="text-sm text-gray-500 capitalize">{product.category}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-black mr-2">€{product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">€{product.oldPrice.toFixed(2)}</span>
          )}
          {product.oldPrice && (
            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
            </span>
          )}
        </div>
        
        <div className="flex justify-between gap-3">
          <Link 
            to={`/prodotti/${product.id}`}
            className="flex-grow text-center py-2 border border-black text-black hover:bg-black hover:text-white transition-colors rounded"
          >
            Dettagli
          </Link>
          <button className="flex-grow text-center py-2 bg-black text-white hover:bg-gray-800 transition-colors rounded">
            Aggiungi
          </button>
        </div>
      </div>
    </motion.div>
  )
}