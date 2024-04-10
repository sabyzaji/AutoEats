import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ListedMenuCard from '../../layouts/listedMenu';
import Footer from './Footer';
import Filterbox from '../../layouts/filterbox';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Fullmenu = () => {
    const [menuArray, setMenuArray] = useState([]);
    const location = useLocation();
    // console.log(location.state.userId)
    console.log(location.state.menuArray)


    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await axios.post('http://localhost:3500/api/fetch-item');
                const menuData = response.data;  // Corrected variable name to menuData
                setMenuArray(menuData);
                // console.log(menuData)
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };

        fetchFoodData();
    }, []);

    return (
        <div>
            <div className='pb-5'>
                <Navbar />
            </div>
            <div>
                {/* <div className="fixed top-15 right-8 text-white font-bold py-2 px-4 z-10">
                    <Filterbox />
                </div> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {menuArray.map((foodItem) => (
                        <ListedMenuCard
                            key={foodItem._id}
                            itemId={foodItem._id}
                            img={foodItem.imageURL}
                            name={foodItem.itemName}
                            price={foodItem.price}
                            category={foodItem.category}
                            rating={foodItem.rating}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Fullmenu;
