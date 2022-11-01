import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
        <div className="h-20 w-full flex px-4 xl:px-80 items-center justify-between">
            <div className="flex items-center justify-center gap-3">
                <img
                    src={Logo}
                    alt="Logo"
                    className="w-10 rounded-full bg-white "
                />
                <h1 className="text-white font-bold text-2xl">SpaceX</h1>
            </div>
            <div className="items-center justify-center gap-8 hidden md:flex">
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

            <FontAwesomeIcon
                icon={faBarsStaggered}
                className={`text-white text-2xl cursor-pointer md:hidden`}
            />
        </div>
    );
};

export default NavbarComponent;
