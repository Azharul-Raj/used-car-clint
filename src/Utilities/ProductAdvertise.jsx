import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const productAdvertise = (id, func) => {
    console.log(id);
    fetch(`https://usedcarzone-server.vercel.app/update/${id}`, {
        method: "PUT",
        headers: {
            "content-type":"application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Congratulation!',
  'Product advertise successfully!',
  'success'
            )
            func()
        })
    .catch(err=>toast.error(err.message))
}