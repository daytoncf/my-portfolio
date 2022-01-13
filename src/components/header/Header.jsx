import React from 'react';
import './header.css';

const Header = (props) => {

    let titleClass = (props.darkMode) ? 'header__content_title' : 'header__content_title-light'
    return (
        <div className="header section__padding">
            <div className='header__content'>
                <h1 className={titleClass}>Hi, I'm Dayton. I'm a college student learning fullstack development.</h1>
                <p>Learn more about what I've done below.</p>
                <span className="header__chevron" />
            </div>
            
        </div>
    )
}

export default Header
