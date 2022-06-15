import React from 'react';
import { Link } from 'react-router-dom';
import './YourProfile.css'

export class YourProfile extends React.Component {
    render() {
        return (
            <div>
                Your Profile
                <Link to='/roommate-search'>
                    <button>
                        Next 
                    </button>
                </Link>
            </div>
        );
    }
}