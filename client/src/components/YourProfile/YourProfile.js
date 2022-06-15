import React from 'react';
import { Link } from 'react-router-dom';
import './YourProfile.css'

export class YourProfile extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div>
                        <p>Create Your Profile</p>
                    </div>
                </header>
                <section>
                    <div>
                        <span>Full Name</span>
                        <input type='text' value='Name'></input>
                        <span>Age</span>
                        <input type='number' value=''></input>
                        <span>Gender</span>
                        <input type='text' value=''></input>
                    </div>
                    <div>
                        <span>About You</span>
                        <span>Weekly Budget Range £</span>
                        <input type='number' value='20'></input>
                        <span>to £</span>
                        <input type='number' value='100'></input>
                    </div>
                    <input type='text' value='I am an alcoholic...'></input>
                </section>
                <Link to='/roommate-search'>
                    <button>
                        Next 
                    </button>
                </Link>
            </div>
        );
    }
}