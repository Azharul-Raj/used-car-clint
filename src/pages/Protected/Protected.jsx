import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import SpinnerMedium from '../../components/SpinnerMedium';

const Protected = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <SpinnerMedium/>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Protected;