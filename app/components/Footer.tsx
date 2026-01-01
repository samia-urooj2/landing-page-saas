'use client'

import { motion } from 'framer-motion'
import { 
  FiTwitter, 
  FiGithub, 
  FiLinkedin, 
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp
} from 'react-icons/fi'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">A</span>
              </div>
              <span className="text-2xl font-bold">AI<span className="text-primary-400">SaaS</span>Pro</span>
            </div>
            <p className="text-dark-400 mb-6">
              Transforming businesses with cutting-edge AI solutions. 
              Join thousands of companies that trust our platform.
            </p>
            <div className="flex space-x-4">
              {[FiTwitter, FiGithub, FiLinkedin, FiMail].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="#"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'Solutions', 'Pricing', 'Customers'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-dark-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Blog', 'Help Center', 'Community'].map((resource) => (
                <li key={resource}>
                  <a href="#" className="text-dark-400 hover:text-white transition-colors">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FiMapPin className="w-5 h-5 text-primary-400" />
                <span className="text-dark-400">123 AI Street, Tech City</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-5 h-5 text-primary-400" />
                <span className="text-dark-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-5 h-5 text-primary-400" />
                <span className="text-dark-400">hello@aissaaspro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-dark-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AI SaaS Pro. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-dark-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 w-12 h-12 bg-gradient rounded-full flex items-center justify-center"
          >
            <FiArrowUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer