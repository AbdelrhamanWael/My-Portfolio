import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isPointer, setIsPointer] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const [isClicking, setIsClicking] = useState(false)
    const rafRef = useRef(null)
    const posRef = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const updatePosition = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY }

            if (rafRef.current) return
            rafRef.current = requestAnimationFrame(() => {
                setPosition({ ...posRef.current })

                const hoveredElement = document.elementFromPoint(posRef.current.x, posRef.current.y)
                if (hoveredElement) {
                    const computedStyle = window.getComputedStyle(hoveredElement)
                    setIsPointer(
                        computedStyle.cursor === 'pointer' ||
                        hoveredElement.tagName === 'A' ||
                        hoveredElement.tagName === 'BUTTON' ||
                        !!hoveredElement.closest('a') ||
                        !!hoveredElement.closest('button')
                    )
                }
                rafRef.current = null
            })
        }

        const handleMouseDown = () => setIsClicking(true)
        const handleMouseUp = () => setIsClicking(false)
        const handleMouseLeave = () => setIsHidden(true)
        const handleMouseEnter = () => setIsHidden(false)

        window.addEventListener('mousemove', updatePosition, { passive: true })
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        document.body.addEventListener('mouseleave', handleMouseLeave)
        document.body.addEventListener('mouseenter', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', updatePosition)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    // Hide on mobile/touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null
    }

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: position.x - 6,
                    y: position.y - 6,
                    scale: isClicking ? 0.8 : 1,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            >
                <div className={`w-3 h-3 rounded-full bg-white transition-transform duration-150 ${isPointer ? 'scale-150' : ''}`} />
            </motion.div>

            {/* Cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            >
                <div className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    isPointer
                        ? 'border-purple-500 bg-purple-500/10'
                        : 'border-purple-400/50'
                }`} />
            </motion.div>

            {/* Hide default cursor globally */}
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </>
    )
}

export default CustomCursor
