import React, { useEffect, useState, useContext } from "react";
import RocketCard from "../rocket/RocketCard";
import { RocketContext } from "../../context/RocketsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import RocketPopupComponent from "../rocket/RocketPopupComponent";
const RocketsComponent = () => {
    const { rockets } = useContext(RocketContext);
    const [search, setSearch] = useState("");
    const [foundRocket, setFoundRocket] = useState([]);
    const [filterRocket, setFilterRocket] = useState([]);
    const [rocketPopup, setRocketPopup] = useState(false);
    const [rocket, setRocket] = useState(null);
    useEffect(() => {
        setFoundRocket(rockets);
    }, [rockets]);
    useEffect(() => {
        if (!search) return setFoundRocket(rockets);
        const newState = rockets?.filter((rocket) => {
            return rocket.rocket_name
                .toLowerCase()
                .includes(search.toLowerCase());
        });
        setFoundRocket(newState);
    }, [search]);
    useEffect(() => {
        let newState = [];
        switch (filterRocket) {
            case "active":
                newState = rockets?.filter((rocket) => {
                    return rocket.active;
                });
                setFoundRocket(newState);
                break;
            case "first_flight":
                let idx,
                    checker = new Date();
                rockets?.map((rocket, index) => {
                    if (new Date(rocket.first_flight) < checker) {
                        checker = new Date(rocket.first_flight);
                        idx = index;
                    }
                });
                setFoundRocket([rockets[idx]]);
                break;
            case "cost_per_launch":
                let idx1,
                    checker2 = 0;
                rockets?.map((rocket, index) => {
                    if (rocket.cost_per_launch > checker2) {
                        checker2 = rocket.cost_per_launch;
                        idx1 = index;
                    }
                });
                setFoundRocket([rockets[idx1]]);
            default:
                setFoundRocket(rockets);
        }
    }, [filterRocket]);
    return (
        <>
            <div
                className={`h-screen w-screen absolute top-0 flex items-center justify-center ${
                    rocketPopup
                        ? "translate-x-0 z-50"
                        : "-translate-x-[100%] -z-50"
                } duration-300`}
            >
                <RocketPopupComponent
                    rocketPopup={rocketPopup}
                    rocket={rocket}
                    setRocketPopup={setRocketPopup}
                />
            </div>
            <section
                className={`min-h-[calc(100vh_-_5rem)] w-full z-50 flex items-center justify-center flex-col gap-10 px-4 md:px-20 ${
                    rocketPopup ? "blur-sm" : ""
                }`}
                id="rockets"
            >
                <div className="flex flex-col items-center justify-center min-h-6 gap-10 w-full">
                    <h1 className="text-white text-3xl font-bold">
                        Here are our Rockets
                    </h1>
                    <div className="flex flex-col sm:flex-row  gap-6 w-full sm:items-center sm:justify-center p-1">
                        <div className="bg-white flex px-3 items-center justify-between rounded-md h-12 w-full sm:max-w-sm">
                            <input
                                type="text"
                                name="search"
                                placeholder="Rocket name"
                                className="py-1 outline-none h-full"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                autoComplete={"off"}
                            />
                            <FontAwesomeIcon
                                icon={faSearch}
                                className={"cursor-pointer text-redish"}
                            />
                        </div>
                        <div className="flex max-w-sm items-center h-12 gap-3">
                            <label
                                htmlFor="filter"
                                className="text-white w-20 text-lg font-bold"
                            >
                                Filter by:
                            </label>{" "}
                            <select
                                name="filter"
                                className="w-40 h-full rounded-md px-2 outline-none"
                                onChange={(e) =>
                                    setFilterRocket(e.target.value)
                                }
                            >
                                <option value="">Filter Rocket</option>
                                <option value="active">Active</option>
                                <option value="first_flight">
                                    First Flight
                                </option>
                                <option value="cost_per_launch">
                                    Expensive
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center gap-10 z-20 flex-wrap bg-opacity-40">
                    {foundRocket.map((rocket) => {
                        return (
                            <div
                                onClick={() => {
                                    setRocketPopup(true);
                                    setRocket(rocket);
                                }}
                                key={rocket?.id}
                            >
                                <RocketCard
                                    description={rocket?.description}
                                    images={rocket?.flickr_images}
                                    name={rocket?.rocket_name}
                                />
                            </div>
                        );
                    })}
                    {foundRocket.length < 1 && (
                        <div className="h-20">
                            <h1 className="text-white text-xl font-medium">
                                No rocket named{" "}
                                <span className="text-redish underline underline-offset-2">
                                    {search}
                                </span>{" "}
                                found.
                            </h1>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default RocketsComponent;
