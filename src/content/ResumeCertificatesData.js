import React from 'react'
import './ResumeCertificatesData.css'
import ResumeCertificatesDataCard from './ResumeCertificatesDataCard'
import CertifiImg1 from './images/certificate/SoPCert_50_hours.png'

function ResumeCertificatesData() {
    return (
        <ul className="apResCerDa">
            <ResumeCertificatesDataCard
                images = {CertifiImg1}
                title = "Adipisicing elit. Quidem, dolor!"
                idNumber = "XXXX"
                date = "19 Nov 2016"
            />
            <ResumeCertificatesDataCard
                images = {CertifiImg1}
                title = "Lorem ipsum dolor sit."
                idNumber = "XXXX"
                date = "19 Nov 2014"
            />
        </ul>
    )
}

export default ResumeCertificatesData
