import React from 'react';
import './Chatroom.css'

export class Chatroom extends React.Component {
    state = { showing: false };
    
    render() {
        const { showing } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ showing: !showing })}>Message</button>
                { showing 
                    ? <iframe className='chat-room' id='chat-room' src="https://deadsimplechat.com/ml4137f5l" width="400px" height="300"></iframe>
                    : null
                }
            </div>  
        );
    }
}
