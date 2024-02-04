import React, { useState } from "react";
import "./Consultation.css"; //Import CSS file in Consultation

function ConsultationP1 () {
      return (
        <div>
          <div className="container" id="page1">
            <div className="image">
              <img src={require("./assets/S1.gif")} alt=""/>
            </div>
            <h1  className="acustom-font1">Health Consultation - Page 1</h1>
            <label for="healthConcern" class="custom-font">Check all the possible symptoms that you feel</label>
           
            <button onclick="showPage2()">Proceed</button>
          </div>
        </div>
  );
};
    
export default ConsultationP1;