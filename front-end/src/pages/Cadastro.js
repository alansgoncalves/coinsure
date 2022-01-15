import React, { useState } from "react";

function initialState() {
  return { user: "", password: "" };
}

const UserRegister = () => {
  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }
  return (
    <div className="user-login">
      <h1 className="user-login__title">Cadastro</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={onChange}
            value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}
          />
        </div>
        <button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default UserRegister;
