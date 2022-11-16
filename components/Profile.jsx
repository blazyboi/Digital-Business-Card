import React from 'react';
import pfp from "../images/pfp.jpg"

export default function Profile() {
    return (
        <div className="profile">
            <img src={pfp} className="profile--img"></img>
            <div className="profile--text">
                <h1 className="profile--name">Jayvis Wisely</h1>
                <h3 className="profile--job">Frontend Developer</h3>
                <a href="https://jayviswisely.github.io/index.html"><jayviswisely className="github io"></jayviswisely></a>
            </div>
        </div>
    )
}