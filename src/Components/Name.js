import React from 'react';

const Name = (data) => {
    return (
        <React.Fragment>
            <label style={{marginRight: '5px'}}>{data.label}:</label>
            <input type='text' placeholder={data.label} maxLength={Number(data.max)}
            name={data.name} onChange={(e) => e.currentTarget.setCustomValidity(data.Validate(e.currentTarget.value).message)}>
            </input>
        </React.Fragment>
    )
};

export default Name;