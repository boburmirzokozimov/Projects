import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) => isActive ? 'active-link' : '';

const Layout = () => {
    return (
        <>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <a className="brand-logo">Poke'Times</a>
                    <ul className="right">
                        <li><NavLink to="/" className={setActive}>Home</NavLink></li>
                        <li><NavLink to="/posts" className={setActive}>Posts</NavLink></li>
                        <li><NavLink to="/contact" className={setActive}>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
            <main className="container">
                <Outlet />
            </main>

            <footer className="center bottom-sheet">2022</footer>
        </>
    )
};

export default Layout;
