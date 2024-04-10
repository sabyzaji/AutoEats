import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CartCard from '../../layouts/cartCard';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
    const location = useLocation();
    const initialmenuArray = location.state.menuArray || [];
    const userId = location.state.userId;
    const [subtotal, setSubtotal] = useState(0);
    const [selectedSeat, setSelectedSeat] = useState("");
    const [seatError, setSeatError] = useState(false);
    const [totalAmount, setTotalAmount] = useState("")
    const [menuArray, setMenuArray] = useState(initialmenuArray)
    const navigate = useNavigate();;
    const handleChange = (event) => {
        setSelectedSeat(event.target.value);
        setSeatError(false);
    };

    useEffect(() => {
        calculateSubtotal();
    }, [menuArray]);

    const calculateSubtotal = () => {
        const newSubtotal = menuArray.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setSubtotal(newSubtotal);
        let totaltemp = (subtotal * 1.05).toFixed(2)
        setTotalAmount(totaltemp)
        console.log(totalAmount)

    };

    const updateQuantity = (index, change) => {
        const newMenuArray = [...menuArray];
        const updatedItem = newMenuArray[index];
        updatedItem.quantity += change;
        newMenuArray[index] = updatedItem;

        // Log the updated item
        console.log({
            itemId: updatedItem.itemId,
            itemName: updatedItem.itemName,
            quantity: updatedItem.quantity,
            unitPrice: updatedItem.price,
            quantityIncreased: change > 0 ? true : false
        });
        // Update the subtotal
        calculateSubtotal();
    };

    const seatNumbers = [
        "1A", "1B", "1C", "1D", "1E", "1F",
        "2A", "2B", "2C", "2D", "2E", "2F",
        "3A", "3B", "3C", "3D", "3E", "3F"
    ];

    const handleOrder = async () => {
        if (!selectedSeat) {
            setSeatError(true); // Show the seat error message if no seat is selected
            return;
        }
        const userId = location.state.userId;
        console.log(userId);
        console.log('Updated Menu Array:', menuArray);
        try {
            const requestData = JSON.stringify({
                userID: userId,
                items: menuArray,
                totalAmount: totalAmount,
                seatNumber: selectedSeat
            });
            const response = await axios.post(
                `http://localhost:3500/api/create`,
                requestData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            console.log("hello");
            if (response.status === 201) {
                const responseData = response.data;
                console.log(responseData);
                console.log("request successfully ");
                setMenuArray([]); // Clear the menuArray state
                setSelectedSeat(""); // Reset the selected seat
                navigate("/home", { state: { userId, menuArray: [] } });
            } else {
                throw new Error("error");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <Navbar />
            <div className="bg-gray-100 h-screen py-8 pt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <div className='flex justify-around'>
                                    <div className="text-left font-semibold">Products</div>
                                    <div className="text-left font-semibold">Price</div>
                                    <div className="text-left font-semibold">Quantity</div>
                                    <div className="text-left font-semibold">Total</div>
                                </div>
                                {menuArray.map((item, index) => (
                                    <CartCard
                                        key={index}
                                        img={item.imageURL}
                                        name={item.itemName}
                                        price={item.price}
                                        quantity={item.quantity}
                                        updateQuantity={(change) => updateQuantity(index, change)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes (5%)</span>
                                    <span>${(subtotal * 0.05).toFixed(2)}</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${(subtotal * 1.05).toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between'>
                                    <div>Seat Number</div>
                                    <select value={selectedSeat} onChange={handleChange} className='w-20 border-rose-200 ' required>
                                        <option value="">Select</option>
                                        {seatNumbers.map((seat, index) => (
                                            <option key={index} value={seat}>{seat}</option>
                                        ))}
                                    </select>
                                </div>
                                {seatError && <p className="text-red-500">Please select a seat</p>}
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full" onClick={handleOrder}>Checkout</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
