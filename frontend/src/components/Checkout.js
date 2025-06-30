import React, { useState } from 'react';

const Checkout = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    contact: '',
    cardNumber: '',
    paymentMethod: 'Visa'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('✅ Order placed successfully!');
    localStorage.removeItem('cart'); // Clear cart
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout} className="checkout-form">
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="text" name="address" placeholder="Shipping Address" required onChange={handleChange} />
        <input type="text" name="contact" placeholder="Email or Phone" required onChange={handleChange} />
        <select name="paymentMethod" onChange={handleChange}>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="M-Pesa">M-Pesa</option>
        </select>
        <input type="text" name="cardNumber" placeholder="Card/M-Pesa Number" required onChange={handleChange} />
        <button type="submit" className="place-order-btn">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
