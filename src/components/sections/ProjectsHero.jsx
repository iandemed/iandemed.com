import React from 'react'

import '../../styles/general.css'

import ProjectCard from '../ProjectCard.jsx'

function ProjectsHero(){

    return(
        <div id="projects" className="section-hero">
            <h1 className="hero-header">
                Projects
            </h1>
            <div className="projects-content">
                <ProjectCard 
                    title="Developer Verse"
                    body="Full Stack app created in conjunction with my classmates
                    at General Assembly. I was instrumental in constructing
                    the back-end and permissions using Python, Django, and
                    PostgreSQL, and as well as deploying the back-end to Heroku"
                    img="https://i.imgur.com/CFcOy1a.png"
                    website="https://developerverse.netlify.app/"
                    repo="https://github.com/SEI-39/developerverse"
                />
                <ProjectCard 
                    title="First Families API"
                    body="Full Stack MERN application that I created to hold 
                    basic biographical information on each president and
                    their descendants."
                    img="https://i.imgur.com/7DjhlFL.png"
                    website="https://iandemed.github.io/first-families/"
                    repo="https://github.com/iandemed/first-families"
                />
                <ProjectCard 
                    title="Hanafuda Solitaire"
                    body="Hanafuda, or flower cards, are Japanese playing cards that
                    are used to play a variety of games. I recreated Hanafuda 
                    solitaire using base JavaScript, HTML, and CSS."
                    img="https://i.imgur.com/Ze5il1q.png"
                    website="https://iandemed.github.io/hanafuda-solitaire/"
                    repo="https://github.com/iandemed/hanafuda-solitaire"
                />
                <ProjectCard 
                    title="py-cheesi"
                    body="Python API created using Express, and Flask 
                    and using data on various cheeses scraped 
                    from cheese.com. I am migrating all of the 
                    models into the Flask framework and 
                    continuing to improve the web-scraping functionalities."
                    img="https://i.imgur.com/QFE5NEU.png"
                    repo="https://github.com/iandemed/py-cheesi"
                />
                <ProjectCard 
                    title="D&amp;D Damage Distribution"
                    body="Dynamic data visualization of the damage distribution 
                    for characters and creatures from Dungeons and Dragons using
                    React and D3 primarily to illustrate the effect of different
                    abilities and modifiers."
                    img="https://i.imgur.com/8sNoMj8.png"
                    website="https://iandemed.github.io/dnd-dmg-distributions/"
                    repo="https://iandemed.github.io/dnd-dmg-distributions/"
                />
            </div>
        </div>
    )
}

export default ProjectsHero