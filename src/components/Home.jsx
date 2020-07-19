import React from "react"
import "../stylesheets/Home.scss"

export default function Home() {
  return (
    <div className="home-section" id="home" >
      <h1>Home</h1>
      <p>
        Hi :) I'm <span>Achin Mandotia</span>
      </p>
      <p>I'm a full stack developer.</p>
      {/* <a href="./pages/about.html">Know more...</a> */}
    </div>
  )
}
