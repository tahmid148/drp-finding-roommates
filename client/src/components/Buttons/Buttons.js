import React from 'react';
import './Buttons.css'

export class Buttons extends React.Component {
    render() {
        return (
            <div className='btn-container'>
                <button className='begin-btn'>
                    Begin Your Journey
                </button>
                <button className='more-btn'>
                    Find Out More
                </button>
            </div>
        );
    }
}