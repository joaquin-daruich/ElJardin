import React from 'react';
import './App.css'
import {  Route, Routes } from 'react-router-dom';
import Video from './Video';
import Inicio from './Inicio';



  const App =  () => {
    



  return (
   
    
    <>
      <Routes>
      <Route path='/video' element={<Video></Video>}/>
      <Route path='/' element={<Inicio></Inicio>}/>
      </Routes>

      
    
</>
  );
}

export default App;