import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenu3Line, RiMoonFill } from 'react-icons/ri';
import logo from '../../assets/book_logo.svg';
import './navbar.css';

const Menu = (props) => {
  return(
    <>
      <button onClick={props.darkModeToggle}><RiMoonFill className='navbar__links_item' alt='Dark Mode Toggle' /></button>
      <Link to="/about" className='navbar__links_item'> About</Link>
      <Link to="/articles" className='navbar__links_item'> Articles</Link>
      <Link to="/" className='navbar__links_item'> Projects</Link>
    </>
  )
}

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
          <img className="navbar__logo" src={logo} alt="logo"/>
          <div className="navbar__links">
            <Menu darkModeToggle={props.toggleDM} />
          </div>
          <div className="navbar__menu">
            {toggleMenu 
              ? <RiCloseLine color="#eee" size={27} onClick={() => setToggleMenu(false)}/>
              : <RiMenu3Line color="#eee" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className='navbar__menu-container scale-up-center'>
                <Menu />
              </div>
            )}
          </div>
        </div>
    );
}

export default Navbar;
