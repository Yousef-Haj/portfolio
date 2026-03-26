import React from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero" 
import About from "./components/sections/About"
import RadialGradientBackground from "./components/background/RadialGradientBackground"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import Project from "./components/sections/Project"


const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>

    <Footer/>

    </div>
  )
}

export default App
