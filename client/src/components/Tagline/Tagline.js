import React from 'react';
import './Tagline.css';
import profile1 from './eg-profile-1.svg'
import profile2 from './eg-profile-2.svg'
import profile3 from './eg-profile-3.svg'

export class Tagline extends React.Component {
    render() {
        return (
            <div className='tagline-container'>
                <h3 className='tagline'>Finding the best <br></br> roommate for <br></br><span className='you'>you</span>.</h3>
                <div className='profile-container'>
                    <img className='profiles' src={profile1} alt='peoples profiles'></img>
                    <img className='profiles' src={profile2} alt='peoples profiles'></img>
                    <img className='profiles' src={profile3} alt='peoples profiles'></img>
                </div>
            </div>
        );
    }
}