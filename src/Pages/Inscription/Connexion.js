import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>
    <Container>
      <Form.Group className="mb-3 mt-3">
      <Form.Label> Email</Form.Label>
        <Form.Control placeholder=" votre email"/>
      </Form.Group>   
      <Form.Group className="mb-3">
        <Form.Label> Mot de passe</Form.Label>
        <Form.Control placeholder=" votre mot de passe"/>
      </Form.Group>
      </Container>
    </>
  );
}

export default Login;