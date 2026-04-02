import logo from "url:/logo.png"
const Header = () => {
    return (
        <header className="header">
            <img id="logo" src={logo} alt="logo" />
            <nav>
                <ul>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
                
                
            </nav>
        </header>
    )
}

export default Header;