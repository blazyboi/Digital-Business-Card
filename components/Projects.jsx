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
                    <img className="projects--img" src={project1}></img>
                </li>
                <li>
                    <h1 className="projects--title">SSEC Mini Arcade</h1>
                    <img className="projects--img" src={project2}></img>
                </li>
                <li>
                    <h1 className="projects--title">Web Technologies Facts</h1>
                    <img className="projects--img" src={project3}></img>
                </li>
                <li>
                    <h1 className="projects--title">Digital Business Card &#40;Current Site&#41;</h1>
                    <img className="projects--img" src={project4}></img>
                </li>
                <li>
                    <h1 className="projects--title">Aeimnestus</h1>
                    <img className="projects--img" src={project5}></img>
                </li>
            </ul>
        </div>
    )
}