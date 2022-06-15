import React from 'react';
import { Link } from 'react-router-dom';
import './YourProfile.css';

export class YourProfile extends React.Component {
    render() {
        return (
            <div className='page'>
                <nav className='navbar'>
                    <p className='create-profile'>
                        <span className='to-orange'>Create</span> <span className='you'>your</span> <span className='to-orange'>profile</span>
                    </p>
                </nav>

                <section className='fill-out-form'>
                    <span className='full-name'>
                        Full Name
                        <input className='full-name-answer' type='text' value=''></input>
                    </span>
                    <span className='age'>
                        Age
                        <input className='age-answer' type='number' value=''></input>
                    </span>
                    <span className='gender'>
                        Gender
                        <input className='gender-answer' type='text' value=''></input>
                    </span>
                    <span className='about-you'>
                        <br></br>
                        About You
                        <input className='about-you-answer' type='text' value=''></input>
                    </span>
                    <span className='budget1'>
                        <br></br>
                        Weekly Budget Range: £
                        <input className='budget-answer1' type='number' value=''></input>
                    </span>
                    <span className='budget2'>
                        <br></br>
                        to
                        <input className='budget-answer2' type='number' value=''></input>
                    </span>
                    <Link to='/roommate-search'>
                        <button className='next-btn'>
                            Next 
                        </button>
                    </Link>
                </section>

            </div>
        );
    }
}