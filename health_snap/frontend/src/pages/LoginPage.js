import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import "../css/App.css";
import GIFLogin from "../assets/S3.gif";

const LoginPage = () => {
  let { LoginUser, user } = useContext(AuthContext);
  useEffect(() => {
  }, [LoginUser]);

  return (
    <div class="box" style = {{width:"450px", margin:"auto"}}>
      {!user && (
        <form onSubmit={LoginUser}  style={{margin: "auto"}}>
          <img src={GIFLogin} alt="GIF for Login Page" style= {{width:"450px", margin:"auto"}}/>
          <br/>
          <h2>Login</h2>
          <input type="text" name="username" placeholder="Enter Username" style={{ width: "500px", fontSize: "20px", padding: "10px", border: '2px solid black'}}/>
          <br></br>
          <input type="password" name="password" placeholder="Enter Password" class ="boxEnterPassword" />
          <br></br>
          <br></br>
          <input type="Submit" class="boxsubmitbtn" style={{width: '150px', height: '50px', margin: '10px 5px 10px 170px', border: '2px solid #000' }}/>
        </form>
      )}
      <br></br>
      <br></br>
      <RegisterPage />
    </div>
  );
};

export default LoginPage;
