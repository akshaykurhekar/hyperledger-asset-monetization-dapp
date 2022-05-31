import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const CarDetails = () => {
  let params = useParams();

  const [carDetails, setCarDetails] = useState();

  const baseURL = "http://localhost:8080/api/query";

  const carData = async () => {
    const carList = await axios
      .get(`${baseURL}/${params.carId}`)
      .then((response) => {
        return response.data.response;
      });

    var temp = JSON.parse(carList.toString());
    setCarDetails(temp.make);    
  };

  useEffect(() => {
    carData();
  }, []);

  return (
    <>
      <Container>
          <br/>
        <h1> Car Manufacturer {carDetails}</h1>
        <h1> Car Model {carModel}</h1>
        <h1> Car Color {carColor}</h1>
        <h1> Car Owner {carDetails}</h1>
      </Container>      
    </>
  );
};

export default CarDetails;
