// src/App.js
import ModelContainer  from './components/ModelContainer';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModelViewer from './components/ModelViewer';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<ModelContainer/>}/>
        {/* <Route path='/model' element = {<ModelViewer/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
