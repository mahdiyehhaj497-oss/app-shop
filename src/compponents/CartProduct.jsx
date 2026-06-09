import { ShoppingBag } from "lucide-react";


export default function CardProduct({ title, image, price, category, description,id }) {
  return (
    <>
      <div className="group flex items-center justify-center p-4 w-3/5  bg-gray-700 mx-10 my-10 border-2 border-gray-600 relative">
        <img className="object-contain w-1/4 mr-7" src={image} />
        <div className="mb-auto mt-10">
          <span className="font-bold text-3xl text-gray-900">{category}</span>
          <h1 className="text-gray-300 text-xl mt-4 mb-4">{title}</h1>
          <span className="text-lg font-bold mt-4">{price}$</span>
        </div>
        <div
          className="absolute left-0 top-0 bg-black/60 w-full h-full hidden p-6
                group-hover:flex items-center justify-center flex-wrap  text-white font-medium"
        >
          <div className=" ml-auto ">
            <button className="bg-red-950 px-4 py-2 rounded-3xl">
                          {Math.floor(Math.random() * 100)}%
            
            </button>
          </div>
          {description}
          <div className="flex items-center justify-center ">
            <button className="text-lg bg-green-950 py-2 px-4 rounded-2xl">
              Add
            </button>
            <button className="mx-5">
              <ShoppingBag />
            </button>
            <button className="items-center text-lg bg-red-950 py-2 px-4 rounded-2xl">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
