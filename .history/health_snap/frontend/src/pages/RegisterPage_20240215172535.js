import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
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
  };
  return (
    <div>
      <form onSubmit={Register}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter Username"
        />
        <input type="email" name="email" id="email" placeholder="Enter Email" />
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
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
