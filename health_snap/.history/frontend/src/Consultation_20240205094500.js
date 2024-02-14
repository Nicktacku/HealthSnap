import React, { useState, useEffect } from "react";
import "./Consultation.css"; //Import CSS file in Consultation
import { Link } from "react-router-dom";

function Consultation() {
  var symptoms = [];
  const [page1, setPage1] = useState("Block");
  const [page2, setPage2] = useState("None");
  const [page3, setPage3] = useState("None");
  const [datas, setData] = useState("");
  const [proceed, setProceed] = useState(false);

  console.log(symptoms.length);

  const toPage2 = () => {
    setPage1("None");
    setPage2("Block");
  };
  const toPage3 = async () => {
    setPage2("None");
    setPage3("Block");

    const response = await fetch("http://127.0.0.1:8000/symptom/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: symptoms }),
    });

    const data = await response.json();
    setData(data);
  };

  const addValue = (e) => {
    var symptom = e.target.value;
    if (e.target.checked) {
      console.log(symptom);
      symptoms.push(symptom);
      console.log(symptoms);
      setProceed(true);
    } else {
      var symptomIndex = symptoms.indexOf(symptom);
      symptoms.splice(symptomIndex, 1);
      if (symptoms.length > 0) {
        setProceed(true);
      } else {
        setProceed(false);
      }
    }
  };

  return (
    <div>
      <div className="container" id="page1" style={{ display: `${page1}` }}>
        <div className="image">
          <img src={require("./assets/S1.gif")} alt="" />
        </div>
        <h1 className="acustom-font1">Health Consultation - Page 1</h1>
        <label for="healthConcern" className="custom-font">
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
            <input
              type="checkbox"
              id="Headache"
              value="u5"
              onChange={addValue}
            />
            Headache
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Muscle pain"
              value="u6"
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
              value="to10"
              onChange={addValue}
            />
            Swollen/enlarged tonsils or Red tonsils or Light spots on tonsils
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Hard skin"
              value="ch3"
              onChange={addValue}
            />
            Hard skin
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Itchy skin"
              value="ch5"
              onChange={addValue}
            />
            Itchy skin
          </label>
          <label className="font-size-change">
            <input
              type="checkbox"
              id="Skin rash and redness"
              value="ch7"
              onChange={addValue}
            />
            Skin rash and redness
          </label>
          <label className="font-size-change">
            <input
              value="ch8"
              onChange={addValue}
              type="checkbox"
              id="Small pockets of fluid beneath the skin or Red lesions filled with pus"
            />
            Small pockets of fluid beneath the skin or Red lesions filled with
            pus
          </label>
        </div>
        {proceed ? (
          <button onClick={toPage3}>Next</button>
        ) : (
          <button onClick={toPage3} disabled={true}>
            Please choose one sickness to proceed
          </button>
        )}
      </div>

      <div className="container" id="page3" style={{ display: `${page3}` }}>
        <h1 style={{ marginLeft: "140px", marginTop: "20px" }}>
          HEALTH CONSULTATION RESULT
        </h1>
        <ul className="list" style={{ marginLeft: "20px" }}>
          <h2 style={{ marginTop: "20px" }}>
            Based on your input, it is possible that you have:
          </h2>
          {Object.keys(datas).map((data) => (
            <li style={{ marginLeft: "30px" }} className="list-item">
              {data} {datas[data]}
              <span id=""></span>%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Consultation;
