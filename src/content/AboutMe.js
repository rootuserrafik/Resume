import React from 'react'
import './AboutMe.css'
import ClientList from './ClientList';
import ClientReport from './ClientReport';
import PricingTable from './PricingTable';
import ServicesCardList from './ServicesCardList';
import TestimonialsList from './TestimonialsList';

function AboutMe() {
    return (
        <div className="Home__Section aboutMe">
            <div className="cataSection sectionPadding"> 
                <div className="bodyContent__SI">               
                    <h2 className="SubTitle pageHa">About Me</h2>
                    <div className="bodyContentDet">
                        <p className="summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nihil totam dolores maxime delectus dicta dolorem illo a perspiciatis laboriosam numquam, beatae ratione optio? Culpa amet facere minima fugiat quo porro tenetur adipisci minus, cumque a nobis, cum ullam asperiores eveniet recusandae sit nostrum quis voluptatum id unde at nesciunt?</p>
                        <ul className="subInfo">
                            <li>
                                <h5 className="subInfoTitle">age</h5>
                                <p className="subInfoTitleA">26</p>
                            </li>
                            <li>
                                <h5 className="subInfoTitle">Residence</h5>
                                <p className="subInfoTitleA">USA</p>
                            </li>
                            <li>
                                <h5 className="subInfoTitle">Address</h5>
                                <p className="subInfoTitleA">88 Some Street, Some Town</p>
                            </li>
                            <li>
                                <h5 className="subInfoTitle">E-Mail</h5>
                                <p className="subInfoTitleA">email@gmail.com</p>
                            </li>
                            <li>
                                <h5 className="subInfoTitle">Phone</h5>
                                <p className="subInfoTitleA">+880 1742-401690</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">What I Do</h2>
                    <div className="bodyContentDet">
                        <ServicesCardList />
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">Testimonials</h2>
                    <div className="bodyContentDet">
                        <TestimonialsList />
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">Clints</h2>
                    <div className="bodyContentDet">
                        <ClientList />
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">Pricing</h2>
                    <div className="bodyContentDet">
                        <PricingTable />
                    </div>
                </div>
                <div className="bodyContent__SI">       
                    <h2 className="SubTitle">Fun Facts</h2>
                    <div className="bodyContentDet">
                        <ClientReport />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
