import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
      <>
      <Navbar/>
    <Container>
      <Row style={{paddingTop:'20px'}}>
        <Col sm={12} md={4}>
          <Model />
        </Col>
        <Col sm={8} md={8}>
          <Card />
        </Col>
      </Row>
    </Container>
      </>
  );
}

export default App;
