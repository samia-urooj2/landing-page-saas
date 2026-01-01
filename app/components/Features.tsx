'use client'

import { motion } from 'framer-motion'
import { 
  FiZap, 
  FiShield, 
  FiTrendingUp,
  FiUsers,
  FiCode,
  FiGlobe
} from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: <FiZap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Process data in milliseconds with our optimized AI algorithms.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Smart Analytics',
      description: 'Get actionable insights with real-time analytics dashboard.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for distributed teams.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Developer Friendly',
      description: 'Comprehensive APIs and detailed documentation.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Global Scale',
      description: 'Deploy anywhere with our global infrastructure.',
      gradient: 'from-teal-500 to-green-500'
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50/50 dark:bg-dark-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Packed with features designed to help you work smarter, not harder.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-dark-600 dark:text-dark-300">
                {feature.description}
              </p>
              
              {/* Hover Effect Line */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r transition-all duration-300 from-transparent via-primary-500 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '99.9%', label: 'Uptime' },
              { value: '2.4M+', label: 'Processed Tasks' },
              { value: '5000+', label: 'Happy Customers' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features