import { Link } from 'react-router-dom';
import "./Button.css";


export default function Button({ name }) {
  return (
    <Link className="btn" to="/resume">
      {name}
    </Link>
  )
}