import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


const CarDetails = ()=>{

    let params = useParams();
    console.log(params);

    const [carList, setCarList] = useState();

  const baseURL = "http://localhost:8080/api/query";

  const carData = async () => {
    const carList = await axios.get(`${baseURL}/${params.carId}`).then((response) => {
      return response.data.response;
    });
    var temp = JSON.parse(carList.toString());
    setCarDetails()
    console.log(temp);
  };

  useEffect(() => {
    carData();
  }, []);


    return (
        <>
        <div>Car details</div>        
        </>
    );
}

export default CarDetails;