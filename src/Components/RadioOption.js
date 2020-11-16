import React from 'react';

const RadioOption = (data) => {
    return (
        <React.Fragment>
            <div style={data.style}>
            <label style={{marginRight: '5px', display:'table-cell', width:'160px'}}>{data.label}:</label>
            {data.options.map((option) => (
                <label key={option.value} ><input type="radio" name={data.name} value={option.value}/>{option.label}</label>
            ))}
            </div>
        </React.Fragment>
    )
};

export default RadioOption;
