import logo from "url:/logo.png"
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header className="header">
            <img id="logo" src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
                
                
            </nav>
        </header>
    )
}

export default Header;