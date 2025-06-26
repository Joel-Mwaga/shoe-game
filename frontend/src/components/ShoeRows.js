import React, { useEffect, useState } from 'react';
import axios from 'axios';

const categories = [
  { title: "New Releases", endpoint: "/shoes?category=new" },
  { title: "Popular", endpoint: "/shoes?category=popular" },
  { title: "All Shoes", endpoint: "/shoes" }
];

const ShoeRow = ({ title, endpoint }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000${endpoint}`)
      .then(res => setShoes(res.data))
      .catch(() => setShoes([]));
  }, [endpoint]);

  const addToCart = (shoe) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(shoe);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${shoe.name} added to cart!`);
  };

  return (
    <div className="shoe-row">
      <h2>{title}</h2>
      <div className="shoe-row-cards">
        {shoes.map(shoe => (
          <div className="shoe-card" key={shoe.id}>
            <img src={shoe.imageUrl || "/placeholder-shoe.png"} alt={shoe.name} />
            <div className="shoe-card-info">
              <h3>{shoe.name}</h3>
              <p>{shoe.brand}</p>
              <p>${shoe.price}</p>
              <button onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ShoeRows = () => (
  <div>
    {categories.map(cat => (
      <ShoeRow key={cat.title} title={cat.title} endpoint={cat.endpoint} />
    ))}
  </div>
);

export default ShoeRows;