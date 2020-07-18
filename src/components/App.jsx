import React from "react"
import Home from "./Home"
import Blog from "./Blog"
import About from "./About"
import Project from "./Project"
import Contact from "./Contact"
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
