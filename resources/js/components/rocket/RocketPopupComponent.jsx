import React, { useEffect, useRef } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RocketPopupComponent = ({ rocket, setRocketPopup }) => {
    console.log(rocket);
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
            className="relative w-4/5 h-4/5 bg-slate-200 p-3 rounded-md"
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
            <div>{rocket.rocket_name}</div>
        </div>
    );
};

export default RocketPopupComponent;
