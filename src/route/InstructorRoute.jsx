
import { useContext } from "react";
import { Navigate,useLocation } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

import useInstructor from "../hooks/useInstructor";
import Loader from "../pages/Loader";


const InstructorRoute = ({ children }) => {
    const [insInstructor, isInstructorLoading] = useInstructor();
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    

    if(loading || isInstructorLoading){
        return <Loader></Loader>
    }

    if (user && insInstructor) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;