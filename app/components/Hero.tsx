'use client'

import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiPlay } from 'react-icons/fi'
import { 
  AiOutlineRocket, 
  AiOutlineLineChart,
  AiOutlineSafety 
} from 'react-icons/ai'

const Hero = () => {
  const features = [
    { icon: <AiOutlineRocket />, text: '10x Faster Development' },
    { icon: <AiOutlineLineChart />, text: '95% Accuracy Rate' },
    { icon: <AiOutlineSafety />, text: 'Enterprise Security' },
  ]

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              AI-Powered Platform • Trusted by 5000+ Companies
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Transform Your{' '}
              <span className="text-gradient">Business</span>
              {' '}With AI
            </h1>

            <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
              Automate workflows, boost productivity, and make data-driven decisions with our 
              cutting-edge AI platform. Everything you need to scale your business.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-lg">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Start Free Trial</span>
                <FiArrowRight />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 border-2 border-dark-300 dark:border-dark-700 hover:border-primary-500 transition-all duration-300"
              >
                <FiPlay />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            <p className="text-sm text-dark-500 dark:text-dark-400 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>

          {/* Right Content - Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-1 shadow-2xl">
              {/* Main Dashboard Card */}
              <div className="bg-white dark:bg-dark-800 rounded-xl p-8">
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">Analytics Dashboard</h3>
                    <p className="text-dark-500">Real-time performance metrics</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                    <AiOutlineLineChart className="w-6 h-6 text-primary-600" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: 'Revenue', value: '$42.5K', change: '+24%' },
                    { label: 'Users', value: '15.2K', change: '+18%' },
                    { label: 'Conversion', value: '8.2%', change: '+12%' },
                    { label: 'Growth', value: '156%', change: '+32%' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-dark-50 dark:bg-dark-700/50 p-4 rounded-lg">
                      <p className="text-sm text-dark-500">{stat.label}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="h-40 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <AiOutlineLineChart className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                    <p className="text-dark-600 dark:text-dark-400">Live Performance Chart</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <FiCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Task Completed</p>
                    <p className="text-sm text-dark-500">98% Success Rate</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <AiOutlineRocket className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">AI Processing</p>
                    <p className="text-sm text-dark-500">2.4x Faster</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero