import React, { useState, useEffect } from "react";
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
      <Navbar />
      <Container>
        <Row style={{ paddingTop: "40px" }}>
          <Col sm={3}>
            <Model fetchCarData={}/>
          </Col>
          <Col sm={9}>
            <Row>{carList}</Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
