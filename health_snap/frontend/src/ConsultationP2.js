import React, { useState } from "react";
import "./Consultation.css"; //Import CSS file in Consultation

function ConsultationP1 () {
      return (
    <div>
        <div class="container" id="page2" style="display: none;">
        <h1>Health Consultation - Page 2</h1>
        <div id="symptomsSection">
        <h2>Symptoms</h2>
        <label><input type="checkbox" id="cough"/>Cough</label>
        <label><input type="checkbox" id="colds"/>Colds</label>
        <label><input type="checkbox" id="diarrhea"/>Diarrhea</label>
        <label><input type="checkbox" id="fever"/>Fever</label>
        <label><input type="checkbox" id="fatigue"/>Fatigue</label>
        <label><input type="checkbox" id="dizziness"/>Dizziness</label>
        <label><input type="checkbox" id="soreThroat"/>Sore Throat</label>
        <label><input type="checkbox" id="nausea"/>Nausea</label>
        <label><input type="checkbox" id="chills"/>Chills</label>
        </div>
        <button onclick="showPage3()">Next</button>
    </div>
  </div>
  );
};
    
export default ConsultationP1;