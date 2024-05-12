import React from 'react';

const CartCard = ({ img, name, price, quantity, updateQuantity }) => {
    const handleDecrease = () => {
        if (quantity > 0) {
            updateQuantity(-1); // Decrease quantity by 1

        }
    };

    const handleIncrease = () => {
        updateQuantity(1); // Increase quantity by 1
    };

    return (
        <div className='mx-4'>
            <div className='p-5 gap-6 flex'>
                <div className='flex'>
                    <img className="h-16 w-16 mr-4" src={img} alt="Product image" />
                    <span className="font-semibold m-auto ml-0">{name}</span>
                </div>
                <div className='m-auto'> ₹{price.toFixed(2)} </div>
                <div>
                    <div className="flex justify-center mt-4 ">
                        <button className="border rounded-md bg-slate-100 px-2" onClick={handleDecrease}>-</button>
                        <span className="text-center w-8">{quantity}</span>
                        <button className="border rounded-md bg-slate-100 px-2" onClick={handleIncrease}>+</button>
                    </div>
                </div>
                <div className='m-auto'>₹{(price * quantity).toFixed(2)}</div>
            </div>
        </div>
    );
};

export default CartCard;
