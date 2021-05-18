import React from 'react' 

import '../styles/general.css'

function ContactItem({logo, alt, text}){

    return(
        <div className="contact-item">
            <img src={logo} alt={alt} className="icon"/>
            <p>{text}</p>
        </div>
    )
}

export default ContactItem