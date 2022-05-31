import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";


function App() {
  const [carList, setCarList] = useState([]);

  const baseURL = "http://localhost:8080/api/queryallcars";

  const carData = async () => {
    const carList = await axios.get(`${baseURL}`).then((response) => {
      return response.data.response;
    });
    var temp = JSON.parse(carList.toString());

    const aa = temp.map((item, idx) => {
      //console.log(item.Record.color);
      return (
        <Col sm={4} key={idx}>
          <Card name={item.Record.model} />
        </Col>
      );
    });

    setCarList(aa);
  };

  useEffect(() => {
    carData();
  }, []);

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
