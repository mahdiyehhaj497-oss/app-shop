import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import useGetProduct from "../Hooks/useGetProduct"
import useDeleteProduct from "../Hooks/useDeleteProduct"
import { useState } from "react";
import usePostProduct from "../Hooks/usePostProduct";
import { useForm } from "react-hook-form";
import usePutProduct from "../Hooks/usePutProduct";
import Loading from "../compponents/shared/Loading"

export default function AdminPanel() {

  const { data, isLoading } = useGetProduct()
  const { mutateAsync:createMutation } = usePostProduct()
  const{mutateAsync:updateMutation}=usePutProduct()
const{mutate}=useDeleteProduct()
  const [editing, setEditing] = useState(null)
  const { register, reset, handleSubmit } = useForm()
  

  function deleteFn(productId) {
  mutate(productId)
  }
  
  function updateProductSubmitHandler(formData) {
    if (editing == true) {
      createMutation(formData).then(() => {
        setEditing(null)
        reset()
      })
    } else {
      updateMutation({ ...formData, id: editing.id }).then(() => {
        setEditing(null)
        reset()
    })}
    
  }

  if (isLoading) {
    return <Loading/>
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

            {editing && (
              <div
                onClick={() => setEditing(null)}
                className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex flex-wrap justify-center items-center bg-white p-4 rounded-2xl  "
                >
                  <form onSubmit={handleSubmit(updateProductSubmitHandler)}>
                    <div className="my-4">
                      <label htmlFor="title" className="font-semibold">
                        Products title:
                      </label>
                      <input
                        className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                        type="text"
                        id="title"
                        {...register("title")}
                      />
                    </div>
                    <div className="my-4">
                      <label htmlFor="description" className="font-semibold">
                        Products Description:
                      </label>
                      <input
                        className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                        type="text"
                        id="description"
                        {...register("discription")}
                      />
                      <div className="my-4">
                        <label htmlFor="price" className="font-semibold">
                          Products price:
                        </label>
                        <input
                          className="w-full px-2 border-2 border-blue-950 rounded-2xl"
                          type="text"
                          id="price"
                          {...register("price")}
                        />
                      </div>

                      <Button type="submit">submit</Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
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