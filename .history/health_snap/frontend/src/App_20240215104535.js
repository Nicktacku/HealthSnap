import React from "react";
import "./css/App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Consultation from "./pages/Consultation";
import Feedback from "./pages/Feedback";
import LoginPage from "./pages/LoginPage";
import Records from "./pages/Records";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/Consultation" element={<Consultation />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Record" element={<Records />} />
      </Route>

      <Route path="/Login" element={<LoginPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
