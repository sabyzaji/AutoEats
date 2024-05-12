import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import MainScr from './components/customers/main';
import Navbar from './components/customers/Navbar';
import Fullmenu from './components/customers/fullmenu';
import Profile from './components/customers/Profile';
import LogIn from './components/customers/login';
import Cart from './components/customers/cart';
import Register from './components/customers/register';
import StaffMain from "./components/staff/StaffMain"
import MenuManagement from './components/admin/MenuManagement';
import Staff from './components/admin/Staff';
import Customers from './components/admin/Customers';
import OrdersList from './components/admin/OrdersList';
import Report from './components/admin/Report';
import DeliveredOrder from './components/staff/DeliveredOrder';
import StaffProfile from './components/staff/StaffProfile';
import AcceptedOrder from './components/staff/AcceptedOrder'
import CreateMenu from './components/admin/createMenu';
import CustmerProfile from './components/admin/CustmerProfile';


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


        {/* Staff */}
        <Route path="/reqStaff" element={<StaffMain />} />
        <Route path='/delStaff' element={<DeliveredOrder />} />
        <Route path='/profileStaff' element={<StaffProfile />} />
        <Route path='/acpStaff' element={<AcceptedOrder />} />


        {/* Admin */}
        <Route path="/menu-management" element={<MenuManagement />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders-list" element={<OrdersList />} />
        <Route path="/report" element={<Report />} />
        <Route path="/createmenu" element={<CreateMenu />} />
        <Route path='/customer-profile/' element={<CustmerProfile />} />


      </Routes>

    </BrowserRouter>
  );
};

export default App;
