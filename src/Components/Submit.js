import React from 'react';

const Submit = (data) => {

    const getInputsData = (formName) => {
        var container = document.getElementById(formName);
        var inputs = container.getElementsByTagName('input');
        var result = {};
        for (var index = 0; index < inputs.length; ++index) {
            if (inputs[index].checkValidity()){
                result[inputs[index].name] = inputs[index].value;
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
    const getFormData = (e) =>{
        var result = getInputsData(data.formName);
        if (!result){
            return 'Form has invalid input';
        }
        result = Object.assign({}, result, getSelectsData(data.formName));
        e.preventDefault();
        return result;
    }

    const handleSubmit = (e) => {
        console.log(getFormData(e));
    };

    return (
        <React.Fragment>
            <div style={{marginTop: '10px'}}>
                <button type='submit' onClick={handleSubmit}>{data.text}</button>
            </div>
        </React.Fragment>
    )
};

export default Submit;