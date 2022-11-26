import toast from "react-hot-toast"
import Swal from "sweetalert2"


export const addProduct = (product) => {
    fetch('http://localhost:3001/add_product', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(product)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire(
                'Thank You!',
  'Product added successfully!',
  'success'
            )
            
        })
    .catch(err=>toast.error(err.message))
}