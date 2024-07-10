import { Link } from 'react-router-dom';
import "./Button.css";

export default function Button({ name, to }) {
  return (
    <Link className="btn" to={to}>
      {name}
    </Link>
  )
}