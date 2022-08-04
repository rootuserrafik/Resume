import React from 'react'
import './ResumeEducationData.css'
import ResumeEducationDataCard from './ResumeEducationDataCard'

function ResumeEducationData() {
    return (
        <ul className='aprEduD'>
        <ResumeEducationDataCard
            date = '2006'
            place = 'University of Studies'
            title = 'Front-End Development'
            summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem non cupiditate, magni explicabo quas, consequuntur tempora debitis fugiat odit quo, nihil porro.'
        />
        <ResumeEducationDataCard
            date = '2005'
            place = 'University of Studies'
            title = 'Graphic Design'
            summary = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem non cupiditate, magni explicabo quas, consequuntur tempora debitis fugiat odit quo, nihil porro.'
        />
        </ul>
    )
}

export default ResumeEducationData
