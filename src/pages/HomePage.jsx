import { Link } from "react-router-dom";
import Navbar from "../compponents/shared/Navbar";
import { ShoppingBag } from "lucide-react";

export default function HomePage() {
    return (
      <>
        <div className="bg-[url('engin-akyurt-Hlkuojv_P6I-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-screen relative">
          <Navbar />

          <div className="flex justify-center items-center ">
            <Link to="/product">
              <button className="mt-12 bg-white rounded-3xl h-10 w-40  font-bold text-gray-500 ">
                Show Producs
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute top-1/15 right-1/12">
          <Link to="/cart">
            <ShoppingBag size={40} color="#8d8b8b" />
           </Link>
        </div>
      </>
    );
}