import axios from 'axios'
export const API_URL =  "https://46.219.127.6:10111"
console.log(API_URL)

const $api = axios.create({
    baseURL: API_URL,
})
export default $api;