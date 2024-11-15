import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div>
            {/* <!-- Navigation Bar --> */}
            <nav className="navbar">
                <div className="navbar-brand">ShelfSpace</div>
                <div id="hamburger"
                    className={`hamburger ${isActive ? 'active hamburger' : 'hamburger'}`}
                    onClick={handleToggle}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id="nav-menu"
                    className={`nav-menu ${isActive ? 'active navbar-nav' : 'navbar-nav'}`}
                >
                    <li><Link to="">Home</Link></li>
                    {/* <li><Link to="">Features</Link></li>
                    <li><Link to="">Contact</Link></li> */}
                    <li><Link to="/login">Login</Link></li>
                    <div>
                    <Link to={"/signup"} className='header-reg-btn'>Start Now</Link>
                    </div>
                </ul>
            </nav>
        </div>
    );
}
