import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Home from "./pages/home";
import CarDetails from "./pages/carDetalis";


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="carDeta" element={ <CarDetails/> } />
      </Routes>
    </>
  );
}

export default App;
