import React from 'react'

import NavButton from './NavButton.jsx'
import DownloadButton from './DownloadButton.jsx'

import '../styles/general.css'

function NavBar(){
    return(
        <div className="navbar bg-primary-dark">
            <div className="navbar-start">
                <NavButton text="Projects" link="#projects"/>
                <NavButton text="About" link="#about"/>
                <NavButton text="My Stack" link="#my-stack"/>
            </div>

            <div className="navbar-end">
                <DownloadButton text="resume" filepath="/de_Medeiros_Resume.pdf"/>
            </div>

        </div>
    )
}

export default NavBar