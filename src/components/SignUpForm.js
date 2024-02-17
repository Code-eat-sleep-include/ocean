import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate
import './SignUpForm.css'; // Assuming you have a CSS file for SignUpForm styling

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Using useNavigate for navigation

  const handleSignUp = () => {
    // Your sign-up logic here
    console.log(`Signing up with username: ${username} and password: ${password}`);
    // For simplicity, redirect to the login page after successful sign-up
    navigate('/login'); // Using navigate to redirect to login page
  };

  return (
    <div className="sign-up-form">
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignUpForm;
