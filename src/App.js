import React from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {
  const APP_KEY= 
  "f02974c602160f0bdf45a1ef326d622a";

  const APP_ID="d3187738";

  const url =
`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

const getData  = async () => {
  const result = await Axios.get(url);
  console.log(result)
}

  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
      <form className="Search-Form">
        <input type="text" placeholder="Search Food" autoComplete="off"/>
        <input type="submit" value="Search"/>
      </form>
    </div>
  )
}

export default App
