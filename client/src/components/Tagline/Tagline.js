import React from 'react';
import './Tagline.css';

export class Tagline extends React.Component {
    render() {
        return (
            <div className='tagline-container'>
                <h3 className='tagline'>Finding the best <br></br> roommate for <br></br><span className='you'>you</span>.</h3>
            </div>
        );
    }
}