import React from 'react'
import './TestimonialsListCard.css'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

function TestimonialsListCard({image, name, title, summary}) {
    return (
        <li className='testimonListCard'>
            <div className="testimonCollum bgShap left__Content">
                <img src={image} alt="" className="profilePic"/>
                <FormatQuoteIcon className='testimonialQuote' />
            </div>
            <div className="testimonCollum content right__Content">
                <h4 className='testimonUserProfileName'>{name}</h4>
                <span className="testimonUserProfileTitle">{title}</span>
                <p className="testimonUserProfileText">{summary}</p>
            </div>
        </li>
    )
}

export default TestimonialsListCard
