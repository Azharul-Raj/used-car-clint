export const addPayment = (info) => {
    fetch(`https://usedcarzone-server.vercel.app/payments`, {
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