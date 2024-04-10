import React from 'react';
import { DrawerProvider } from '../../layouts/AdminLayout';
import MenuManagement from './MenuManagement';
import Staff from './Staff';
import Customers from './Customers';
import OrdersList from './OrdersList';
import Report from './Report';



const AdminDashboard = () => {
    return (
        <DrawerProvider>
            <MenuManagement />
            <Staff />
            <Customers />
            <OrdersList />
            <Report />
        </DrawerProvider>
    );
};

export default AdminDashboard;
