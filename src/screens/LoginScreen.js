import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form>
        <Form.Group className="py-3" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email ID or Username"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="py-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
          ></Form.Control>
        </Form.Group>

        <Button className="py-3" type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </FormContainer>
  );
}

// <div className="LoginScreen">
// <Container>
//   <Row>
//     <Col className="text-center py-3">
//       <Card className="my-auto p-auto rounded">
//         <Card.Body>
//           <Form>
//             <Card.Title>Login</Card.Title>
//             <Card.Text>
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter Email"
//               ></Form.Control>
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//               ></Form.Control>
//             </Card.Text>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Col>
//   </Row>
// </Container>
// </div>
