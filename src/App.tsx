import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CipherPage from "./routes/cipher/cipher.tsx";
import HomePage from "./routes/homepage/homepage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cipher" element={<CipherPage />} />
            </Routes>
        </Router>
    );
};

export default App;