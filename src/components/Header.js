// import {useState} from 'react'
import '../App.css';
import logo from '../pictures/logo transparent.png';
import menu from '../pictures/Menu-Icon.png';
import home from '../pictures/Vector-2.png';
import bag from '../pictures/bag.png';
import log from '../pictures/logout.png'
export function Header() {

  return (
    <>
    <div className="header">
     <div className="nav-menu">
      <ul className='nav-menu-list'>
        <li className='logo'><img src={logo} alt='logo'/></li>
        <li><img src={menu} alt='menu'/></li>
        <li><img src={home} alt='home'/></li>
        <li><img src={bag} alt='bag'/></li>
      </ul>
      <div className='log'><img src={log} alt='log'/></div>
      </div>
    </div>
    
    </>
  );
}


