import React, { useContext, useEffect } from "react";
import HomePageComponent from "../components/home/WelcomeComponent";
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
        getRockets();
    }, []);
    console.log(rockets);
    return (
        <div className="h-screen w-screen min-h-screen overflow-auto">
            <NavbarComponent />
            <HomePageComponent />
        </div>
    );
};

export default HomePage;
