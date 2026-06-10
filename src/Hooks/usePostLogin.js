import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function usePostLogIn() {
    const navigate = useNavigate()
    const mutationFn = async ({ username, password }) => {
        const { data } = await api.post("/auth/login", {
            username,
            password
        }, {
            headers: {
                "Content-Type" :"multipart/form-data"
            }
        })
    } 

    return useMutation({
        mutationFn,
        onSuccess: (respons) => {
            Cookies.set("token", respons.token, { expires: 1 })
            navigate("/admin-panel")
        },
        onError:()=>{}
    })
}