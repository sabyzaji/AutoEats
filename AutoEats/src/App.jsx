import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainScr from './components/main';
import Navbar from './components/Navbar';
import Fullmenu from './components/fullmenu';
import Profile from './components/Profile';
import LogIn from './components/login';
import Cart from './components/cart';
import Register from './components/register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<MainScr />} />
        <Route path="/menuList" element={<Fullmenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
