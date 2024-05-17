import React from 'react';
import { Button } from 'antd';
import axios from 'axios';

const OrderCard = ({ order, btn, staffid }) => {

    const handleAcceptOrder = async () => {
        try {
            const requestData = JSON.stringify({
                orderId: order.order._id,
                staffID: staffid
            });
            const response = await axios.post(
                `http://localhost:3500/staff/changeStatusToAcp`,
                requestData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            );
            if (response.status === 200) {
                console.log("Order status changed successfully:", requestData);
            } else {
                throw new Error("Failed to change order status");
            }
            window.location.reload()
        } catch (error) {
            console.error("Error changing order status:", error);
        }

    };


    const handleDeliveredOrder = async () => {
        try {
            const requestData = JSON.stringify({
                orderId: order.order._id,
                staffID: staffid
            });
            const response = await axios.post(
                `http://localhost:3500/staff/changeStatusToDel`,
                requestData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }

            );
            if (response.status === 200) {
                console.log("Order status changed successfully:", requestData);
            } else {
                throw new Error("Failed to change order status");
            }
            window.location.reload()
        } catch (error) {
            console.error("Error changing order status:", error);
        }

    };

    const handleClick = () => {
        if (btn === "Accept") {
            handleAcceptOrder();
        } else if (btn === "Delivered") {
            handleDeliveredOrder();
        } else if (btn === "Completed") {
            console.log("Complete order:", order.order._id);
        }
    };

    return (
        <div className="border rounded-md w-full">
            <div className="">
                <div className="grid grid-cols-8 ml-14 items-center">
                    <div>
                        {/* <img src={order.order.ProductImage} alt="Product" className="w-16 h-16 mr-4" /> */}
                    </div>
                    <div>
                        {order.orderItems.map((item, index) => (
                            <div key={index}>
                                <p>{item.itemName}({item.quantity})</p>
                                <p> </p>
                            </div>
                        ))}
                    </div>
                    <div> {order.order.customerName}</div>
                    <div> {order.order.totalAmount}</div>
                    <div>{new Date(order.order.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</div>

                    <div> {order.order.deliveryAddress}</div>
                    <div>
                        <span className='font-semibold' style={{ padding: '0.25rem 0.5rem', borderRadius: '0.25rem' }}>
                            {order.order.orderStatus}
                        </span>
                    </div>
                    <div>
                        <Button type="primary" block className='bg-green-400 px-3' disabled={btn === "Completed"} onClick={handleClick}>{btn}</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderCard;
