import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../css/App.css";
import GIFSignup from "../assets/E4.gif";

const RegisterPage = () => {
  const navigate = useNavigate();
  let [error, setError] = useState(false);

  let Register = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    console.log(response.status);
    if (response.status === 500) {
      setError(true);
    }

    // navigate("/");
  };
  return (
    <div>
      {error && (
        <div class="alert alert-danger" role="alert">
          A simple danger alert—check it out!
        </div>
      )}
      <form onSubmit={Register}>
      <img src={GIFSignup} alt="GIF for Signup Page"/>
      <h2>Sign-Up</h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          class ="boxEnterUsername"
        />
        <input type="email" name="email" id="email" placeholder="Enter Email" class ="boxEnterUsername"/>
        
        <input
          type="text"
          name="first name"
          id="first_name"
          placeholder="Enter First Name"
          class ="boxEnterUsername"
        />
        <input
          type="text"
          name="last name"
          id="last_name"
          placeholder="Enter Last Name"
          class ="boxEnterUsername"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          class ="boxEnterUsername"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
