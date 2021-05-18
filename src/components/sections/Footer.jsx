import React from 'react' 

import '../../styles/general.css'

import ContactCard from '../ContactCard'
import FooterContentColumn from '../FooterContentColumn'


const links = [
    {
        text: "Figma",
        href: "https://www.figma.com/file/9aOt6VE09x5Z721Noz1fCg/iandemed.dev?node-id=7%3A0",
    },
    {
        text: "favicon.io",
        href: "https://favicon.io/",
    },
    {
        text: "Material Design Icons",
        href: "https://materialdesignicons.com/",
    },
    {
        text: "Netlify",
        href: "https://www.netlify.com/",
    },
]

function Footer(){

    return(
        <div id="footer">
            <ContactCard/>
            <FooterContentColumn
                title="Built With:"
                links={links}
            />
        </div>
    )
}

export default Footer