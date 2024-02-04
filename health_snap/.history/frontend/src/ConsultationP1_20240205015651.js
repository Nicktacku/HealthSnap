import React, { useState } from "react";
import "./Consultation.css"; //Import CSS file in Consultation

function ConsultationP1 () {
      const [display, setDisplay] = useState("Block")
      return (
        <div>
          <div className="container" id="page1" style={display: `${display}`}>
            <div className="image">
              <img src={require("./assets/S1.gif")} alt=""/>
            </div>
            <h1  className="acustom-font1">Health Consultation - Page 1</h1>
            <label for="healthConcern" class="custom-font">Check all the possible symptoms that you feel</label>
           
            <Link><button>Proceed</button></Link>
          </div>
        </div>
  );
};
    
export default ConsultationP1;