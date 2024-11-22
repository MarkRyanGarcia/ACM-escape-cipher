import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage: React.FC = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Congratulations! You found the hidden cipher!</h1>
            <p className="homepage-backstory">
                Below is the super secret cipher designed by the worlds brightest minds. It is the best encryption algorithm in the world.
            </p>
            
            <Link to="/cipher" className="homepage-link">
                Reveal Algorithm
            </Link>
        </div>
    );
};

export default HomePage;
