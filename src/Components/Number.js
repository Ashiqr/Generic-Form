import React from 'react';

const Number = (data) => {
    return (
        <React.Fragment>
            <label style={{marginRight: '5px'}}>{data.label}:</label>
            <input type='number' placeholder={data.label} min={data.min} max={data.max} step={data.step}
            name={data.name} onChange={(e) => e.currentTarget.setCustomValidity(data.Validate(e.currentTarget.value).message)}
            >
            </input>
        </React.Fragment>
    )
};

export default Number;