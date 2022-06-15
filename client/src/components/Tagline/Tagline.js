import React from 'react';
import './Tagline.css';

export class Tagline extends React.Component {
    render() {
        return (
            <div className='tagline-container'>
                <h3 className='tagline'>Finding the best <br></br> roommate for <br></br><span className='you'>you</span>.</h3>
                <img className='profiles' src='https://uc6351d2f3774a3e1a749e3a1277.previews.dropboxusercontent.com/p/thumb/ABkdD1L-rj5SA71skbyg-7meUtv_UfL1-bXH2ACoaiEoarLD03VTpB8TfFc3AEdm0BufmgCJePlPfg0bx9muS5RULRizSX-mc0PRDGsKCQ8wKijfJCP7VNp72pB34Oz5UYVxfNXgsiFobvGyQL5xUWCo46yrNgAjRWaGQvIzAEiJyta0WhIBYX0SKoTHOBLU2x5YceK0PEP2ktloIsj1P08WMJFPvY2x-50DjcmvewXcx2l4-Z7ie08FAl99GrwZM553rrz5PqAnNDmA5BTJN7usyOzKZolLEz-gHXSKQ6grEtTfEEWlWLd12b8k-rLm0KpNQ7kty8etztbooBfy5jtmWdCbYdHreaM15Ka4KpVhh-IJMaPzZJEfY3ceTOVdB4C-wY_gJEUyIFlCa5lUSGegKDlocO0_iEb2ei7KoGWeCg/p.png' alt='peoples profiles'></img>
            </div>
        );
    }
}