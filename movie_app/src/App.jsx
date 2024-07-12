import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import App_bar from './components/App_bar';
import View from './components/View';
import Add from './components/Add';
import {Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <App_bar />
      <Routes>
        <Route path="/" element={<View />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </>
  )
}

export default App
