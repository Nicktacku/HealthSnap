import React, { useState } from "react";
import "../css/feedback.css";

let getRecords = async () => {
  let response = await fetch("http://127.0.0.1:8000/records/");

  let data = await response.json();

  console.log(data);
};

getRecords();

const Records = () => {
  return (
    <>
      <div class="image-section">
        <img src="ER3.gif" alt="HealthSnap Image" />
      </div>
      <form id="recordForm" class="record-form">
        <h2 class="heading">
          ADD NEW RECORD <span>+</span>
        </h2>
        <label for="patientName">Patient Name:</label>
        <input type="text" id="patientName" name="patientName" required />
        <br /> <br />
        <label for="notes">Patient Notes:</label>
        <textarea
          id="notes"
          name="notes"
          rows="1"
          required
          style={({ height: "16" }, { width: "24" })}
        ></textarea>
        <br />
        <br />
        <button type="submit" class="btn">
          Add Record{" "}
        </button>
      </form>
      <br />
      <br />
      <br />
      <br />
      <h2 class="heading">Past Records</h2>

      <br />
    </>
  );
};

export default Records;
