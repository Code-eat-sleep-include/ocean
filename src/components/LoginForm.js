import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import dolphinImage from './dolph.jpg';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = ({imageUrl}) => {
    console.log(`Logging in with username: ${username} and password: ${password}`);
    return(
      <div id="dolphin-for-login" className="dolph" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    )
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${dolphinImage})`, // Use the imported image
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
        <h4>Don't have an account? <Link to="/login">Sign Up</Link></h4>
        <br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;