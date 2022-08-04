import React from 'react'
import './ClientList.css'
import ClientListCard from './ClientListCard'
import googleImg from './images/clients/google.png'
import AcrochatImg from './images/clients/Acrochat.png'
import adobeImg from './images/clients/adobe.png'
import amazonImg from './images/clients/amazon.png'
import AribaImg from './images/clients/Ariba.png'
import envatoImg from './images/clients/envato.png'
import microsoftImg from './images/clients/microsoft.png'
import TechstarsImg from './images/clients/Techstars.png'
import walmartImg from './images/clients/walmart.png'
import WishImg from './images/clients/Wish.png'
import ZomatoImg from './images/clients/Zomato.png'


function ClientList() {
    return (
        <ul className='aclist'>
            <ClientListCard 
                clientlogo = {googleImg}
                title = 'Google'
            />
            <ClientListCard 
                clientlogo = {AcrochatImg}
                title = 'Acrochat'
            />
            <ClientListCard 
                clientlogo = {adobeImg}
                title = 'Adobe'
            />
            <ClientListCard 
                clientlogo = {amazonImg}
                title = 'Amazon'
            />
            <ClientListCard 
                clientlogo = {AribaImg}
                title = 'Ariba'
            />
            <ClientListCard 
                clientlogo = {envatoImg}
                title = 'Envato'
            />
            <ClientListCard 
                clientlogo = {microsoftImg}
                title = 'Microsoft'
            />
            <ClientListCard 
                clientlogo = {TechstarsImg}
                title = 'Techstars'
            />
            <ClientListCard 
                clientlogo = {walmartImg}
                title = 'Walmart'
            />
            <ClientListCard 
                clientlogo = {WishImg}
                title = 'Wish'
            />
            <ClientListCard 
                clientlogo = {ZomatoImg}
                title = 'Zomato'
            />
        </ul>
    )
}

export default ClientList
