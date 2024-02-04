import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUserMd,
  faHeartbeat,
  faStar,
  faNotesMedical,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import Consult from "./Consult";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route element={<Consult />} />
    </Route>
  )
);

function App() {
  return;
  <div className="App"></div>;
}
export default App;
