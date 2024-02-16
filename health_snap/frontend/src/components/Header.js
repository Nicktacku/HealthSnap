import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/ADETLOGO.png";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let [navigateNow, setNavigateNow] = useState(true); // Use array destructuring here
  const navigate = useNavigate();

  const goToHome = () => {
    if (navigateNow) {
      console.log("in goto home", navigateNow);
      navigate("/");
      setNavigateNow(false);
    }
  };

  const resetNavigate = () => {
    console.log("in reset navigate", navigateNow);
    if (!navigateNow) {
      setNavigateNow(true);
    }
  };

  return (
    <div>
      <header className="App-header" id="appheader">
        <header class="header">
          <NavLink to="/" className="logo">
            {" "}
            <img src={Logo} />
          </NavLink>

          <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#aboutus">About Us</a>
            <a href="#services">Services</a>
            <a href="#doctors">Developers</a>
            <a href="#review">Feedback</a>

            {user ? (
              <a href="#" style={{color: "#ff55b0"}} onClick={logoutUser}> Logout</a>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}

            {user ? goToHome() : resetNavigate()}
          </nav>

          <div id="menu-btn" class="fas fa-bars"></div>
        </header>
      </header>

      <Outlet />
    </div>
  );
};

export default Header;
