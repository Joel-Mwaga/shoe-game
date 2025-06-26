import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Banner from './components/banner.js';
import ShoeRows from './components/ShoeRows.js';
import Cart from './components/Cart';
import ShoeList from './components/ShoeList.js'; // Import your ShoeList component
import './styles/App.css';

function Home() {
  return (
    <>
      <Banner />
      <ShoeRows />
    </>
  );
}

// Example filter functions (customize as needed)
const filterNew = shoe => shoe.isNew; // or whatever property marks a shoe as new
const filterPopular = shoe => shoe.isPopular; // or whatever property marks a shoe as popular

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Cart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/new" render={() => <ShoeList filter={filterNew} />} />
          <Route path="/popular" render={() => <ShoeList filter={filterPopular} />} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;