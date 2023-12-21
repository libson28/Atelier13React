import React from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Inscription.css';

function Inscription() {
  return (
    <>
    <Container className='formulaire'>
      <Form.Group className="mb-3 mt-5">
        <Form.Label> Nom</Form.Label>
        <Form.Control placeholder=" votre nom"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Prenom</Form.Label>
        <Form.Control placeholder=" votre prenom"/>
      </Form.Group> 
      <Form.Group className="mb-3">
      <Form.Label> Email</Form.Label>
        <Form.Control placeholder=" votre email"/>
      </Form.Group>   
      <Form.Group className="mb-3">
        <Form.Label> Mot de passe</Form.Label>
        <Form.Control placeholder=" votre mot de passe"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label> Confirmation du mot de passe</Form.Label>
        <Form.Control placeholder=" votre confirmation"/>
      </Form.Group>
      <Form.Group>
        <button className='btn btn-primary' >Inscription</button>
      </Form.Group>
      </Container>
    </>
  );
}

export default Inscription;
