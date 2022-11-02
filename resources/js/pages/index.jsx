import React, { useContext, useEffect } from "react";
import AboutComponent from "../components/home/AboutComponent";
import ContactsComponent from "../components/home/ContactsComponent";
import RocketsComponent from "../components/home/RocketsComponent";
import ServicesComponent from "../components/home/ServicesComponent";
import WelcomeComponent from "../components/home/WelcomeComponent";
import { RocketContext } from "../context/RocketsContext";
import { api } from "./../api";
import NavbarComponent from "./../components/navbar/NavbarComponent";

const HomePage = () => {
    const { rockets, setRockets } = useContext(RocketContext);
    const getRockets = async () => {
        try {
            const request = await api.get("/");
            const response = request.data;

            setRockets(response);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        // getRockets();
    }, []);
    return (
        <div className="h-screen w-screen min-h-screen overflow-auto scroll-smooth">
            <NavbarComponent />
            <WelcomeComponent />
            <RocketsComponent />
            <ServicesComponent />
            <AboutComponent />
            <ContactsComponent />
        </div>
    );
};

export default HomePage;
