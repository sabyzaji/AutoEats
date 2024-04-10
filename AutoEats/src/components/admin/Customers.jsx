import React, { useEffect, useState } from 'react';
import Drawer from '../../layouts/AdminLayout';
import axios from 'axios';
import CustomerCard from './AdminComponents/CustomerCard';
import { useNavigate } from "react-router-dom";



const Customers = () => {
    const navigate = useNavigate()
    const [customerArray, setCustomerArray] = useState([]);


    const handleCardClick = (customerId) => {

        navigate('/customer-profile', { state: { myData: customerId } });
    };

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/admin/customer-details');
                const customerData = response.data;
                setCustomerArray(customerData);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        fetchCustomerData();
    }, []);

    // Log the updated customerArray whenever it changes
    useEffect(() => {

    }, [customerArray]);

    return (
        <div className="flex flex-col h-full">
            <div className='flex justify-start p-4'>
                <Drawer />
                <div className='font-semibold text-2xl mt-2 ml-3'>
                    Customers Details
                </div>
            </div>
            <div className='m-2 md:m-10 mt-10 p-2 md:p-10 bg-white rounded-3xl'>
                <div className='ml-14 grid grid-cols-6 font-extrabold'>
                    <div>Customer Name</div>
                    <div>Email Id</div>
                    <div>Contact Number</div>
                    <div>Account Opening Date</div>
                    <div>Number of Orders Ordered</div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {customerArray.map((customer) => (
                        <CustomerCard key={customer._id} customer={customer} onClick={(customerId) => handleCardClick(customerId)} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Customers;
