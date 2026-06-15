import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../compponents/shared/Navbar"
import Footer from "../compponents/shared/Footer"

export default function ContactUsPage() {
    return (
      <>
        <div className="bg-[url('public/quino-al-4SNUcHPiC8c-unsplash.jpg')] bg-center bg-cover h-screen flex items-center justify-center">
          <div className="mb-32">
            <div className="mb-40">
              <Navbar />
            </div>
            <div className="flex flex-row my-8">
              <div className="mx-4 text-gray-600  ">
                <Phone size={48} />
              </div>
              <div className="text-2xl font-semibold text-gray-500">
                +98 912 234 5678
              </div>
            </div>
            <div className="flex flex-row my-8">
              <div className="mx-4 text-gray-600 ">
                <Mail size={48} />
              </div>
              <div className="text-2xl font-semibold text-gray-500">
                fake@example.com
              </div>
            </div>
            <div className="flex flex-row my-8">
              <div className="mx-4 text-gray-600 ">
                <MapPin size={48} />
              </div>
              <div className="text-2xl font-semibold text-gray-500">
                123 Street, Tehran,Iran
              </div>
            </div>
          </div>
            </div>
            <Footer/>
      </>
    );
}