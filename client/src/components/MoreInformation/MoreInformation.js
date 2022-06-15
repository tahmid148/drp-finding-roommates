import React from 'react';
import './MoreInformation.css';

export class MoreInformation extends React.Component {
    render() {
        return (
            <div className='more-container'>
                <p className='more-text'>
                    Want to know more about us?
                </p>
                <p className='more-text2'>
                    The service is...
                </p>

                <div className='more-box-container'>
                    <div className='more-box1'>
                        box1
                    </div>
                    <div className='more-box2'>
                        box2
                    </div>
                    <div className='more-box3'>
                        box3
                    </div>
                </div>
                <div className='final-box'>
                    box4
                </div>
            </div>
        );
    }
}