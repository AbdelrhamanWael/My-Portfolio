import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Code, Server, Brain } from 'lucide-react';
import amazon from '../../public/images/amazon-five-alpha.vercel.app_.png'
import task from '../../public/images/crud-opration-iota.vercel.app_.png'
import MedCenter from '../../public/images/deluxe-moonbeam-d6009c.netlify.app_.png'
import netflix from '../../public/images/www.netflix.com_eg-en_.png'

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = [
        { name: 'All', icon: null },
        { name: 'Frontend', icon: <Code className="w-4 h-4" /> },
        { name: 'Backend', icon: <Server className="w-4 h-4" /> },
        { name: 'AI/ML', icon: <Brain className="w-4 h-4" /> }
    ];

    const projects = [
        {
            title: 'E-Commerce Platform – Amazon Clone',
            description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            image: amazon,
            liveUrl: 'https://lnkd.in/eYG3vTbS',
            githubUrl: 'https://github.com/Mohamedghanem2002/ecommerce-amazon.git',
            category: 'Frontend'
        },
        {
            title: 'Task Management System',
            description: 'A collaborative task and project management platform developed during an internship at DevWave. The app includes full CRUD operations, Firebase authentication, real-time updates, and a clean dashboard UI.',
            tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'React Router', 'Context API'],
            image: task,
            liveUrl: 'https://crud-opration-iota.vercel.app/',
            githubUrl: 'https://github.com/Mohamedghanem2002/crud-opration',
            category: 'Frontend'
        },
        {
            title: 'Medical Center Website & Dashboard',
            description: 'A complete medical center web application including both the client-facing website and an admin dashboard. Built with React and Firebase, featuring dynamic content management, doctor listings, services pages, and secure authentication.',
            tech: ['React', 'Tailwind CSS', 'Firebase'],
            image: MedCenter,
            liveUrl: 'https://deluxe-moonbeam-d6009c.netlify.app/',
            githubUrl: 'https://github.com/AbdelrhamanWael/Appointment-Center.git',
            category: 'Frontend'
        },
        {
            title: 'Movie Discovery App',
            description: 'A modern movie discovery platform built with React and Vite. Users can browse movies by categories, watch trailers, and authenticate using Firebase. The app integrates the TMDB API for real-time content.',
            tech: ['React', 'Vite', 'Firebase', 'TMDB API', 'CSS3'],
            image: netflix,
            liveUrl: 'https://netflix-clone-psi-nine.vercel.app/',
            githubUrl: 'https://github.com/AbdelrhamanWael/Netflix-Clone.git',
            category: 'Frontend'
        }
    ];

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <section id="projects" className="py-20 bg-gray-900/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                        🚀 My Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of projects I've built, showcasing my skills in web development
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    {filters.map((filter) => (
                        <button
                            key={filter.name}
                            onClick={() => setActiveFilter(filter.name)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                                activeFilter === filter.name
                                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                        >
                            {filter.icon}
                            {filter.name}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                layout
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Category Badge */}
                                    <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tech.slice(0, 4).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-500">
                                                +{project.tech.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Links - Always visible */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white text-sm font-medium transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-colors"
                                        >
                                            <Github size={16} />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Code className="w-8 h-8 text-gray-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">
                            No projects yet
                        </h3>
                        <p className="text-gray-500">
                            Projects in this category coming soon!
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;