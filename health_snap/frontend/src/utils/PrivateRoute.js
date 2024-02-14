import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = () => {
  let { user } = useContext(AuthContext);

  return <div>{!user ? <Navigate to="/login" /> : <Outlet />}</div>;
};

export default PrivateRoute;
