import React,{ useState } from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
  const[query, setQuery] = useState("");

  const APP_KEY= 
  "f02974c602160f0bdf45a1ef326d622a";

  const APP_ID="d3187738";

  const url =
`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

const getData  = async () => {
  const result = await Axios.get(url);
  console.log(result)
};


const onChange = (e) => {
  setQuery(e.target.value)
};

const onSubmit = (e) => {
  e.prevent.getData();
  getData();
};


  return (
    <div className="App">
      <h3>Food Searching App</h3>
      <form className="search-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} />
        <input type="submit" value="search"/>
      </form>
    </div>
  )
}

export default App
