import React, { Component } from 'react';
import './styles.css';

class About extends Component {
  render() {
    return (
      <div >
        <div className="Text">
          <p>
            Hello!
            My name is Abby, I'm a Computer Science graduate, and Junior software engineer.
          </p>
          <p>
            Despite being an avid programmer I really love getting creative too and am looking to start up a new Etsy shop soon! Watch this space!
            </p>
          <p>
            On the flip side I also really love lounging around, playing on my PS4, watching rubbish TV and hanging with my friends. I also love chilling on my laptop spending far too much money shopping online and watching endless hours of youtube videos.
          </p>
        </div>
        <img className="Image" src="https://acourtsthoughts.files.wordpress.com/2019/07/img_20190329_111623.jpg?w=450" alt="rptnb" width="225" height="300" />
      </div>
    );
  }
}

export default About;