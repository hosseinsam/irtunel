import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { ProfileData } from './profileData';
import imgee from '../assets/irstick2.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
 
  const showSidebar = () => setSidebar(!sidebar);

  const [profileNav, setprofileNav] = useState(false);
  const showprofileNav = () => setprofileNav(!profileNav);
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Link to='#' rel='icon' >
          <img className='logo' src={imgee} />
          </Link>
          <Link to='#' className='p-menu-bars'>
            <AiIcons.AiOutlineUser onClick={showprofileNav} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' :'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className={ profileNav ? 'p-nav-menu active' : 'p-nav-menu'}>
          <ul className='p-nav-menu-items' onClick={showprofileNav}>
            <li className='p-navbar-toggle'>
              <Link to='#' className='p-menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {ProfileData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;