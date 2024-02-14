import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { NavLink } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthToken] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);
  let [navigate, setNavigate] = useState(false);

  useEffect(() => {
    navigateTo("/");
  }, [navigate]);

  let navigateTo = () => {
    console.log("detected");
    <NavLink to="/" />;
  };

  let LoginUser = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/token/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      setNavigate(true);
    } else {
      console.log("Something Went Wrong");
    }
  };

  let logoutUser = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    <NavLink to="/login" />;
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/token/refresh/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthToken(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    LoginUser: LoginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 1000 * 60 * 4);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
