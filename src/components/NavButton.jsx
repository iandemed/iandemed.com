import React from 'react'

import '../styles/general.css'

function NavButton({text, link}){
    return(
            <a 
                className="navbar-item link txt-1"
                href={link}
            >
                {text}
            </a>
    )
}

export default NavButton