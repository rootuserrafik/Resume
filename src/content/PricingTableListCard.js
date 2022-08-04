import React from 'react'
import { Link } from 'react-router-dom'
import PricingTableListCardItems from './PricingTableListCardItems'
import './PricingTableListCard.css'

function PricingTableListCard({title, price, buttonText}) {
    return (
        <li className='apptlc'>
            <span className="apptlc__title">{title}</span>
            <h2 className="apptlc__price">${price}<br/><span className="text">per month</span></h2>
            <Link href="#" className="apptlc__actionBtn">{buttonText}</Link>
            <ul className="apptlc__fList">
                <PricingTableListCardItems item = "Lorem ipsum dolor sit." />
                <PricingTableListCardItems item = "Praesentium officia reiciendis adipisci!" />
                <PricingTableListCardItems item = "Perferendis consequuntur provident aliquid." />
                <PricingTableListCardItems item = "Repellendus ratione rerum aut?" />
                <PricingTableListCardItems item = "Officia obcaecati sed eveniet!" />
                <PricingTableListCardItems item = "Ducimus facere consequatur aliquam!" />
            </ul>
        </li>
    )
}
// PricingTableListCardFeatures
export default PricingTableListCard
