import React from 'react';

function FormLogin() {
  return (
    <form>
      <h3>Login</h3>
      <label htmlFor="email">Email</label>
      <input name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input name="password" id="password" />
    </form>
  );
}

export default FormLogin;
