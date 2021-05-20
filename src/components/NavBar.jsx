import React,  {useRef} from 'react'

import NavButton from './NavButton.jsx'
import DownloadButton from './DownloadButton.jsx'

import '../styles/general.css'


function NavBar(){

    const navbarMenu = useRef(null)

    return(
        <nav className="navbar bg-primary-dark">
            <div 
                className="navbar-menu" 
                ref={navbarMenu}
            >
                <NavButton text="Projects" link="#projects"/>
                <NavButton text="About" link="#about"/>
                <NavButton text="My Stack" link="#my-stack"/>
                <DownloadButton text="resume" filepath="/de_Medeiros_Ian_Resume.pdf"/>
            </div>

        </nav>
    )
}

export default NavBar