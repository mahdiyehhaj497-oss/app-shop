import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "https://fakestoreapi.com/products";
const token = Cookies.get("token")

const api = axios.create({
    headers: {
        "Content_Type": "application/json",
        Authorization: `Bearer${token}`
    },
}); api.interceptors.response.use(
    (res) => {
        console.log(res)
        return {
            data: res.data,
            status:res.status,
            }
        
    },
    (err) => {
        if (err == 403) {
            location.href="./singin"
        }
    }
)
export default api