import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/FormLogin.css';
import { marcsVehicles, textPLogin } from '../services/textsByHtml';
import ListVehicles from './ListVehicles';

function FormLogin(props) {
  const { navigate } = props;
  const [emailLogin, setEmail] = useState('');
  const [passwordLogin, setpassword] = useState('');
  const [isDisabled, setStateButton] = useState(true);

  useEffect(() => {
    const regexEmail = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordLength = 7;
    setStateButton(regexEmail.test(emailLogin) && passwordLogin.length > passwordLength);
  }, [emailLogin, passwordLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleChange = ({ target }) => {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setpassword(target.value);
  };

  return (
    <>
      <figure className="background-Login">
        <img
          src="https://static.vecteezy.com/ti/fotos-gratis/t1/2103007-frente-de-um-carro-esporte-em-um-fundo-escuro-com-texto-para-espaco-foto.jpg"
          alt="car"
        />
      </figure>
      <h1>Your Account</h1>
      <section className="intro-login">
        <h3>Melhor loja de veiculos do mundo</h3>
        <p>{ textPLogin }</p>
        <p>{ marcsVehicles }</p>
        <ListVehicles />
      </section>
      <form className="form-login" onSubmit={ (e) => handleSubmit(e) }>
        <div className="inputs-login">
          <input
            required
            value={ emailLogin }
            onChange={ handleChange }
            name="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputs-login">
          <input
            required
            value={ passwordLogin }
            onChange={ handleChange }
            name="password"
            id="password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <button
          type="submit"
          className={ `button-${!isDisabled}` }
          disabled={ !isDisabled }
        >
          Login
        </button>
        <button
          className={ `button-register-${isDisabled}` }
          disabled={ isDisabled }
          onClick={ handleRegister }
        >
          Register
        </button>
      </form>
    </>
  );
}

FormLogin.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default FormLogin;
