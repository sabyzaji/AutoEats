
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { FilterTwoTone } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { Radio, Space } from 'antd';

const Filterbox = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [value, setValue] = useState(1);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const onChangeRadio = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };
    const catergoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
    const priceOptions = ['below 10', '10-40', '40-70', '70-100', 'above 100']
    return (
        <>
            <Button
                type="primary"
                style={{ border: "1px solid #dfdfdf", background: "white", height: "70px", width: "70px", display: "flex", justifyContent: "center", alignItems: "center" }}
                className='rounded-full p-5 shadow-lg'
                onClick={showDrawer}
            >
                <FilterTwoTone className='text-4xl' />
            </Button>
            <Drawer title="Filter" onClose={onClose} open={open}>

                <div className='  text-xl font-semibold'>Catergories</div>
                <div>
                    <Checkbox.Group onChange={onChange}>
                        <div>
                            <Checkbox value="Breakfast" className="" />
                            <span className='  font-medium text-base'>Breakfast</span>
                        </div>
                        <div>
                            <Checkbox value="Lunch" className="font-medium" />
                            <span className='  font-medium text-base'>Lunch</span>
                        </div>
                        <div>
                            <Checkbox value="Dinner" className="font-medium" />
                            <span className='  font-medium text-base'>Dinner</span>
                        </div>
                        <div>
                            <Checkbox value="Snacks" className="font-medium" />
                            <span className='  font-medium text-base'>Snacks</span>
                        </div>
                    </Checkbox.Group>

                </div><br />
                <div className='  text-xl font-semibold'>Price</div>
                <div >
                    <Checkbox.Group onChange={onChange}>
                        <div>
                            <Checkbox value="below10" className="text-xl font-medium" />
                            <span className='  font-medium text-base'>Below 10</span>
                        </div>
                        <div>
                            <Checkbox value="10-40" className="text-xl font-medium" />
                            <span className=' font-medium  text-base'>10-40</span>
                        </div>
                        <div>
                            <Checkbox value="40-70" className="text-xl font-medium" />
                            <span className=' font-medium  text-base'>40-70</span>
                        </div>
                        <div>
                            <Checkbox value="70-100" className="text-xl font-medium" />
                            <span className=' font-medium  text-base'>70-100</span>
                        </div>
                        <div>
                            <Checkbox value="above100" className="text-xl font-medium" />
                            <span className='  font-medium text-base'>above 100</span>
                        </div>
                    </Checkbox.Group>

                </div><br />
                <div className='  text-xl font-semibold'>Sort By</div>
                <div>
                    <Radio.Group onChange={onChangeRadio} value={value}>
                        <Space className='  font-medium' direction="vertical">
                            <Radio value={1} className=' text-base'>Popularity</Radio>
                            <Radio value={2} className='text-base'>Price -- Low to High</Radio>
                            <Radio value={3} className='text-base'>Price -- High to Low</Radio>
                            <Radio value={4} className='text-base'>By Rating</Radio>
                        </Space>
                    </Radio.Group>
                </div><br /><br />
                <div className='m-auto'>
                    <button className="bg-blue-500 m-auto hover:bg-blue-600 text-white font-bold py-2 px-4 w-full rounded">
                        Apply
                    </button>
                </div>



            </Drawer>


        </>

    );
};
export default Filterbox;