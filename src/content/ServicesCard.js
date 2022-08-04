import React from 'react'
import './ServicesCard.css'

function ServicesCard({title, icons, summary, micons}) {
    return (
        <li className="Single__Icon__Item">
            <span className="serSubHed">
                <img src={icons} alt="" className="servicesIcons"/>
                <h3 className="servicesTitle">{title}</h3>
            </span>
            <p className="servicesSummary">{summary}</p>
        </li>
    )
}

export default ServicesCard
