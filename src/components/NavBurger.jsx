import React from 'react'

import '../styles/general.css'

function NavBurger({handleClick}){

    return(
        <div className="navbar-burger" 
            onClick={handleClick}
            tabIndex="0"
        >
            <span className="has-text-white"></span>
            <span className="has-text-white"></span>
            <span className="has-text-white"></span>
        </div>
    )
}

export default NavBurger