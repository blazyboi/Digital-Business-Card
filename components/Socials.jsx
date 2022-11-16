import React from "react"
import twitter from "../images/logo-twitter.png"
import facebook from "../images/logo-facebook.png"
import insta from "../images/logo-insta.png"
import github from "../images/logo-github.png"

export default function Socials() {
    return (
        <footer>
            {/*<h1>Icons goes here</h1>*/}
            <a href="https://twitter.com/notjaymaybe/">
                <img src={twitter}></img>
            </a>
            <a href="https://www.facebook.com/jayvis.wisely/">
                <img src={facebook}></img>
            </a>
            <a href="https://www.instagram.com/jayviswiselyy">
                <img src={insta}></img>
            </a>
            <a href="https://github.com/jayviswisely/">
                <img src={github}></img>
            </a>
        </footer>
    )
}