import axios from "axios";
import { toast } from "react-hot-toast";

export const getToken = (email:string) => {
    axios.get(`/jwt?email=${email}`)
        .then(res => {
            if(res?.data)
        localStorage.setItem('token',res.data.token)
    }).catch(err=>toast.error(err.message))
}