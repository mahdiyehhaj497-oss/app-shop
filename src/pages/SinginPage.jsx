import { ContactRound } from "lucide-react";
import Navbar from "../compponents/shared/Navbar";
import Form from "../compponents/Form";

export default function SinginPage() {
    return (
      <>
        <div className="bg-slate-700 h-screen ">
          <Navbar />
          <div className="flex items-center justify-center mt-10">
            <ContactRound color="#faf9f9" size={140} strokeWidth={1 / 2} />
          </div>

          <Form/>
        </div>
      </>
    );
}