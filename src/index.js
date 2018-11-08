import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import seperater from './images/seperater.jpg';

import './index.css';
import App from './App';
import About from './pages/about/index';
import Header from './components/header/index';


const routing = (
    <Router>
      <div className="App">

          <Header/>

          <div id='nav'>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
          </div>

          <img id='seperater' src={seperater} alt='Line to seperate Header' />
          
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </div> 
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


