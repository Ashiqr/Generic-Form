// reusable form component goes here
// should be generic, with no code related to one specific type of form
// see the REUSABLE COMPONENT section for details
import React from 'react';
import Name from './Name';
import Number from './Number';
import SelectOption from './SelectOption';
import validation from './validation';
import Submit from './Submit';


const inputStyles = {display: 'table', margin: '10px', };

const Form = () => {return (
    <React.Fragment>
        <form>
            <SelectOption name='title' label='Title' 
                options={[{value: '1', label: 'Mr'}, {value: '2', label: 'Mrs'}, {value: '3', label: 'Miss'}, {value: '4', label: 'Dr'}, {value: '5', label: 'Prof'}]} style={inputStyles}/>
            <Name name='first_name' label='First Name' max='25' value={''} required={true} Validate={(Name) => {
                return validation.ValidateInput([validation.RequiredInput, validation.OnlyText], Name);
            }} style={inputStyles}/>
            <Name name='surname' label='Surname' max='25' value={''} required={false} Validate={(Name) => {
                return validation.ValidateInput([validation.OnlyText], Name);
            }} style={inputStyles}/>
            <Number name='area_code' label='Area Code' value={''} required={false} min={1000} max={99999} step={1} Validate={(number) => {
                return validation.ValidateInput([validation.OnlyNumeric], number);
            }} style={inputStyles}/>
            <Number name='phone_number' label='Phone Number' value={''} required={true} min={0} max={9999999999999} step={1} Validate={(number) => {
                return validation.ValidateInput([validation.RequiredInput, validation.OnlyNumeric], number);
            }} style={inputStyles}/>            

            <Submit text='Submit Form' formName='react-root'/>
        </form>
    </React.Fragment>
    )};
    

export default Form;
