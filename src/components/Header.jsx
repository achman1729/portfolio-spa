import React from "react"
import { HashLink as Link } from "react-router-hash-link"
import "../stylesheets/Header.scss"
import { Navbar, Nav, Container } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar expand="lg"  sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav>
            <Link smooth to="#home" data-rb-event-key="#home" className="nav-link">
              Home
            </Link>
            <Link smooth to="#about" data-rb-event-key="#about" className="nav-link" activeClassName="navbar--active">
              About
              </Link>
            <Link smooth to="#project" data-rb-event-key="#project" className="nav-link">
              Project
            </Link>
            <Link smooth to="#contact" data-rb-event-key="#contact" className="nav-link">
              Contact
            </Link>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  )
}
