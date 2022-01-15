import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import UserRegister from '../pages/UserRegister'
import Login from '../pages/Login'
import ProductRegister from '../pages/ProductRegister'

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home /> }/>
        <Route $comingsoon={""} exact path="/cadastro" element={<UserRegister />}/>
        <Route $comingsoon={""} exact path="/login" element={<Login />}/>
        <Route $comingsoon={""} exact path="/product" element={<ProductRegister />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

