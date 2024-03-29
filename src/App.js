import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Temp from './pages/Temp/Temp';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/temp' element={<Temp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
