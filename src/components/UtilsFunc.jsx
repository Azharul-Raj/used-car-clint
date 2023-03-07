import React, { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useRole from '../hooks/useRole';
import { getToken } from '../Utilities/GetToken';

export const UtilsFunc=()=> {
  
    const navigate = useNavigate();
    const { user, emailLogin, logOut } = useContext(AuthContext);
    const [role] = useRole(user?.email);
    const handleDemoLogin = () => {
        const email = "demo@gmail.com"
        const password = "123456"
        emailLogin(email, password)
          .then(result => {
            const profile = result.user;
            getToken(profile.email)
            const userInfo = {
              name: profile.displayName,
                role:"Buyer",
                email: profile.email,
                isVerified:false
            }
            navigate('/')
          })
        .catch(err=>toast.error(err.message))
      }
      return {user,logOut,handleDemoLogin,role};
}
