import React from "react"
import { HashLink as Link } from "react-router-hash-link"

export default function Navbar() {
  return (
    <nav>
      <Link smooth to="#home">
        Home
      </Link>
      <Link smooth to="#about">
        About
      </Link>
      <Link smooth={true} to="#project">
        Project
      </Link>
      <Link smooth to="#blog">
        Blog
      </Link>
      <Link smooth to="#contact">
        Contact
      </Link>
    </nav>
  )
}
