import React from "react"
import "../stylesheets/Contact.scss"
import { Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="title">Contact</div>
      <div className="form-container">
        <div className="form">
          <Form>
            <Form.Group controlId="fullName">
              <Form.Control placeholder="Your full name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Control as="textarea" rows="9" placeholder="Your message..."/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <div className="social-container">
        <a href="https://github.com/achman1729">GitHub</a>
        <a href="https://www.linkedin.com/in/achin-mandotia">LinkedIn</a>
        <a href="https://dev.to/achman1729">Dev</a>
      </div>
    </div>
  )
}
