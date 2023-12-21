// import React from 'react'
// import { Container } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import './Connexion.css';

// function Connexion() {
//   return (
//     <>
//     <Container>
//       <Form.Group className="mb-3 mt-3">
//       <Form.Label> Email</Form.Label>
//         <Form.Control placeholder=" votre email"/>
//       </Form.Group>   
//       <Form.Group className="mb-3">
//         <Form.Label> Mot de passe</Form.Label>
//         <Form.Control placeholder=" votre mot de passe"/>
//       </Form.Group>
//       <Form.Group>
//         <button className='btn btn-primary' >Connecter</button>
//       </Form.Group>
//       </Container>
//     </>
//   );
// }

// export default Connexion;
import React from 'react'
import './Connexion.css';

const Connexion = () => {
  return (
    <>
   < div className='main_container'>
    <div className='header'>
      <h2>Connexion</h2>
    </div>
    <div>
      <input type='text' value="" placeholder='Votre eamil' ></input>
    </div>
    <div>
      <input type='text' value="" placeholder='Votre eamil' ></input>
    </div>
   </div>
      
    </>
  )
}

export default Connexion
