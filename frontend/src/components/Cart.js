import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image_url} alt={item.name} className="cart-image" />
            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>{item.brand}</p>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button className="banner-btn" onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
