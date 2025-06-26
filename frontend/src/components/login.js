import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.post('/login', form);
      setMsg('Login successful! Welcome, ' + res.data.user);
      // Optionally, save user info/token here
    } catch (err) {
      setMsg('Login failed: ' + (err.response?.data?.error || 'Server error'));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "40px auto", display: "flex", flexDirection: "column", gap: 12 }}>
      <h2>Login</h2>
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <button type="submit">Login</button>
      <div>{msg}</div>
    </form>
  );
}