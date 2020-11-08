import React, { useState } from 'react';

const Name = (data) => {
    var [message, setMessage] = useState('');
    return (
        <React.Fragment>
            <label>{data.title}:</label>
            <input type='text' placeholder={data.title} maxLength={Number(data.max)} required={data.required}
            name={data.title} onChange={(e) => setMessage(message = data.fun(e.currentTarget.value))}></input>
            <p>{message}</p>
        </React.Fragment>
    )
};

export default Name;