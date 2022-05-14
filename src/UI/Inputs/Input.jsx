 import React  , {useState} from 'react';
 import classes from './Input.module.css';
 
 
 const Input = () => {
        const [text , showText] = useState('');
         
     return (
         <div>
             <input 
                onChange={e => showText(e.target.value)}

             className={classes.Input} placeholder='Write something' type='text'>
          </input>
            <h2>{text}</h2>

           
         </div>
         
          

     );
 };
 
 export default Input;