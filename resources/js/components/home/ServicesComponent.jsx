import React from "react";
import { Slide } from "react-reveal";
const ServicesComponent = () => {
    return (
        <section
            className="h-[calc(100vh_-_5rem)] min-h-[calc(100vh_-_5rem)] w-full"
            id="services"
        >
            <Slide bottom>
                <div className="w-full h-full flex items-center  justify-center gap-10 z-20 flex-col bg-opacity-40">
                    <div className="flex flex-col items-center w-full gap-8">
                        <h1 className="font-bold text-3xl md:text-5xl w-3/5 md:w-[30%] text-center capitalize text-white">
                            {"SPACEX SERVICES".toUpperCase()}
                        </h1>
                        <p className="text-white md:text-xl max-w-2xl text-center">
                            SpaceX's rocket is carrying the classified USSF-44
                            mission for the U.S. Space Force, which is also the
                            first operational national security mission for
                            Falcon Heavy. SpaceX continues to launch its Falcon
                            series of rockets at a high rate, with Tuesday's
                            mission marking the company's record 50th launch
                            this year.
                        </p>
                        <p className="text-white md:text-xl max-w-2xl text-center">
                            The company was founded in 2002 by Elon Musk to
                            revolutionize space transportation, with the
                            ultimate goal of making life multiplanetary. In
                            2010, SpaceX became the first commercial company in
                            history to send a spacecraft into orbit and return
                            it safely to Earth.
                        </p>
                    </div>
                </div>
            </Slide>
        </section>
    );
};

export default ServicesComponent;
