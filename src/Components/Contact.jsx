import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const contactItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100
            }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100
            }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    return (
        <motion.section
            id="contact"
            className="py-20 bg-gray-900/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    Get In Touch
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div variants={containerVariants}>
                        <motion.p
                            className="text-gray-400 text-lg mb-8 leading-relaxed"
                            variants={itemVariants}
                        >
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
                        </motion.p>
                        <motion.div
                            className="space-y-4"
                            variants={containerVariants}
                        >
                            <motion.a
                                href="mailto:your.email@example.com"
                                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all group"
                                variants={contactItemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Mail className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <div className="text-sm text-gray-500">Email</div>
                                    <div className="text-purple-400 " > 
                                    abdelrhamanwael8@gmail.com</div>
                                </div>
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all group"
                                variants={contactItemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Linkedin className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <div className="text-sm text-gray-500">LinkedIn</div>
                                    <div className="text-purple-400">Connect with me</div>
                                </div>
                            </motion.a>
                            <motion.a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-all group"
                                variants={contactItemVariants}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Github className="w-6 h-6" />
                                </motion.div>
                                <div>
                                    <div className="text-sm text-gray-500">GitHub</div>
                                    <div className="text-purple-400">View my code</div>
                                </div>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="space-y-4"
                        variants={formVariants}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-100 placeholder-gray-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-100 placeholder-gray-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors text-gray-100 placeholder-gray-500 resize-none"
                            ></textarea>
                        </motion.div>
                        <motion.button
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Message sent! (This is a demo - connect to your backend)');
                            }}
                            className="w-full px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Send Message
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </motion.section>

    )
}

export default Contact