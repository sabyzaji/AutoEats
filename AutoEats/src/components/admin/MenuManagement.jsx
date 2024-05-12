import React, { useEffect, useState } from 'react';
import Drawer from '../../layouts/AdminLayout';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { RiAddFill } from "react-icons/ri";
import MenuItemCard from './AdminComponents/MenuItemCard';

const MenuManagement = () => {
    const navigate = useNavigate();
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/api/fetch-item');
                setMenuData(response.data);
            } catch (error) {
                console.error('Error fetching menu data:', error);
            }
        };

        fetchMenuData();
    }, []);

    return (
        <>
            <div className="flex flex-col h-full">
                <div className='flex justify-start p-4'>
                    <Drawer />
                    <div className='font-semibold text-2xl mt-2 ml-3'>
                        Menu Items
                    </div>
                </div>
                <div className=' border-blue-500 border-4 rounded-2xl absolute top-10 right-20 bg-blue-200'><RiAddFill size={40} onClick={() => { navigate("/createmenu") }} /></div>
                <div className='m-2 md:m-10  p-2 md:p-10 bg-white rounded-3xl'>
                    <div className='ml-14 grid grid-cols-8 font-extrabold'>
                        <div>Image</div>

                        <div>ItemName</div>
                        <div>Category</div>
                        <div>Ingredients</div>
                        <div>Price per Item</div>
                        <div>PreparationTime</div>
                        <div>Description</div>
                        <div>Availability</div>
                    </div>
                    <div className=''>
                        {menuData.map((item, index) => (
                            <MenuItemCard key={index} items={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuManagement;
