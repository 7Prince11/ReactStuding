import React  , {useState} from 'react';
import classes from './InputName.module.css';

const InputName = (props) => {

    const [text , showText] = useState('');

    const ShowLog = () => {
        
        console.log(text);

        

    }
    return (
        <div>
            <input 
            
            onChange={e => showText(e.target.value)}
            
            className={classes.inputName} placeholder='Write your name' type='text'>
            
            </input>

            <button {...props}   className={classes.button} onClick={ShowLog}>Show Log</button>


            
        </div>
    );
};

export default InputName;