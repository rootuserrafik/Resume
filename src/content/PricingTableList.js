import React from 'react'
import PricingTableListCard from './PricingTableListCard'
import './PricingTableList.css'

function PricingTableList() {
    return (
        <ul className='apptl'>
            <PricingTableListCard 
                title = "Selver"
                price = "60"
                buttonText = "Free Trial"
            />
            <PricingTableListCard 
                title = "Gold"
                price = "128"
                buttonText = "Free Trial"
            />
        </ul>
    )
}

export default PricingTableList
