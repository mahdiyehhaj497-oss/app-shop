export default function CardProduct({ title, image, price, category, description }) {
  return (
    <>
      <div className="group flex items-center justify-center p-4 w-3/5  bg-gray-700 mx-10 my-10 border-2 border-gray-600 relative">
        <img className="object-contain w-1/4 mr-7" src={image} />
        <div>
          <span>{category}</span>
          <h1 className="text-white">{title}</h1>
          <span>{price}</span>
        </div>
        <div
          className="absolute left-0 top-0 bg-black/60 w-full h-full hidden p-6
                group-hover:flex flex-wrap  text-white font-medium"
        >
          <div className=" ml-auto ">
            <button className="bg-red-950 px-4 py-2 rounded-3xl">
              {Math.floor(Math.random() * 100)}%
            </button>
          </div>

          {description}
        </div>
      </div>
    </>
  );
}
