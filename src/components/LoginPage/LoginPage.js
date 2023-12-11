import React from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './styles.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* <h2>Login</h2>
        <LoginForm /> */}
        <p>Don't have an account?</p>
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
