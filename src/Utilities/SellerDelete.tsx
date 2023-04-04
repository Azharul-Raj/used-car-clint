import axios from "axios"
import toast from "react-hot-toast"
import Swal from "sweetalert2"

export const sellerDelete = (id:string,name:string, func:any) => {
    // fetch(`https://usedcarzone-server.vercel.app/seller/${id}?name=${name}`, {
    //     method:"DELETE"
    // })
    //     .then(res => res.json())
    axios.delete(`/seller/${id}?name=${name}`)
        .then(res => {
            if(res?.data)
            Swal.fire(
                'Thank You!',
  'Seller DELETED successfully!',
  'success'
            )
            func()
        })
    .catch(err=>toast.error(err.message))
}