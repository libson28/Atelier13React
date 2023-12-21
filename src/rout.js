import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Connexion from './Pages/Inscription/Connexion'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Connexion/>} ></Route>
    </Routes>
      
    </>
  )
}

export default Rout
