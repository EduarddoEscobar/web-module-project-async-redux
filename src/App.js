import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(resp => console.log(resp))
      .catch(err => console.error(err))
  })

  return (
    <div className="App">
      Async Redux Project
    </div>
  );
}

export default App;