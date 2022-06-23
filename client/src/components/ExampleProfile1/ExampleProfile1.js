import React from 'react';
import './ExampleProfile1.css';
import face1 from './face1.png'

const ExampleProfile1 = () => {
    return (
        <div className='boxStyle' >
            <img src={face1} alt='facedud'></img>
            <p>
            James
            </p>
            <p>
            Age: 24
            </p>
            <p>
            Gender: Male
            </p>
            <p>
            Tidy
            </p>
            <p>
            Student: UCL
            </p>
            <p>
            Budget: £200 - £250
            </p>
            <p>
            Sleep Schedule: 10pm - 8am
            </p>
            <p>
            Do not smoke
            </p>
            <p>
            Has pets
            </p>
            <p>
            I like to explore nature, usually through walking and hiking.
            I take health seriously and if you do not then I am not interested in you by any means.
            I sleep 10 hours a day and you must allow me to achieve this personal goal of mine.
            I really like to sleep.
            </p>
        </div>
    )
}

export default ExampleProfile1