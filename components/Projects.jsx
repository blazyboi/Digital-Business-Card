import React from "react"
import project1 from "../images/projects/portfolio.jpg"

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
                </li>
                <li>
                    <h1 className="projects--title">Web Technologies Facts</h1>
                </li>
                <li>
                    <h1 className="projects--title">Digital Business Card</h1>
                </li>
                <li>
                    <h1 className="projects--title">Aeimnestus</h1>
                </li>
            </ul>
        </div>
    )
}