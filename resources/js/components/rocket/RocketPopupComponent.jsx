import React, { useEffect, useRef } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RocketPopupComponent = ({ rocket, setRocketPopup }) => {
    const PopupElement = useRef();
    useEffect(() => {
        const clickEvent = () => {
            if (!PopupElement.current?.contains(event?.target))
                setRocketPopup(false);
        };
        document.addEventListener("mousedown", clickEvent);
        return () => document.removeEventListener("mousedown", clickEvent);
    }, [PopupElement]);
    const details = [
        {
            name: "Company",
            value: rocket?.company,
        },
        {
            name: "Cost/Launch",
            value: `\$${new Intl.NumberFormat("es-us").format(
                rocket.cost_per_launch
            )}`,
        },
        {
            name: "Country",
            value: rocket?.country,
        },
        {
            name: "First Flight",
            value: rocket?.first_flight,
        },
    ];
    return (
        <div
            className="relative w-full md:w-4/5 h-4/5 bg-slate-200 p-3 px-4 rounded-md flex flex-col items-center gap-3"
            ref={PopupElement}
        >
            <button
                className="bg-redish px-2 p-1 rounded-md top-2 right-2 absolute flex items-center justify-center "
                onClick={() => setRocketPopup(false)}
            >
                <FontAwesomeIcon
                    icon={faClose}
                    className={`text-md text-white`}
                />
            </button>
            <div>
                <h1 className="text-2xl font-medium">{rocket?.rocket_name}</h1>
            </div>
            <div>
                {/* {rocket?.flickr_images[0] && (
                    <img
                        src={rocket?.flickr_images[0]}
                        alt="image"
                        className="rounded-md md:max-w-2xl"
                    />
                )} */}
            </div>
            <div className="md:w-1/2 text-center font-light">
                <p>{rocket?.description}</p>
            </div>
            <div className="flex gap-5 flex-wrap">
                <div className="flex gap-2 items-center ">
                    <span className="font-semibold">Status:</span>
                    <span
                        className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${
                            rocket?.active ? "bg-green-500" : "bg-redish"
                        }`}
                    >
                        {rocket?.active ? "Active" : "Inactive"}
                    </span>
                </div>
                {details.map((detail) => {
                    return (
                        <div
                            className="flex gap-2 items-center"
                            key={detail.name}
                        >
                            <span className="font-semibold">
                                {detail.name}:
                            </span>
                            <span className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {detail.value}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RocketPopupComponent;
