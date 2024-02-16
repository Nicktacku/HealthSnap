import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="text" name="first name" placeholder="Enter first name" />
        <input type="text" name="last name" placeholder="Enter last name" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
