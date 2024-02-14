import React, { useState } from "react";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<HomePage />} />
      <Route path="/Consultation" element={<Consultation />} />
      <Route path="/Feedback" element={<Feedback />} />
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
