import React, { useEffect, useRef } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";

const PageLink = ({ className, ...props }) => {
    return <NavLink className="bg-secondary hover:bg-dark hover:active:bg-light hover:active:text-zinc-600 current-page:bg-active text-center p-2 rounded-lg w-full md:basis-full shadow-lg" {...props} />;
};

const Layout = () => {
    const outletContainerRef = useRef();
    const navbarContainerRef = useRef();
    useEffect(() => {
        if (!navbarContainerRef.current || !outletContainerRef.current) return null;

        outletContainerRef.current.style.paddingBottom = navbarContainerRef.current.offsetHeight + "px";
        const navObserver = new ResizeObserver(
            (entries) => outletContainerRef.current.style.paddingBottom = entries[0].target.offsetHeight + "px"
        );
        navObserver.observe(navbarContainerRef.current);

        const outletObserver = new ResizeObserver((entries) => {
            const target = entries[0].target;
            navbarContainerRef.current.style.paddingRight = target.offsetWidth - target.clientWidth + "px";
        });
        outletObserver.observe(outletContainerRef.current);

        return () => {
            navObserver.disconnect();
            outletObserver.disconnect();
        };
    }, [navbarContainerRef.current, outletContainerRef.current]);

    return (
        <div className="layout-container">
            <div
                ref={outletContainerRef}
                className="flex-1 flex flex-col overflow-y-auto"
            >
                <Outlet />
            </div>
            <div
                ref={navbarContainerRef}
                className="absolute bottom-0 w-full text-white"
            >
                <nav
                    aria-label="primary"
                    role="navigation"
                    className="py-4 px-6 grid grid-cols-[1fr_1fr] place-items-center gap-2 sm:flex sm:justify-around"
                >
                    <PageLink to="/">Home</PageLink>
                    <PageLink to="/Projects">Projects</PageLink>
                    <PageLink to="/Timeline">Timeline</PageLink>
                    <PageLink to="/Contact" >Contact</PageLink>
                </nav>
            </div>
        </div>
    );
};

export default Layout;