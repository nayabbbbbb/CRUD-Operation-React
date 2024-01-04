// LoginUser.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginUser() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the entered credentials are valid
    if (email === 'admin@gmail.com' && password === 'admin1234') {
      // Store user session in local storage
      localStorage.setItem('IsLoggedIn', 'true');
      // Redirect to the create route upon successful login
      navigate('/create');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h1>Login Page</h1>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="admin@gmail.com"
          required
          autoComplete="true"
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="admin1234"
          required
          autoComplete="true"
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginUser;
