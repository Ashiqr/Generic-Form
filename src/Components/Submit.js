import React from 'react';

const Submit = (data) => {

    const getFormData = (e) =>{
        var container = document.getElementById(data.formName);
        var inputs = container.getElementsByTagName('input');
        var result = {};
        for (var index = 0; index < inputs.length; ++index) {
            if (inputs[index].checkValidity()){
                result[inputs[index].name] = inputs[index].value;
            }
            else{
                return 'Form contains invalid input';
            }
        }
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