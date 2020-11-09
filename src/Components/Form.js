// reusable form component goes here
// should be generic, with no code related to one specific type of form
// see the REUSABLE COMPONENT section for details
import React from 'react';
import Name from './Name';
import validation from './validation';
import Submit from './Submit';


const Form = () => {return (
    <React.Fragment>
        <Name name='first_name' label='First Name' max='80' required='1' value={''} Validate={(Name) => {
            return validation.ValidateInput([validation.RequiredInput, validation.OnlyText], Name);
        }}/>
        {/* <Name title='Surname' max='5' required='0'/> */}
        <Submit text='Submit Form'/>
    </React.Fragment>
    )};
    

export default Form;
