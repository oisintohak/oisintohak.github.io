import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">OT</NavLink>
                    <ul className="navbar-nav 
                    ">
                        <li className="nav-item px-2 text-uppercase">
                            <NavLink className="nav-link " activeClassName="active" to="/" exact>About</NavLink>
                        </li>
                        <li className="nav-item border-start border-end px-2 text-uppercase">
                            <NavLink className="nav-link " activeClassName="active" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item px-2 text-uppercase">
                            <NavLink className="nav-link " activeClassName="active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
