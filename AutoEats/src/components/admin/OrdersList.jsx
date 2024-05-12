import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Drawer from '../../layouts/AdminLayout'
import AdminOrderCard from './AdminComponents/OrderCardAdmin';



const OrdersList = () => {
    const [reqOrderList, setReqOrderList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/admin//order-display');
                const reqOrderListData = response.data;
                setReqOrderList(reqOrderListData);
                // console.log(reqOrderListData);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFoodData();
    }, []);

    return (
    <div className="flex flex-col h-full">
        <div className='flex justify-start p-4'>
            <Drawer />
            <div className='font-semibold text-2xl mt-2 ml-3'>
                Orders Details
            </div>
        </div>
        <div className='m-2 md:m-10 mt-10 p-2 md:p-10 bg-white rounded-3xl'>
            <div className='ml-14 grid grid-cols-8 font-extrabold'>
                <div>Image</div>
                <div>Item</div>
                <div>Customer Name</div>
                <div>Total Amount</div>
                <div>Date</div>
                <div>Seat Number</div>
                <div>Status</div>
                {/* <div>Action</div> */}
            </div>
            <div className='flex flex-wrap'>
                {reqOrderList.map((order, index) => (
                    <AdminOrderCard key={index} order={order} />
                ))}
            </div>
        </div>
    </div>
    )
}

export default OrdersList
