import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useRole = (email) => {
    // states
    const [role, setRole] = useState('User');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://usedcarzone-server.vercel.app/user/role/${email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.position)
                    setIsLoading(false);
                })
            .catch(err=>toast.error(err.message))
        }
    }, [email])
    return [role, isLoading];
};

export default useRole;