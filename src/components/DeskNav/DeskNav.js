
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import "./DeskNav.css";

export default function Nav() {

  return (
      <ul className="nav-list">
        <li className="navList-item">
          <Link to="/resume">/ Resume</Link>
        </li>
        <li className="navList-item">/ Contact</li>
      </ul>
  );
}