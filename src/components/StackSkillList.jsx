import React from 'react'

import '../styles/general.css'

function StackSkillList({skillList}){
    return(
        <ul>
            {skillList.map((skill, i) => {
                
                let listElement = null
            
                if(typeof skill === 'string'){
                    
                    listElement = (
                        <li key={skill} className="font-size-2">
                            {skill}
                        </li>
                    )
                } else if (skill instanceof Array){
                    listElement = <StackSkillList skillList={skill}/>
                }

                return listElement

            })}
        </ul>
    )
}

export default StackSkillList