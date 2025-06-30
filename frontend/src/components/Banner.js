import React from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to ShoeGame</h1>
        <p>Discover the latest and most popular sneakers!</p>
        <div className="banner-buttons">
          <button className="banner-btn" onClick={() => navigate('/new')}>
            Shop Now
          </button>
          <button className="banner-btn banner-btn-secondary" onClick={() => navigate('/add-shoe')}>
            Add Kicks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
