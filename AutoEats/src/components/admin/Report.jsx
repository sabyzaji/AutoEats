import React, { useEffect, useState } from 'react';
import Drawer from '../../layouts/AdminLayout';
import axios from 'axios';
import ReportCustomers from './AdminComponents/ReportCustomers';

const Report = () => {
    const [customerArray, setCustomerArray] = useState([]);
    const [tableCount, setTableCount] = useState([]);
    const [dailyOrdersAndRevenue, setDailyOrdersAndRevenue] = useState([]);

    function chunkArray(array, size) {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
            array.slice(index * size, index * size + size)
        );
    }

    useEffect(() => {
        const fetchCustomerData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/admin/customer-details');
                setCustomerArray(response.data);
            } catch (error) {
                console.error('Error fetching customer data:', error);
            }
        };

        const fetchTableCount = async () => {
            try {
                const response = await axios.post('http://localhost:3500/admin/table-count');
                setTableCount(response.data);
            } catch (error) {
                console.error('Error fetching table count:', error);
            }
        };

        const fetchDailyOrdersAndRevenue = async () => {
            try {
                const response = await axios.post('http://localhost:3500/admin/daily-order-revenue');
                setDailyOrdersAndRevenue(response.data);
            } catch (error) {
                console.error('Error fetching daily orders and revenue:', error);
            }
        };

        fetchCustomerData();
        fetchTableCount();
        fetchDailyOrdersAndRevenue();
    }, []);

    return (
        <div className="flex flex-col h-full">
            <div className='flex justify-start p-4'>
                <Drawer />
                <div className='font-semibold text-2xl mt-2 ml-3'>
                    Reports
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/2 border border-green-300 px-5'>
                    <div className='m-auto font-extrabold text-2xl font-serif'>Customers Visit Chart</div>
                    <div className='m-2 md:m-10 p-2 md:p-10'>
                        <div className='ml-14 grid grid-cols-3 font-extrabold'>
                            <div>Customer Name</div>
                            <div>Contact Number</div>
                            <div>Number of Orders Ordered</div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {customerArray.map((customer) => (
                                <ReportCustomers key={customer._id} customer={customer} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-1/2 border border-red-500 px-5'>
                    <div className='m-auto font-extrabold text-2xl font-serif'>Frequently Used Table</div>
                    <div className='m-2 md:m-10 p-2 md:p-10'>
                        <div className="overflow-y-auto" style={{ maxHeight: "360px" }}>
                            {chunkArray(Object.entries(tableCount), 9).map((chunk, index) => (
                                <div key={index} className="grid grid-cols-3 gap-4">
                                    {chunk.map(([seatNumber, orderCount]) => (
                                        <div key={seatNumber} className="flex justify-between items-center border-b border-green-300 py-2 mx-6 px-7">
                                            <div>{seatNumber}</div> -
                                            <div>{orderCount}</div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/2 border border-red-500 px-5'>
                    <div className='m-auto font-extrabold text-2xl font-serif'>Daily Orders and Revenue</div>
                    <div className='m-2 md:m-10 p-2 md:p-10'>
                        <div className='ml-14 grid grid-cols-3 font-extrabold'>
                            <div>Date</div>
                            <div>Number of Orders</div>
                            <div>Total Revenue</div>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            {dailyOrdersAndRevenue.map((item, index) => (
                                <div key={index} className="grid grid-cols-3 items-center border-b border-green-300 py-2 ml-14">
                                    <div>{item._id}</div>
                                    <div>{item.totalOrders}</div>
                                    <div >{item.totalRevenue.toFixed(2)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-1/2 border border-green-300 px-5'>
                    {/* <div className='m-auto font-extrabold text-2xl font-serif'>Favorite Delight</div> */}
                </div>
            </div>
        </div>
    );
}

export default Report;
