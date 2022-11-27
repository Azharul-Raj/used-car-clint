import toast from "react-hot-toast"
import Swal from "sweetalert2"

export const sellerDelete = (id, func) => {
    fetch(`http://localhost:3001/seller/${id}`, {
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