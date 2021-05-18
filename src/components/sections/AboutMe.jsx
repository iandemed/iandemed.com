import React from 'react'

import '../../styles/general.css'
import headshot from '../../imgs/headshot.png'

function AboutMe(){
    return(
        <div id="about" className="section-hero bg-primary">
            <img src={headshot} alt="headshot"/>
            <div className="about-section">
                <h2 className="txt-is-white">Software Engineer | Researcher | Story Teller</h2>
                <div className="about-body">
                    <p>
                    I am an aspiring software engineer, data evangelist, once 
                    and future teacher, and perpetual student. I particularly 
                    enjoy the intersection between intuitive design and 
                    data-driven visualizations. I am passionate about combining 
                    real-world data and clean code to tell engaging stories.
                    </p>
                    <p>
                    In my spare time, you can find me preparing new adventures 
                    for Dungeons &#38; Dragons and trying to make the perfect cup of
                    coffee.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutMe