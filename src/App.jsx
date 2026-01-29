import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Stats from './Components/Stats.jsx'
import Skills from './Components/Skills.jsx'
import Experience from './Components/Experience.jsx'
import Education from './Components/Education.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import LoadingScreen from './Components/LoadingScreen.jsx'
import CustomCursor from './Components/CustomCursor.jsx'
import ThemeToggle from './Components/ThemeToggle.jsx'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="App bg-gray-950 text-gray-100 min-h-screen">
          <CustomCursor />
          <ThemeToggle />
          <Navbar />
          <main className="pt-16">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </ThemeProvider>
  )
}

export default App
