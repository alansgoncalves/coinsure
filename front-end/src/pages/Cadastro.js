// import React, { useState } from "react";
import "../style/style.css";
import HeaderWithoutText from '../components/HeaderWithoutText'

const UserRegister = () => {
  return (
    <div>
      <HeaderWithoutText />
      <div className="user-login">
      <h1 className="user-login__title">Cadastro</h1>
      <form autoComplete="nope">
      <div className="user-login__form-control">
          <label htmlFor="email">Nome Completo</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
          />
        </div>
        <button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Cadastro
        </button>
      </form>
      </div>
    </div>
  );
};

export default UserRegister;
