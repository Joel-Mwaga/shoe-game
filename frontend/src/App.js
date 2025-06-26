import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ShoeRows from './components/ShoeRows';
import Cart from './components/Cart';
import './styles/App.css';

function Home() {
  return (
    <>
      <Banner />
      <ShoeRows />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Cart />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;