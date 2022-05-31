import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col, Button } from "react-bootstrap";

import Home from "./pages/home";
import CarDetails from "./pages/carDetalis";
import './App.css'

function App() {

  return (
    <>
     <Routes>
        <Route path="/carDetails/:carId" exact element={ <CarDetails/> } />
        <Route path="/" exact element={ <Home/> } />
      </Routes>
    </>
  );
}

export default App;
