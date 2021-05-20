import React,  {useRef} from 'react'

import NavButton from './NavButton.jsx'
import DownloadButton from './DownloadButton.jsx'
import NavBurger from './NavBurger.jsx'

import '../styles/general.css'


function NavBar(){

    const navbarMenu = useRef(null)

    const handleClick = (e) => {
        navbarMenu.current.classList.toggle("is-active")
        navbarMenu.current.focus()
        e.preventDefault()
    }

    const handleBlur = (e) => {
        console.log(e.target)
        e.target.removeClass("is-active")
    }

    return(
        <nav className="navbar bg-primary-dark">
            <div>
            <NavBurger
                handleClick={handleClick}
            />
            </div>
            <div 
                className="navbar-menu" 
                ref={navbarMenu}
                onBlur={handleBlur}
            >
                <NavButton text="Projects" link="#projects"/>
                <NavButton text="About" link="#about"/>
                <NavButton text="My Stack" link="#my-stack"/>
                <DownloadButton text="resume" filepath="/de_Medeiros_Resume.pdf"/>
            </div>

        </nav>
    )
}

export default NavBar