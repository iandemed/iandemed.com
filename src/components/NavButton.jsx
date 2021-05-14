import React from 'react'

import '../styles/general.css'

function NavButton({text, link}){
    return(
        <div className="navbar-item">
            <a 
                className="txt-is-white link txt-1"
                href={link}
            >
                {text}
            </a>
        </div>
    )
}

export default NavButton