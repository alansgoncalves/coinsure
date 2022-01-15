// import React, { useState } from "react";
import "../style/style.css";
import HeaderWithoutText from '../components/HeaderWithoutText'

// function initialState() {
//   return { user: "", password: "" };
// }

const UserLogin = (props) => {
  // const [values, setValues] = useState(initialState);

  // function onChange(event) {
  //   const { value, name } = event.target;

  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  // }
  return (
    <div>
      <HeaderWithoutText />
      <div className="user-login">
      <h1 className="user-login__title">Login</h1>
      <form autoComplete="nope">
        <div className="user-login__form-control">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="text"
            name="email"
            // onChange={onChange}
            // value={values.user}
          />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            // onChange={onChange}
            // value={values.password}
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
    </div>
  );
};

export default UserLogin;
