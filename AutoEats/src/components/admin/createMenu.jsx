import React, { useState } from 'react';
import { Form, Input, Button, Switch, Select, TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import axios from "axios"
import { useNavigate } from "react-router-dom";
dayjs.extend(customParseFormat);

const { Option } = Select;

const CreateMenu = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        itemName: '',
        description: '',
        availability: true,
        category: '',
        price: '',
        ingredients: '',
        imageURL: '',
        preparationTime: null
    });

    const handleImageUpload = async (e) => {
        try {
            const formData = new FormData();
            formData.append('image', e.target.files[0]);

            const response = await axios.post('http://localhost:3500/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 200) {
                const imageUrl = response.data.imageUrl;
                setFormValues({ ...formValues, imageURL: imageUrl });
            } else {
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (values) => {
        try {
            const requestData = {
                itemName: values.itemName,
                description: values.description,
                availability: values.availability,
                category: values.category,
                price: values.price,
                ingredients: values.ingredients,
                imageURL: formValues.imageURL, // Using the stored image URL
                preparationTime: values.preparationTime
            };

            const response = await axios.post('http://localhost:3500/admin/add-item', requestData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.status === 200) {
                console.log('Item added successfully');
                navigate('/menu-management');
            } else {
                console.error('Failed to add item');
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <>
            <div className='font-bold flex justify-center text-2xl'>Create a New Item</div>
            <div className="max-w-xl mx-auto px-4 py-8 bg-white shadow-md rounded">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Item Name</span>}
                        name="itemName"
                        rules={[{ required: true, message: 'Please enter the item name' }]}
                    >
                        <Input value={formValues.itemName} onChange={(e) => handleChange('itemName', e.target.value)} required />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Description</span>}
                        name="description"
                        rules={[{ required: true, message: 'Please enter the description' }]}
                    >
                        <Input.TextArea value={formValues.description} onChange={(e) => handleChange('description', e.target.value)} required />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Availability</span>}
                        name="availability"
                        valuePropName="checked"
                    >
                        <Switch checked={formValues.availability} onChange={(checked) => handleChange('availability', checked)} />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Category</span>}
                        name="category"
                        rules={[{ required: true, message: 'Please select a category' }]}
                    >
                        <Select
                            value={formValues.category}
                            onChange={(value) => handleChange('category', value)}
                            placeholder="Select a category"
                            style={{ width: '100%' }}
                            required
                        >
                            <Option value="breakfast">Breakfast</Option>
                            <Option value="lunch">Lunch</Option>
                            <Option value="dinner">Dinner</Option>
                            <Option value="snacks">Snacks</Option>
                            <Option value="drinks">Drinks</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Price</span>}
                        name="price"
                        rules={[{ required: true, message: 'Please enter the price' }]}
                    >
                        <Input type="number" value={formValues.price} onChange={(e) => handleChange('price', e.target.value)} required />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Ingredients</span>}
                        name="ingredients"
                        rules={[{ required: true, message: 'Please enter the ingredients' }]}
                    >
                        <Input.TextArea value={formValues.ingredients} onChange={(e) => handleChange('ingredients', e.target.value)} required />
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Image </span>}
                        name="imageURL"
                    >
                        <div className='flex'>
                            <Input type='text' onChange={handleImageUpload} />
                        </div>
                    </Form.Item>
                    <Form.Item
                        label={<span style={{ fontWeight: 'bold' }}>Preparation Time</span>}
                        name="preparationTime"
                        rules={[{ required: true, message: 'Please select the preparation time' }]}
                    >
                        <TimePicker
                            onChange={(time, timeString) => handleChange('preparationTime', time)}
                            format="HH:mm:ss"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded text-lg ">
                            Submit
                        </Button>
                    </Form.Item>
                </Form >
            </div >
        </>
    );
};

export default CreateMenu;
