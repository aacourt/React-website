import React, { Component } from 'react';
import './styles.css';

class FrontImgBlock extends Component { 
    render(){
        return (
            <div className='post-article'> 
                <div className='image-container'>
                    <img src={this.props.img} alt='blog header'/>
                </div>
                <div className='details'>
                    <h4>
                        <span>{this.props.title}</span>
                    </h4>
                    <p className='date'>{this.props.date}</p>
                </div>
            </div>
        )
    };
}
export default FrontImgBlock;