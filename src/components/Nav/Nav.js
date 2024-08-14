import { Link } from 'react-router-dom';

// import "./nav.css";

export default function nav() {
  return (
    <ul className="nav">
        <li className="nav-item">
        <Link to="/resume">Resume</Link>
        </li>
        <li className="nav-item">Contact</li>
    </ul>
  );
}