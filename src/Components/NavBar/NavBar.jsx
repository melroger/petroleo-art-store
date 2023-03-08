
import { NavLink } from 'react-router-dom';
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="navBar">
            <ul className="categories">
                <li><NavLink to='/category/asientos'>asientos</NavLink></li>
                <li><NavLink to='/category/esculturas'>esculturas</NavLink></li>
                <li><NavLink to="/category/lamparas">lamparas</NavLink></li>
            </ul>
        </div>
    )
}