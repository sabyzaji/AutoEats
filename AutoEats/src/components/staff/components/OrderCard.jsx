import React from 'react';


const OrderCard = ({ order }) => {
    return (
        <div className="border rounded-md  w-full">
            <div className="">
                <div className='grid grid-cols-8  ml-14 items-center   '>
                    <div> <img src={order.ProductImage} alt="Product" className="w-16 h-16 mr-4" /> </div>
                    <div> {order.OrderItems} </div>
                    <div> {order.CustomerName}</div>
                    <div> {order.TotalAmount}</div>

                    <div>{order.OrderID}</div>
                    <div> {order.Location}</div>
                    <div>
                        <span style={{ backgroundColor: order.StatusBg, padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>{order.Status}</span>
                    </div>
                    <div><button className=' bg-blue-500  rounded-l px-2'>{order.Action}</button></div>
                </div>
            </div>
        </div >
    );
};
export default OrderCard