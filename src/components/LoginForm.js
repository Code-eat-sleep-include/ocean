import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './LoginForm.css';
import dolphinImage from './dolph.jpg';
import Gallery from './gallery';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
    navigate('/user');
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${dolphinImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  };

  return (
    <div style={backgroundImageStyle}>
      <h1>Keep Up With #OceanGaurdians</h1>
      <h2>Login</h2>
      <form>
        <label>
          UI'd/Email:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br/>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <h4>Don't have an account? <Link to="/signup">Sign Up</Link></h4>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      {}
      <Gallery />
    </div>
  );
};

export default LoginForm;
