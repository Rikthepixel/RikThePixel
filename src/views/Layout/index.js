import React, { useEffect, useRef } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";

const PageLink = ({ className, ...props }) => {
    return <NavLink className="bg-secondary hover:bg-dark hover:active:bg-accent hover:active:text-zinc-600 current-page:bg-active text-center p-2 rounded-lg w-full md:basis-full " {...props} />;
};

const Layout = () => {
    const outletContainerRef = useRef();
    const navbarRef = useRef();
    useEffect(() => {
        if (!navbarRef.current || !outletContainerRef.current) return null;

        outletContainerRef.current.style.paddingBottom = navbarRef.current.offsetHeight + "px";
        const observer = new ResizeObserver((entries) => {
            outletContainerRef.current.style.paddingBottom = entries[0].target.offsetHeight + "px";
        });
        observer.observe(navbarRef.current);

        return () => {
            observer.disconnect();
        };
    }, [navbarRef.current, outletContainerRef.current]);

    return (
        <div className="layout-container">
            <div
                ref={outletContainerRef}
                className="flex-1 flex flex-col overflow-auto"
            >
                <Outlet />
            </div>
            <nav
                ref={navbarRef}
                aria-label="primary"
                role="navigation"
                className="absolute bottom-0 w-full text-white py-4 px-6 grid grid-cols-[1fr_1fr] place-items-center gap-2 sm:flex sm:justify-around"
            >
                <PageLink to="/">Home</PageLink>
                <PageLink to="/Projects">Projects</PageLink>
                <PageLink to="/Timeline">Timeline</PageLink>
                <PageLink to="/Contact" >Contact</PageLink>
            </nav>
        </div>
    );
};

export default Layout;