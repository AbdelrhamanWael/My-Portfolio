import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Palette } from 'lucide-react';

const Skills = () => {
    const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      items: ['React', 'TypeScript', 'Tailwind CSS', 'Bootstrap' ]
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      items: ['C#', '.NET', 'MVC', 'REST APIs']
    },
    {
      category: 'Design & Tools',
      icon: <Palette className="w-6 h-6" />,
      items: ['Figma', 'Git' , 'GitHub',  'Vercel']
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200
      }
    }
  };

    return (
        <motion.section
            id="skills"
            className="py-20 bg-gray-900/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Skills & Technologies
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group hover:transform hover:scale-105"
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 25px 50px rgba(168, 85, 247, 0.3)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="w-16 h-16 mb-6 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                                variants={iconVariants}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                {skill.icon}
                            </motion.div>
                            <motion.h3
                                className="text-2xl font-bold mb-4 text-purple-400"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {skill.category}
                            </motion.h3>
                            <motion.div
                                className="space-y-2"
                                variants={containerVariants}
                            >
                                {skill.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="px-4 py-2 bg-gray-900/50 rounded-lg text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all cursor-default"
                                        variants={itemVariants}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor: 'rgba(168, 85, 247, 0.1)'
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Skills