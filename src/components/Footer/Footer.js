import { Link } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <ul className="links">
          <li>
            <Link className="link" to="/">Codepen</Link>
          </li>
          <li>
            <Link className="link" to="/">Github</Link>
          </li>
          <li>
            <Link className="link" to="mailto: jennifernhf@gmail.com">
              Email
            </Link>
          </li>
        </ul>
        <div className="footer-legal">
          <p>&copy;2024 All materials. Jennifer Hedgcock</p>
        </div>
      </div>
    </footer>
  );
}