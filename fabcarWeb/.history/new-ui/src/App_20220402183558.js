import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
