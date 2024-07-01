import "./Sidebar.css";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-wrap">
        <h1 className="logo">jh<span className="logo-slash">/</span>dev ❤</h1>
      </div>
      <nav className="nav">
        <ul className="navList">
          <li className="navList-item">/ Resume</li>
          {/* <li className="navList-item">/ About</li> */}
          <li className="navList-item">/ Contact</li>
          <li className="navList-item">/ Plants!</li>
          {/* <li className="navList-item">/ LinkedIn</li>
          <li className="navList-item">/ Github</li>
          <li className="navList-item">/ Codepen</li> */}
        </ul>
      </nav>
    </div>
  );
}