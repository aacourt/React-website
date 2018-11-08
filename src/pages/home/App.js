import React, { Component } from 'react';
import FrontImgBlock from './../../components/frontImgBlock/index';
import Jan7 from './images/07-01-2018.jpg';
import Jan27 from './images/27-01-2018.jpg';
import Jan31 from './images/31-01-2018.jpg';
import Apr13 from './images/13-04-2018.jpg';


import './App.css';


class App extends Component {
  render() {
    return (
      <div className='latest-posts'> 
        <FrontImgBlock title='WELCOME TO THE NEW BLOG' img={Jan31} date='7th Jan 2018'/>
        
        {/* <img src={Jan27} alt='blog header'/>
        <img src={Jan31} alt='blog header'/>
    <img src={Apr13} alt='blog header'/> */}
      </div>
    );
  }
}

export default App;
