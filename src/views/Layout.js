import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex-1 flex flex-col justify-between">
            <Outlet />
            <nav className="py-4 px-6 grid grid-cols-2 place-items-center gap-2 bg-primary text-white font-mono sm:flex sm:justify-around">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
                <NavLink to="/Timeline">Experience</NavLink>
                <NavLink to="/Contact" >Contact</NavLink>
            </nav>
        </div>
    );
};

export default Layout;