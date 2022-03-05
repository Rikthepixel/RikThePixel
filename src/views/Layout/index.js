import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";

const PageLink = ({ className, ...props }) => {
    return <NavLink className="bg-secondary hover:bg-dark active:bg-accent active:text-zinc-600 current-page:bg-active text-center p-2 rounded-lg w-full md:basis-full " {...props} />;
};

const Layout = () => {
    return (
        <div className="layout-container">
            <div className="flex-1 flex flex-col overflow-auto">
                <Outlet />
            </div>
            <nav aria-label="primary" role="navigation" className="text-white py-4 px-6 grid grid-cols-[1fr_1fr] place-items-center gap-2 sm:flex sm:justify-around">
                <PageLink to="/">Home</PageLink>
                <PageLink to="/Projects">Projects</PageLink>
                <PageLink to="/Timeline">Timeline</PageLink>
                <PageLink to="/Contact" >Contact</PageLink>
            </nav>
        </div>
    );
};

export default Layout;