import React from 'react';
import './Tagline.css';
import { Link } from 'react-router-dom';
import profile1 from './eg-profile-1.svg'
import profile2 from './eg-profile-2.svg'
import profile3 from './eg-profile-3.svg'

export class Tagline extends React.Component {
    scrollToInfo() {
        const infoElement = document.getElementById('info');
        infoElement.scrollIntoView({ behavior: 'smooth' });
    }
    render() {
        return (
            <div className='tagline-container'>
                <div className='left-container'>
                    <h3 className='tagline'>Finding the best <br></br> roommate for <br></br><span className='you'>you</span>.</h3>

                    <div className='btn-container'>
                        <Link to='/profile'>
                            <button className='begin-btn'>
                                Begin Your Journey
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='profile-container'>
                    <a href="example-profile1"><img className='profiles' src={profile1} alt='peoples profiles'></img></a>
                    <img className='profiles' src={profile2} alt='peoples profiles'></img>
                    <img className='profiles' src={profile3} alt='peoples profiles'></img>
                </div>
            </div>
        );
    }
}