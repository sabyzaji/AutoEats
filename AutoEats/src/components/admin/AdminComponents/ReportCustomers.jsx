import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReportCustomers = ({ customer }) => {
  const [ordersNumber, setOrdersNumber] = useState(0);

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
    <div>
      <div className="grid grid-cols-3 ml-14 items-center p-4 border-y-4 mt-3 border-x-2 mx-5  " >
        <div >{customer.name}</div>
        <div>{customer.phoneNumber}</div>
        <div>{ordersNumber}</div>
      </div>

    </div>
  )
}

export default ReportCustomers
