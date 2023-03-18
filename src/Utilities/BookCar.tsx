import Swal from "sweetalert2";
import { carInfo } from "../types/data.types";


export const bookCar = (info: carInfo) => {
  fetch("https://usedcarzone-server.vercel.app/orders", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((res) => res.json())
    .then((data) => {
      Swal.fire("Thank You!", "Car booked successfully!", "success");
    });
};
