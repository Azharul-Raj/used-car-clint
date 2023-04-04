import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const productAdvertise = (id:string|any, func:any) => {
    // fetch(`https://usedcarzone-server.vercel.app/update/${id}`, {
    //     method: "PUT",
    //     headers: {
    //         "content-type":"application/json"
    //     }
    // })
    // .then(res => res.json())
    axios.put(`/update/${id}`)
        .then(res => {
            if(res?.data)
            Swal.fire(
                'Congratulation!',
  'Product advertise successfully!',
  'success'
            )
            func()
        })
    .catch(err=>toast.error(err.message))
}