import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo/favicon.ico";
const NavbarComponent = () => {
    const [currentLink, setCurrentLink] = useState(0);
    const links = [
        {
            title: "Welcome",
            href: "#welcome",
        },
        {
            title: "Rockets",
            href: "#rockets",
        },
        {
            title: "Services",
            href: "#services",
        },
        {
            title: "About",
            href: "#about",
        },
        {
            title: "Contact Us",
            href: "#contact",
        },
    ];
    return (
        <div className="h-20 w-full flex px-80 items-center justify-between">
            <div className="flex items-center justify-center gap-3">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-10 rounded-full bg-white "
                />
                <h1 className="text-white font-bold text-2xl">SpaceX</h1>
            </div>
            <div className="flex items-center justify-center gap-8">
                {links.map((link, index) => (
                    <a
                        href={link.href}
                        key={index}
                        className={`${
                            currentLink == index ? "text-redish" : "text-white"
                        } hover:text-redish duration-500`}
                        onClick={() => setCurrentLink(index)}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NavbarComponent;
