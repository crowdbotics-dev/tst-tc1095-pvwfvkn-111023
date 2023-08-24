import axios from "axios"
const tSTTCpvwfvknsmq = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
