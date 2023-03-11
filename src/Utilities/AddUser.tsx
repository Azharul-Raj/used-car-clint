import { userType } from "../types/data.types"


export const addUser = (user:userType) => {
    fetch(`https://usedcarzone-server.vercel.app/users?email=${user?.email}`, {
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            
        })
    .catch(err=>console.log(err))
}