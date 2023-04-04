import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const addReport = (id:string|any, func:any) => {
  //   fetch(`https://usedcarzone-server.vercel.app/report/${id}`, {
  //     method:"PUT"
  // })
  //   .then((res) => res.json())
  axios.put(`/report/${id}`)
    .then((res) => {
      if(res.data)
      Swal.fire("Thank You!", "Reported successfully!", "success");
      func();
    })
    .catch((err) => toast.error(err.message));
};
