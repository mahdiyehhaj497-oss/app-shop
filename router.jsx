import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import HomePage from "./src/pages/HomePage";

import react from "react"
import ProductPage from "./src/pages/ProductPage";
import AboutPage from "./src/pages/AboutPage";
import SinginPage from "./src/pages/SinginPage";
import ProtectedRoute from "./src/ProtectedRoute";
import AdminPanel from "./src/compponents/AdminPanel"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/aboutus",
    element: <AboutPage />,
  },
  {
    path: "/singin",
    element: <SinginPage />,
  },
  {
    path: "/admin-panel",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <AdminPanel />,
      },
    ],
  },
]);

export default routes