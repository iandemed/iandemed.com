import React from 'react'

import '../styles/general.css'

function StackSkillList({skillList}){
    return(
        <ul>
            {skillList.map((skill, i) => {

                if(typeof skill === 'string'){
                    return (
                        <li key={i} className="font-size-2">
                            {skill}
                        </li>
                    )
                } else if (skill instanceof Array){
                    return (<StackSkillList skillList={skill}/>)
                }

            })}
        </ul>
    )
}

export default StackSkillList