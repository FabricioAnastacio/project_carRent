import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormRegister from '../components/FormRegister';

function Register() {
  const navigate = useNavigate();
  return (
    <div className="register">
      <FormRegister navigate={ navigate } />
    </div>
  );
}

export default Register;
