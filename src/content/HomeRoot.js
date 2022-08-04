import React from 'react'
import './HomeRoot.css'
import HomePage from './HomePage'
import profilepic from './profilepic.jpg'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Route, Link } from 'react-router-dom'
import Header from './Header';
import AboutMe from './AboutMe';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';

function HomeRoot() {
    return (
        <div className="App__Root">
            <div className="MainContent">
                <div className="profileInfo">
                    <img src={profilepic} alt="" className="profileImages"/>
                    <div className="profileInfoText">
                        <h1 className="userName">Rafeen Mustak.</h1>
                        <h2 className="userTitle">Web Designer</h2>
                    </div>
                    <ul className="userSocialLink">
                        <li><Link><LinkedInIcon /></Link></li>
                        <li><Link><FacebookIcon /></Link></li>
                        <li><Link><InstagramIcon /></Link></li>
                        <li><Link><TwitterIcon /></Link></li>
                    </ul>
                    <div className="actionBtn">
                        <a href="#" className="actionDownloadBtn">Download CV</a>
                    </div>
                    <span className="copyRightsText">© 2020 All rights reserved.</span>
                </div>
            </div>
            <div className="NavMenu">
                <Header />
            </div>
            <div className="SectionContent">
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/blog'>
                    <Blog />
                </Route>
                <Route path='/portfolio'>
                    <Portfolio />
                </Route>
                <Route path='/resume'>
                    <Resume />
                </Route>
                <Route path='/about'>
                    <AboutMe />
                </Route>
                <Route path='/'>
                    <HomePage/>
                </Route>
            </div>
        </div>
    )
}

export default HomeRoot
