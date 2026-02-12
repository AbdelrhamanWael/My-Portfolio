import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Code, Server, Brain, ArrowRight, ChevronDown } from 'lucide-react';
import { projects, filters } from '../data/projectsData'

const iconMap = {
    Code: <Code className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    Brain: <Brain className="w-4 h-4" />
};

const INITIAL_SHOW_COUNT = 4;

const ProjectCard = React.memo(({ project, index }) => (
    <motion.article
        key={project.id}
        className="bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, delay: index * 0.08 }}
    >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
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

            {/* Action Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                <Link
                    to={`/project/${project.id}`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-lg text-white text-sm font-medium transition-all duration-300 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/25"
                >
                    View Details
                    <ArrowRight size={16} />
                </Link>
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-sm font-medium transition-colors"
                    >
                        <ExternalLink size={16} />
                        Demo
                    </a>
                )}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors ml-auto"
                    title="Source Code"
                >
                    <Github size={18} />
                </a>
            </div>
        </div>
    </motion.article>
));

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const filteredProjects = useMemo(() => {
        return activeFilter === 'All'
            ? projects
            : projects.filter(project => project.category === activeFilter);
    }, [activeFilter]);

    const visibleProjects = showAll
        ? filteredProjects
        : filteredProjects.slice(0, INITIAL_SHOW_COUNT);

    const hasMore = filteredProjects.length > INITIAL_SHOW_COUNT;

    const handleFilterChange = (filterName) => {
        setActiveFilter(filterName);
        setShowAll(false);
    };

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
                            onClick={() => handleFilterChange(filter.name)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.name
                                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                                }`}
                        >
                            {filter.icon ? iconMap[filter.icon] : null}
                            {filter.name}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    <AnimatePresence mode="wait">
                        {visibleProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </div>

                {/* See All Projects Button */}
                {hasMore && !showAll && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <button
                            onClick={() => setShowAll(true)}
                            className="group flex items-center gap-3 px-8 py-4 bg-gray-800/60 hover:bg-gray-800 rounded-2xl text-gray-300 hover:text-white font-medium transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
                        >
                            <span>See All Projects</span>
                            <span className="text-sm text-gray-500 group-hover:text-purple-400 transition-colors">
                                ({filteredProjects.length - INITIAL_SHOW_COUNT} more)
                            </span>
                            <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform text-purple-400" />
                        </button>
                    </motion.div>
                )}

                {/* Show Less Button */}
                {showAll && hasMore && (
                    <motion.div
                        className="flex justify-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={() => setShowAll(false)}
                            className="group flex items-center gap-2 px-8 py-4 bg-gray-800/60 hover:bg-gray-800 rounded-2xl text-gray-300 hover:text-white font-medium transition-all duration-300 border border-gray-700 hover:border-purple-500/50"
                        >
                            <span>Show Less</span>
                            <ChevronDown size={18} className="rotate-180 group-hover:-translate-y-0.5 transition-transform text-purple-400" />
                        </button>
                    </motion.div>
                )}

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