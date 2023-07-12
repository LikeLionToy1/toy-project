import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/NavTab.css';

const NavTab = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className={({isActive})=>isActive?"selected":"nav-link"}>Feed</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/artist" className={({isActive})=>isActive?"selected":"nav-link"}>Artist</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/media" className={({isActive})=>isActive?"selected":"nav-link"}>Media</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/live" className={({isActive})=>isActive?"selected":"nav-link"}>LIVE</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;

// style={{color:"white"}}