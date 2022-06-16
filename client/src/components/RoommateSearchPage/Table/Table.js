import React from 'react';
import './Table.css';

export class Table extends React.Component {

    render() {
        return (
            <table className='profile-table' border={1}>
                <tr>
                    <th className='first-column'>Name / Image</th>
                    <th className='second-column'>Profile</th>
                </tr>
                <tr>
                    <td className='name'>Alfreds Futterkiste</td>
                    <td className='profile'>Maria Anders</td>
                </tr>
                <tr>
                    <td className='name'>Alfreds Futterkiste</td>
                    <td className='profile'>Maria Anders</td>
                </tr>
            </table>
        );
    }
}