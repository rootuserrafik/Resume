import React from 'react'
import './ClientReport.css'
import ClientReportCard from './ClientReportCard'

function ClientReport() {
    return (
        <ul className='apptl apcr'>
            <ClientReportCard 
                title = 'Happy Clients'
                counter = '876'
            />
            <ClientReportCard 
                title = 'Working Hours'
                counter = '4,370'
            />
            <ClientReportCard 
                title = 'Awards Won'
                counter = '12'
            />
        </ul>
    )
}

export default ClientReport
