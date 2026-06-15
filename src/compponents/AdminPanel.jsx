import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import useGetProduct from "../Hooks/useGetProduct"
import useDeleteProduct from "../Hooks/useDeleteProduct"
import { useState } from "react";
import usePostProduct from "../Hooks/usePostProduct";
import { useForm } from "react-hook-form";
export default function AdminPanel() {

  const { data, isLoading } = useGetProduct()
  const{mutateAsync:createMutation}=usePostProduct()
const{mutate}=useDeleteProduct()
  const [editing, setEditing] = useState(null)
  const{register,reset, handleSubmit}=useForm()

  function deleteFn(productId) {
  mutate(productId)
}

    return (
      <>
        <div className="bg-slate-800">
          <Navbar />

          <div className="flex flex-col items-center justify-center   ">
            {data?.data.map((product) => (
              <div
                className="flex items-center justify-center rounded-3xl px-10 py-6 my-8 bg-slate-500 w-3/5"
                key={product.id}
              >
                <img className="w-52" src={product.image} />
                <div className="flex flex-col px-4">
                  <span className="text-lg text-gray-900 font-semibold">
                    {product.title}
                  </span>
                  <span className="font-semibold text-white">
                    {product.description}
                  </span>
                  <div className="flex items-center justify-center mb-3 mt-3">
                    <span className="font-bold text-2xl">{product.price}$</span>
                  </div>

                  <div className="flex justify-center items-center mx-6">
                    <button
                      onClick={() => deleteFn(product.id)}
                      className="mx-6 h-8 w-20 bg-rose-950 text-white font-semibold rounded-2xl"
                    >
                      Deleted
                    </button>
                    <button
                      onClick={() => {
                        reset({
                          title: product.title,
                          description: product.description,
                          price: product.price,
                        });
                        setEditing(product);
                      }}
                      className="mx-6 h-8 w-20 bg-yellow-500 text-white font-semibold rounded-2xl"
                    >
                      Edited
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center pb-8">
            <button
              className="mx-6 h-8 w-40 bg-green-800 text-white font-semibold rounded-2xl"
              onClick={() => {
                (reset(), setEditing(true));
              }}
            >
              Add new Product
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
}