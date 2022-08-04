import React from 'react'
import './ResumeExperienceDataCard.css'
// import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function ResumeExperienceDataCard({date, place, title, summary}) {
    return (
        <li className='aprExpDC'>
            <div className="dataItem">
                <h4 className="titleP">{date}</h4>
                <p className="itemsPlace">{place}</p>
            </div>
            <div className="dataItem divider">
                <FiberManualRecordIcon className='dividerStyle' />
                
            </div>
            <div className="dataItem con">
                <h4 className="titleP">{title}</h4>
                <p className="itemsPlace summary">{summary}</p>
            </div>
        </li>
    )
}

export default ResumeExperienceDataCard
