import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "user@gmail.com" && password === "user123") {
            navigate("/home");
        } else if (username === "staff@gmail.com" && password === "staff123") {
            navigate("/staff");
        } else if (username === "admin@gmail.com" && password === "admin123") {
            navigate("/home");
        } else {
            alert("Invalid credentials");
        }


    }

    return (
        <div className="flex justify-center h-screen overflow-hidden bg-custom-bg">
            <div className="w-full h-4/6 p-6 m-auto bg-custom-bg rounded-md shadow-xl shadow-rose-600/40 ring-2  lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800" >
                            Username
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a href="#" className="text-xs text-purple-600 hover:underline">
                        Forget Password?
                    </a>
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