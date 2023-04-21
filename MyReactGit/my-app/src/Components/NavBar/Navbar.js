import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <div className='navbar-container'>
            <div className="navbar">
                <ul>
                    <li><Link to="intro" smooth={true} offset={-100} duration={500} >Intro</Link></li>
                    <li><Link to="skills-main" smooth={true} offset={-300} duration={500} >Project</Link></li>
                    <li><Link to="social-main" smooth={true} offset={-100} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}