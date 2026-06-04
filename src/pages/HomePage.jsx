import { Link } from "react-router-dom";
import Navbar from "../compponents/shared/Navbar";

export default function HomePage() {
    return (
      <>
        <div className="bg-[url('public/engin-akyurt-Hlkuojv_P6I-unsplash.jpg')] bg-no-repeat bg-cover bg-center h-screen">
          <Navbar />

          <div >
            <Link to="/product">
              <button>Show Producs</button>
            </Link>
          </div>
        </div>
      </>
    );
}