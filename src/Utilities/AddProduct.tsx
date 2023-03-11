import toast from "react-hot-toast"
import { Navigate} from "react-router-dom"
import Swal from "sweetalert2"
import { productType } from "../types/data.types"


export const addProduct = (product: productType) => {
    fetch('https://usedcarzone-server.vercel.app/add_product', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(product)
    })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Thank You!',
                'Product added successfully!',
                'success'
            );
                < Navigate to = '/dashboard/products' />;
        })
    .catch(err=>toast.error(err.message))
}