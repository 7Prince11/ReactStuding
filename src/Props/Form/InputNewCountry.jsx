import React from 'react';
import classes from './InputNewCountry.module.css';

const InputNewCountry = React.forwardRef((props, ref) => {
    return (
        <div>
             <input 
            type="text"
            className={classes.InputCountry}
            ref={ref}
            {...props}
            
            placeholder="Write your country"/>


        </div>
    );
});

export default InputNewCountry;