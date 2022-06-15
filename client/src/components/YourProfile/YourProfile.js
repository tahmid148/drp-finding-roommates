import React from 'react';
import { Link } from 'react-router-dom';
import './YourProfile.css'

export class YourProfile extends React.Component {
    render() {
        return (
            <div>
                <header className='header'>
                    <div className='title-box'>
                        <p className='title'>Create Your Profile</p>
                    </div>
                </header>
                <section>
                    <div>
                        <span className='question-text'>Full Name</span>
                        <input className='answer-text' type='text' value='Name'></input>
                        <span className='question-text'>Age</span>
                        <input type='number' value=''></input>
                        <span className='question-text'>Gender</span>
                        <input type='text' value=''></input>
                    </div>
                    <div>
                        <span className='question-text'>About You</span>
                        <span className='question-text'>Weekly Budget Range £</span>
                        <input type='number' value='20'></input>
                        <span className='question-text'>to £</span>
                        <input type='number' value='100'></input>
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