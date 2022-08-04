import React from 'react'
import './ResumeDesignSkillsData.css'
import ResumeDesignSkillsDataCard from './ResumeDesignSkillsDataCard'

function ResumeDesignSkillsData() {
    return (
        <ul className='aprEduD apReDeDa'>
            <ResumeDesignSkillsDataCard 
                title = "Web Design"
                percenteage = "95"
            />
            <ResumeDesignSkillsDataCard 
                title = "Print Design"
                percenteage = "87"
            />
            <ResumeDesignSkillsDataCard 
                title = "Logo Design"
                percenteage = "70"
            />
            <ResumeDesignSkillsDataCard 
                title = "Graphic Design"
                percenteage = "90"
            />
        </ul>
    )
}

export default ResumeDesignSkillsData
