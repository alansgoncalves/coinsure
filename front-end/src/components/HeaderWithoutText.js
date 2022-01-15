import React from 'react';
import "../style/App.css";

function HeaderWithoutText() {
  return (
    <header className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Vekio</h3>
            </div>
            <nav className="item-menu">
              <a href="/">Voltar</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderWithoutText;