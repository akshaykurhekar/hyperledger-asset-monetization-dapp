import React,{ useState} from 'react';
import { Button, Modal} from 'react-bootstrap'

const Model = ()=>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [color, setcolor] = useState(null);
  const [make, setcolor] = useState(null);
  const [owner, setcolor] = useState(null);
  const [model, setModel] = useState(null);
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
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default Model;