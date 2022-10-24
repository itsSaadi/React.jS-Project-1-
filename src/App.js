

import "./App.css";

import Text from "./componnets/Text";
import React, { useState } from 'react'
import Nav from "./componnets/Nav";
// import Alert from "./componnets/Alert";
import About from "./componnets/About"






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
    

 <Nav tit='Text-Analyzer' x  mode={mode} changeMode={changeMode} yl={yellow} gr={green} rd={red}/>
   
  

     <Text heading='Enter text to Analyze' mode={mode} />
   <About mode={mode}  />
 
  
      
 
        </div>
       
    </>
  );
}

export default App;
