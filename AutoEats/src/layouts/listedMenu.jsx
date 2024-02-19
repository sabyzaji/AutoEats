import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ListedMenuCard = (props) => {
    return (
        <div className=" border-red-600 border  py-3">
            <div className=" h-3/4 w-full">
                <img className=" " src={props.img} alt={props.imgName} />
            </div>
            <div className="mx-3">
                <div className="flex  justify-between ">
                    <div className="font-semibold">{props.name}</div>
                    <div className=" font-bold text-right">${props.price}</div>
                </div>
                <div>{props.category}</div>
                <div>{props.rating}</div>
                <div className="flex justify-around  bg-custom-nav rounded-full cursor-pointer items-center">
                    <div className="  flex   text-white font-semibold px-3 py-2  ">
                        Add to cart</div>
                    <div> <FaShoppingCart size={18} color="white" /></div>

                </div>
            </div>

        </div>
    )
};

export default ListedMenuCard;
