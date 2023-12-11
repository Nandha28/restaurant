import React from 'react';

const LoginForm = () => {
  return (
    <form className="login-form">
      <label>Username</label>
      <input type="text" placeholder="Enter your username" />
      <label>Password</label>
      <input type="password" placeholder="Enter your password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
