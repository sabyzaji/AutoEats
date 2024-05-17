import { ConsoleSqlOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ListedMenuCard = (props) => {
    const location = useLocation();
    const userId = location.state.userId;
    const menuArray = location.state.menuArray;
    const [cartItems, setCartItems] = useState(location.state.menuArray || []);

    const addToCart = (itemId, itemName, price) => {
        // Check if the item is already in the cart
        const isItemInCart = cartItems.some(item => item.itemId === itemId);

        if (!isItemInCart) {
            // Add the item to the cart
            const newCartItem = { itemId, itemName, price, quantity: 1 };
            setCartItems(prevItems => [...prevItems, newCartItem]);

            // Update the menuArray in the location state
            location.state.menuArray.push(newCartItem);
        }
        console.log(cartItems)
    };

    return (
        <div className=" border-red-600 border  py-20 w-auto h-auto ">
            <div className=" h-3/4 w-full">
                <img className=" h-4/5 w-full " src={props.img} alt={props.imgName} />
                {console.log(props.img)}
            </div>
            <div className="mx-3">
                <div className="flex  justify-between ">
                    <div className="font-semibold">{props.name}</div>
                    <div className=" font-bold text-right">₹{props.price}</div>
                </div>
                <div>{props.category}</div>
                <div>{props.rating}</div>
                <div className="flex justify-around  bg-custom-nav rounded-full cursor-pointer items-center"
                    onClick={() => addToCart(props.itemId, props.name, props.price)}>
                    <div className="  flex   text-white font-semibold px-3 py-2  ">
                        Add to cart</div>
                    <div> <FaShoppingCart size={18} color="white" /></div>

                </div>
            </div>

        </div>
    )
};

export default ListedMenuCard;
