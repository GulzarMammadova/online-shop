// import {useState} from 'react'
import '../App.css';
// import { Link } from "react-router-dom"

import logo from '../pictures/logo transparent.png';
import menu from '../pictures/menu_icon.png';
import home from '../pictures/shop_icon.png';
import bag from '../pictures/bag_icon.png';
import log from '../pictures/logout_black.png'

export function Header() {

  return (
    <>
    <div className="header">
     <div className="nav-menu">
      <ul className='nav-menu-list'>
        <li className='logo'><img src={logo} alt='logo'/></li>
        <li className='menu'><img src={menu} alt='menu'/></li>
        <li className='shop'><img src={home} alt='home'/></li>
        <li className='bag-icon'><img src={bag} alt='bag'/></li>
      </ul>
      <div className='log'><img src={log} alt='log'/></div>
      </div>
    </div>
    
    </>
  );
}


