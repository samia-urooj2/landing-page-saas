'use client'

import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'
import { useState } from 'react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Starter',
      price: isAnnual ? '$29' : '$39',
      period: isAnnual ? '/month' : '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 users',
        'Basic analytics',
        'Email support',
        '5GB storage',
        'Community access',
      ],
      notIncluded: [
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
    },
    {
      name: 'Professional',
      price: isAnnual ? '$99' : '$129',
      period: isAnnual ? '/month' : '/month',
      description: 'For growing businesses',
      features: [
        'Up to 50 users',
        'Advanced analytics',
        'Priority support',
        '100GB storage',
        'API access',
        'Custom workflows',
      ],
      notIncluded: [
        'Dedicated account manager',
        'Enterprise security',
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Advanced analytics',
        '24/7 phone support',
        'Unlimited storage',
        'Custom integrations',
        'Dedicated account manager',
        'Enterprise security',
        'SLA guarantee',
      ],
      notIncluded: [],
      gradient: 'from-orange-500 to-red-500',
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your{' '}
            <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Start free, upgrade as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <span className={`text-lg ${!isAnnual ? 'font-semibold' : 'text-dark-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-dark-200 dark:bg-dark-700 rounded-full transition-colors duration-300"
            >
              <motion.div
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center">
              <span className={`text-lg ${isAnnual ? 'font-semibold' : 'text-dark-500'}`}>Annual</span>
              <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm rounded">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-xl ${plan.popular ? 'relative border-2 border-primary-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-dark-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-dark-600 dark:text-dark-300">{plan.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mr-3">
                        <FiCheck className="w-3 h-3 text-green-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-dark-500">
                      <div className="w-5 h-5 bg-dark-100 dark:bg-dark-700 rounded-full flex items-center justify-center mr-3">
                        <FiX className="w-3 h-3 text-dark-500" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient text-white shadow-lg hover:shadow-xl'
                    : 'bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </motion.button>

              {plan.name === 'Starter' && (
                <p className="text-center text-sm text-dark-500 mt-4">
                  Free 14-day trial included
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Enterprise Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-dark-50 dark:bg-dark-800/50 rounded-2xl p-6">
            <div className="text-left">
              <h4 className="font-bold text-lg mb-2">Need a custom plan?</h4>
              <p className="text-dark-600 dark:text-dark-300">
                Contact our sales team for enterprise solutions with custom pricing, 
                dedicated support, and SLA guarantees.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-dark-800 dark:bg-dark-700 text-white rounded-lg font-semibold whitespace-nowrap"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing