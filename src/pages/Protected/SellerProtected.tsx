import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useRole from '../../hooks/useRole';
import SpinnerMedium from '../../components/SpinnerMedium';

const SellerProtected = ({ children }:{children:React.ReactNode|any}) => {
    const location = useLocation();
    const data = useContext(AuthContext);
    const [role, isLoading] = useRole(data?.user?.email);
    if (data?.loading || isLoading) {
        return <SpinnerMedium/>
    }
    if (data?.user?.uid && role==='Seller') {
        return children;
    }
    return <Navigate to='*'state={{from:location}} replace/>
};

export default SellerProtected;