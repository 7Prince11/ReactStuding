import React from 'react';
import './SelectedSort.css';

const SelectSort = ({options , defaultValue , value , onChange}) => {
    return (
        <select value={value}
        onChange={e => onChange(e.target.value)}
        
        > 
            <option value=''>{defaultValue}</option>
           
            {options.map(option => <option 
            key={option.value}
            value={option.value}>{option.name}</option>)}


        </select>
    );
};


export default SelectSort;