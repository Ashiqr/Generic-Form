// reusable form component goes here
// should be generic, with no code related to one specific type of form
// see the REUSABLE COMPONENT section for details
import React from 'react';
import Name from './Name';


const Form = () => {return (
    <React.Fragment>
        <Name title='Name' max='80' required='1' value={''} fun={(Name) => {return 'Hi! ' + Name}}/>
        {/* <Name title='Surname' max='5' required='0'/> */}
    </React.Fragment>
    )};
    

export default Form