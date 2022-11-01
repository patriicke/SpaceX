import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center text-xl flex-col gap-4">
            <h1 className="text-red-500">404 Page NotFound</h1>
            <Link
                to={"/"}
                className={"underline text-blue-500 underline-offset-2"}
            >
                Go Home
            </Link>
        </div>
    );
};

export default NotFound;
