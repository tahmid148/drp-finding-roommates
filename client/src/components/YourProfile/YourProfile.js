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
                    <div>
                        <span className='question-text name'>Full Name</span>
                        <input className='answer-text' type='text' value='Name'></input>
                        <span className='question-text age'>Age</span>
                        <input className='answer-text' type='number' value=''></input>
                        <span className='question-text gender'>Gender</span>
                        <input className='answer-text' type='text' value=''></input>
                    </div>
                    <div>
                        <span className='question-text about'>About You</span>
                        <span className='question-text budget'>Weekly Budget Range £</span>
                        <input className='answer-text budget1' type='number' value='20'></input>
                        <span className='question-text'>to £</span>
                        <input className='answer-text budget2' type='number' value='100'></input>
                    </div>
                    <input className='answer-text' type='text' value='I am an alcoholic...'></input>
                </section>
                <Link to='/roommate-search'>
                    <button className='title-box'>
                        Next 
                    </button>
                </Link>
            </div>
        );
    }
}