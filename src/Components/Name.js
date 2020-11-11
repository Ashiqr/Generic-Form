import React from 'react';

const Name = (data) => {
    return (
        <React.Fragment>
            <div style={data.style}>
                <label style={{marginRight: '5px', display:'table-cell', width:'160px'}}>{data.label}:</label>
                <input type='text' placeholder={data.label} maxLength={Number(data.max)} required={data.required}
                    name={data.name} onChange={(e) => e.currentTarget.setCustomValidity(data.Validate(e.currentTarget.value).message)}>
                </input>
            </div>
        </React.Fragment>
    )
};

export default Name;