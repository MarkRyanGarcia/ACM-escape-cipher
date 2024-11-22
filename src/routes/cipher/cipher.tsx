import React from "react";
import "./cipher.css";

const CipherPage: React.FC = () => {
    const encodedMessage = "KSIBM DGMSBM IBNX"; // Encoded message with Caesar cipher (shift = 3)
    // UNDER CORNER DESK
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = alphabet.split("").map((char, idx) => {
        // const shiftedIdx = (idx + 3) % 26;
        const encrypted = "YEMCWBOJDQUARSLGFTNVZPIKXH"
        // return { original: alphabet[shiftedIdx], encoded: char };
        return { original: encrypted[idx], encoded: char };
    });

    return (
        <div className="cipher-container">
            <h1 className="cipher-title">Top Secret Encryption Algorithm</h1>

            <div className="cipher-message">
                <h2>{encodedMessage}</h2>
            </div>

            <h3 className="cipher-subtitle">Decoding Sheet</h3> 
            <p>
                Use the table below to decrypt the above key.
            </p>
            <table className="cipher-table">
                <thead>
                    <tr>
                        <th>Encrypted</th>
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
                Made with 💗 by Markypoo
            </p>
        </div>
    );
};

export default CipherPage;
