import Swal from "sweetalert2";

export const bookCar = (info) => {
    fetch('https://usedcarzone-server.vercel.app/orders', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(info)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Thank You!',
                'Car booked successfully!',
                'success'
              )
    })
}