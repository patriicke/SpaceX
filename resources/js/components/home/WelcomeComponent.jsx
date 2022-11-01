import React from "react";
import Bg_2 from "./../../assets/gif/gif_2.gif";
const HomePageComponent = () => {
    return (
        <section
            className="h-[calc(100vh_-_5rem)] min-h-[calc(100vh_-_5rem)] w-full"
            id="welcome"
        >
            <div className="h-screen w-screen absolute top-0 -z-50 bg-black flex items-center justify-center">
                <img
                    src={Bg_2}
                    alt="Space"
                    className="w-fit lg:w-full lg:h-full"
                    draggable={false}
                />
            </div>
            <div className="w-full h-full flex items-center  justify-center gap-10 z-20 flex-col bg-opacity-40">
                <div className="flex flex-col items-center w-full gap-8">
                    <h1 className="font-bold text-5xl w-[30%] text-center capitalize text-white">
                        {"Rockets from SPACEX".toUpperCase()}
                    </h1>
                    <p className="text-white text-xl max-w-2xl text-center">
                        The train rocketed through the tunnel. The spacecraft
                        rocketed into outer space. Her novel rocketed to the top
                        of the best-seller list. Their album rocketed up the
                        charts.
                    </p>
                    <a
                        className="bg-redish text-white flex items-center justify-center gap-3 px-14 py-4 mt-7 rounded-md font-bold text-xl hover:bg-red-800 duration-300"
                        href="#rockets"
                    >
                        Explore Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HomePageComponent;
