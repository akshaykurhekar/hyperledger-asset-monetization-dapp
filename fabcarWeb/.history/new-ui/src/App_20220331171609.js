import React, {useState, useEffect} from 'react';
import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function App() {
  const carList = [{ name: "akshay" }, { name: "anuj" }, { name: "sham" },{ name: "Raj" }];

  const baseURL = "http://localhost:8080/api/query/CAR1";

  const [carLists, setCarList] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
        console.log(response);
      //setCarList(response.data);
    });
  }, []);

  const carData = async () =>{
      const carList = await axios.get(baseURL).then((response) => {
        return response.data
      //setCarList(response.data);
    });
  }

  return (
    <>
      <Navbar />
      <Container>
        <Row style={{ paddingTop: "40px" }}>
          <Col sm={3}>
            <Model />
          </Col>
          <Col sm={9}>
            <Row>
              {carList.map((item, idx) => {
                return (
                  <Col sm={4} key={idx}>
                    <Card name={item.name} />
                  </Col>
                );
              })}
            </Row>        
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
