import { useEffect, useState } from "react";
import Navbar from "../compponents/shared/Navbar";
import useGetProduct from "../Hooks/useGetProduct";
import CartProduct from "../compponents/CartProduct"

let tmo
export default function ProductPage() {
  const [filterPost, setFilterPost] = useState([])
  const[searchVal,setSearchVal]=useState("")
  const { isLoading, isError, data } = useGetProduct()
  
useEffect(() => { 
    if (data?.data) {
      setFilterPost(data.data)
    }
  }, [data])

  useEffect(() => {
    if (tmo) {
      clearTimeout(tmo)
    }
    tmo=setTimeout(() => {
      setFilterPost((data?.data || []).filter((item) => item.title.includes(searchVal)))
    },1000);

  },[data , searchVal])

    return (
      <>
        <div className="bg-slate-700">
          <div>
            <Navbar />
          </div>
          <div className="flex justify-center items-center mt-10  ">
            <input
              className="bg-gray-500 w-3/5 h-8 rounded-2xl p-4 text-gray-100"
              type="text"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
              placeholder="Please Enter as you want"
            />
          </div>
          <div className="flex flex-wrap  items-center justify-center ">
            {filterPost.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                description={item.description}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </>
    );
}