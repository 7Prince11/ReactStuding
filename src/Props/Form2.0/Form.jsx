import React , {useState} from 'react';
import InputNewCountry from '../Form/InputNewCountry';
import InputNewJob from '../Form/InputNewJob';
import InputNewName from '../Form/InputNewName';

const Form = ({create , funcform}) => {
    const [post , setPost] = useState(
        
        
        
        {name : '' , job : '' , country : ''});

    function addNewPost(e){
        e.preventDefault();
            const newPost = {
              ...post , id: Date.now() 
            }
            create(newPost);
            setPost({name : '' , job : '' , country : ''});
       
        
      }
     
       
    return (
        <form>

        

     <InputNewName  value={post.name} onChange={e => setPost( {...post , name : e.target.value})}/> 
      <InputNewJob value={post.job}  onChange={e => setPost( {...post , job : e.target.value})}/>
      <InputNewCountry value={post.country} onChange={e => setPost( {...post , country : e.target.value})}/>

        
      <button 
      
      style={{margin : '0 0 20px 0' }}
      
      onClick={addNewPost}>Click</button>

    </form>
    );
};

export default Form;