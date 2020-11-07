// reusable form component goes here
// should be generic, with no code related to one specific type of form
// see the REUSABLE COMPONENT section for details
import React from 'react';
import Name from './Name';

const Form = () => {return (
    <React.Fragment>
        <Name title='Name' max='15' required='1'/>
        <Name title='Surname' max='5' required='0'/>
    </React.Fragment>
    )};
    

export default Form