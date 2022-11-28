import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useRole from '../../hooks/useRole';
import SpinnerMedium from '../../components/SpinnerMedium';

const SellerProtected = ({ children }) => {
    const location = useLocation();
    const { user,loading } = useContext(AuthContext);
    const [role, isLoading] = useRole(user?.email);
    if (loading || isLoading) {
        return <SpinnerMedium/>
    }
    if (user?.uid && role==='Seller') {
        return children;
    }
    return <Navigate to='*'state={{from:location}} replace/>
};

export default SellerProtected;