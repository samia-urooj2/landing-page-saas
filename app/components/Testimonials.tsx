'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      content: 'This platform transformed how we handle data. Our team productivity increased by 200% in just 3 months.',
      rating: 5,
      avatar: 'SC',
      color: 'bg-blue-500'
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Lead, StartupXYZ',
      content: 'The AI capabilities are unmatched. We reduced development time by 60% and improved accuracy significantly.',
      rating: 5,
      avatar: 'MJ',
      color: 'bg-purple-500'
    },
    {
      name: 'Priya Sharma',
      role: 'CEO, InnovateLabs',
      content: 'Best investment we made this year. The ROI was immediate and continues to deliver value every day.',
      rating: 5,
      avatar: 'PS',
      color: 'bg-green-500'
    },
    {
      name: 'David Park',
      role: 'Engineering Manager, GlobalTech',
      content: 'Seamless integration, excellent support. Our developers love working with this platform.',
      rating: 5,
      avatar: 'DP',
      color: 'bg-orange-500'
    },
  ]


  return (
    <section id="customers" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50/50 to-purple-50/50 dark:from-dark-800/30 dark:to-dark-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="text-gradient">Customers</span> Say
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Join thousands of companies that transformed their business with our platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.slice(0, 4).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-xl mr-4`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-dark-500 dark:text-dark-400">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-lg italic text-dark-700 dark:text-dark-300">
                {`"${testimonial.content}"`}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%', label: 'Customer Satisfaction' },
              { value: '24h', label: 'Avg. Response Time' },
              { value: '5000+', label: 'Active Customers' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-dark-600 dark:text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-dark-600 dark:text-dark-400 mb-8">
            Trusted by companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {['TechCorp', 'GlobalSoft', 'InnovateLabs', 'StartupXYZ', 'CloudScale', 'DataFlow'].map((logo, index) => (
              <div key={index} className="text-2xl font-bold text-dark-700 dark:text-dark-300">
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials