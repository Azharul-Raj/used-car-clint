// /product_delete/
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const ProductDelete = (id:string, func:any) => {
    fetch(`https://usedcarzone-server.vercel.app/product_delete/${id}`, {
        method: "DELETE",
        headers: {
            "content-type":"application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Thank You!',
  'Product DELETED successfully!',
  'success'
            )
            func()
        })
    .catch(err=>toast.error(err.message))
}