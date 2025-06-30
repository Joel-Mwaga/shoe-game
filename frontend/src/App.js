import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ShoeRows from './components/ShoeRows';
import Cart from './components/Cart';
import ShoeList from './components/ShoeList';
import Login from './components/login';
import Signup from './components/signup';
import Checkout from './components/Checkout';
import AddShoe from './components/AddShoe';
import Profile from './components/Profile';
import './styles/App.css';

function Home() {
  return (
    <>
      <Banner />
      <ShoeRows />
    </>
  );
}

const filterNew = (shoe) => shoe.isNew;
const filterPopular = (shoe) => shoe.isPopular;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<ShoeList filter={filterNew} />} />
          <Route path="/popular" element={<ShoeList filter={filterPopular} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-shoe" element={<AddShoe />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
