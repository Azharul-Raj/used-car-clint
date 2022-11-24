export const addUser = (user) => {
    fetch(`http://localhost:3001/users?email=${user?.email}`, {
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
        })
    .catch(err=>console.log(err))
}