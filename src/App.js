import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LogementPage from "./pages/LogementPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/LogementPage/:id" element={<LogementPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App