
import { useEffect, useState } from "react"
import CardProduct from "./CartProduct"
import axios from "axios"
import useGetProduct from "../Hooks/useGetProduct"
import Navbar from "./shared/Navbar"

let tmo
export default function Product() {
    const [searchVal, setSearchVal] = useState("")
    const [filterdPost, setFilteredPost] = useState([])
    const{data,isLoading,isError}=useGetProduct()
    
    // useEffect(() => {
    //     const getProduct = async () => {
    //         const res = await axios.get("https://fakestoreapi.com/products")
    //         setGetProduct(res.data)
    //     }
    //     getProduct()
    // },[])
    useEffect(() => {
        if (data?.data) {
        setFilteredPost(data.data)
    }
    }, [data])
    
    useEffect(() => {
        if (tmo) {
            clearTimeout(tmo)
        }
        tmo == setTimeout(() => {
            setFilteredPost((data?.data || []).filter((item)=>item.title.includes(searchVal)))
        },1000)
    },[data,searchVal])


    return (
        <>
            
<Navbar/>

            <input type="text"
                value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
            />

            {
                getProduct.map((item) => (
                    <CardProduct
                        key={item.id}
                        title={item.title}
                        image={item.image}
                    />
                ))
            }
        </>
    )
}
