import React from 'react';
import './Posts.css';

const PropsShow = (props) => {
    
      
    return (
        <div>
 
            
        <div className="container">
            <div className="row">
             <h2>{props.number}</h2>
             <h2>{props.post.name}</h2>
             <h2>{props.post.job}</h2>
             <h2>{props.post.country}</h2>
            <button className="btn" onClick={() => props.funcform(props.post)}>Delete</button>
            </div>
        </div>

       





            
        </div>
    );
};

export default PropsShow;