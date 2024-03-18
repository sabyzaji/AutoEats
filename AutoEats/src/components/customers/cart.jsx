import React from 'react'
import Navbar from './Navbar'
import CartCard from '../../layouts/cartCard'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 h-screen py-8 pt-20  ">
                <div className="container mx-auto px-4">

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6   mb-4">
                                <div className='flex  justify-around'>
                                    <div className="text-left font-semibold">Products</div>
                                    <div className="text-left font-semibold">Price</div>
                                    <div className="text-left font-semibold">Quantity</div>
                                    <div className="text-left font-semibold">Total</div>
                                </div>

                                <CartCard />    <CartCard />    <CartCard />    <CartCard />    <CartCard />    <CartCard />    <CartCard />
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>$19.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>$1.99</span>
                                </div>

                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">$21.98</span>
                                </div>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
