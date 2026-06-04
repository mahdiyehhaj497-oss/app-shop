import { Link } from "react-router-dom";
import Navbar from "../compponents/shared/Navbar";

export default function HomePage() {
    return (
      <>
        <div className="bg-[url('public/engin-akyurt-Hlkuojv_P6I-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-screen">
          <Navbar />

          <div className="flex justify-center items-center ">
            <Link to="/product">
              <button className="mt-12 bg-white rounded-3xl h-10 w-40  font-bold text-gray-500 ">Show Producs</button>
            </Link>
          </div>
        </div>
      </>
    );
}