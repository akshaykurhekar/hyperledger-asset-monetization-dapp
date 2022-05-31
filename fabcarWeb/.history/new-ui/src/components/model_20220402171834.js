import React,{ useState} from 'react';
import { Button, InputGroup, Modal} from 'react-bootstrap'
import axios from 'axios';

const Model = (props)=>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [color, setColor] = useState(null);
  const [make, setMake] = useState(null);
  const [owner, setOwner] = useState(null);
  const [model, setModel] = useState(null);
  const [carId, setCarId] = useState(null);

  const baseURL = "http://localhost:8080/api/addcar/";

    

  const saveCar = async (props) => {

    const aa = {
        'carid':carId,
        'color':color, 
        'make':make, 
        'owner':owner, 
        'model':model, 
    }

    await axios.post(baseURL, aa).then((response) => {
        console.log(response.data) ;
      });

      props.fetchCarData()
      setShow(false)
  }

    return (
       <>
      <Button variant="success" onClick={handleShow}>
        Add Car to ledger
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <input type="text" placeholder='CARId ' onChange={ (e)=> setCarId(e.target.value)}></input>
           <input type="text" placeholder='Car Model' onChange={ (e)=> setModel(e.target.value)}></input>
           <input type="text" placeholder='Car Manufacturer' onChange={ (e)=> setMake(e.target.value)}></input>
           <input type="text" placeholder='Car Color' onChange={ (e)=> setColor(e.target.value)}></input>
           <input type="text" placeholder='Car Owner' onChange={ (e)=> setOwner(e.target.value)}></input>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ saveCar }>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default Model;