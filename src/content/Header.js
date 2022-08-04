import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import NavigateNextOutlined from '@material-ui/icons/NavigateNextOutlined';
import NavigateBeforeOutlined from '@material-ui/icons/NavigateBeforeOutlined';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="App__Header">
            <nav className="MainMenu">
                <ul>
                    <li><Link to='/'><HomeIcon className="NavMenuIcon selected" /></Link></li>
                    <li><Link to='/about'><PermIdentityIcon className="NavMenuIcon" /></Link></li>
                    <li><Link to='/resume'><SchoolOutlinedIcon className="NavMenuIcon" /></Link></li>
                    <li><Link to='/portfolio'><BusinessCenterIcon className="NavMenuIcon" /></Link></li>
                    <li><Link to='/blog'><BookOutlinedIcon className="NavMenuIcon" /></Link></li>
                    <li><Link to='/contact'><ContactsOutlinedIcon className="NavMenuIcon" /></Link></li>
                </ul>
                <ul>
                    <li><Link to='#'><NavigateNextOutlined className="NavMenuIcon" /></Link></li>
                    <li><Link to='#'><NavigateBeforeOutlined className="NavMenuIcon" /></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
