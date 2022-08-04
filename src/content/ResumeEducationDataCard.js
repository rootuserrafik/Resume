import React from 'react'
import './ResumeEducationDataCard.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ResumeEducationDataCard({date, place, title, summary}) {
    return (
        <li className='aprExpDC aprEduDC'>
            <div className="dataItem">
                <h4 className="titleP">{date}</h4>
                <p className="itemsPlace">{place}</p>
            </div>
            <div className="dataItem divider">
                <FiberManualRecordIcon className='dividerStyle' />
                
            </div>
            <div className="dataItem con">
                <h4 className="titleP">{title}</h4>
                <p className="itemsPlace">{summary}</p>
            </div>
        </li>
    )
}

export default ResumeEducationDataCard
