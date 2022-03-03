import axios from "axios";

const api = axios.create ({ 
    baseURL: 'https://my-json-server.typicode.com/nofaro/buddy-pets'
})

export default api;