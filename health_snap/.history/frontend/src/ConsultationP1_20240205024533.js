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

  const addValue = (e) => {
    if (e.target.checked) {
      console.log(e.target.value);
    }
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
            <input
              type="checkbox"
              id="Blocked nose or Runny nose"
              value="u3"
              onChange={addValue}
            />
            Blocked nose or Runny nose
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Cough with mucus or without mucus"
              value="u2"
              onChange={addValue}
            />
            Cough with mucus or without mucus
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Fatigue"
              value="u1"
              onChange={addValue}
            />
            Fatigue
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Flow of tears"
              value="cc4"
              onChange={addValue}
            />
            Flow of tears
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Fever" value="u4" onChange={addValue} />
            Fever
          </label>
          <label className="font-size-change">
            <input type="checkbox" id="Headache" value="" onChange={addValue} />
            Headache
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Muscle pain"
              value="u5"
              onChange={addValue}
            />
            Muscle pain
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Sternutation"
              value="u7"
              onChange={addValue}
            />
            Sternutation
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Diarrhea"
              value="i2"
              onChange={addValue}
            />
            Diarrhea
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Feel like vomiting"
              value="u9"
              onChange={addValue}
            />
            Feel like vomiting
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="P,S or I"
              value="u10"
              onChange={addValue}
            />
            Pain, scratchiness or irritation of the throat
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Headache or Joint pain"
              value="u5"
              onChange={addValue}
            />
            Headache or Joint pain
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Poor appetite"
              value="u8"
              onChange={addValue}
            />
            Poor appetite
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Chest discomfort"
              value="ab1"
              onChange={addValue}
            />
            Chest discomfort
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Difficulty breathing"
              value="ab3"
              onChange={addValue}
            />
            Difficulty breathing
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Whistling breathing"
              value="ab10"
              onChange={addValue}
            />
            Whistling breathing
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Bad breath"
              value="to1"
              onChange={addValue}
            />
            Bad breath
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="E or S"
              value="to2"
              onChange={addValue}
            />
            Enlarged or swollen lymph nodes or Ear pain
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Poor appetite or Weight loss"
              value="u8"
              onChange={addValue}
            />
            Poor appetite or Weight loss
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Strained voice or Loss of voice"
              value="to9"
              onChange={addValue}
            />
            Strained voice or Loss of voice
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Swollen/enlarged T or R"
              value=""
              onChange={addValue}
            />
            Swollen/enlarged tonsils or Red tonsils or Light spots on tonsils
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Hard skin"
              value=""
              onChange={addValue}
            />
            Hard skin
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Itchy skin"
              value=""
              onChange={addValue}
            />
            Itchy skin
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Skin rash and redness"
              value=""
              onChange={addValue}
            />
            Skin rash and redness
          </label>
          <label className="font-size-change">
            <input
              value=""
              onChange={addValue}
              ut
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
