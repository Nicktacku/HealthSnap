import React, { useState } from "react";
import "./Consultation.css"; //Import CSS file in Consultation
import { Link } from "react-router-dom";

function ConsultationP1() {
  const [page1, setPage1] = useState("Block");
  const [page2, setPage2] = useState("None");

  const toPage2 = () => {
    setPage1("None");
    setPage2("Block");
  };
  const toPage3 = () => {
    setPage2("None");
  };
  return (
    <div>
      <div className="container" id="page1" style={{ display: `${page1}` }}>
        <div className="image">
          <img src={require("./assets/S1.gif")} alt="" />
        </div>
        <h1 className="acustom-font1">Health Consultation - Page 1</h1>
        <label for="healthConcern" class="custom-font">
          Check all the possible symptoms that you feel
        </label>

        <button onClick={toPage2}>Proceed</button>
      </div>

      {/* Start of page 2 */}
      <div className="container" id="page2" style={{ display: `${page2}` }}>
        <h1 className="acustom-font1">Health Consultation - Page 2</h1>
        <div id="symptomsSection">
          <h2>Symptoms</h2>
          <br></br>
          <label className="font-size-change">
            <input type="checkbox" id="Blocked nose or Runny nose" />
            Blocked nose or Runny nose
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Cough with mucus or without mucus" />
            Cough with mucus or without mucus
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Fatigue" />
            Fatigue
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Flow of tears" />
            Flow of tears
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Fever" />
            Fever
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Headache" />
            Headache
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Muscle pain" />
            Muscle pain
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Sternutation" />
            Sternutation
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Diarrhea" />
            Diarrhea
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Feel like vomiting" />
            Feel like vomiting
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="P,S or I" />
            Pain, scratchiness or irritation of the throat
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Headache or Joint pain" />
            Headache or Joint pain
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Poor appetite" />
            Poor appetite
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Chest discomfort" />
            Chest discomfort
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Difficulty breathing" />
            Difficulty breathing
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Whistling breathing" />
            Whistling breathing
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Bad breath" />
            Bad breath
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="E or S" />
            Enlarged or swollen lymph nodes or Ear pain
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Poor appetite or Weight loss" />
            Poor appetite or Weight loss
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Strained voice or Loss of voice" />
            Strained voice or Loss of voice
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Swollen/enlarged T or R" />
            Swollen/enlarged tonsils or Red tonsils or Light spots on tonsils
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Hard skin" />
            Hard skin
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Itchy skin" />
            Itchy skin
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Skin rash and redness" />
            Skin rash and redness
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Small pockets of fluid beneath the skin or Red lesions filled with pus"
            />
            Small pockets of fluid beneath the skin or Red lesions filled with
            pus
          </label>
        </div>
        <button onclick={toPage3}>Next</button>
      </div>
    </div>
  );
}

export default ConsultationP1;
