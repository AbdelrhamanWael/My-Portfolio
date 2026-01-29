import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code, Users, Award } from 'lucide-react'

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    const stats = [
        { icon: <Code className="w-8 h-8" />, value: 10, suffix: '+', label: 'Technologies' },
        { icon: <Briefcase className="w-8 h-8" />, value: 4, suffix: '+', label: 'Projects Completed' },
        { icon: <Users className="w-8 h-8" />, value: 1, suffix: '+', label: 'Years Experience' },
        { icon: <Award className="w-8 h-8" />, value: 100, suffix: '%', label: 'Client Satisfaction' }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-gray-950 to-pink-900/20" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)' }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl text-purple-400 mb-4 mx-auto">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {isVisible ? (
                                    <CountUp target={stat.value} suffix={stat.suffix} />
                                ) : (
                                    <span>0{stat.suffix}</span>
                                )}
                            </div>
                            <p className="text-gray-400 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Counter animation component
const CountUp = ({ target, suffix }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const duration = 2000
        const increment = target / (duration / 50)
        
        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 50)

        return () => clearInterval(timer)
    }, [target])

    return <span>{count}{suffix}</span>
}

export default Stats
