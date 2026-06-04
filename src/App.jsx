import { RouterProvider } from "react-router-dom";
import Navbar from "./compponents/shared/Navbar";
import routes from "../router";


export default function App() {
  return (
    <>
  <RouterProvider router={routes}></RouterProvider>
  
    </>
  )
}