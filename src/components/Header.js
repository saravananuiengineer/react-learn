import logo from "url:/logo.png"
import {Link} from "react-router-dom"
import useInternetStatus from "../utils/useInternetStatus"
import {useSelector} from 'react-redux'
const Header = () => {
    const online = useInternetStatus();
    const cartItem = useSelector((store)=>store.cart.items);
    return (
        <header className="flex py-10 px-10 justify-between shadow-lg">
            <img id="logo" className="h-6" src={logo} alt="logo" />
            <nav>
                <ul  className="flex items-center">
                    <li className="px-4">{(online) ? `Online  🟢` : `offline 🔴`}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart {cartItem.length} items</Link></li>
                    <li className="px-4"><a href="#">Log in</a></li>
                    <li><a href="#">Sign up</a></li>
                </ul>
                
                
            </nav>
        </header>
    )
}

export default Header;