import React from 'react';
import './ExampleProfile1.css';
import face1 from './face1.png'

const ExampleProfile1 = () => {
    return (
        <div className='boxStyle' >
            <img src={face1} alt='facedud'></img>   
            <p>
            Student: UCL
            </p>
            <p>
            Budget: £200 - £250
            </p>
            <p>
            Gender: Male
            </p>
            <p>
            Sleep Schedule: 8am - 12am
            </p>
            <p>
            Sexuality: Hetrosexual
            </p>
            <p>
            Ethnicity: Pacific
            </p>
            <p>
            Looking for a roommate in East London. I like to keep very
            tidy and prefer to sleep early in peace and quiet. Most of my
            friends are from my university and my local area but I would be
            interested in meeting some new people and like to explore outside
            of my university when I have time. When I have time I also like to 
            cook and most of my cooking is normal people cuisine.
            Request me if you are fun, tidy
            and not racist.
            </p>  
        </div>
    )
}

export default ExampleProfile1