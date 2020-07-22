import React from "react"
import "../stylesheets/Home.scss"
import { HashLink as Link } from "react-router-hash-link"

export default function Home() {
  return (
    <section className="home-section" id="home" >
      <div className="text-section">
        Hi :) I'm 
        <span className="highlight-name"> Achin Mandotia</span>
        <br></br>
        I'm a full stack developer
        <div className="know-more">
          <Link smooth to="#about"> Know more...</Link>
        </div>
      </div>
    </section>
  )
}
