import axios from "axios";
import Cookies from "js-cookie";

const baseURL = 'https://fakestoreapi.com';
// const token=Cookies.get("token")
const token=localStorage.getItem("token")
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});

api.interceptors.response.use(
    (res) => {
        
        return {
            data: res.data,
            status:res.status,
        }
    },
    (err) => {
        if (err === 403) {
            location.href="./singin"
        }
    }

)
export default api