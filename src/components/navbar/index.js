import React, { Component } from 'react';

import seperater from "./images/seperater.jpg"
import './styles.css';

class Navbar extends Component {
    render(){
        return(
            <div>
                <div id='nav'>
                    <p>HOME</p>
                    <p>ABOUT</p>
                    <p>BLOG</p>
                    <p>CANDLE SHOP</p>
                    <p>CONTACT</p>
                </div>
                <img id='seperater' src={seperater} alt='Line to seperate Header' />
            </div>    
        );
    }
}

export default Navbar;