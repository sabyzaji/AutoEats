import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Profile</h1>
                <div className="bg-white shadow-md rounded-md p-6">
                    {/* User information */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">User Information</h2>
                        <p className="text-gray-600">Name: John Doe</p>
                        <p className="text-gray-600">Email: johndoe@example.com</p>
                        <p className="text-gray-600">Phone: +1234567890</p>
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">Address</h2>
                        <p className="text-gray-600">123 Main St, City, Country</p>
                    </div>

                    {/* Orders */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Example order card */}
                            <div className="bg-gray-100 rounded-md p-4">
                                <h3 className="text-lg font-semibold mb-2">Order #12345</h3>
                                <p className="text-gray-600">Date: January 1, 2024</p>
                                <p className="text-gray-600">Total: $25.00</p>
                                <Link to="/order/12345" className="text-blue-500 hover:underline">View Details</Link>
                            </div>
                            {/* Add more order cards here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
