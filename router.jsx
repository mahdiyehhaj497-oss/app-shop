import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";

import react from "react"
import ProductPage from "./src/pages/ProductPage";
import AboutPage from "./src/pages/AboutPage";
import SinginPage from "./src/pages/SinginPage";
const routes =createBrowserRouter([{
    
    path: "/",
    element: <HomePage/>
}, {
    path: "/product",
    element:<ProductPage/>
    }, {
    path: "/aboutus",
        element:<AboutPage/>
    },
    {
        path: "/singin",
        element:<SinginPage/>
    }
])


export default routes