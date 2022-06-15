import React from 'react';
import './Buttons.css'
import { withRouter } from 'react-router-dom';

export class Buttons extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
    }

    scrollToInfo() {
        const infoElement = document.getElementById('info');
        infoElement.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <div className='btn-container'>
                <button className='begin-btn' onClick={() => this.nextPath('/profile')}>
                    Begin Your Journey
                </button>
                <button className='more-btn' onClick={this.scrollToInfo}>
                    Find Out More
                </button>
            </div>
        );
    }
}