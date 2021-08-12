import axios from 'axios'

export const api_key = 'key=94be80fba927475c9a851756a736f7a6'
const baseURL = 'https://api.rawg.io/api/'
const axiosInstance = axios.create({
    baseURL,
    timeout: 5000 
})

export default axiosInstance