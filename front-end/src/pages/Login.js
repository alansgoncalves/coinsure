import "../style/style.css";
import HeaderWithoutText from '../components/HeaderWithoutText'
import { useState} from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = () => {
    Axios.post("http://localhost:3001/api/login", {
      email: email,
      password: password,
    }).then(
      alert('Login realizado com sucesso!'))
  };

  const validEmailPassword = () => {
    if(email.length === 0) {
      alert('Informar e-mail!')
      return
    }
    if(!/^[a-z\d]+@[a-z\d]+\.com$/.test(email)) {
      alert('Informar um e-mail válido')
      return
    }
    if(password.length === 0) {
      alert('Informar senha!')
      return
    }
    submitLogin()
    if(true) {
      this.props.history.push('/produto')
    }
  }

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
        <Link to="/produto">
        <button
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          onClick={validEmailPassword}
        >
          Entrar
        </button>
        </Link>
      </form>
      </div>
    </div>
  );
};

export default UserLogin;
