import React  , {useState} from 'react';
import classes from './Buttons.module.css';

const Buttons = (props) => {

    const [count , ChangeCount] = useState(0);

    const Increment = () => {
        ChangeCount(count + 1);
    }
    const Decrement = () => {
        ChangeCount(count - 1);
    }

    return (
        <div>

            <h2>{count}</h2>
            <button {...props} className={classes.Button} onClick={Increment}>Increment</button>
            <button {...props} className={classes.Button} onClick={Decrement}>Decrement</button>

            
        </div>
    );
};

export default Buttons;