import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import './App.css';
import PageDetail from './components/home/PageDetail';

function App() {
  return (
    <Routes>
        <Route path="/" exact element={<Home />}>
          
          </Route>
        <Route path="/page/:id" element={<PageDetail />} >
        
          </Route>
    </Routes>
  );
}

export default App;