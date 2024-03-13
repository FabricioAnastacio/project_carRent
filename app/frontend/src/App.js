import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ Login } />
      <Route exact path="/register" Component={ Register } />
    </Routes>
  );
}

export default App;
