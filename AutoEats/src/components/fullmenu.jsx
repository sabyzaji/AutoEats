import React from 'react'
import Navbar from './Navbar'
import CategoryMenu from './CategoryMenu';
import FoodData from '../data/FoodData';
import ListedMenuCard from '../layouts/listedMenu';
import Footer from './Footer';

const Fullmenu = () => {
    return (
        <div className='bg-custom-bg'>
            <div className=' pb-20'>
                <Navbar />
            </div>
            <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {FoodData.map((foodItem) => (
                    <ListedMenuCard key={foodItem.id}
                        img={foodItem.img}
                        name={foodItem.name}
                        price={foodItem.price}
                        category={foodItem.category}
                        rating={foodItem.rating}
                    />
                ))}
            </div>
            <Footer />

        </div>
    )
}

export default Fullmenu;
