
import { useContext } from "react";
import { Navigate,useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Loader from "../pages/Loader";


const AdminRoute = ({ children }) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if(loading || isAdminLoading){
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;