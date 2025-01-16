import axios from 'axios';


const API = axios.create({baseURL:"https://ayucare-backend.vercel.app/"})


export const getMedicines = (data)=>  API.post("/medicine", data)
export const getPharmacologicalProperties = (data)=> API.get(`/medicine/properties?name=${data}`)