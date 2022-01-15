import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import Login from '../pages/Login'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home /> }/>
        <Route exact path="/cadastro" element={<Cadastro />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

