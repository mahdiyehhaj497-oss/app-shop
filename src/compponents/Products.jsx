
import { useEffect, useState } from "react"
import CardProduct from "./CartProduct"
import axios from "axios"



export default function Product() {
    const [searchVal, setSearchVal] = useState("")
    const[getProduct,setGetProduct]=useState([])
    
    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get("https://fakestoreapi.com/products")
            setGetProduct(res.data)
        }
        getProduct()
    },[])

    return (
        <>
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
