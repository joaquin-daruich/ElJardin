import React from 'react';
import './App.css'
import {  Route, Routes } from 'react-router-dom';

import Inicio from './Inicio';



  const App =  () => {
    



  return (
   
    
    <>
      <Routes>
      <Route path='/:slug' element={<Inicio></Inicio>}/>
      </Routes>

      
    
</>
  );
}

export default App;