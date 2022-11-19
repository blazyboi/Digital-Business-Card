import React from "react"
import project1 from "../images/projects/portfolio.jpg"
import project2 from "../images/projects/ssec.jpg"
import project3 from "../images/projects/reactfacts.jpg"
import project4 from "../images/projects/card.jpg"
import project5 from "../images/projects/aeimnestus.jpg"

export default function Projects() {
    return (
        <div className="projects">
            <ul className="projects--list">
                <li>
                    <h1 className="projects--title">Portfolio Website</h1>
                    <a href="https://jayviswisely.github.io">
                        <img className="projects--img" src={project1}></img>
                    </a>
                </li>
                <li>
                    <h1 className="projects--title">SSEC Mini Arcade</h1>
                    <a href="https://ssec-arcade.netlify.app">
                        <img className="projects--img" src={project2}></img>
                    </a>
                </li>
                <li>
                    <h1 className="projects--title">Web Technologies Facts - Under Development</h1>
                    <a href="https://facts-of-react.netlify.app">
                        <img className="projects--img" src={project3}></img>
                    </a>
                </li>
                <li>
                    <h1 className="projects--title">Digital Business Card &#40;Current Site&#41;</h1>
                        <a href="https://jayviswisely-card.netlify.app/">
                            <img className="projects--img" src={project4}></img>
                        </a>
                </li>
                <li>
                    <h1 className="projects--title">Aeimnestus - Beta Coming Soon</h1>
                        <a href="https://twitter.com/AeimnestusGame?t=-AHSO-k817vBqjxX-DGObQ&s=09">
                            <img className="projects--img" src={project5}></img>
                        </a> 
                </li>
            </ul>
        </div>
    )
}