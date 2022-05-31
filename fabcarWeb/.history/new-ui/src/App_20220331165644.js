import Navbar from "./components/navbar";
import Card from "./components/card";
import Model from "./components/model";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function App() {
  const carList = [{ name: "akshay" }, { name: "anuj" }, { name: "sham" },{ name: "Raj" }];

  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <Row style={{ paddingTop: "40px" }}>
          <Col sm={3}>
            <Model />
          </Col>
          <Col sm={9}>
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
