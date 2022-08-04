import React from 'react'
import './ResumeCertificatesDataCard.css'

function ResumeCertificatesDataCard({images, title, idNumber, date}) {
    return (
        <li className="apResCerDaCa">
            <img src={images} alt={title} className="CertiImg"/>
            <div className="rightCont">
                <h4 className="certiTitle">{title}</h4>
                <p className="MembershipId">Membership ID: {idNumber}</p>
                <p className="memebrshipDate"><small>{date}</small></p>
            </div>
        </li>
    )
}

export default ResumeCertificatesDataCard
