import React from "react";
import RocketCard from "../rocket/RocketCard";
import { useContext } from "react";
import { RocketContext } from "../../context/RocketsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const RocketsComponent = () => {
    const { rockets } = useContext(RocketContext);
    return (
        <section
            className="min-h-[calc(100vh_-_5rem)] w-full z-50 flex items-center justify-center flex-col gap-10"
            id="rockets"
        >
            <div className="w-full px-24 gap-5 flex flex-col">
                <h1 className="text-white text-2xl font-bold">
                    Here are our Rockets
                </h1>
                <div className="w-full flex justify-between  gap-6 h-12">
                    <div className="bg-white flex px-3 items-center justify-between rounded-md">
                        <input
                            type="text"
                            name="search"
                            placeholder="Rocket name"
                            className="py-1 outline-none"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={"cursor-pointer text-redish"}
                        />
                    </div>
                    <div className="flex w-full items-center h-full gap-3">
                        <label
                            htmlFor="filter"
                            className="text-white w-20 text-lg font-bold"
                        >
                            Filter by:
                        </label>{" "}
                        <select
                            name="filter"
                            className="w-40 h-full rounded-md px-2 outline-none"
                        >
                            <option value="">Filter Rocket</option>
                            <option value="active">Active</option>
                            <option value="first_flight">First Flight</option>
                            <option value="type">Type</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center  justify-center gap-10 z-20 flex-wrap bg-opacity-40">
                {rockets.map((rocket) => {
                    return (
                        <RocketCard
                            key={rocket?.id}
                            description={rocket?.description}
                            images={rocket?.flickr_images}
                            name={rocket?.rocket_name}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default RocketsComponent;
