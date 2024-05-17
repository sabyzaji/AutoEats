import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StaffProfile = () => {
    const location = useLocation();
    const staffId = location.state.staffId;
    const navigate = useNavigate();
    const [staffData, setStaffData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleNavigation = (path) => {
        navigate(path, { state: { staffId } });
    };

    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                const requestData = JSON.stringify({
                    staffID: staffId
                });

                const response = await axios.post("http://localhost:3500/staff/display-staff-profile", requestData, {
                    headers: {
                        "Content-Type": "application/json",
                    }
                });

                if (response.status === 200) {
                    const staffProfile = response.data;
                    setStaffData(staffProfile);
                    // console.log(response.data)
                    console.log(staffData)
                } else {
                    throw new Error("Failed to fetch staff data");
                }
            } catch (error) {
                setError("Error fetching staff data");
            } finally {
                setLoading(false);
            }
        };

        fetchStaffData();

        // Cleanup function
        return () => {
            setStaffData(null);
            setLoading(true);
            setError(null);
        };
    }, [staffId]);

    return (
        <>
            <div className='flex justify-end gap-9 pr-7 mt-10 font-semibold'>
                <div className='cursor-pointer' onClick={() => handleNavigation('/')}>
                    Profile
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/reqStaff')}>
                    Requested Order
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/acpStaff')}>
                    Accepted Order
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/delStaff')}>
                    Delivered Order
                </div>
                <div className='cursor-pointer' onClick={() => handleNavigation('/')}>
                    Logout
                </div>
            </div><div className='font-bold text-3xl pl-14 pt-8'>Staff Profile</div>
            {loading && <div className="text-center">Loading...</div>}
            {error && <div className="text-center text-red-500">Error: {error}</div>}
            {staffData && (
                <div className="bg-white shadow-md rounded p-4 mt-8">
                    <p><span className="font-semibold">Name:</span> {staffData[0].name}</p>
                    <p><span className="font-semibold">Email:</span> {staffData[0].email}</p>
                    <p><span className="font-semibold">Phone Number:</span> {staffData[0].phoneNumber}</p>
                    <p><span className="font-semibold">Adhar ID:</span> {staffData[0].adharId}</p>
                    <p><span className="font-semibold">Gender:</span> {staffData[0].gender}</p>
                    <p><span className="font-semibold">No. of Orders Taken:</span> {staffData[0].no_of_orders_taken}</p>
                    <p><span className="font-semibold">Created At:</span> {new Date(staffData[0].createdAt).toLocaleString()}</p>
                </div>
            )}
        </>
    );
};

export default StaffProfile;
