// /product_delete/
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export const ProductDelete = (id: string | any, func: any) => {
    axios.delete(`https://usedcarzone-server.vercel.app/product_delete/${id}`,{
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>{
        if(res?.data)
        Swal.fire("Thank You!", "Product DELETED successfully!", "success");
        func();
    })
    .catch((err) => toast.error(err.message));
};
