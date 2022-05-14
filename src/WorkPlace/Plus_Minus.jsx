import React , {useState} from 'react';

const Plus_Minus = () => {
    const [count , setCount] = useState(0);


    return (
        <div>
            <h1>Plus_Minus</h1>
            <h2>{count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Plus</button>
            <button onClick={()=>{setCount(count-1)}}>Minus</button>

        </div>
    );
};

export default Plus_Minus;