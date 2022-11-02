import React from "react";
const Banner = ({ showBanner, setShowBanner }) => {
    return (
        <div
            className={`bg-gray-100 absolute top-20 w-screen z-50 ${
                showBanner ? "translate-x-0" : "-translate-x-[100%]"
            } duration-500`}
        >
            <div className="px-4 py-12">
                <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-12">
                    <div className="lg:flex justify-center gap-8 items-stretch">
                        <div>
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/headfons.png"
                                alt="headfons"
                                className="w-full object-fill h-full  lg:block md:hidden block"
                            />
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/headfons_bg.png"
                                alt="headfons_bg"
                                className="lg:hidden md:block hidden"
                            />
                        </div>
                        <div className="mt-4">
                            <p className="lg:text-4xl md:text-3xl text-3xl font-semibold text-gray-800">
                                New Home For Your Gadgets
                            </p>
                            <div className="flex md:gap-5 gap-2.5 mt-10">
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/earbuds.png"
                                    alt="earbuds"
                                    className="md:block hidden"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/earbuds_sm.png"
                                    alt="earbuds_sm"
                                    className="lg:hidden md:hidden block"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mouse.png"
                                    alt="mouse"
                                    className="md:block  hidden"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mouse_sm.png"
                                    alt="mouse_sm"
                                    className="lg:hidden md:hidden block"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hedphone.png"
                                    alt="hedphone"
                                    className="md:block  hidden"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/hedphones_sm.png"
                                    alt="hedphones"
                                    className="lg:hidden md:hidden block"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/watch.png"
                                    alt="watch"
                                    className="md:block hidden"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/watch_sm.png"
                                    alt="watch_sm"
                                    className="lg:hidden md:hidden block"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/iphone.png"
                                    alt="iphone"
                                    className="md:block  hidden"
                                />
                                <img
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/iphone_sm.png"
                                    alt="iphone_sm"
                                    className="lg:hidden md:hidden block"
                                />
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-gray-800 text-base font-medium lg:max-w-[199px] w-full px-3 py-2 text-white mt-11 hover:bg-gray-700 transition duration-300 ease-in-out rounded-md">
                                    50% off
                                </button>
                                <button
                                    className="bg-blue-500 text-base font-medium lg:max-w-[199px] w-full px-3 py-2 text-white mt-11 hover:bg-blue-700 transition duration-300 ease-in-out rounded-md"
                                    onClick={() => setShowBanner(false)}
                                >
                                    Not Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
