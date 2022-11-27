import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const addReport = (id, func) => {
    fetch(`http://localhost:3001/report/${id}`, {
      method:"PUT"
  })
    .then((res) => res.json())
    .then((data) => {
      Swal.fire("Thank You!", "Reported successfully!", "success");
      func();
    })
    .catch((err) => toast.error(err.message));
};
