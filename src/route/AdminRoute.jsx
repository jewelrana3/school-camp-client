
import { useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";


const PrivateRoute = ({ children }) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;