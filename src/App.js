

import "./App.css";

import Text from "./componnets/Text";
import React, { useState } from 'react'
import Nav from "./componnets/Nav";
// import Alert from "./componnets/Alert";
import About from "./componnets/About"
import { BrowserRouter,Routes,Route } from "react-router-dom";





function App() {
 const [mode,setMode]=useState('light')


 const changeMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#03032a'
  }else{
    setMode('light')
    document.body.style.backgroundColor='white'
   
  }
 }
 const yellow=()=>{

    document.body.style.backgroundColor='#ffa500'
    // document.body.style.color='yellow'



 }
 const red=()=>{
document.body.style.backgroundColor='#ff00a5'
 }
 const green=()=>{
document.body.style.backgroundColor='green'
document.body.style.color='white'
 }

  return (
    <>
    <div className="app">
    
 <BrowserRouter> 
 <Nav tit='Text-Analyzer' x  mode={mode} changeMode={changeMode} yl={yellow} gr={green} rd={red}/>
   
  
  <Routes>
      <Route path="/" element= {<Text heading='Enter text to Analyze' mode={mode}/>} />
    <Route  path="/about" element={<About mode={mode} />} />
  </Routes>
  </BrowserRouter>
      
 
        </div>
       
    </>
  );
}

export default App;
