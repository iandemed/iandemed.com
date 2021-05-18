import React from 'react' 

import '../styles/general.css'

import ContactItem from './ContactItem'
import SocialMediaBar from './SocialMediaBar'

import Email from '../imgs/email.svg'
import Phone from '../imgs/phone.svg'
import GitHub from '../imgs/github.svg'
import Twitter from '../imgs/twitter.svg'
import LinkedIn from '../imgs/linkedin.svg'

const logos = [
    {
        src: GitHub,
        alt: "GitHub",
        link: "https://github.com/iandemed"
    },
    {
        src: LinkedIn,
        alt: "LinkedIn",
        link: "https://www.linkedin.com/in/ian-de-medeiros"
    },
    {
        src: Twitter,
        alt: "Twitter",
        link: "https://twitter.com/iandemed"
    }
]

function ContactCard(){

    return(
        <div className="contact-card is-inline-block">
            <h1>
                iandemed.dev
            </h1>
            <ContactItem
                logo={Phone}
                alt="Phone"
                text="+1 (443)-694-9372"
            />
            <ContactItem
                logo={Email}
                alt="Email"
                text="iandemed@gmail.com"
            /> 
            <SocialMediaBar logos={logos}/>          
        </div>

    )
}

export default ContactCard