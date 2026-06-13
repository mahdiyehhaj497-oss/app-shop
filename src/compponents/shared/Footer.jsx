import { ShoppingCart } from "lucide-react";

export default function Footer() {
    return (
      <>
        <div className="bg-zinc-900">
          <div className=" text-white flex items-center justify-center">
            <div className=" grid grid-cols-4 gap-4  py-8">
              <div className="flex flex-col mx-16">
                <h1 className="mt-2 font-semibold text-lg ">Get to Know Us</h1>
                <span className="mt-2">Careers</span>
                <span className="mt-2">Blog</span>
                <span className="mt-2">About Appshop</span>
                <span className="mt-2">Investor Relations</span>
                <span className="mt-2">Appshop Devices</span>
                <span className="mt-2">Appshop Science</span>
              </div>
              <div className="flex flex-col mx-16">
                <h1 className="mt-2 font-semibold text-lg">
                  Make Money with Us
                </h1>
                <span className="mt-2">Sell products on Appshop</span>
                <span className="mt-2">Sell on Appshop Business</span>
                <span className="mt-2">Sell apps on Appshop</span>
                <span className="mt-2">Become an Affiliate</span>
                <span className="mt-2">Advertise Your Products</span>
                <span className="mt-2">Self-Publish with Us</span>
                <span className="mt-2">Host an Appshop Hub</span>
                <span className="mt-2">›See More Make Money with Us</span>
              </div>
              <div className="flex flex-col mx-16">
                <h1 className="mt-2 font-semibold text-lg">
                  Appshop Payment Products
                </h1>
                <span className="mt-2">Appshop Business Card</span>
                <span className="mt-2">Shop with Points</span>
                <span className="mt-2">Reload Your Balance</span>
                <span className="mt-2">Appshop Currency Converter</span>
              </div>
              <div className="flex flex-col mx-16">
                <h1 className="mt-2 font-semibold text-lg">Let Us Help You</h1>
                <span className="mt-2">Appshop and COVID-19</span>
                <span className="mt-2">Your Account</span>
                <span className="mt-2">Your Orders</span>
                <span className="mt-2">Shipping Rates & Policies</span>
                <span className="mt-2">Returns & Replacements</span>
                <span className="mt-2">Help</span>
              </div>
            </div>
          </div>
          <div className=" flex justify-center items-center border-t-2 border-zinc-700  mx-8  ">
              <div className="my-6 mx-14">
                <ShoppingCart color="white"/>
              </div>

              <button className="text-white my-6 border-gray-600 border-2 px-4 py-1 mx-4">
                English
              </button>
              <button className="text-white my-6 border-gray-600 border-2 px-4 py-1">
                United State
              </button>
            
          </div>
        </div>
      </>
    );
}