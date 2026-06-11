import {useMutation, useQueryClient } from "@tanstack/react-query";
import usePostLogin from "../Hooks/usePostLogin";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"

const schema = yup.object().shape({
  username: yup.string().required("username is required !!!"),
  firstname: yup.string().min(3, "min length for  name is 3"),
  password: yup.string().min(5, "you need 5 charecter"),
  confirmpassword:yup.string().required("confirm password is required").oneOf([yup.ref("password")],"password must be matched")
  
})
export default function Form() {

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode:"onBlur"
  })

  const { data, isPending, mutate } = usePostLogin()
  
  function submitHandler(formData) {
    console.log( "submited",formData)
    mutate({username:formData.username , password:formData.password})
  }
  const queryClient=useQueryClient()
    return (
      <>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="firstname">
              Name
            </label>
            <input
              type="text"
              id="firstname"
              {...register("firstname")}
              className="bg-gray-500 rounded-2xl h-8 px-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username")}
              className="bg-gray-500 rounded-2xl h-8 px-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password")}
              className="bg-gray-500 rounded-2xl h-8 px-2"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-6 ">
            <label
              className="text-gray-300 mb-3 font-medium text-xl "
              htmlFor="name"
            >
              Confirmpassword
            </label>
            <input
              type="password"
              id="confirmpassword"
              {...register("confirmpassword")}
              className="bg-gray-500 rounded-2xl h-8 px-2"
            />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
          </div>
          <div className=" flex justify-center items-center pb-8 mt-10 text-gray-300 text-xl font-bold ">
            <input type="submit" value="register" className="w-20" />
            <button>/</button>
            <button onClick={() => reset()} className="mx-1">
              restart
            </button>
          </div>
        </form>
      </>
    );
}