import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, email, password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert('Account created!');
          navigate('/login');
        } else {
          alert(data.error || 'Signup failed');
        }
      });
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Create Account</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
}

export default Signup;
