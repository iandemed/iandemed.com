import React from 'react' 

import '../styles/general.css'

function FooterContentColumn({title, links}){
    return(
        <div className="content-column">
            <h1 className="card-header">
                {title}
            </h1>

            {links.map((link, i) => {
                return(
                    <a key={i} href={link.href} className="content-link">
                        {link.text}
                    </a>
                )
            })}

        </div>
    )
}

export default FooterContentColumn