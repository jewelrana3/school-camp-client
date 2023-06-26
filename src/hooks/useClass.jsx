import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const useClass = () => {
    const {loading} = useContext(AuthContext)
    const {data : classes = [], isLoading : loadings, refetch} = useQuery({
        queryKey : ['classes'],
        enabled : !loading,
        queryFn : async()=>{
            const res = await fetch('http://localhost:4000/allclass',{
               headers : {
                authorization : `Bearer ${localStorage.getItem('access-token')}`
               }
            })
            return res.json();
        }
    })

    return [classes, loadings , refetch]
};

export default useClass;