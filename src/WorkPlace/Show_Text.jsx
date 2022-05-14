import React , {useState} from 'react';
import './Show_Text.css';

const Show_Text = () => {
    const [text , writeText] = useState('Here shows text you write');
    return (
        <div>
            <h1>Show Text</h1>

            <h2>{text}</h2>

            <textarea 
            onChange={(e) => writeText(e.target.value)}
             placeholder="Type here"
            ></textarea>


        </div>
    );
};

export default Show_Text;