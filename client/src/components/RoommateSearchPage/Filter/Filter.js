import React from 'react';
import './Filter.css';

export class Filter extends React.Component {
    render() {
        return (
            <div>
                <p className='title'>Filter</p>
                <section>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label for="switch">Female</label>
                    </div>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label for="switch">Male</label>
                    </div>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label for="switch">Morning Person</label>
                    </div>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label for="switch">Night Person</label>
                    </div>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label for="switch">Extrovert</label>
                    </div>
                    <div>
                        <input type="checkbox" id="switch" />
                        <label for="switch">Introvert</label>
                    </div>
                </section>
            </div>
        );
    }
}