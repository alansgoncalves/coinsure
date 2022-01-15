import React from 'react';
import "../App.css";

function Header() {
  return (
    <header className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Vekio</h3>
            </div>
            <nav className="item-menu">
              <a href="#">Cadastre-se</a>
              <a href="#">Login</a>
            </nav>
          </div>
        </div>
      </div>
      <h1 className="titulo">Seja um Vekio</h1>
      <p className="text">
        Vekio é uma empresa de tecnologia que oferece soluções de comércio
        eletrônico para que pessoas e empresas possam comprar e vender produtos
        por meio da internet.
      </p>
    </header>
  );
}

export default Header;
