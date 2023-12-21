import React from 'react'
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <>
      <Form.Group className="mb-3">
        <input type='email' placeholder='adresse mail'></input>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
    </>
  );
}

export default Login;