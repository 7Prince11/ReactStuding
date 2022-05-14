import React from 'react';
import classes from './InputNewJob.module.css';

const InputNewJob = React.forwardRef((props , ref) => {
    return (
        <div>
            
            <input 
            type="text"
            className={classes.InputJob}
            ref={ref}
            {...props}
            
            placeholder="Write your job"/>



        </div>
    );
});

export default InputNewJob;