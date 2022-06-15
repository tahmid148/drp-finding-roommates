import React, { forwardRef, useRef } from 'react';
import './Buttons.css'

export class Buttons extends React.Component {
    scrollToInfo() {
        const infoElement = document.getElementById('info');
        infoElement.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div className='btn-container'>
                <button className='begin-btn'>
                    Begin Your Journey
                </button>
                <button className='more-btn' onClick={this.scrollToInfo}>
                    Find Out More
                </button>
            </div>
        );
    }
}