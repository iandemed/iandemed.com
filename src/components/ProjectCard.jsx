import React from 'react'

import '../styles/general.css'

function ProjectCard({title, body, img, website, repo}){


    return(
        <div className="project-card">
            <div>
                <img src={img} alt={title} className="card-img"/>
            </div>
            <div className="card-content">
                <h1 className="card-header">
                    {title}
                </h1>
                <p className="card-body">
                    {body}
                </p>

            </div>
            <div className="card-footer">
                {website !== undefined &&
                    <a href={website} className="card-footer-item">
                        Website
                    </a>
                }
                {repo !== undefined &&
                    <a href={repo} className="card-footer-item">
                        Repo
                    </a>
                }
            </div>

        </div>
    )
}

export default ProjectCard