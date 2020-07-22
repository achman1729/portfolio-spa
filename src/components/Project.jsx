import React from "react"
import "../stylesheets/Project.scss"
import { Card} from "react-bootstrap"
import taApp from "../Docs/terminal-app.PNG"
import eComApp from "../Docs/Homepage.PNG"

export default function Project() {
  return (
    <div className="project-section" id="project">
      <div className="title">Projects</div>
      <div className="project-cards">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={taApp}/>
          <Card.Body>
            <Card.Title>Terminal Application</Card.Title>
            <Card.Text>
              This is a fun grocery shopping terminal application written in Ruby.
            </Card.Text>
            <Card.Link href="https://github.com/achman1729/AchinMandotia_T1A2">Git repo</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={eComApp}/>
          <Card.Body>
            <Card.Title>Bodsty</Card.Title>
            <Card.Text>
              This is a two sided eCommerce application built purely on Ruby on Rails.
            </Card.Text>
            <Card.Link href="https://github.com/achman1729/Bodtsy-marketplace">Git repo</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
