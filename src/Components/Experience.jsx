import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react'

const Experience = () => {
    const experiences = [
        {
            title: "Full Stack .NET Web Developer",
            company: "Digital Egypt Pioneers Program",
            organization: "Ministry of Communications and Information Technology of Egypt",
            location: "Egypt",
            period: "November 2024 - May 2025",
            description: "Completed an enriching program in Full Stack .NET Web Development with growth opportunities, learning experiences, and practical exposure to contemporary web technologies. Received invaluable mentorship and guidance throughout the transformative experience.",
            skills: ["C#", "ASP.NET Core", "SQL", "React", ".NET"],
            type: "Training Program",
            certificate: true
        },
        {
            title: "Web Development Intern",
            company: "DevWave",
            organization: "DevWave",
            location: "Remote",
            period: "3-Month Internship",
            description: "Successfully completed a three-month web development internship demonstrating the ability to build dynamic, innovative, and user-friendly web solutions.",
            achievements: [
                "Modern Front-End Development: Contributing to real-world projects focused on responsive design and component reusability using React and Tailwind CSS",
                "Project Delivery: Delivered the Medical Center Website (with admin dashboard) and collaborated on an e-commerce website as a front-end developer",
                "Clean Code & Compatibility: Rebuilt static projects with Bootstrap/Tailwind CSS, ensuring cross-browser compatibility and clean, validated code"
            ],
            skills: ["React", "Tailwind CSS", "Firebase", "Responsive Design"],
            type: "Internship",
            certificate: true
        }
    ]

    return (
        <section id="experience" className="py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                        💼 Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey in software development
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                                index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-10">
                                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-25" />
                            </div>

                            {/* Content */}
                            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                                <motion.div
                                    className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)' }}
                                >
                                    {/* Type badge & Certificate */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                                            {exp.type}
                                        </span>
                                        {exp.certificate && (
                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                                                <Award className="w-3 h-3" />
                                                Certified
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                        {exp.title}
                                    </h3>
                                    
                                    <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                                    {exp.organization !== exp.company && (
                                        <p className="text-gray-500 text-sm mb-3">{exp.organization}</p>
                                    )}
                                    
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {exp.location}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    {exp.achievements && (
                                        <ul className="space-y-2 mb-4">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0" />
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Spacer for alternating layout */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
