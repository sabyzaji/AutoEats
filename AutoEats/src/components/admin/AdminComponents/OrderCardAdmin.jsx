import React from 'react'
import { Button } from 'antd';

const AdminOrderCard = ({ order }) => {
    console.log(order)
    return (
        <div className="border rounded-md w-full border-x-2 border-y-4 border-orange-400 mt-5">
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

                </div>
            </div>
        </div >
    )
}

export default AdminOrderCard
