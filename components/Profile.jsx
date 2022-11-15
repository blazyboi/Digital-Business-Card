import React from 'react';

export default function Profile() {
    return (
        <div className="profile">
            <img src="../images/pfp.png" className="profile--img"></img>
            <div className="profile--text">
                <h1 className="profile--name">Laura Smith</h1>
                <h3 className="profile--job">Frontend Developer</h3>
                <a href="https://www.figma.com/file/KZWirYkmu7Ez99LnNiEwZR/Digital-Business-Card-(Copy)?node-id=0%3A1&t=QsEkl5993h2jVh1Z-0">laurasmith.website</a>
            </div>
        </div>
    )
}