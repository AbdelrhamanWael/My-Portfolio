import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-purple-900/20 via-gray-950 to-pink-900/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          ></motion.div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-6 text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium"
            variants={itemVariants}
          >
            👋 Welcome to my portfolio
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            Full Stack Developer
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Crafting exceptional digital experiences with modern technologies and creative problem-solving
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold hover:border-purple-500 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get In Touch
            </motion.button>
          </motion.div>
          <motion.button
            onClick={() => scrollToSection('about')}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-400"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </section>
  )
}

export default Hero