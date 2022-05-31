import React,{ useState} from 'react';
import { Button, InputGroup, Modal} from 'react-bootstrap'
import axios from 'axios';

const ModelChangeOwner = (props)=>{

    const []

   const [owner, setOwner] = useState(null);

      const baseURL = "http://localhost:8080/api/changeowner";
  

  const saveCar = async () => {

    props.ownerHandler(owner);

    const payload = {'owner':owner }

    await axios.put(`${baseURL}/${props.carId}`, payload).then((response) => {
        console.log(response.data);
      }).catch( (err)=>{
            console.log(err);
      });

    //   props.fetchCarData();
      props.close();
  }

    return (
       <>
      {/* <Button variant="success" onClick={handleShow}>
        Sell Car and update on ledger
      </Button> */}

      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Change Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {/* <input type="text" placeholder='CARId' onChange={ (e)=> setCarId(e.target.value)}></input> */}
           <input type="text" placeholder='Car Owner' onChange={ (e)=> setOwner(e.target.value)}></input>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={ saveCar } disabled={flag}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default ModelChangeOwner;