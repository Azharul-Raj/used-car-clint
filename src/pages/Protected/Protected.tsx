import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SpinnerMedium from '../../components/SpinnerMedium';

const Protected = ({ children }:{children:React.ReactNode}) => {
    const location = useLocation();
    const data = useContext(AuthContext);
    
    if (data?.loading) {
        return <SpinnerMedium/>
    }
    if (data?.user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Protected;