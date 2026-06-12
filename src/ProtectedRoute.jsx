import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";


export default function ProtectedRoute() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token, navigate]);

    return <Outlet />;
}
// export default function ProtectedRoute() {
//     const token = useMemo(() => {
        
//         return Cookies.get("token")
//     }, [])
    
//     const navigate = useNavigate()
    
//     useEffect(() => {
        
//         if (!token) {
//             navigate("singin")
//         }
//     }, [token ,navigate])
//     return <Outlet/>
// }


