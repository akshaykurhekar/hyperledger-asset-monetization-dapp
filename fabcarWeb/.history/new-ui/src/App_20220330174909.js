import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col } from "react-bootstrap";

function App() {

    const carList = [
        {name:"akshay"},
        {name:"g"},
        {name:"akshay"},
    ];

  return (
      <>
      <Navbar/>
    <Container>
      <Row style={{paddingTop:'40px'}}>
        <Col sm={4} >
          <Model />
        </Col>
        <Col sm={8} >
          <Card />
        </Col>
      </Row>
    </Container>
      </>
  );
}

export default App;
