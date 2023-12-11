import React from 'react';

const SignupForm = () => {
  return (
    <form className="signup-form">
      <label>Username</label>
      <input type="text" placeholder="Choose a username" />
      <label>Password</label>
      <input type="password" placeholder="Choose a password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
