import Logo from '../Logo/Logo.js'
import DeskNav from '../DeskNav/DeskNav.js'

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Logo/>
      <DeskNav />
    </div>
  );
}