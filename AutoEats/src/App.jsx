import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainScr from './components/customers/main';
import Navbar from './components/customers/Navbar';
import Fullmenu from './components/customers/fullmenu';
import Profile from './components/customers/Profile';
import LogIn from './components/customers/login';
import Cart from './components/customers/cart';
import Register from './components/customers/register';
import StaffMain from './components/staff/StaffMain';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<MainScr />} />
        <Route path="/menuList" element={<Fullmenu />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/staff" element={<StaffMain />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
