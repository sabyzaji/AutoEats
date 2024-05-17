import React, { useEffect, useState } from 'react';
import OrderCard from './components/OrderCard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const DeliveredOrder = () => {
    const location = useLocation();
    const staffId = location.state.staffId;
    console.log(staffId);
    const [reqOrderList, setReqOrderList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDeliveredOrders = async () => {
            try {
                const response = await axios.post('http://localhost:3500/staff/delOrders');
                setReqOrderList(response.data);
            } catch (error) {
                console.error('Error fetching delivered orders:', error);
            }
        };

        fetchDeliveredOrders();
    }, []);

    return (
        <>
            <div className='flex justify-end  gap-9  pr-7  mt-10 font-semibold'>
                <div className='cursor-pointer' onClick={() => navigate('/staff-profile', { state: { staffId } })}>Profile</div>
                <div className=' cursor-pointer ' onClick={() => navigate("/reqStaff", { state: { staffId } })}>Requested Order</div>
                <div className=' cursor-pointer ' onClick={() => navigate("/acpStaff", { state: { staffId } })}>Accepted Order</div>
                <div className=' cursor-pointer ' onClick={() => navigate("/delStaff", { state: { staffId } })}>Delivered Order</div>
                <div className=' cursor-pointer' onClick={() => navigate('/')}>Logout</div>
            </div>
            <div className='font-bold text-3xl pl-14 pt-8'>Delivered Orders</div>
            <div className="m-2 md:m-10 mt-10 p-2 md:p-10 bg-white rounded-3xl">
                <div className="ml-14 grid grid-cols-8 font-extrabold">
                    <div>Image</div>
                    <div>Item</div>
                    <div>Customer Name</div>
                    <div>Total Amount</div>
                    <div>Date</div>
                    <div>Seat Number</div>
                    <div>Status</div>
                    <div>Action</div>
                </div>
                <div className="flex flex-wrap">
                    {reqOrderList.map((order, index) => (
                        <OrderCard key={index} order={order} btn={"Completed"} staffid={staffId} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DeliveredOrder;
