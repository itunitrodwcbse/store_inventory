import { Col, Container, Row } from "react-bootstrap";
import "../styles.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; store.cbse.app
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
