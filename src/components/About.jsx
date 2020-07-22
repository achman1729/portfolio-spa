import React from "react"
import Chart from "./Chart" 
import "../stylesheets/About.scss"
import picture from "../Docs/profile-pic.jpg"
import resume from "../Docs/Resume.pdf"

export default function About() {
  return (
    <section className="about-section" id="about">
      <div class="grid-container">
        <div class="item1"><span>About</span></div>
        <div class="item2">Creativity</div>
        <div class="item3">Critical Thinking</div>
        <div class="item4">Presentation skills</div>
        <div class="item5">Problem solving</div>
        <div class="item6">
          <div className="image">
            <img src={picture} alt="profile"/>
          </div>
          <div className="text">
            <span>
              A software engineer skilled in MERN stack, Ruby and  Rails. I’m curious about learning new technologies and building solution that are scalable and flexible to solve diverse range of problems. I’m a gym junkie, love to cook and an aspiring Kite Surfer. Checkout my 
            </span>
             <a href={ resume }><em> Resume</em></a>
          </div>
        </div>
        <div class="item7">
        <Chart />
        </div>
      </div>
    </section>
  )
}
