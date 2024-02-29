import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={ Login } />
    </Routes>
  );
}

export default App;
