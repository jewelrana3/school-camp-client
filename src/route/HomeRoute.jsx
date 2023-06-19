import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const HomeRoute = () => {
    const { loading } = useContext(AuthContext);
   if(loading){
    return <progress className="progress w-56"></progress>
   }
};

export default HomeRoute;