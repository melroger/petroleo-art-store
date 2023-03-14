import { NavLink } from 'react-router-dom';
import "./FiltersBar.css";

export default function FiltersBar() {
    return (
        <div className="filtersBar">
            <div className='wrapper'>
                <ul>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to="/">Todos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to='/category/asientos'>Asientos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to='/category/esculturas'>Esculturas
                        </NavLink>
                        </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to="/category/lamparas">Lamparas
                        </NavLink>
                    </li>
                </ul>                 
            </div>
           
        </div>

    )
}