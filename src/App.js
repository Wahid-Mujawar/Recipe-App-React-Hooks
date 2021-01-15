import React,{ useState } from 'react';
import './App.css';
import Axios from 'axios';
import Recipe from './Components/Recipe';
import {v4 as uuidv4} from 'uuid';
import Alert from './Components/Alert';

const App = () => {
  const[query, setQuery] = useState("");
  const[recipes, setRecipes] = useState([]);
  const[alert, setAlert]= useState("");

  const APP_ID="d3187738";
  const APP_KEY="f02974c602160f0bdf45a1ef326d622a";

  const url =
`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

const getData  = async () => {
  if(query !== ""){
  const result = await Axios.get(url);

  if (!result.data.more) {
    return setAlert("No food with such name");
  }

  console.log(result);
  setRecipes(result.data.hits);
  setAlert("");
  setQuery("");
  }else {
    setAlert("Please Fill The Form")
  }
};


const onChange = e => setQuery(e.target.value);

const onSubmit = e => {
  e.preventDefault();
  getData();
};


  return (
    <div className="App">
      <h2>Food Searching App</h2>
      <form className="search-form" onSubmit={onSubmit}>
      {alert !== "" && <Alert alert={alert} />}
        <input type="text" placeholder="Search Food" 
        autoComplete="off" onChange={onChange} value={query}/>
        <input type="submit" value="search"/>
      </form>
      <div className="recipes">
        {recipes !==[] &&
          recipes.map(recipe =><Recipe key={uuidv4()} 
          recipe = {recipe}/>)}
    </div>
    </div>
  )
}

export default App
