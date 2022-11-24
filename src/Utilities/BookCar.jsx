export const bookCar = (info) => {
    fetch('http://localhost:3001/orders', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(info)
    })
        .then(res => res.json())
        .then(data => {
        console.log(data);
    })
}