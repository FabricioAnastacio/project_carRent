import React, { useEffect, useState } from 'react';

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
    <form onSubmit={ (e) => handleSubmit(e) }>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input
        value={ emailLogin }
        onChange={ handleChange }
        name="email"
        id="email"
      />
      <label htmlFor="password">Password</label>
      <input
        value={ passwordLogin }
        onChange={ handleChange }
        name="password"
        id="password"
      />
      <button
        type="submit"
        disabled={ !isDisabled }
      >
        Login
      </button>
    </form>
  );
}

export default FormLogin;
