import React from 'react';
import '../styles/Header.css';

import Group1 from '../files/Group1.svg';
import icon1 from '../files/Icons/icon1.svg';
import icon2 from '../files/Icons/icon2.svg';
import icon3 from '../files/Icons/icon3.svg';
import icon4 from '../files/Icons/icon4.svg';


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Group1} alt="likelion" />
        <span className="artist">MinHyeok</span>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <img src={icon1} alt="menu1" />
          </li>
          <li>
            <img src={icon2} alt="menu2" />
          </li>
          <li>
            <img src={icon3} alt="menu3" />
          </li>
          <li>
            <img src={icon4} alt="menu4" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
