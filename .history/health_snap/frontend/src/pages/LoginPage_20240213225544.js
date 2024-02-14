import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  let { LoginUser, user } = useContext(AuthContext);

  return (
    <div>
      {!user && (
        <form onSubmit={LoginUser}>
          <input type="text" name="username" placeholder="Enter Username" />
          <input type="password" name="password" placeholder="Enter Password" />
          <NavLink to="/">
            <input type="submit" />
          </NavLink>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
