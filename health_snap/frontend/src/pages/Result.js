import React, { useState } from "react";
import "./Consultation.css"; 

function HealthResult () {
    return (
    <div>
            <div className="container" id="page3">
                <h1 style={{ marginLeft: "140px", marginTop: "20px" }}>HEALTH CONSULTATION RESULT</h1>
                <ul className="list" style={{ marginLeft: "20px" }}>
                    <h2 style={{ marginTop: "20px" }}>Based on your input, it is possible that you have:</h2>
                    <li style={{ marginLeft: "30px" }} className="list-item">
                        Common Cold - <span id="commonColdPercentage"></span>%
                    </li>
                    <li style={{ marginLeft: "30px" }} className="list-item">
                        Influenza - <span id="influenzaPercentage"></span>%
                    </li>
                    <li style={{ marginLeft: "30px" }} className="list-item">
                        Acute Bronchitis - <span id="acuteBronchitisPercentage"></span>%
                    </li>
                    <li style={{ marginLeft: "30px" }} className="list-item">
                        Tonsillopharyngitis - <span id="tonsillopharyngitisPercentage"></span>%
                    </li>
                    <li style={{ marginLeft: "30px" }} className="list-item">
                        Chickenpox - <span id="chickenpoxPercentage"></span>%
                    </li>
                </ul>
            </div>
    </div>
    );
};
export default HealthResult;


