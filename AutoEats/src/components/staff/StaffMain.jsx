import React from 'react';

import { ordersData } from '../../data/dummy';
import Header from './Header';
import OrderCard from './components/OrderCard';
const StaffMain = () => {
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Staff Page" title="Orders" />
            <div className='ml-14 grid grid-cols-8  font-extrabold'>
                <div>Image </div>
                <div>Item </div>
                <div> Customer Name</div>
                <div> Total Amount</div>
                <div> Order ID</div>
                <div> Location</div>
                <div> Status</div>
                <div>Action</div>
            </div>
            <div className="flex flex-wrap">
                {ordersData.map((order, index) => (
                    <OrderCard key={index} order={order} />
                ))}
            </div>
        </div>
    );
};

export default StaffMain;
