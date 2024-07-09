import { Link } from 'react-router-dom';
import "./Button.css";
import { toBlock } from '@babel/types';


export default function Button({ name, to }) {
  return (
    <Link className="btn" to={to}>
      {name}
    </Link>
  )
}