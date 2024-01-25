import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/login', { username });
      console.log('Login successful');
    } catch (error) {
      console.error('Login error:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
