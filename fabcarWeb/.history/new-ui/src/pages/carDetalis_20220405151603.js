import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/navbar";



const CarDetails = () => {
  let params = useParams();

  const [carDetails, setCarDetails] = useState();
  const [carModel, setCarModel] = useState();
  const [carOwner, setCarOwner] = useState();
  const [carColor, setCarColor] = useState();

  const baseURL = "http://localhost:8080/api/query";

  const carData = async () => {
    const carList = await axios
      .get(`${baseURL}/${params.carId}`)
      .then((response) => {
        return response.data.response;
      });

    var temp = JSON.parse(carList.toString());
    setCarDetails(temp.make);    
    setCarModel(temp.model);    
    setCarOwner(temp.owner);    
    setCarColor(temp.color);    
  };

  useEffect(() => {
    carData();
  }, []);

  return (
    <>
    <NavbarComp/>
    <br/>
      <Container style={{border:'2px solid black', padding:'2rem'}}>
          
        <h2> Car Manufacturer {carDetails}</h2>
        <h2> Car Model {carModel}</h2>
        <h2> Car Color {carColor}</h2>
        <h2> Car Owner {carOwner}</h2>

        <button Change Owner
      </Container>      
    </>
  );
};

export default CarDetails;
