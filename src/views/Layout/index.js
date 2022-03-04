import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
    return (
        <div className="layout-container">
            <Outlet />
            <nav aria-label="primary" role="navigation" className="layout-main-nav py-4 px-6 grid grid-cols-2 place-items-center gap-2 bg-primary font-mono sm:flex sm:justify-around">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Timeline">Experience</NavLink>
                <NavLink to="/Contact" >Contact</NavLink>
            </nav>
        </div>
    );
};

export default Layout;