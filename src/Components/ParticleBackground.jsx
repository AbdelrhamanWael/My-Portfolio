import React, { useEffect, useRef } from 'react'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticles = () => {
            particles = []
            // Cap particle count for performance
            const particleCount = Math.min(
                Math.floor((canvas.width * canvas.height) / 25000),
                80
            )

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.4,
                    speedY: (Math.random() - 0.5) * 0.4,
                    opacity: Math.random() * 0.5 + 0.2
                })
            }
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const len = particles.length
            for (let i = 0; i < len; i++) {
                const particle = particles[i]

                // Update position
                particle.x += particle.speedX
                particle.y += particle.speedY

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width
                if (particle.x > canvas.width) particle.x = 0
                if (particle.y < 0) particle.y = canvas.height
                if (particle.y > canvas.height) particle.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`
                ctx.fill()

                // Draw connections — only check forward to avoid duplicates
                for (let j = i + 1; j < len; j++) {
                    const other = particles[j]
                    const dx = particle.x - other.x
                    const dy = particle.y - other.y
                    const distSq = dx * dx + dy * dy

                    // Use squared distance to avoid sqrt
                    if (distSq < 10000) { // 100 * 100
                        const dist = Math.sqrt(distSq)
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(other.x, other.y)
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist / 100)})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(drawParticles)
        }

        resizeCanvas()
        createParticles()
        drawParticles()

        const handleResize = () => {
            resizeCanvas()
            createParticles()
        }

        window.addEventListener('resize', handleResize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    )
}

export default ParticleBackground
