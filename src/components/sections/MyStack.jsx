import React from 'react'

import '../../styles/general.css'

import StackSkillList from '../StackSkillList'

function MyStack(){

    const frontendSkills = ["React JS", ["Redux", "Redux-Saga", "React Router"], "React Natvie", "D3"]
    const backendSkills = ["Flask", ["SQL Alchemy", "Alembic"], "Django", ["Rest Framework"], "node.js", ["Mongoose", "Express"]]
    const deploymentSkills = ["Heroku", "Netlify", "Github Pages"]

    return(
        <div id="my-stack" className="section-hero">
            <h1 className="hero-header">
                My Stack
            </h1>

            <div className="stack-list">
                <h3>Front-end Frameworks</h3>
                <StackSkillList skillList={frontendSkills}/>
            </div>
            <div className="stack-list">
                <h3>Back-end Frameworks</h3>
                <StackSkillList skillList={backendSkills}/>
            </div>
            <div className="stack-list">
                <h3>Deployment</h3>
                <StackSkillList skillList={deploymentSkills}/>
            </div>
            

        </div>
    )
}

export default MyStack