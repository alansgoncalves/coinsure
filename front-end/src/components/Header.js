import React from 'react';
import "../style/App.css";

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
              <a href="/cadastro">Cadastre-se</a>
              <a href="/login">Login</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
