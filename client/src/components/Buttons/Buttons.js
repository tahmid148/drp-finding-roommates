import React from 'react';
import './Buttons.css'
import { Link } from 'react-router-dom';

export class Buttons extends React.Component {

    scrollToInfo() {
        const infoElement = document.getElementById('info');
        infoElement.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div className='btn-container'>
                <Link to='/profile'>
                    <button className='begin-btn'>
                        Begin Your Journey
                    </button>
                </Link>
                <button className='more-btn' onClick={this.scrollToInfo}>
                    Find Out More
                </button>
            </div>
        );
    }
}