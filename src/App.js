// import logo from './logo.svg';
// import './App.css';
// import Connexion from './Pages/Inscription/Connexion.js';
// import Inscription from './Pages/Inscription/Inscription.js';

// function App() {
//   return (
//     <div className="App">
//       <Connexion />
//       <Inscription></Inscription>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Rout from './rout'


const App = () => {
  return (
    <>
    <BrowserRouter>
       <Rout/>
    </BrowserRouter>
      
    </>
  )
}

export default App
