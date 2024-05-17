import axios from 'axios';
import React from 'react';

const StaffCard = ({ customer }) => {
    // Function to format timestamp to human-readable date
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <div className="grid grid-cols-3 ml-14 items-center p-4 border-y-4 mt-3 border-x-2 border-red-300 mx-5">
            <div>{customer.name}</div>
            <div>{formatDate(customer.createdAt)}</div>
            <div>{formatDate(customer.ordersTaken)}</div>
        </div>
    );
};

export default StaffCard;
