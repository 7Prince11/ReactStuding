import React , {useRef} from 'react';
import './Posts.css';
import PropsShow from './PropsShow';



const Posts = ({posts , funcform}) => {

    // const showinput = useRef('');
    
  
    
   

    return (
        <div>
{/* 
        <input ref={showinput}></input>
      <br/><br/>
      <button
        onClick={ ()=> {console.log(showinput.current.value)}}>
        Show in console
      </button> */}

      {posts.map((post , index) => (<PropsShow 
       funcform={funcform}
      number={index + 1 } 
      post={post} 
      key={post.id}/> ))}


    

   


        </div>
    
    );
};



export default Posts;