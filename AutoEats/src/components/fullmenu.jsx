import React from 'react'
import Navbar from './Navbar'
import CategoryMenu from './CategoryMenu';
import FoodData from '../data/FoodData';
import ListedMenuCard from '../layouts/listedMenu';
import Footer from './Footer';
import Filterbox from '../layouts/filterbox';

const Fullmenu = () => {
    return (
        <div className=''>
            <div className=' pb-20'>
                <Navbar />
            </div>
            <div className=' '>
                <div className=" fixed top-15 right-8 text-white font-bold py-2 px-4 z-10"
                >
                    <Filterbox /></div>
                <div className="  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

            </div>
            <Footer />


        </div>
    )
}

export default Fullmenu;
