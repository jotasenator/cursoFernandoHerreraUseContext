import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className='navbar-brand'
                to='/'

            >
                UseContext
            </Link>

            <div className="navbar-collapse" >
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/about"
                    >
                        About
                    </NavLink>
                </div>
            </div>


        </nav>
    )
}
