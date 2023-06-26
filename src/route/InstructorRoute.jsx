
import { useContext } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const PrivateRoute = ({ children }) => {
    const [insInstructor, isInstructorLoading] = useInstructor();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && insInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;