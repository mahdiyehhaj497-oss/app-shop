import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";

import react from "react"
import ProductPage from "./src/pages/ProductPage";
const routes =createBrowserRouter([{
    
    path: "/",
    element: <HomePage/>
}, {
    path: "/product",
    element:<ProductPage/>
}
])


export default routes