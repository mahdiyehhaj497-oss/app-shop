export default function Form() {
    return (
      <>
        <form onSubmit={handleSubmit()}>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Name
            </label>
            <input type="text" className="bg-gray-500 rounded-2xl h-8" />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Username
            </label>
            <input type="text" className="bg-gray-500 rounded-2xl h-8" />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Password
            </label>
            <input type="text" className="bg-gray-500 rounded-2xl h-8" />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Confirmpassword
            </label>
            <input type="text" className="bg-gray-500 rounded-2xl h-8" />
          </div>

          <div className=" flex justify-center items-center pb-8 mt-10 text-gray-300 text-xl font-bold ">
            <button className="mx-1" type="submit">
              register
            </button>
            <button>/</button>
            <button className="mx-1">restart</button>
          </div>
        </form>
      </>
    );
}