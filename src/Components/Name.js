import React, { useState } from 'react';

const Name = (data) => {
    var [validate, setValidate] = useState({result: true, message: ''});
    return (
        <React.Fragment>
            <label>{data.label}:</label>
            <input type='text' placeholder={data.label} maxLength={Number(data.max)} required={data.required}
            name={data.name} onChange={(e) => setValidate(validate = data.Validate(e.currentTarget.value))}></input>
            <p>{validate.message}</p>
        </React.Fragment>
    )
};

export default Name;