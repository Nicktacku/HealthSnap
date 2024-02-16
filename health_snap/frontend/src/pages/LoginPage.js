import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import "../css/App.css";
import GIFLogin from "../assets/E3.gif";

const LoginPage = () => {
  let { LoginUser, user } = useContext(AuthContext);
  useEffect(() => {
    console.log("gumana");
  }, [LoginUser]);

  return (
    <div>
      {!user && (
        <form onSubmit={LoginUser}>
          <img src={GIFLogin} alt="GIF for Login Page"/>
          <h2>Log-In</h2>
          <input type="text" name="username" placeholder="Enter Username" class ="boxEnterUsername" />
          <input type="password" name="password" placeholder="Enter Password" class ="boxEnterPassword" />
          <br></br>
          <input type="submit"/>
        </form>
      )}
      <br></br>
      <br></br>
      <RegisterPage />
    </div>
  );
};

export default LoginPage;
