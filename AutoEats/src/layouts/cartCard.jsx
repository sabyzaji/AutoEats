import React from 'react'

const CartCard = () => {
    return (
        <div className=' mx-4'>
            <div className=' p-5 flex   '>

                <div className='flex '>
                    <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image" />
                    <span className="font-semibold m-auto ml-0">Product name</span>
                </div>
                <div className='m-auto'> $19.99 </div>
                <div>
                    <div class="flex justify-center mt-4 ">
                        <button className="border rounded-md  ">-</button>
                        <span className="text-center w-8">1</span>
                        <button className="border rounded-md ">+</button>
                    </div>
                </div>

                <div className=' m-auto'>$19.99</div>
            </div>
        </div>
    )
}

export default CartCard
