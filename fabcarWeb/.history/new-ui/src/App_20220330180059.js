import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const carList = [{ name: "akshay" }, { name: "anuj" }, { name: "sham" },{ name: "Raj" }];

  return (
    <>
      <Navbar />
      <Container>
        <Row style={{ paddingTop: "40px" }}>
          <Col sm={4}>
            <Model />
          </Col>
          <Col sm={8}>
            <Row>
              {carList.map((item, idx) => {
                return (
                  <Col sm={4}>
                    <Card key={idx} name={item.name} />
                  </Col>
                );
              })}
            </Row>        
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
