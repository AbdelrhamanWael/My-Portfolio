import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'
import LoadingScreen from './Components/LoadingScreen.jsx'
import CustomCursor from './Components/CustomCursor.jsx'
import ThemeToggle from './Components/ThemeToggle.jsx'
import HomePage from './Components/HomePage.jsx'
import ProjectDetails from './Components/ProjectDetails.jsx'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <ThemeProvider>
      <Router>
        <AnimatePresence>
          {isLoading && (
            <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {!isLoading && (
          <div className="App bg-gray-950 text-gray-100 min-h-screen">
            <CustomCursor />
            <ThemeToggle />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <main className="pt-16">
                      <HomePage />
                    </main>
                    <Footer />
                  </>
                }
              />
              <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
            <ScrollToTop />
          </div>
        )}
      </Router>
    </ThemeProvider>
  )
}

export default App
