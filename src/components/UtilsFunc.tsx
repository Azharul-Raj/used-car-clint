import { useContext } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useRole from '../hooks/useRole';
import { errorTypes } from '../types/error.types';
import { getToken } from '../Utilities/GetToken';



export const UtilsFunc=()=> {
  
    const navigate = useNavigate();
    const data = useContext(AuthContext);
    const user=data?.user;
    const logOut=data?.logOut;
    const [role] = useRole(data?.user?.email);
    const handleDemoLogin = () => {
        const email = "demo@gmail.com"
        const password = "123456"
        data?.emailLogin(email, password)
          .then((result: { user: any; }) => {
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
        .catch((err: errorTypes)=>toast.error(err.message))
      }
      return {user,logOut,handleDemoLogin,role};
}
