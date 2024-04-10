import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CustomerCard = ({ customer, onClick }) => {
  const [ordersNumber, setOrdersNumber] = useState(0); // State to hold the number of orders

  // Parse the createdAt date string and format it as "day month year"
  const formattedDate = new Date(customer.createdAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  useEffect(() => {
    const fetchOrdersNumber = async () => {
      try {
        const requestData = JSON.stringify({
          userId: customer._id
        });

        const response = await axios.post("http://localhost:3500/admin/fetch-orders-customer", requestData, {
          headers: {
            "Content-Type": "application/json",
          }
        });

        if (response.status === 200) {
          const responseData = response.data;

          const numberOfOrders = responseData.length;
          setOrdersNumber(numberOfOrders);
        } else {
          throw new Error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrdersNumber(); // Call the function to fetch the number of orders
  }, [customer._id]); // Call the effect whenever customer._id changes

  return (
    <div className="grid grid-cols-6 ml-14 items-center p-4 border-b border-gray-400 mx-5 cursor-pointer " onClick={() => onClick(customer._id)}>
      <div >{customer.name}</div>
      <div>{customer.email}</div>
      <div>{customer.phoneNumber}</div>
      <div>{formattedDate}</div>
      <div>{ordersNumber}</div>
    </div>
  );
};

export default CustomerCard;
