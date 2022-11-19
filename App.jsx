import React from 'react';
import Profile from "./components/Profile";
import Buttons from "./components/Buttons";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

export default function App() {
    return (
        <div className = "app--card">
            <Profile />
            <Buttons />
            <Description />
            <Projects />
            <Socials />
        </div>
    )
}