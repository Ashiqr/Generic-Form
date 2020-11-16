import { useState } from "react";
import React from 'react';

const Submit = (data) => {

    const [showMessage, setShowMessage] = useState(false);
    const ignoreInputs = ['radio'];

    const getInputsData = (formName) => {
        var container = document.getElementById(formName);
        var inputs = container.getElementsByTagName('input');
        var result = {};
        for (var index = 0; index < inputs.length; ++index) {
            if (inputs[index].checkValidity()){
                if (!ignoreInputs.includes(inputs[index].type.toLowerCase())){
                    result[inputs[index].name] = inputs[index].value;
                }
            }
            else{
                return false;
            }
        }
        return result;
    }
    const getSelectsData = (formName) => {
        var container = document.getElementById(formName);
        var selects = container.getElementsByTagName('select');
        var result = {};
        for (var index = 0; index < selects.length; ++index) {
            result[selects[index].name] = selects[index].value;
        }
        return result;
    }

    const getRadioData = (formName, currentInput) =>{
        var container = document.getElementById(formName);
        var checkRadio = container.querySelectorAll('input[type=radio]:checked');
        for (var index = 0; index < checkRadio.length; ++index) {
            currentInput[checkRadio[index].name] = checkRadio[index].value;
        }
        return currentInput;
    }

    const getFormData = (e) =>{
        var result = getInputsData(data.formName);
        if (!result){
            return 'Form has invalid input';
        }
        result = Object.assign({}, result, getSelectsData(data.formName), getRadioData(data.formName, result));
        e.preventDefault();
        setShowMessage(true);
        return result;
    }

    const handleSubmit = (e) => {
        setShowMessage(false);
        console.log(getFormData(e));
    };

    return (
        <React.Fragment>
            <div style={{marginTop: '10px'}}>
                <button type='submit' onClick={handleSubmit}>{data.text}</button>
                {showMessage ? <p>{'Form Submitted! See console log'}</p> : null}
            </div>
        </React.Fragment>
    )
};

export default Submit;