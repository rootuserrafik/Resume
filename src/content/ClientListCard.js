import React from 'react'
import './ClientListCard.css'

function ClientListCard({clientlogo, title}) {
    return (
        <li className="singleCitems">
            <img className='clientLogo' src={clientlogo} alt={title}/>
            <h5 className='clientComTitle'>{title}</h5>
        </li>
    )
}

export default ClientListCard
