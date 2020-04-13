import React from 'react';
import Navigation from './components/Navigation';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
