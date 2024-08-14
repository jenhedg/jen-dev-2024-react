import Logo from '../Logo/Logo.js'
import Nav from '../Nav/Nav.js';

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo/>
      <Nav />
    </div>
  );
}