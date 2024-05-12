import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const customerId = location.state.userId;
    const [customerData, setCustomerData] = useState(null);
    const [customerOrderData, setCustomerOrderData] = useState(null);

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const requestData = JSON.stringify({
                    customerId: customerId
                });

                const response = await axios.post("http://localhost:3500/admin/customer-detail-by-id", requestData, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (response.status === 200) {
                    const customerData = response.data;
                    setCustomerData(customerData);
                } else {
                    throw new Error("Failed to fetch customer data");
                }
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        const fetchOrderData = async () => {
            try {
                const requestData = JSON.stringify({
                    userId: customerId
                });

                const response = await axios.post("http://localhost:3500/admin/fetch-orders-customer", requestData, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (response.status === 200) {
                    const customerOrderData = response.data;
                    setCustomerOrderData(customerOrderData);
                } else {
                    throw new Error("Failed to fetch customer data");
                }
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };

        fetchCustomerData();
        fetchOrderData();
        return () => {
            // Cleanup function
        };
    }, [customerId]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };
    return (
        <div className="bg-gradient-to-b from-purple-400 to-indigo-500 p-8 flex justify-center items-center min-h-screen">
            {customerData && (
                <div className="w-1/3 bg-white shadow-md rounded-lg p-6 mr-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Profile</h2>
                    <div className="mb-4">
                        <p className="text-gray-600 font-medium">Name: <span className="text-gray-800">{customerData[0].name}</span></p>
                        <p className="text-gray-600 font-medium">Email: <span className="text-gray-800">{customerData[0].email}</span></p>
                        <p className="text-gray-600 font-medium">Phone Number: <span className="text-gray-800">{customerData[0].phoneNumber}</span></p>
                        <p className="text-gray-600 font-medium">Created At: <span className="text-gray-800">{formatDate(customerData[0].createdAt)}</span></p>

                        {/* Display other customer fields as needed */}
                    </div>
                </div>
            )}
            {customerOrderData && (
                <div className="w-2/3 bg-white shadow-md rounded-lg p-6 ml-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4"> Orders</h2>
                    {customerOrderData.map((order, index) => (
                        <div key={index} className="mb-4 border-gray-200 border p-4 rounded-lg">
                            <p className="text-gray-600 font-medium">Order ID: <span className="text-gray-800">{order.order._id}</span></p>
                            <p className="text-gray-600 font-medium">Order Status: <span className="text-gray-800">{order.order.orderStatus}</span></p>
                            <p className="text-gray-600 font-medium">Total Amount: <span className="text-gray-800">{order.order.totalAmount}</span></p>
                            {/* Display other order details as needed */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profile;
