import Swal from "sweetalert2";
import { carInfo } from "../types/data.types";
import axios from "axios";
import { toast } from "react-hot-toast";


export const bookCar = (info: carInfo) => {
  // fetch("https://usedcarzone-server.vercel.app/orders", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(info),
  // })
  //   .then((res) => res.json())
  axios.post(`/orders`)
    .then((res) => {
      if(res?.data)
      Swal.fire("Thank You!", "Car booked successfully!", "success");
    }).catch(err=>toast.error(err.message))
};
