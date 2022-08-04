import React from 'react'
import './ResumeDesignSkillsDataCard.css'

function ResumeDesignSkillsDataCard({title, percenteage}) {
    return (
        <li className='apReDeDaCa'>
            <h4 className="titleP">{title} <span className="TextPercentage">{percenteage}%</span></h4>
            <span className="SkillPercentage"></span>
        </li>
    )
}

export default ResumeDesignSkillsDataCard
