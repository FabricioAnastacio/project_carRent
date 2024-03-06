import React, { useEffect, useState } from 'react';
import '../styles/FormLogin.css';

function FormLogin() {
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

  const handleChange = ({ target }) => {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setpassword(target.value);
  };

  return (
    <>
      <div className="background_page" />
      <h1>Your Account</h1>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <div className="inputs">
          <input
            required
            value={ emailLogin }
            onChange={ handleChange }
            name="email"
            id="email"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputs">
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
      </form>
    </>
  );
}

export default FormLogin;
