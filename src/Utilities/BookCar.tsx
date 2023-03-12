import Swal from "sweetalert2";

interface carInfo {
  name: string;
  email: string;
  carId: string;
  sellerName: string;
  brand: string;
  carName: string;
  price: number;
  phone: string;
  meetingLocation: string;
}

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
