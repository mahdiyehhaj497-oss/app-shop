import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
export default function Navbar() {
    return (
      <>
        <div className="flex flex-row justify-center items-center font-bold text-gray-500 text-2xl">
          <div className="mt-8">
            <Link to="/">
              <span className="mx-4">Home</span>
            </Link>
            <Link to="/singin">
              <span className="mx-4">Singin</span>
            </Link>
            <Link to="/aboutus">
              <span className="mx-4">About Us</span>
            </Link>
            <Link to="/contactus">
              <span className="mx-4">Contact Us</span>
            </Link>
            
          </div>
        </div>
      </>
    );
}