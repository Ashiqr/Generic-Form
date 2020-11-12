import React from 'react';

const SelectOption = (data) => {
    return (
        <React.Fragment>
            <div style={data.style}>
                <label style={{marginRight: '5px', display:'table-cell', width:'160px'}}>{data.label}:</label>
                <select name={data.name}  >
                {data.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
            </div>
        </React.Fragment>
    )
};

export default SelectOption;