import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes className="content">
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
