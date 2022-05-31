import React, { useState, useEffect } from "react";
import Navbar from "./../components/navbar";
import Card from "./../components/card";
import Model from "./../components/model";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";
import svgImage from "./../scattered-forcefields.svg";

function Home() {
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
          <Card id={item.Key} owner={item.Record.owner} model={item.Record.model} />
        </Col>
      );
    });

    setCarList(aa);
  };

  useEffect(() => {
    carData();
  }, []);

const imageBac = {
    backgroundImage:svgImage,
    // height:'100vh',
    //     marginTop:'-70px',
    //     fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
}

  return (
    <div style={imageBac}>
      <Navbar />
      <Container>
          {/* <Image src={svgImage} alt="svg Image"/> */}
          
        <Row style={{ paddingTop: "40px" }}>
          <Col sm={3}>
            <Model fetchCarData={carData}/>
          </Col>
          <Col sm={9}>
            <Row>{carList}</Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
