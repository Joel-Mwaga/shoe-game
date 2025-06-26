import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For add to cart
  const addToCart = (shoe) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(shoe);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${shoe.name} added to cart!`);
  };

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/shoes');
        setShoes(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shoe-list">
      {shoes.length === 0 ? (
        <p>No shoes found.</p>
      ) : (
        shoes.map(shoe => (
          <div key={shoe.id} className="shoe-item">
            {shoe.imageUrl && (
              <img src={shoe.imageUrl} alt={shoe.name} />
            )}
            <h3>{shoe.name}</h3>
            <p>{shoe.brand}</p>
            <p>${shoe.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(shoe)}>
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoeList;