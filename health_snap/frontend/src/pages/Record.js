import React, { useState, useEffect } from "react";
import "../css/feedback.css";
import { jwtDecode } from "jwt-decode";
import robot from "../assets/S3.gif"

const Records = () => {
  let [records, setRecords] = useState([]);
  let [refresh, setRefresh] = useState(false);

  let getRecords = async () => {
    let response = await fetch("http://127.0.0.1:8000/records/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        
      }),
    });

    let data = await response.json();

    setRecords(data);
  };

  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  let giveRecord = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/records/give", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        patient_name: e.target.patientName.value,
        patient_notes: e.target.notes.value,
      }),
    });
    e.target.patientName.value = "";
    e.target.notes.value = "";

    setRefresh(true);
  };

  useEffect(() => {
    getRecords();
  }, [refresh]);

  return (
    <>
      <div class="image-section">
        <img src={robot} alt="HealthSnap Image" style= {{width:"450px", marginLeft:"580px"}} />
      </div>
      <form id="recordForm" class="record-form" onSubmit={giveRecord}>
        <h2 class="heading">
          ADD NEW RECORD <span>+</span>
        </h2>
        <label for="patientName" style={{ fontSize: '20px', marginLeft: '550px'}}>Record Name:</label>
        <input type="text" id="patientName" name="patientName" required style={{ width: "500px", fontSize: "10px", padding: "10px", border: '2px solid black',margin: '10px 5px 10px 550px'}}/>
        <br /> <br />
        <label for="notes" style={{ fontSize: '20px', marginLeft: '550px'}}>Notes:</label>
        <textarea
          id="notes"
          name="notes"
          rows="1"
          required
          style={{ width: "500px", fontSize: "10px", padding: "10px", border: '2px solid black',margin: '10px 5px 10px 550px'}}
        ></textarea>
        <br />
        <br />
        <button type="submit" class="btn1 "  >
          Add Record
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <h2 class="heading">Past Records</h2>
      {
      records.length !== 0 ? records.map((record) => {
        return (
          <div class="card" style={{ width: "500px", fontSize: "10px", padding: "10px", border: '2px solid black',margin: '10px 5px 10px 550px'}}>
          <div class="card-body" style={{ height: "500px" }}>
            <h3 class="card-title">{record.patient_name}</h3>

            <p class="card-text truncate-height">
              <br></br>
              {record.patient_notes}
            </p>
          </div>
          </div>
        );
      }): null}

      <br />
    </>
  );
};

export default Records;
