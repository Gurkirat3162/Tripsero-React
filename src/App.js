import React from 'react';
import logo from './logo.svg';
import './App.css';
import Components from './components/login/index.jsx'

var { Login  } = Components;
console.log(Login )
 function App (){
   return(
     <div className="App">
    <Login/>
     </div>
   )
 }

export default App;
