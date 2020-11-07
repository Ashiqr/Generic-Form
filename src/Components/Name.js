import React from 'react';

const  Name = (data) => {
    return (
        <React.Fragment>
            <span>{data.title}:</span>
            <input type='text' placeholder={data.title} maxLength={Number(data.max)} required={data.required}></input>

        </React.Fragment>
    )
};

export default Name;