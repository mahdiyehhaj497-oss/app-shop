import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import { parseAst } from "vite";


const routes = createBrowserRouter[{
    element: <Layout />,
    Children: [
        {
        path: "/",
        element:<Home/>
        }, {
            path: "/products",
            element: <ProducsPage />,
            children: [
                {
                    path: "id",
                    element:<SinglePage/>
                }]}
        , {
            path: "/admin-panel",
            element: <ProtectedRoute />,
            children: [{
                index: true,
                element:<AdminPanel/>
            }]
        }, {
            path: "/cart",
            element:<Cart/>
        }, {
            path: "payment",
            element:<Payment/>
        }, {
            path: "/singin",
        element:<Singin/>
        }
        
    ]
}]

export default routes