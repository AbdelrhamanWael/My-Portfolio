import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const Education = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

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
    }

    const education = [
        {
            degree: "Bachelor's Degree in Computer Science",
            institution: "Egyptian Chinese University",
            location: "Cairo, Egypt",
            period: "2023 - 2027",
            description: "Pursuing a comprehensive Computer Science degree with focus on software engineering, web development, and modern programming paradigms.",
            achievements: [
                "Specializing in Full Stack Web Development",
                "Active member of the Software Development Club",
                "Building real-world projects using React, .NET, and modern technologies"
            ],
            icon: <GraduationCap className="w-6 h-6" />
        }
    ]

    const certifications = [
        {
            name: "Full Stack .NET Web Development",
            issuer: "Digital Egypt Pioneers Program - MCIT",
            date: "2025",
            description: "Ministry of Communications and Information Technology of Egypt",
            icon: <Award className="w-5 h-5" />
        },
        {
            name: "Web Development Internship",
            issuer: "DevWave",
            date: "2024",
            description: "Three-month internship in modern web development",
            icon: <Award className="w-5 h-5" />
        },
        {
            name: "React Development",
            issuer: "Self-Learning & Projects",
            date: "2024",
            description: "Built multiple production-ready React applications",
            icon: <Award className="w-5 h-5" />
        }
    ]

    return (
        <section id="education" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Section Header */}
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <motion.span 
                        className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4"
                    >
                        🎓 Education & Certifications
                    </motion.span>
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Academic{' '}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Background
                        </span>
                    </motion.h2>
                    <motion.p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        My educational journey and professional certifications
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education Card */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-purple-400" />
                            Education
                        </h3>
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)' }}
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white">
                                            {edu.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                            <p className="text-purple-400 font-medium">{edu.institution}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {edu.period}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {edu.location}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-400 mb-4">{edu.description}</p>
                                    
                                    <ul className="space-y-2">
                                        {edu.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                                                <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Certifications */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Award className="w-6 h-6 text-pink-400" />
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="p-5 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group flex items-center gap-4"
                                    whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.1)' }}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-400 group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
                                        {cert.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                            {cert.name}
                                        </h4>
                                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 bg-gray-700/50 px-3 py-1 rounded-full">
                                        {cert.date}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional info card */}
                        <motion.div 
                            className="mt-6 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
                            whileHover={{ scale: 1.02 }}
                        >
                            <p className="text-gray-300 text-center">
                                <span className="text-purple-400 font-semibold">Always learning!</span>
                                <br />
                                <span className="text-sm text-gray-400">Currently exploring AI/ML and Cloud Technologies</span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Education
