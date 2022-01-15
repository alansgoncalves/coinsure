import "../style/style.css";
import HeaderWithoutText from '../components/HeaderWithoutText'

const UserLogin = () => {
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
        >
          Entrar
        </button>
      </form>
      </div>
    </div>
  );
};

export default UserLogin;
