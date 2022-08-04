import React from 'react'
import './ResumeExperienceData.css'
import ResumeExperienceDataCard from './ResumeExperienceDataCard'

function ResumeExperienceData() {
    return (
        <ul className='aprExpD'>
            <ResumeExperienceDataCard 
                date = '2016'
                place = 'Google'
                title = 'Lead Ui/Ux Designer'
                summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem non cupiditate, magni explicabo quas, consequuntur tempora debitis fugiat odit quo, nihil porro.'
            />
            <ResumeExperienceDataCard 
                date = '2010'
                place = 'Adobe'
                title = 'Web Designer'
                summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem non cupiditate, magni explicabo quas, consequuntur tempora debitis fugiat odit quo, nihil porro.'
            />
            <ResumeExperienceDataCard 
                date = '2006'
                place = 'Behance'
                title = 'Graphic Designer'
                summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem non cupiditate, magni explicabo quas, consequuntur tempora debitis fugiat odit quo, nihil porro.'
            />
        </ul>
    )
}

export default ResumeExperienceData
