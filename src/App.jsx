import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
  

  return (
    <div className="App bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />





    </div>
  )
}

export default App
