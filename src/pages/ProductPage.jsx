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
    if (tmo) {
      clearTimeout(tmo)
    }
    tmo=setTimeout(() => {
      setFilterPost((data?.data || []).filter((item) => item.title.includes(searchVal)))
    },1000);

  },[])

    return (
      <>
        <div className="bg-[url('engin-akyurt-Hlkuojv_P6I-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-screen">
          <div><Navbar/></div>
          <div>

            <input type="text"
              onChange={(e) => setSearchVal(e.target.value)}
              value={searchVal}
            />
            <div>
              {filterPost.map((item) => (
                <CartProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  
                />
))}
            </div>
          </div>
        </div>
      </>
    );
}