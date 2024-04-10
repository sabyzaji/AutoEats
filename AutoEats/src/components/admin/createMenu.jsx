import React, { useState } from 'react';
import { Form, Input, Button, Switch, Select, DatePicker } from 'antd';

const { Option } = Select;

const CreateMenu = () => {
    const [formValues, setFormValues] = useState({
        itemName: '',
        description: '',
        availability: true,
        category: '',
        price: '',
        quantity_left: '',
        ingredients: '',
        imageURL: '',
        preparationTime: null
    });

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (values) => {
        console.log(values); // Logging all the form values
        // Here, you can perform actions like submitting to backend
        setFormValues({
            itemName: '',
            description: '',
            availability: true,
            category: '',
            price: '',
            quantity_left: '',
            ingredients: '',
            imageURL: '',
            preparationTime: null
        });
    };

    return (
        <div className="max-w-md mx-auto px-4 py-8 bg-white shadow-md rounded">
            <Form layout="vertical" onFinish={handleSubmit} >
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
                    <Select value={formValues.category} onChange={(value) => handleChange('category', value)} required>
                        <Option value="appetizer">Appetizer</Option>
                        <Option value="mainCourse">Main Course</Option>
                        <Option value="dessert">Dessert</Option>
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
                    label={<span style={{ fontWeight: 'bold' }}>Quantity Left</span>}
                    name="quantity_left"
                    rules={[{ required: true, message: 'Please enter the quantity left' }]}
                >
                    <Input type="number" value={formValues.quantity_left} onChange={(e) => handleChange('quantity_left', e.target.value)} required />
                </Form.Item>
                <Form.Item
                    label={<span style={{ fontWeight: 'bold' }}>Ingredients</span>}
                    name="ingredients"
                    rules={[{ required: true, message: 'Please enter the ingredients' }]}
                >
                    <Input.TextArea value={formValues.ingredients} onChange={(e) => handleChange('ingredients', e.target.value)} required />
                </Form.Item>
                <Form.Item
                    label={<span style={{ fontWeight: 'bold' }}>Image URL</span>}
                    name="imageURL"
                    rules={[{ required: true, message: 'Please enter the image URL' }]}
                >
                    <Input value={formValues.imageURL} onChange={(e) => handleChange('imageURL', e.target.value)} required />
                </Form.Item>
                <Form.Item
                    label={<span style={{ fontWeight: 'bold' }}>Preparation Time</span>}
                    name="preparationTime"
                    rules={[{ required: true, message: 'Please select the preparation time' }]}
                >
                    <DatePicker showTime value={formValues.preparationTime} onChange={(date) => handleChange('preparationTime', date)} required />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateMenu;
