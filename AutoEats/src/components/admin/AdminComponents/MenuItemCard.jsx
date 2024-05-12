import React, { useState } from 'react';
import { Switch as AntSwitch } from 'antd';
import axios from 'axios';

const MenuItemCard = ({ items }) => {
    const [availability, setAvailability] = useState(items.availability);

    const formatPreparationTime = (isoTimeString) => {
        if (!isoTimeString) return "Not entered";

        const timeString = isoTimeString.slice(11, 19);
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        
        return `${totalMinutes} min`;
    };

    const toggleAvailability = async (_id) => {
        try {
            const requestData = JSON.stringify({
                menuId: _id
            });

            const response = await axios.post("http://localhost:3500/admin/change-availability", requestData, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.status === 200) {
                const { availability: newAvailability } = response.data; // Assuming the response contains the new availability
                setAvailability(newAvailability);
            } else {
                throw new Error("Failed to update availability");
            }
        } catch (error) {
            console.error("Error updating availability:", error);
        }
    };
    // grid grid-cols-8 my-3 border-green-200 border-e-8 border-y-4 border-s-8 border
    return (
        <div>
            <div className="grid grid-cols-8 w-11/12  border-green-200 border-e-8 border-y-4 border-s-8 border mr-32   h-16 items mt-3" style={{ width: "100%" }}>
                <div className='flex justify-center items-center'><img alt='image' src={items.image || 'Not entered'} /></div>
                <div className='flex justify-center items-center'>{items.itemName || 'Not entered'}</div>
                <div className='flex justify-center items-center'>{items.category || 'Not entered'}</div>
                <div className='flex justify-center items-center'>{items.ingredients || 'Not entered'}</div>
                <div className='flex justify-center items-center'>{items.price || 'Not entered'}</div>
                <div className='flex justify-center items-center'>{formatPreparationTime(items.preparationTime)}</div>
                <div className='flex justify-center items-center'>{items.description || 'Not entered'}</div>
                <div className='flex justify-center items-center'>
                    <AntSwitch checked={availability} onChange={() => toggleAvailability(items._id)} />
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
