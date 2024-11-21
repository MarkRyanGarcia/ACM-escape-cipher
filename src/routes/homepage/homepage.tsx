import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage: React.FC = () => {
    return (
        <div className="homepage-container">
            <h1 className="homepage-title">Congratulations! You found the hidden cipher!</h1>
            <p className="homepage-backstory">
                Below is the super secret hashing function designed by the most intelligent AI Systems at TechCorp. It was designed to be of upmost complexity that not even the worlds brightest minds could decipher on their own. With this sacred treasure, you will be able to uncover one of TechCorp's biggest secrets.
            </p>
            
            <Link to="/cipher" className="homepage-link">
                Reveal Cipher Cheat Sheet
            </Link>
        </div>
    );
};

export default HomePage;