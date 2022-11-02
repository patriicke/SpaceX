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
            {/* <div className=>{rocket.rocket_name}</div> */}
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
            <div></div>
        </div>
    );
};

export default RocketPopupComponent;
