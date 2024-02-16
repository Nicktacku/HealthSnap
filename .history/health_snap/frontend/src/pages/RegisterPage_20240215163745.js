import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  let Register = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        patient_name: e.target.patientName.value,
        patient_notes: e.target.notes.value,
      }),
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
        />
        <input
          type="text"
          name="first name"
          id="first_name"
          placeholder="Enter first name"
        />
        <input
          type="text"
          name="last name"
          id="last_name"
          placeholder="Enter last name"
        />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
