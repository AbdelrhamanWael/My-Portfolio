import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react';
import amazon from '../../public/images/amazon-five-alpha.vercel.app_.png'
import task from '../../public/images/crud-opration-iota.vercel.app_.png'
import MedCenter from '../../public/images/deluxe-moonbeam-d6009c.netlify.app_.png'

import netflix from '../../public/images/www.netflix.com_eg-en_.png'

const Projects = () => {
     const projects = [
    {
      title: 'E-Commerce Platform – Amazon Clone',
      description: 'Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: amazon,
      liveUrl: 'https://lnkd.in/eYG3vTbS',
      githubUrl: 'https://github.com/Mohamedghanem2002/ecommerce-amazon.git',
      gradient: 'from-purple-500 to-pink-500'
    },
    
    {
      title: 'Task Management System',
      description: 'A collaborative task and project management platform developed during an internship at DevWave. The app includes full CRUD operations, Firebase authentication, real-time updates, and a clean dashboard UI. Users can manage tasks, create or join projects, and collaborate seamlessly.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Firebase', 'React Router', 'Context API'],
      image: task,
      liveUrl: 'https://crud-opration-iota.vercel.app/',
      githubUrl: 'https://github.com/Mohamedghanem2002/crud-opration',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Medical Center Website & Dashboard',
      description: 'A complete medical center web application including both the client-facing website and an admin dashboard. Built with React and Firebase, featuring dynamic content management, doctor listings, services pages, and secure authentication.',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      image: MedCenter,
      liveUrl: 'https://deluxe-moonbeam-d6009c.netlify.app/',
      githubUrl: 'https://github.com/AbdelrhamanWael/Appointment-Center.git',
      gradient: 'from-green-500 to-teal-500'
    }, 
    {
        title: 'Movie Discovery App',
        description: 'A modern movie discovery platform built with React and Vite. Users can browse movies by categories, watch trailers, and authenticate using Firebase. The app integrates the TMDB API for real-time content and features a responsive UI with smooth navigation.',
        tech: ['React', 'Vite', 'Firebase', 'TMDB API', 'CSS3'],
        image: netflix,
        liveUrl: 'https://netflix-clone-psi-nine.vercel.app/',
        githubUrl: 'https://github.com/AbdelrhamanWael/Netflix-Clone.git',
        gradient: 'from-green-500 to-teal-500'
      }


  ];

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

  const techVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200
      }
    }
  };

  const linkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.9 }
  };

    return (
        <motion.section
            id="projects"
            className="py-20"
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
                    Featured Projects
                </motion.h2>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300"
                            variants={cardVariants}
                            whileHover={{
                                boxShadow: '0 25px 50px rgba(168, 85, 247, 0.3)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <motion.div
                                    className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                                    animate={{
                                        scale: [1, 1.05, 1],
                                        opacity: [0.2, 0.3, 0.2]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut'
                                    }}
                                ></motion.div>
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>
                            <div className="p-6">
                                <motion.h3
                                    className="text-2xl font-bold mb-3 text-purple-400"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-400 mb-4 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {project.description}
                                </motion.p>
                                <motion.div
                                    className="flex flex-wrap gap-2 mb-6"
                                    variants={containerVariants}
                                >
                                    {project.tech.map((tech, idx) => (
                                        <motion.span
                                            key={idx}
                                            className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-400"
                                            variants={techVariants}
                                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="flex gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    <motion.a
                                        href={project.liveUrl}
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                                        variants={linkVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                                        variants={linkVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        <Github size={18} />
                                        <span>Code</span>
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Projects