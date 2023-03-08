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
                            to='/category/cirugias'>Cirugías
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to='/category/tratamientos'>Tratamientos
                        </NavLink>
                        </li>
                    <li>
                        <NavLink
                            className={({isActive}) => isActive ? 'active' : 'inactive'}
                            to="/category/alimentacion">Alimentación
                        </NavLink>
                    </li>
                </ul>                 
            </div>
           
        </div>

    )
}