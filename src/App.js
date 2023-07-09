import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { DashBoard } from './Components/DashBoard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/DashBoard' element={<DashBoard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/DashBoard' element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
