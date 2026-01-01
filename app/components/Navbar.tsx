'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import { 
  AiOutlineRocket, 
  AiOutlineDashboard,
  AiOutlineTeam,
  AiOutlineSetting 
} from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Features', icon: <AiOutlineDashboard /> },
    { name: 'Solutions', icon: <AiOutlineRocket /> },
    { name: 'Pricing', icon: <AiOutlineSetting /> },
    { name: 'Customers', icon: <AiOutlineTeam /> },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
                <AiOutlineRocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">AI<span className="text-primary-500">SaaS</span>Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center space-x-2 text-dark-600 dark:text-dark-300 hover:text-primary-500 transition-colors duration-300"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get Started</span>
                <FiArrowRight />
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-600 dark:text-dark-300 hover:text-primary-500"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-dark-600 dark:text-dark-300 hover:text-primary-500 hover:bg-dark-100 dark:hover:bg-dark-800"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <button className="w-full bg-gradient text-white px-4 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 mt-4">
                <span>Get Started Free</span>
                <FiArrowRight />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar