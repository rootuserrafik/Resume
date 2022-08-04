import React from 'react'
import './ResumeKnowledgesData.css'
import ResumeKnowledgesDataCard from './ResumeKnowledgesDataCard'

function ResumeKnowledgesData() {
    return (
        <ul className="apResKnoDa">
            <ResumeKnowledgesDataCard keyword = "Marketing" />
            <ResumeKnowledgesDataCard keyword = "Print" />
            <ResumeKnowledgesDataCard keyword = "Degital Design" />
            <ResumeKnowledgesDataCard keyword = "Socail Media" />
            <ResumeKnowledgesDataCard keyword = "Time Management" />
            <ResumeKnowledgesDataCard keyword = "Communication" />
            <ResumeKnowledgesDataCard keyword = "Problem-Solving" />
            <ResumeKnowledgesDataCard keyword = "Socail Networking" />
            <ResumeKnowledgesDataCard keyword = "Flexibility" />
        </ul>
    )
}

export default ResumeKnowledgesData
