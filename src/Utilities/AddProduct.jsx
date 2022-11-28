import toast from "react-hot-toast"
import Swal from "sweetalert2"


export const addProduct = (product) => {
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
            )
            
        })
    .catch(err=>toast.error(err.message))
}