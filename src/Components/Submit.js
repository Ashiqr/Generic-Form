import React from 'react';

const Submit = (data) => {

    const getFormData = (e) =>{
        var container = document.getElementById('react-root');
        var inputs = container.getElementsByTagName('input');
        var result = {};
        for (var index = 0; index < inputs.length; ++index) {
            result[inputs[index].name] = inputs[index].value;
        }
        return result;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(getFormData(e));
    };

    return (
        <React.Fragment>
            <button type='submit' onClick={handleSubmit}>{data.text}</button>
        </React.Fragment>
    )
};

export default Submit;