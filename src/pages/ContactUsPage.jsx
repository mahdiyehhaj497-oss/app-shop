import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../compponents/shared/Navbar"

export default function ContactUsPage() {
    return (
      <>
        <div>
          <div>
            <Navbar />
          </div>
          <div className="flex justify-center items-center">
            <div className="ml-64 flex flex-col  ">
              <div className="flex flex-row mb-8">
                <div className="px-4"><Phone color="blue" /></div>
                  
                <span>+98 912 123 4567</span>
              </div>
              {/* space */}
              <div className="flex justify-center items-center">
                <span>
                  <Mail />
                </span>
                <span>Info@example.com</span>
              </div>
              {/* space */}
              <div className="flex justify-center items-center">
                <span>
                  <MapPin />
                </span>
                <span>123 Street ,Tehran,Iran</span>
              </div>
            </div>
            <div className="flex  items-center justify-center">
              <img
                src="public/vecteezy_contact-icon-illustration-stock-vector_32184284.svg"
                className="w-1/2 h-1/2 bg-transparent"
              />
            </div>
          </div>
        </div>
      </>
    );
}