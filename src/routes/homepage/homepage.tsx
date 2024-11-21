import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage: React.FC = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Congratulations! You found the hidden cipher!</h1>
            <p className="homepage-backstory">
                Below is the super secret hashing function designed by the worlds brightest minds. It is the best hashing algorithm in the world.
            </p>
            
            <Link to="/cipher" className="homepage-link">
                Reveal Cipher Cheat Sheet
            </Link>
        </div>
    );
};

export default HomePage;
