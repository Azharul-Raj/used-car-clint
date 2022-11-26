import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const buyerDelete = (id, func) => {
  fetch()
    .then((res) => res.json())
    .then((data) => {
      Swal.fire("Thank You!", "Buyer DELETED successfully!", "success");
      func();
    })
    .catch(err=>toast.error(err.message))
};
