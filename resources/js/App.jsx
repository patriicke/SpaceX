import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages";
import { RocketContext } from "./context/RocketsContext";
import RocketPage from "./pages/rocket/RocketPage";
import NotFoundPage from "./pages/404/NotFoundPage";

const App = () => {
    const [rockets, setRockets] = useState([]);
    return (
        <RocketContext.Provider value={{ rockets, setRockets }}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/rocket/:id" element={<RocketPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </RocketContext.Provider>
    );
};

export default App;
