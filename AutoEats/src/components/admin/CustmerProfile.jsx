import React from 'react'
import { useLocation } from 'react-router-dom';


const CustmerProfile = () => {
    const location = useLocation();
    const customerId = location.state?.myData;

    return (
        <div>


        </div>
    )
}

export default CustmerProfile
