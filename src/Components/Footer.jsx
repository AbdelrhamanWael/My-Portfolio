import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      className="py-8 border-t border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2024 Portfolio. Built with React & Tailwind CSS.
          </motion.p>
        </div>
      </motion.footer>
  )
}

export default Footer