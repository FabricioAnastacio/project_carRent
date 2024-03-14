import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/FormRegister.css';

function FormRegister(props) {
  const { navigate } = props;
  const [emailRegister, setEmail] = useState('');
  const [nameRegister, setName] = useState('');
  const [passwordRegister, setPassword] = useState('');
  const [cpfRegister, setCPF] = useState('');
  const [isDisabled, setButton] = useState(true);

  useEffect(() => {
    const regexName = /^([A-Z]{1}[a-z]+[ A-Z]{2}[a-z]+[ A-Z]{2}[a-z]+[ A-z]+)$/;
    const regexEmail = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const regexCPF = /^([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})$/;
    const passwordLength = 7;
    setButton(
      regexName.test(nameRegister)
      && regexEmail.test(emailRegister)
      && regexCPF.test(cpfRegister)
      && passwordRegister.length > passwordLength,
    );
  }, [nameRegister, emailRegister, passwordRegister, cpfRegister]);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleChange = ({ target }) => {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'name') setName(target.value);
    if (target.name === 'password') setPassword(target.value);
    if (target.name === 'cpf') setCPF(target.value);
  };

  return (
    <div className="backdrund-Register">
      <h2>Create your account</h2>
      <form className="form-register" onSubmit={ (e) => handleSubmitUser(e) }>
        <div className="inputs-register">
          <input
            required
            value={ nameRegister }
            name="name"
            onChange={ handleChange }
          />
          <label htmlFor="name">Nome</label>
        </div>
        <div className="inputs-register">
          <input
            required
            value={ emailRegister }
            name="email"
            onChange={ handleChange }
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputs-register">
          <input
            required
            value={ cpfRegister }
            name="cpf"
            onChange={ handleChange }
          />
          <label htmlFor="cpf">CPF</label>
        </div>
        <div className="inputs-register">
          <input
            required
            value={ passwordRegister }
            name="password"
            onChange={ handleChange }
          />
          <label htmlFor="password">Senha</label>
        </div>
        <button
          type="submit"
          disabled={ !isDisabled }
          className={ `btm-${!isDisabled}` }
        >
          Create
        </button>
      </form>
    </div>
  );
}

FormRegister.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default FormRegister;
