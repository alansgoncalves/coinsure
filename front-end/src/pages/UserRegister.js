import "../style/style.css";
import HeaderWithoutText from "../components/HeaderWithoutText";
import { useState } from "react";
import Axios from "axios";

const UserRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = () => {
    Axios.post("http://localhost:3001/api/cadastro", {
      fullName: fullName,
      email: email,
      password: password,
    }).then(
      alert('Registro realizado com sucesso!'))
  };

  const validEmail = () => {
    if(email.length === 0) {
      alert('Informar e-mail!')
      return
    }
    if(!/^[a-z\d]+@[a-z\d]+\.com$/.test(email)) {
      alert('Informar um e-mail válido')
      return
    }
    submitRegister()
  }

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
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="user-login__form-control">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            onClick={validEmail}
          >
            Registro
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
