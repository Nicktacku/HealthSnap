import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <header class="header">
          <a href="#" class="logo">
            {" "}
            <img src="Images\SLogo.png" />
          </a>

          <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#aboutus">About Us</a>
            <a href="#services">Services</a>
            <a href="#doctors">Developers</a>
            <a href="#review">Feedback</a>
          </nav>

          <div id="menu-btn" class="fas fa-bars"></div>
        </header>
      </header>

      <Outlet />
    </div>
  );
};

export default Header;
