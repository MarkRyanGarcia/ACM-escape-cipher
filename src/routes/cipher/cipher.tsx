import React from "react";
import "./cipher.css";

const CipherPage: React.FC = () => {
    const encodedMessage = "Wklv lv d whvw phvvdjh."; // Encoded message with Caesar cipher (shift = 3)

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = alphabet.split("").map((char, idx) => {
        const shiftedIdx = (idx + 3) % 26;
        return { original: alphabet[shiftedIdx], encoded: char };
    });

    return (
        <div className="cipher-container">
            <h1 className="cipher-title">Cryptic Message</h1>
            <p className="cipher-intro">Here's a cryptic message encoded with the Caesar cipher (shift = 3):</p>

            <div className="cipher-message">
                <h2>{encodedMessage}</h2>
            </div>

            <h3 className="cipher-subtitle">Decoding Sheet</h3>
            <p className="cipher-instructions">
                Use the table below to decode the message. Each letter in the cryptic message is shifted **3 places forward** in the alphabet. Shift it **backward** to decode.
            </p>

            <table className="cipher-table">
                <thead>
                    <tr>
                        <th>Encoded</th>
                        <th>Original</th>
                    </tr>
                </thead>
                <tbody>
                    {shiftedAlphabet.map(({ encoded, original }, index) => (
                        <tr key={index}>
                            <td>{encoded}</td>
                            <td>{original}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <p className="cipher-hint">
                Hint: Non-alphabetic characters (like spaces or punctuation) stay the same.
            </p>
        </div>
    );
};

export default CipherPage;
