import React from "react";
import "./cipher.css";

const CipherPage: React.FC = () => {
    const encodedMessage = "LOPGMWRZCN LMB JKWRB DGCVOBY, OBLMS AGKM ILRL NRMKDRKMBN"; 

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const shiftedAlphabet = alphabet.split("").map((char, idx) => {
        // const shiftedIdx = (idx + 3) % 26;
        // ALGORITHMS ARE QUITE COMPLEX, LEARN YOUR DATA STRUCTURES
        // LOPGMWRZCN LMB JKWRB DGCVOBY, OBLMS AGKM ILRL NRMKDRKMBN
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
