import React from 'react';
import classes from './InputNewName.module.css';

const InputNewName = (props) => {
    return (
        <div>
          
             <input 
            type="text"
            className={classes.InputName}
             
            {...props}
            
            placeholder="Write your name"/>

        </div>
    );
};

export default InputNewName;