import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import HomePage from "./pages";
import Rocket from "./pages/rocket/Rocket";
import { RocketContext } from "./context/RocketsContext";

const App = () => {
    const [rockets, setRockets] = useState([]);
    return (
        <RocketContext.Provider value={{ rockets, setRockets }}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/rocket/:id" element={<Rocket />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </RocketContext.Provider>
    );
};

export default App;
