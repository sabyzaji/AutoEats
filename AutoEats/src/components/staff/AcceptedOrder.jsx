import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AcceptedOrder = () => {
    const location = useLocation();
    const staffId = location.state.staffId;
    console.log(staffId);
    const [acceptedOrdersWithItems, setAcceptedOrdersWithItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAcceptedOrdersWithItems = async () => {
            try {
                const response = await axios.post('http://localhost:3500/staff/acpOrders');
                const acceptedOrdersWithItems = response.data;
                setAcceptedOrdersWithItems(acceptedOrdersWithItems);
            } catch (error) {
                console.error('Error fetching accepted orders with items:', error);
            }
        };

        fetchAcceptedOrdersWithItems();
    }, []);

    const handleNavigation = (path) => {
        navigate(path, { state: { staffId } });
    };

    return (
        <>
            <div className='flex justify-end gap-9 pr-7 mt-10 font-semibold'>
                <div className='cursor-pointer' onClick={() => handleNavigation('/staff-profile')}>
                    Profile
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/reqStaff')}>
                    Requested Order
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/acpStaff')}>
                    Accepted Order
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/delStaff')}>
                    Delivered Order
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/')}>
                    Logout
                </div>
            </div>
            <div className='font-bold text-3xl pl-14 pt-8'>Accepted Orders</div>
            <div className='m-2 md:m-10 mt-10 p-2 md:p-10 bg-white rounded-3xl'>
                <div className='ml-14 grid grid-cols-8 font-extrabold'>
                    <div>Image</div>
                    <div>Item</div>
                    <div>Customer Name</div>
                    <div>Total Amount</div>
                    <div>Date</div>
                    <div>Seat Number</div>
                    <div>Status</div>
                    <div>Action</div>
                </div>
                <div className='flex flex-wrap'>
                    {acceptedOrdersWithItems.map((order, index) => (
                        <OrderCard key={index} order={order} btn={'Delivered'} staffid={staffId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AcceptedOrder;
