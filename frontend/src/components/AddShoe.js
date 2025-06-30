// src/components/AddShoe.js
import React, { useState } from 'react';

const AddShoe = () => {
  const [shoe, setShoe] = useState({
    name: '',
    brand: '',
    price: '',
    image_url: '',
    is_new: false,
    is_popular: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShoe(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/shoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(shoe)
      });
      if (res.ok) {
        alert("Shoe added successfully!");
        setShoe({ name: '', brand: '', price: '', image_url: '', is_new: false, is_popular: false });
      } else {
        alert("Failed to add shoe.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="checkout-page">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Add Kicks</h2>
        <input name="name" placeholder="Shoe Name" value={shoe.name} onChange={handleChange} required />
        <input name="brand" placeholder="Brand" value={shoe.brand} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={shoe.price} onChange={handleChange} required />
        <input name="image_url" placeholder="Image URL" value={shoe.image_url} onChange={handleChange} required />
        <label>
          <input type="checkbox" name="is_new" checked={shoe.is_new} onChange={handleChange} />
          New
        </label>
        <label>
          <input type="checkbox" name="is_popular" checked={shoe.is_popular} onChange={handleChange} />
          Popular
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddShoe;
