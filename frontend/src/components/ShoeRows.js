import React, { useEffect, useState } from 'react';
import ShoeList from './ShoeList';

const ShoeRows = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/api/shoes')
      .then(res => res.json())
      .then(data => setShoes(data));
  }, []);

  return (
    <div>
      <div className="shoe-row">
        <h2>New Arrivals</h2>
        <ShoeList shoes={shoes.filter(shoe => shoe.is_new)} />
      </div>
      <div className="shoe-row">
        <h2>Popular</h2>
        <ShoeList shoes={shoes.filter(shoe => shoe.is_popular)} />
      </div>
    </div>
  );
};

export default ShoeRows;