import api from "../lib/axios"
 const getPopularProperty=async()=>{
try{
    const respose=await api.get("/api/projects/popular?query[latitude]=12.97&query[longitude]=77.59&query[radius]=50000&pagination[page]=1&pagination[perPage]=10")
    return respose.data;
}catch(error){
    console.error("API Errror",error);
    throw error;
}
 };
 export default getPopularProperty;
