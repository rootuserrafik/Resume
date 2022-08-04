import React from 'react'
import ResumeDesignSkillsDataCard from './ResumeDesignSkillsDataCard'

function ResumeCodingSkillsData() {
    return (
        <ul className='aprEduD apReDeDa'>
            <ResumeDesignSkillsDataCard 
                title = "JavaScript"
                percenteage = "95"
            />
            <ResumeDesignSkillsDataCard 
                title = "PHP"
                percenteage = "87"
            />
            <ResumeDesignSkillsDataCard 
                title = "HTMl & CSS"
                percenteage = "70"
            />
            <ResumeDesignSkillsDataCard 
                title = "Smarty & Twig"
                percenteage = "80"
            />
            <ResumeDesignSkillsDataCard 
                title = "Perl"
                percenteage = "90"
            />
        </ul>
    )
}

export default ResumeCodingSkillsData
