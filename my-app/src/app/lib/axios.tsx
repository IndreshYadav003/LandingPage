import axios from "axios"
 const api=axios.create({
    baseURL:"https://propstoxx-next-639395118020.asia-south1.run.app",
    headers:{
        "Content-Type":"application/json"
    },
    timeout:8000
});
export default api;
