import { Link } from 'react-router-dom';
import "./Sidebar.css";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-wrap">
        <h1 className="logo">jh<span className="logo-slash">/</span>dev ❤</h1>
      </div>
      <nav className="nav">
        <ul className="navList">
          <li className="navList-item">
            <Link to="/resume">/ Resume</Link>
          </li>
          <li className="navList-item">/ Contact</li>
          <li className="navList-item">/ Plants!</li>
        </ul>
      </nav>
    </div>
  );
}