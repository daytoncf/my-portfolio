import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header section__padding">
            <div className='header__content'>
                <h1 className='header__content-title'>Hi, I'm Dayton. I'm a college student learning fullstack development.</h1>
                <p>Learn more about what I've done below.</p>
                <a className="header__chevron" href='#projects' />
            </div>
            
        </div>
    )
}

export default Header
