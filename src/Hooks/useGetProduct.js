import { useQuery } from "@tanstack/react-query";
import api from "../api";

export default function useGetProduct() {

    const queryFn = async () => {
        return await api.get("products")
    }

    return useQuery({
        queryFn,
        queryKey:["getallproduct"]
    })
}