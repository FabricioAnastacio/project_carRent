import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormLogin from '../components/FormLogin';

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <FormLogin navigate={ navigate } />
    </div>
  );
}

export default Login;
