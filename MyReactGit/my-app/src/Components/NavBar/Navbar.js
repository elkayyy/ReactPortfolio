import './Navbar.css';
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
      <div className="navbar">
        <ul>
            <li><Link to="/">Intro</Link></li>
            <li><Link to="/">Skills</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
        </div>
    )
}