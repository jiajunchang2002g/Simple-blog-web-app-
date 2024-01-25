import React, { useState } from 'react';
import axios from 'axios';

const RegistrationComponent = () => {
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('/users', { user: { username } });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Registration error:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationComponent;
