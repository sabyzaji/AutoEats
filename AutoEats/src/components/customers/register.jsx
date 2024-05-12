import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CONSTANTS from "../../constants/appConstant";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registrationStatus, setRegistrationStatus] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }

        if (!phoneNum.trim()) {
            newErrors.phoneNum = "Phone number is required";
            valid = false;
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
            valid = false;
        }

        if (!password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
            valid = false;
        }

        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSignIn = async (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        try {
            const requestData = JSON.stringify({
                name: name,
                phoneNumber: phoneNum,
                email: email,
                password: password,
            });

            const response = await axios.post(
                `http://localhost:3500/api/sign-up`,
                requestData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                setRegistrationStatus(CONSTANTS.STATUS_CONSTANTS.COMPLETED);
                navigate('/');
            } else {
                throw new Error("Server returned non-200 status code");
            }
        } catch (error) {
            console.error("Error occurred during sign-up:", error);
            setRegistrationStatus(CONSTANTS.STATUS_CONSTANTS.FAILED);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
                <form className="flex flex-col">
                    <input
                        className={`px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500 ${errors.name && 'border-red-500'}`}
                        placeholder="Full Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <input
                        className={`px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500 ${errors.phoneNum && 'border-red-500'}`}
                        placeholder="Phone Number"
                        type="tel"
                        value={phoneNum}
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                    {errors.phoneNum && <p className="text-red-500 text-sm">{errors.phoneNum}</p>}
                    <input
                        className={`px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500 ${errors.email && 'border-red-500'}`}
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    <input
                        className={`px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500 ${errors.password && 'border-red-500'}`}
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    <input
                        className={`px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500 ${errors.confirmPassword && 'border-red-500'}`}
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    <button
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                        onClick={handleSignIn}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
