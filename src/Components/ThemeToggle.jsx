import React from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-24 right-6 z-50 p-3 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? (
                    <Moon className="w-5 h-5 text-purple-400" />
                ) : (
                    <Sun className="w-5 h-5 text-yellow-400" />
                )}
            </motion.div>
        </motion.button>
    )
}

export default ThemeToggle
