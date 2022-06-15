import React from 'react';
import './MoreInformation.css';

export class MoreInformation extends React.Component {
    render() {
        return (
            <div className='more-container'>
                <p className='text more-text'>
                    Want to know more about us?
                </p>
                <p className='text more-text0'>
                    The service is...
                </p>

                <div className='more-box-container'>
                    <div className='more-box1'>
                        <p className='text more-text1'><span className='to-red'>Free,</span> provided for students to find <span className='to-orange'>compatible</span> roommates.</p>
                    </div>
                    <div className='more-box2'>
                        <p className='text more-text1'>Made with the <br></br> <span className='to-green'>feedback</span> of students,<br></br><span className='to-red'>For</span> students, <br></br> <span className='to-orange'>By</span> students.</p>
                    </div>
                    <div className='more-box3'>
                        <p className='text more-text1'><span className='to-red'>Matching</span> students since <span className='to-orange'>2022</span></p>
                    </div>
                </div>
                <div className='final-box'>
                    <p className='text more-text2'>pronounced <strong><em>room</em></strong> (the b is silent).</p>
                </div>
            </div>
        );
    }
}