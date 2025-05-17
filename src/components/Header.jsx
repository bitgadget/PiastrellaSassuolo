import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Prodotti', path: '/prodotti' },
  { name: 'Chi Siamo', path: '/chi-siamo' },
  { name: 'Contatti', path: '/contatti' }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      className="header fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <motion.img 
              src="/images/logo.png" 
              alt="Lastra Ceramica" 
              className="h-12"
              whileHover={{ scale: 1.05 }}
            />
            <motion.span 
              className="ml-3 text-2xl font-bold hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              LASTRA CERAMICA
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `px-3 py-2 font-medium transition-colors ${isActive ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 flex flex-col space-y-1">
              <span className={`h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-3">
              {navItems.map(item => (
                <motion.li
                  key={item.path}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <NavLink
                    to={item.path}
                    className="block px-3 py-2 font-medium text-gray-700 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}