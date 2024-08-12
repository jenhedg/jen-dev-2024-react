import { Link } from 'react-router-dom';
import DeskNav from '../DeskNav/DeskNav.js'

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-wrap">
        <Link className="logo-link" to="/">
          <h1 className="logo">jh<span className="logo-slash">/</span>dev ❤</h1>
        </Link>
      </div>
      <DeskNav />
    </div>
  );
}