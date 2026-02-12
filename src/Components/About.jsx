import React from 'react'
import { motion } from 'framer-motion'
import { Download, MapPin, Briefcase, GraduationCap, Code2, Palette, Zap, Lightbulb } from 'lucide-react';
import photo from '../../public/images/abdelrhaman-photo.jpg'

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Image Section - Circular Professional Frame */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            {/* Rotating gradient ring */}
                            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full opacity-75 blur-sm"></div>
                            
                            {/* Outer ring */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            
                            {/* Main image container */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-900 bg-gray-800">
                                <img
                                    src={photo}
                                    alt="Abdelrhaman Wael - Full Stack Developer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            
                            {/* Status badge */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-full flex items-center gap-2 shadow-lg">
                                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                                <span className="text-sm text-gray-300">Available for work</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <motion.span 
                            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            👋 Get to know me
                        </motion.span>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
                        </h2>
                        
                        <p className="text-gray-400 mb-4 text-lg leading-relaxed">
                            I'm <span className="text-white font-semibold">Abdelrhaman Wael</span>, a passionate full-stack developer 
                            currently pursuing my Computer Science degree at Egyptian Chinese University.
                        </p>
                        
                        <p className="text-gray-400 mb-4 text-lg leading-relaxed">
                            I specialize in creating elegant solutions to complex problems using modern technologies 
                            like React, .NET, and Tailwind CSS. My approach combines technical expertise with 
                            creative thinking.
                        </p>
                        
                        <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies, working on AI/ML projects,
                            or sharing knowledge with the developer community.
                        </p>

                        {/* Quick Info */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-purple-400" />
                                <span>Cairo, Egypt</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Briefcase className="w-5 h-5 text-purple-400" />
                                <span>Full Stack Dev</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <GraduationCap className="w-5 h-5 text-purple-400" />
                                <span>CS Student</span>
                            </div>
                        </div>
                        
                        {/* Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/1uVvrm2vTRNCF69aiLiEKkpcwHMJUxwb2/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                    </div>
                </motion.div>

                {/* Unique Selling Points */}
                <div className="mt-20">
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {[
                            {
                                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                                title: "Fast & Optimized",
                                desc: "Building high-performance applications with optimized code."
                            },
                            {
                                icon: <Lightbulb className="w-6 h-6 text-purple-400" />,
                                title: "Problem Solver",
                                desc: "Turning complex challenges into simple, elegant solutions."
                            },
                            {
                                icon: <Palette className="w-6 h-6 text-pink-400" />,
                                title: "Pixel Perfect",
                                desc: "Obsessive attention to detail for flawless UI implementation."
                            },
                            {
                                icon: <Code2 className="w-6 h-6 text-blue-400" />,
                                title: "Modern Tech",
                                desc: "Leveraging the latest tools and frameworks for scalable apps."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About