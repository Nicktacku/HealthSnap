import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "../css/App.css";
import GIFSignup from "../assets/S3.gif";

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
    if (response.status === 400) {
      setError(true);
    } else if (response.status === 201) {
      setError(false);
    }

    navigate("/");
  };
  return (
    <div>
      {error && (
        <div class="alert alert-danger" role="alert">
          Enter longer password
        </div>
      )}
      <form onSubmit={Register}>
      
      <h2>Sign-Up</h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
          style={{ width: "500px", fontSize: "20px", padding: "10px", border: '2px solid black'}}
        />
        <br></br>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Enter Email" 
          class ="boxEnterUsername"
          />
        <br></br>
        <br></br>
        <input
          type="text"
          name="first name"
          id="first_name"
          placeholder="Enter First Name"
          style={{ width: "500px", fontSize: "20px", padding: "10px", border: '2px solid black'}}
        />
        <br></br>
        <input
          type="text"
          name="last name"
          id="last_name"
          placeholder="Enter Last Name"
          style={{ width: "500px", fontSize: "20px", padding: "10px", border: '2px solid black'}}
        />
        <br></br>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          class ="boxEnterPassword"
        />
        <br></br>
        <br></br>
        <input type="Submit" class="boxsubmitbtn" 
        style= {{width: '150px', height: '50px', margin: '10px 5px 10px 170px', border: '2px solid #000'}}/>
      </form>
    </div>
  );
};

export default RegisterPage;
