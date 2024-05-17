import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StaffMain = () => {
    const location = useLocation();
    const staffId = location.state.staffId;
    console.log(staffId);
    const [reqOrderList, setReqOrderList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/staff/display');
                const reqOrderListData = response.data;
                setReqOrderList(reqOrderListData);
                // console.log(reqOrderListData);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFoodData();
    }, []);

    const handleNavigation = (path) => {
        console.log(staffId)
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
            <div className='font-bold text-3xl pl-14 pt-8'>Requested Orders</div>
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
                    {reqOrderList.map((order, index) => (
                        <OrderCard key={index} order={order} btn={'Accept'} staffid={staffId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default StaffMain;
