import React from 'react'
import './App.css'


const App = () => {
  const APP_KEY= 
  "f02974c602160f0bdf45a1ef326d622a";

  const APP_ID="d3187738";

  const url =
`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return (
    <div className="App">
      <h1> Food Searching App </h1>
    </div>
  )
}

export default App
