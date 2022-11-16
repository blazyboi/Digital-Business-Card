import React from "react"
import email from "../images/logo-email.png"
import linkedin from "../images/logo-linkedin.png"

export default function Buttons() {
    return (
        <div className="buttons">
            <button type="button" className="buttons--email">
                <div className="buttons--button">
                    <a href="mailto:jayviswise@gmail.com">
                        <img src={email}></img>
                        {/*Email*/}
                    </a>
                </div>
            </button>
            <button type="button" className="buttons--linkedin">
               <div className="buttons--button">
                    <a href="https://www.linkedin.com/">
                        <img src={linkedin}></img>
                        {/*LinkedIn*/}
                    </a>
                </div>
            </button>
        </div>
    )
}