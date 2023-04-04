import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


export const buyerDelete = (id:string, func:any) => {
  // fetch(`https://usedcarzone-server.vercel.app/buyer/${id}`, {
  //   method:"DELETE"
  // })
  //   .then((res) => res.json())
  axios.delete(`/buyer/${id}`)
    .then((res) => {
      if(res?.data)
      Swal.fire("Thank You!", "Buyer DELETED successfully!", "success");
      func();
    })
    .catch(err=>toast.error(err.message))
};
