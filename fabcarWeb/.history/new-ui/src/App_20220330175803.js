import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const carList = [{ name: "akshay" }, { name: "anuj" }, { name: "sham" }];

  return (
    <>
      <Navbar />
      <Container>
        <Row style={{ paddingTop: "40px" }}>
          <Col sm={4}>
            <Model />
          </Col>
          <Col>
            <Row>
              
                {carList.map((item, idx) => {
                  return <Col sm={4}><Card key={idx} name={item.name} />;
                })}
              </Col>
            </Row>
            <Card />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
