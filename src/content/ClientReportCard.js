import React from 'react'
import './ClientReportCard.css'
import HeadsetRoundedIcon from '@material-ui/icons/HearingRounded'

function ClientReportCard({title, counter}) {
    return (
        <li className='apptlc apcrc'>
            <HeadsetRoundedIcon className='cricons' />
            <h3 className="topicTitle">{title}</h3>
            <h2 className="numberOfFeedback">{counter}</h2>
        </li>
    )
}

export default ClientReportCard
