import toast from "react-hot-toast"
import { Navigate} from "react-router-dom"
import Swal from "sweetalert2"
import { productType } from "../types/data.types"
import axios from "axios"


export const addProduct = (product: productType) => {
    // fetch('https://usedcarzone-server.vercel.app/add_product', {
    //     method: "POST",
    //     headers: {
    //         "content-type":"application/json"
    //     },
    //     body:JSON.stringify(product)
    // })
    //     .then(res => res.json())
    axios.post(`/add_product`,product,{
        headers:{
            "Content-Type":"application/json"
        }
    })
        .then(res => {
            if(res.data)
            Swal.fire(
                'Thank You!',
                'Product added successfully!',
                'success'
            );
                < Navigate to = '/dashboard/products' />;
        })
    .catch(err=>toast.error(err.message))
}