import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    User,
    ChevronLeft,
    ChevronRight,
    X,
    Layers,
    CheckCircle2,
    Sparkles
} from 'lucide-react'
import { projects } from '../data/projectsData'

const ProjectDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedImageIndex, setSelectedImageIndex] = useState(null)

    const project = projects.find(p => p.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <Sparkles className="w-10 h-10 text-purple-400" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
                    <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl text-white font-medium transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </button>
                </div>
            </div>
        )
    }

    const openLightbox = (index) => setSelectedImageIndex(index)
    const closeLightbox = () => setSelectedImageIndex(null)

    const nextImage = () => {
        setSelectedImageIndex(prev =>
            prev < project.gallery.length - 1 ? prev + 1 : 0
        )
    }

    const prevImage = () => {
        setSelectedImageIndex(prev =>
            prev > 0 ? prev - 1 : project.gallery.length - 1
        )
    }

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Top Navigation Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-xl border-b border-gray-800"
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </button>
                    <div className="flex items-center gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white text-sm font-medium transition-colors"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white text-sm font-medium transition-colors border border-gray-700"
                        >
                            <Github size={16} />
                            Source Code
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <section className="pt-24 pb-0">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                                {project.category}
                            </span>
                            {project.duration && (
                                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-gray-400 text-sm">
                                    <Calendar size={14} />
                                    {project.duration}
                                </span>
                            )}
                            {project.role && (
                                <span className="flex items-center gap-1.5 px-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-gray-400 text-sm">
                                    <User size={14} />
                                    {project.role}
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Main Project Image */}
                    <motion.div
                        className="relative rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        onClick={() => openLightbox(0)}
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                            />
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                            <span className="px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                                Click to view full size
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Description & Features */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* About */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-purple-500/15 rounded-xl flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">About This Project</h2>
                                </div>
                                {Array.isArray(project.longDescription) ? (
                                    <div className="space-y-4">
                                        {project.longDescription.map((paragraph, index) => (
                                            <p key={index} className="text-gray-400 leading-relaxed text-lg">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {project.longDescription}
                                    </p>
                                )}
                            </motion.div>

                            {/* Features */}
                            {project.features && project.features.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-emerald-500/15 rounded-xl flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">Key Features</h2>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {project.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex items-start gap-3 p-4 bg-gray-800/40 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                                            >
                                                <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                                </div>
                                                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Gallery */}
                            {project.gallery && project.gallery.length > 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center">
                                            <Layers className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-white">Project Gallery</h2>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {project.gallery.map((img, index) => (
                                            <motion.div
                                                key={index}
                                                className="relative rounded-xl overflow-hidden border border-gray-800 cursor-pointer group"
                                                onClick={() => openLightbox(index)}
                                                whileHover={{ y: -4 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/30 transition-colors duration-300" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Right Column - Sidebar */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            {/* Tech Stack Card */}
                            <div className="bg-gray-800/40 rounded-2xl border border-gray-800 p-6 sticky top-24">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 bg-purple-500/15 rounded-xl flex items-center justify-center">
                                        <Layers className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 bg-gray-700/50 rounded-xl text-sm text-gray-300 font-medium border border-gray-700 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-300 cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4 pt-6 border-t border-gray-700">
                                    {project.role && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm">Role</span>
                                            <span className="text-gray-300 text-sm font-medium">{project.role}</span>
                                        </div>
                                    )}
                                    {project.duration && (
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-500 text-sm">Duration</span>
                                            <span className="text-gray-300 text-sm font-medium">{project.duration}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-sm">Category</span>
                                        <span className="text-purple-400 text-sm font-medium">{project.category}</span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-3 pt-6 mt-6 border-t border-gray-700">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl text-white font-medium transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                                        >
                                            <ExternalLink size={18} />
                                            View Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl text-white font-medium transition-all duration-300 border border-gray-600"
                                    >
                                        <Github size={18} />
                                        View Source Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Back to projects */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 px-8 py-4 bg-gray-800/60 hover:bg-gray-800 rounded-2xl text-gray-300 hover:text-white font-medium transition-all duration-300 border border-gray-700 hover:border-gray-600 group"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Back to All Projects
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-gray-950/95 backdrop-blur-xl flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation Arrows */}
                        {project.gallery.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage() }}
                                    className="absolute left-6 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage() }}
                                    className="absolute right-6 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {/* Image */}
                        <motion.img
                            key={selectedImageIndex}
                            src={project.gallery[selectedImageIndex]}
                            alt={`${project.title} screenshot`}
                            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image Counter */}
                        {project.gallery.length > 1 && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800/80 rounded-full text-gray-300 text-sm">
                                {selectedImageIndex + 1} / {project.gallery.length}
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProjectDetails
