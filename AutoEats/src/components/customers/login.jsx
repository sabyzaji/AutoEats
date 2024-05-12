import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import axios from 'axios';

const LogIn = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        if (!phoneNumber || !password) {
            setError("Phone number and password are required");
            return;
        }

        if (phoneNumber === "staff" && password === "staff123") {
            navigate("/reqstaff");
        } else if (phoneNumber === "admin" && password === "admin123") {
            navigate("/menu-management");
        } else {
            try {
                const requestData = JSON.stringify({
                    phoneNumber: phoneNumber,
                    password: password,
                });

                const response = await axios.post(
                    `http://localhost:3500/api/login`,
                    requestData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );

                if (response.status === 200) {
                    const responseData = response.data;
                    const userId = responseData.loggedUserId;
                    let menuArray = [];

                    navigate("/home", { state: { userId, menuArray } });
                } else {
                    throw new Error("Failed to login");
                }
            } catch (error) {
                console.log(error);
                setError("Failed to login");
            }
        }
    };

    return (
        <div className="flex justify-center h-screen overflow-hidden bg-custom-bg">
            <div className="w-full h-4/6 p-6 m-auto bg-custom-bg rounded-md shadow-xl shadow-rose-600/40 ring-2  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="text" className="block text-sm font-semibold text-gray-800" >
                            Phone Number
                        </label>
                        <input
                            type="text"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    <div className="mt-6">
                        <button
                            onClick={handleLogin}
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        >
                            Login
                        </button>
                    </div><br />
                    <div className=' flex justify-center'>OR</div><br />
                    <div className='flex   justify-center gap-4 m-auto'>
                        <FaSquareXTwitter size={"24px"} onClick={() => { navigate('/') }} cursor={"pointer"} />
                        <FaFacebook size={"24px"} onClick={() => { navigate('#') }} cursor={"pointer"} />
                        <FaGoogle size={"24px"} onClick={() => { navigate('#') }} cursor={"pointer"} />
                    </div>
                </form>
                <p className="mt-8 text-bs  font-normal text-center text-gray-700 ">
                    Don't have an account?{" "}
                    <a className="font-medium text-purple-600 hover:underline" style={{ cursor: 'pointer' }} onClick={() => navigate('/register')}>
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default LogIn;
