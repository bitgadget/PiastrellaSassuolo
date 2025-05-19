import React from 'react';
import { motion } from 'framer-motion';

const ProductSlider = ({ products }) => {
  return (
    <div className="relative">
      <motion.div
        className="flex overflow-x-auto space-x-4 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {products.map((product) => (
          <div key={product.title} className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.img} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <p className="text-sm text-gray-600">{product.desc}</p>
              <div className="mt-2 text-black font-bold">{product.prezzo} €/mq</div>
              <div className="mt-1 text-xs text-gray-500">{product.quantita} disponibili</div>
            </div>
          </div>
        ))}
      </motion.div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &lt;
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        &gt;
      </button>
    </div>
  );
};

export default ProductSlider;