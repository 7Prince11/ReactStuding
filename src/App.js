import React, { useState, useRef , useMemo} from 'react';
import './App.css';

//Not using currently

// import Buttons from './UI/Buttons/Buttons';
// import InputName from './UI/InputName/InputName';
// import Input from './UI/Inputs/Input';
// import InputNewName from './Props/Form/InputNewName';
// import InputNewJob from './Props/Form/InputNewJob';
// import InputNewCountry from './Props/Form/InputNewCountry';
// import InputNewName from './Props/Form/InputNewName';
// import InputNewCountry from './Props/Form/InputNewCountry';
// import InputNewJob from './Props/Form/InputNewJob';



import Posts from './Props/Posts';
import Form from './Props/Form2.0/Form';

import SelectSort from './UI/Select/SelectSort';
import Input from './UI/Inputs/Input';
import MyInput from './UI/MyInput/MyInput';
// import PropsShow from './Props/PropsShow';



// import Show_Text from './WorkPlace/Show_Text';
// import Plus_Minus from './WorkPlace/Plus_Minus';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, name: 'Oleksandr', job: 'Frond-end', country: 'Ukraine' },
    { id: 2, name: 'Olek', job: 'Middle', country: 'Ukraine' },
    { id: 3, name: 'Alex', job: 'Backend', country: 'Ukraine' },
  ]);

  const creatForm = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const removeForm = (componentToDelete) => {
    setPosts(posts.filter(p => p.id !== componentToDelete.id));
  }




  const [SearchByWords , setSearchByWords] = useState('');

  const [selectedSort, setSelectedSort] = useState('');
  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }


  const sortedPosts  = useMemo( ()=>{
    if(selectedSort){
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  
  
  } ,  [selectedSort , posts]);




  

  
  const sortedAndSearchByName = useMemo( ()=>{
    return sortedPosts.filter(post => post.name.toLowerCase().includes(SearchByWords))
  
  }, [SearchByWords , sortedPosts])

  const sortedAndSearchByJob = useMemo( ()=>{
    return sortedPosts.filter(post => post.job.toLowerCase().includes(SearchByWords))
  
  }, [SearchByWords , sortedPosts])

  const sortedAndSearchByCountry = useMemo( ()=>{
    return sortedPosts.filter(post => post.country.toLowerCase().includes(SearchByWords))
  
  }, [SearchByWords , sortedPosts])


  
  
  // const [selected, setSelected] = useState('');
  // let select = document.querySelector('select')
 
  const select = useRef();
  

   

   
  function Select() {
    if (select.current.value === 'name') {
       console.log(sortedAndSearchByName)
  }
   else if (select.current.value === 'job') {
      // return <Input value={SearchByWords} onChange={(e) => setSearchByWords(e.target.value)} />
      console.log(sortedAndSearchByJob)
    }
   else if (select.current.value === 'country') {
      // return <Input value={SearchByWords} onChange={(e) => setSearchByWords(e.target.value)} />
      console.log(sortedAndSearchByCountry)
    }
  else console.log("Deesnt work")
 
}

 

   
  /*try to make a list of choosing which way to search !!!*/



  return (
    <div className="App">

      {/* <Plus_Minus/> */}
      {/* <Show_Text/> */}
      {/* <Buttons></Buttons>
      <InputName></InputName>
      <Input></Input> */}
      
       




      <h2 style={{ color: 'white', fontSize: '35px', marginBottom: '35px' }}>Form for creating new post</h2>




      <Form create={creatForm} funcform={removeForm} />

      


      <input
      value ={SearchByWords}

      onChange = {(e) => setSearchByWords(e.target.value)}
      
      type="text" placeholder="Search by" /> <br/>


      


      <SelectSort
        defaultValue='Choose by'
        value={selectedSort}
        onChange={sortPosts}
        options={[
          { value: 'name', name: 'Choose by name' },
          { value: 'job', name: 'Choose by job' },
          { value: 'country', name: 'Choose by country' }
        ]}
      />

      { 
      sortedAndSearchByName.length 
        ? <Posts funcform={removeForm}  posts={sortedAndSearchByName}/>  
        : <h2 style={{ color: 'white', fontSize: '35px', marginBottom: '35px' }}>No posts</h2>
      
      }
      
      


      {/* <PropsShow posts=  {{id : 1 , name : 'Oleksandr' , job : 'Frond-end' , country : 'Ukraine'}}/> */}
    </div>
  );
}

export default App;
