
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "./Nav.css";


export default function Nav() {
  const [navMobileActiveClass, setNavMobileActiveClass] = useState('nav')
  const [burgerActiveClass, setBurgerActiveClass] = useState('burger')

  const toggleNavMobileActiveClass = () => {
    if (navMobileActiveClass === "nav") {
      setNavMobileActiveClass("nav active")
    } else {
      setNavMobileActiveClass("nav")
    }
  }

  const toggleBurgerActiveClass = () => {
    if (burgerActiveClass === "burger") {
      setBurgerActiveClass("burger active")
    } else {
      setBurgerActiveClass("burger")
    }
  }

  return (
    <div
      onClick={() => { toggleNavMobileActiveClass() }}
      className={navMobileActiveClass}
    >
      <button
        onClick={() => { toggleBurgerActiveClass() }}
        className={burgerActiveClass}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="nav-list">
        <li className="navList-item">
          <Link to="/resume">/ Resume</Link>
        </li>
        <li className="navList-item">/ Contact</li>
      </ul>
    </div >
  );
}