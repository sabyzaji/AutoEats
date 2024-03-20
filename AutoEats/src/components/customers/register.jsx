import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import CONSTANTS from "../../constants/appConstant";
const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [phoneNum, setPhoneNum] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [registrationStatus, setRegistrationStatus] = useState("");

    const handleSignIn = async () => {
        event.preventDefault();
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
                        // Include authentication token or credentials here if required
                        // "Authorization": "Bearer <your_token>"
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
            console.error("Error occurred during sign-in:", error);
            setRegistrationStatus(CONSTANTS.STATUS_CONSTANTS.FAILED);
        }
    };


    // const handleSignIn = async () => {
    //     event.preventDefault();


    //     try {
    //         console.log("kdfskjk");
    //         const requestData = JSON.stringify({
    //             name: name,
    //             phoneNumber: phoneNum,
    //             // email: email,
    //             // password: password,
    //         });

    //         const response = await fetch("http://localhost:3500/api/sign-up", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 // "Content-Length": Buffer.byteLength(requestData),
    //             },
    //             body: requestData,
    //         });
    //         console.log(response)
    //         if (!response.ok) {
    //             // throw new Error(RESPONSE_STATUS_CONSTANTS.FAILED, "error in start job");
    //             consol.log("hello")
    //         }
    //         const data = await response.json();
    //     } catch (error) {
    //         console.error("Error occurred during sign-in:", error);
    //         if (error.message.includes("404")) {
    //             console.error("API returned a 404 error.");
    //         }
    //         setRegistrationStatus(CONSTANTS.STATUS_CONSTANTS.FAILED);
    //     }
    // };





    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
                <form className="flex flex-col">
                    <input
                        className="px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Full Name"
                        type="text"
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Phone Number"
                        type="tel"
                        name='number'
                        onChange={(e) => setPhoneNum(e.target.value)}
                    />
                    <input
                        className="px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Email"
                        type="email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Password"
                        type="password"
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        className="px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Confirm Password"
                        type="password"
                    />
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
