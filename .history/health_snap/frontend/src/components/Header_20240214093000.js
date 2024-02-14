import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);
  let { navigateNow, setNavigateNow } = useState(true);
  const navigate = useNavigate();

  const goToHome = () => {
    if (navigateNow) {
      navigate("/");
      setNavigateNow(false);
    }
  };

  const resetNavitgate = () => {
    setNavigateNow(true);
  };

  return (
    <div>
      <header className="App-header" id="appheader">
        <header class="header">
          <NavLink to="/" className="logo">
            {" "}
            <img src="Images\SLogo.png" />
          </NavLink>

          <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#aboutus">About Us</a>
            <a href="#services">Services</a>
            <a href="#doctors">Developers</a>
            <a href="#review">Feedback</a>

            {user ? (
              <p onClick={logoutUser}>Logout</p>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}

            {user ? goToHome : resetNavigate}
          </nav>

          <div id="menu-btn" class="fas fa-bars"></div>
        </header>
      </header>

      <Outlet />
    </div>
  );
};

export default Header;
