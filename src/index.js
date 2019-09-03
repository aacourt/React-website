import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import seperater from './images/seperater.jpg';

import './index.css';
import App from './pages/home/App';
import About from './pages/about/index';
import Blog from './pages/blog/index';
import Etsy from './pages/Etsy/index';
import Contact from './pages/contact/index';
import Header from './components/header/index';


const routing = (
  <Router>
    <div className="App">

      <Header />

      <div id='nav'>
        <p><NavLink activeStyle={{ color: '#DAB7FF' }} to="/home">HOME</NavLink></p>
        <p><NavLink activeStyle={{ color: '#DAB7FF' }} to="/about">ABOUT</NavLink></p>
        <p><NavLink activeStyle={{ color: '#DAB7FF' }} to='/blog'>BLOG</NavLink></p>
        <p><NavLink activeStyle={{ color: '#DAB7FF' }} to='/candles'>ETSY</NavLink></p>
        <p><NavLink activeStyle={{ color: '#DAB7FF' }} to='/contact'>CONTACT</NavLink></p>
      </div>

      <img id='seperater' src={seperater} alt='Line to seperate Header' />

      <Route exact path="/home" component={App} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/candles" component={Etsy} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


