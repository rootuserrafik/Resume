import React from 'react'
import OnlineShopCIcon from './images/icons/online-shop.png'
import RelationshipCIcon from './images/icons/relationship.png'
import ResponsiveDesignCIcon from './images/icons/responsive-design.png'
import CopywritingCIcon from './images/icons/copywriting.png'
import ServicesCard from './ServicesCard';
import './ServicesCardList.css'

function ServicesCardList() {
    return (
        <ul className="SCL">
            <ServicesCard 
                title = "Ecommarce"
                icons = {OnlineShopCIcon}
                summary = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam qui dolor, animi a cum, possimus iure molestiae temporibus nisi molestias at perferendis sequi excepturi praesentium in cumque natus voluptatibus, asperiores autem accusantium. Ducimus corrupti quia perferendis recusandae temporibus vero cupiditate libero esse, nesciunt fugiat numquam ex consectetur illum aperiam quisquam."
            />
            <ServicesCard 
                title = "Copywriting"
                icons = {CopywritingCIcon}
                summary = "Quisquam qui dolor, animi a cum, possimus iure molestiae temporibus nisi molestias at perferendis sequi excepturi praesentium in cumque natus voluptatibus, asperiores autem accusantium. Ducimus corrupti quia perferendis recusandae temporibus vero cupiditate libero esse, nesciunt fugiat numquam ex consectetur illum aperiam quisquam."
            />
            <ServicesCard 
                title = "Web Design"
                icons = {ResponsiveDesignCIcon}
                summary = "Consectetur adipisicing elit. Quisquam qui dolor, animi a cum, possimus iure molestiae temporibus nisi molestias at perferendis sequi excepturi praesentium in cumque natus voluptatibus, asperiores autem accusantium. Ducimus corrupti quia perferendis recusandae temporibus vero cupiditate libero esse, nesciunt fugiat numquam ex consectetur illum aperiam quisquam."
            />
            <ServicesCard 
                title = "Management"
                icons = {RelationshipCIcon}
                summary = "Animi a cum, possimus iure molestiae temporibus nisi molestias at perferendis sequi excepturi praesentium in cumque natus voluptatibus, asperiores autem accusantium. Ducimus corrupti quia perferendis recusandae temporibus vero cupiditate libero esse, nesciunt fugiat numquam ex consectetur illum aperiam quisquam."
            />
        </ul>
    )
}


export default ServicesCardList
