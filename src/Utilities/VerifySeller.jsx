import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const verifySeller = (name, func) => {
    fetch(`https://usedcarzone-server.vercel.app/verify/${name}`, {
      method:"PUT"
  })
    .then((res) => res.json())
        .then((data) => {
        console.log(data);
      Swal.fire("Verified!", "success");
      func();
    })
    .catch((err) => toast.error(err.message));
};
