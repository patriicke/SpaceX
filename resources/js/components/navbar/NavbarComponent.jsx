import { faBarsStaggered, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
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
    const [navbar, setNavbar] = useState(false);
    const navbarElement = useRef();
    useEffect(() => {
        const clickEvent = () => {
            if (!navbarElement.current?.contains(event?.target))
                setNavbar(false);
        };
        document.addEventListener("mousedown", clickEvent);
        return () => document.removeEventListener("mousedown", clickEvent);
    }, [navbarElement]);
    return (
        <>
            <div
                className={`absolute h-screen w-2/5 bg-black border-r-2 ${
                    navbar ? "translate-x-0" : "-translate-x-full"
                } duration-200 z-50`}
                ref={navbarElement}
            >
                <div className="h-screen w-full relative">
                    <div
                        className="cursor-pointer bg-redish px-2 p-1 rounded-md top-2 right-2 absolute flex items-center justify-center"
                        onClick={() => setNavbar(false)}
                    >
                        <FontAwesomeIcon
                            icon={faClose}
                            className={`text-xl text-white`}
                        />
                    </div>
                    <div className="items-center justify-center gap-8 flex flex-col p-3 py-5">
                        {links.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className={`${
                                    currentLink == index
                                        ? "text-redish"
                                        : "text-white"
                                } hover:text-redish duration-500`}
                                onClick={() => setCurrentLink(index)}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-20 w-full flex px-4 xl:px-80 items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-10 rounded-full bg-white "
                    />
                    <h1 className="text-white font-bold text-2xl">SpaceX</h1>
                </div>
                <div className="items-center justify-center gap-8 flex">
                    {links.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            className={`${
                                currentLink == index
                                    ? "text-redish"
                                    : "text-white"
                            } hover:text-redish duration-500 hidden md:block`}
                            onClick={() => {
                                setCurrentLink(index);
                                setNavbar(false);
                            }}
                        >
                            {link.title}
                        </a>
                    ))}
                    <span onClick={() => setNavbar(true)}>
                        <FontAwesomeIcon
                            icon={faBarsStaggered}
                            className={`text-white text-2xl cursor-pointer md:hidden`}
                        />
                    </span>
                </div>
            </div>
        </>
    );
};

export default NavbarComponent;
