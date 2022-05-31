import React,{useState, useEffect} from 'react';
import axios from 'axios';


const CarDetails = (props)=>{


    const [carList, setCarList] = useState([]);

  const baseURL = "http://localhost:8080/api/queryallcars";

  const carData = async () => {
    const carList = await axios.get(`${baseURL}`).then((response) => {
      return response.data.response;
    });
    var temp = JSON.parse(carList.toString());

    console.log(temp);
  };

  useEffect(() => {
    carData();
  }, []);

console.log(props)
    return (
        <>
        <div>Car details</div>
        <div>{props.name}</div>
        <div>{props.make}</div>
        <div>{props.owner}</div>
        <div>{props.model}</div>
        </>
    );
}

export default CarDetails;