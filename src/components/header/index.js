import React, { Component } from 'react';
import './styles.css'

import logo from './images/logo.jpg';
import twitterLogo from './images/socialMediaLogos/twitterLogo.png'
import instagramLogo from './images/socialMediaLogos/instagramLogo.png'
import pinterestLogo from './images/socialMediaLogos/pinterestLogo.png'

class Header extends Component { 
    render(){
        return (
            <div>
                <img id='logo' src={logo} alt='Acourts Thoughts Logo'/>
                <div id='socialmedia'>
                    <div className='tooltip'>
                        <a href='https://twitter.com/acourtsthoughts' target="_blank" rel='noopener noreferrer'>
                            <img className='logos' id='twitterLogo' src={twitterLogo} alt='Twitter Logo'/>
                            <span className='tooltiptext'>
                                Twitter
                            </span>
                        </a>
                    </div>
                    <div className='tooltip tooltipInsta'>
                        <a href='https://instagram.com/wicksandmatchshop' target="_blank" rel='noopener noreferrer'>
                            <img className='logos' id='instagramLogo' src={instagramLogo} alt='Instagram Logo'/>
                            <span className='tooltiptext'>
                                Instagram
                            </span>
                        </a>
                    </div>
                    <div className='tooltip tooltipPin'>
                        <a href='https://pinterest.com/acourtsthoughts' target="_blank" rel='noopener noreferrer'>
                            <img className='logos' id='pinterestLogo' src={pinterestLogo} alt='Pinterest Logo'/>
                            <span className='tooltiptext'>
                                Pinterest
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;