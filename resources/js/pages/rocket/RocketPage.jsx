import React from "react";
import { useParams } from "react-router-dom";

const RocketPage = () => {
    const { id } = useParams();
    return <div>Rocket {id}</div>;
};

export default RocketPage;
