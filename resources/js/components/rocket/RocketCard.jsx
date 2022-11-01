import React from "react";
import Slide from "react-reveal/Slide";
const RocketCard = ({ images, description, name }) => {
    return (
        <Slide bottom loop>
            <div className="max-w-[25em] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-[41rem] duration-200 ease-in-out flex flex-col justify-between hover:border-redish">
                <div>
                    <a href="#">
                        <img
                            className="rounded-t-lg h-[18em] w-full"
                            src={images[0]}
                            alt=""
                        />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {name}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden overflow-ellipsis">
                            {description}
                        </p>
                    </div>
                </div>
                <div className="p-5">
                    <a
                        href="#"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Explore
                        <svg
                            aria-hidden="true"
                            className="ml-2 -mr-1 w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </Slide>
    );
};

export default RocketCard;
