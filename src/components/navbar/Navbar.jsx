import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenu3Line, RiMoonFill } from 'react-icons/ri';
import logo from '../../assets/book_logo.svg';
import './navbar.css';

const Menu = (props) => {
  let buttonColor = (props.darkMode) ? 'navbar__links_item-button' : 'navbar__links_item-button-light';

  return(
    <>
      <button onClick={props.darkModeToggle} className={buttonColor}><RiMoonFill className='navbar__links_item' alt='Dark Mode Toggle' /></button>
      <Link to="/about" className='navbar__links_item'> About</Link>
      <Link to="/" className='navbar__links_item'> Projects</Link>
    </>
  );
}

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  let logoColor = (props.darkMode) ? 'navbar__logo-dark' : 'navbar__logo-light';
  let menuColor = (props.darkMode) ? 'navbar__menu-container navbar__menu-container-dark scale-up-center' : 'navbar__menu-container navbar__menu-container-light scale-up-center';
    return (
        <section className="navbar">
          <img className={logoColor} src={logo} alt="logo"/>
          <div className="navbar__links">
            <Menu darkMode={props.darkMode} darkModeToggle={props.dmToggle}/>
          </div>
          <div className="navbar__menu">
            {toggleMenu 
              ? <RiCloseLine color={(props.darkMode) ? "#eee" : "101019"} size={27} onClick={() => setToggleMenu(false)}/>
              : <RiMenu3Line color={(props.darkMode) ? "#eee" : "101019"} size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className={menuColor}>
                <Menu darkMode={props.darkMode} darkModeToggle={props.dmToggle}/>
              </div>
            )}
          </div>
        </section>
    );
}

export default Navbar;
