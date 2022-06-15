import React from 'react';
import './InformationBoxes.css';
import info1 from './info-card-1.svg'
import info2 from './info-card-2.svg'
import info3 from './info-card-3.svg'

export class InformationBoxes extends React.Component {
    render() {
        return (
            <div id='info' className='box-container'>
                <img className='images image1' src={info1} alt='People'></img>
                <img className='images image2' src={info2} alt='People'></img>
                <img className='images image3' src={info3} alt='People'></img>
            </div>
          
        );
    }
}