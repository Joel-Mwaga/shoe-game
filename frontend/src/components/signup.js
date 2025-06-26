// frontend/src/components/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      await axios.post('/signup', form);
      setMsg('Signup successful! You can now log in.');
    } catch (err) {
      setMsg('Signup failed: ' + (err.response?.data?.error || 'Server error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "40px auto", display: "flex", flexDirection: "column", gap: 12 }}>
      <h2>Sign Up</h2>
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Sign Up</button>
      <div>{msg}</div>
    </form>
  );
}