import axios from "axios";

export const getToken = (email) => {
    axios.get(`/jwt?email=${email}`)
        .then(data => {
            // console.log(data);
        localStorage.setItem('token',data.data.token)
    })
}