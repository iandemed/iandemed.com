import React from 'react' 

import '../styles/general.css'

function SocialMediaBar({logos}){
    return(
        <div className="social-media-bar">
            {logos.map((logo,i) => {
                return(
                    <a key={i} href={logo.link}>
                        <img src={logo.src} alt={logo.alt} className="icon"/>
                    </a>
                )

            })}
        </div>
    )
}

export default SocialMediaBar