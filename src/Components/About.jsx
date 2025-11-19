import React from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react';
import photo from '../../public/images/Gemini_Generated_Image_g5smkng5smkng5sm.png'


const About = () => {
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut'
            }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.section
            id="about"
            className="py-20 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="relative group"
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.7, 0.5]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        ></motion.div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900">
                            <img
                                src={photo}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                    <motion.div variants={containerVariants}>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                            variants={itemVariants}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 mb-4 text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            I'm a passionate full-stack developer with 1+ years of experience building scalable web applications.
                            I specialize in creating elegant solutions to complex problems using modern technologies.
                        </motion.p>
                        <motion.p
                            className="text-gray-400 mb-4 text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            My approach combines technical expertise with creative thinking, ensuring every project not only
                            works flawlessly but also delivers an exceptional user experience.
                        </motion.p>
                        <motion.p
                            className="text-gray-400 mb-8 text-lg leading-relaxed"
                            variants={itemVariants}
                        >
                            When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                            or sharing knowledge with the developer community.
                        </motion.p>
                        <motion.a
                            href="https://drive.google.com/file/d/1uVvrm2vTRNCF69aiLiEKkpcwHMJUxwb2/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-purple-500 transition-all duration-300 group"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Download className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
                            <span>Download Resume</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default About