import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const ShoeList = ({ filter }) => {
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

  // After fetching shoes:
  const displayedShoes = filter ? shoes.filter(filter) : shoes;

  return (
    <div className="shoe-list">
      {displayedShoes.length === 0 ? (
        <p>No shoes found.</p>
      ) : (
        <div className="shoe-row-cards">
          {displayedShoes.map(shoe => (
            <div className="shoe-card" key={shoe.id}>
              {shoe.imageUrl && (
                <img src={shoe.imageUrl} alt={shoe.name} />
              )}
              <div className="shoe-card-info">
                <h3>{shoe.name}</h3>
                <p>{shoe.brand}</p>
                <p>${shoe.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(shoe)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShoeList;