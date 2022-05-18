import React , {useState, useRef} from 'react';
import './App.css';

//Not using currently

// import Buttons from './UI/Buttons/Buttons';
// import InputName from './UI/InputName/InputName';
// import Input from './UI/Inputs/Input';
// import InputNewName from './Props/Form/InputNewName';
// import InputNewJob from './Props/Form/InputNewJob';
// import InputNewCountry from './Props/Form/InputNewCountry';

import Posts from './Props/Posts';
import Form from './Props/Form2.0/Form';
import InputNewName from './Props/Form/InputNewName';
import InputNewCountry from './Props/Form/InputNewCountry';
import InputNewJob from './Props/Form/InputNewJob';
import SelectSort from './UI/Select/SelectSort';
// import PropsShow from './Props/PropsShow';
 
 

// import Show_Text from './WorkPlace/Show_Text';
// import Plus_Minus from './WorkPlace/Plus_Minus';

function App() {
  
       const [posts , setPosts] = useState([
         {id : 1 , name : 'Oleksandr' , job : 'Frond-end' , country : 'Ukraine'},
          {id : 2 , name : 'Olek' , job : 'Middle' , country : 'Ukraine'},
          {id : 3 , name : 'Alex' , job : 'Backend' , country : 'Ukraine'},
       ]);

 

         


      
       const creatForm = (newPost) => {
          
        setPosts( [...posts, newPost] );

       }

       const removeForm = (componentToDelete) => {

        setPosts( posts.filter( p=>p.id !== componentToDelete.id ) );


         
       }

       const [selectedSort, setSelectedSort] = useState('');
       const sortPosts=(sort)=>{
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b )=>a[sort].localeCompare(b[sort])));
      }
      
       

  return (
    <div className="App">
      
      {/* <Plus_Minus/> */}
      {/* <Show_Text/> */}
      {/* <Buttons></Buttons>
      <InputName></InputName>
      <Input></Input> */}


      <h2 style={{color : 'white' , fontSize:'35px' , marginBottom: '35px'}}>Form for creating new post</h2>
      



      <Form create={creatForm} funcform = {removeForm}/>
      <SelectSort
      defaultValue = 'Choose by'
      value=  {selectedSort}
      onChange={sortPosts}
    
      options = {[
        {value : 'Name' , name : 'Choose by name'},
        {value : 'Job' , name : 'Choose by job'},
        {value : 'Country' , name : 'Choose by country'},


      ]}
      
      
      />
      {posts.length !== 0 
      ? <Posts posts={posts} funcform={removeForm}/> 
      : <h2 style={{color : 'white' , fontSize:'35px' , marginBottom: '35px'}}>No posts</h2>
      }
      {/* <PropsShow posts=  {{id : 1 , name : 'Oleksandr' , job : 'Frond-end' , country : 'Ukraine'}}/> */}
    </div>
  );
}

export default App;
