import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const makeSeller = (id:string, func:any) => {
  fetch(`https://usedcarzone-server.vercel.app/make_seller/${id}`)
    .then((res) => res.json())
    .then((data) => {
      Swal.fire(
        "Congratulation!",
        "Product advertise successfully!",
        "success"
      );
      func();
    })
    .catch((err) => toast.error(err.message));
};
