import toast from "react-hot-toast"
import Swal from "sweetalert2"

export const sellerDelete = (id,name, func) => {
    fetch(`https://usedcarzone-server.vercel.app/seller/${id}?name=${name}`, {
        method:"DELETE"
    })
        .then(res => res.json())
        .then(data => {
            Swal.fire(
                'Thank You!',
  'Seller DELETED successfully!',
  'success'
            )
            func()
        })
    .catch(err=>toast.error(err.message))
}