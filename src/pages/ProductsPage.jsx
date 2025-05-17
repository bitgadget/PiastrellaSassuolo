import { motion } from 'framer-motion'
import Products from '../components/Products'

export default function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Products />
    </motion.div>
  )
}