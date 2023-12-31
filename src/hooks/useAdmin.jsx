import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";



// const useAdmin =()=>{
//     const {user} = useContext(AuthContext)
//     const [axiosSecure] =useAxiosSecure();

//     const {data : isAdmin, isLoading : isAdminLoading} = useQuery({
//         queryKey : ['isAdmin', user?.email],
//         queryFn : async ()=> {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`)
//             ('is admin response ',res)
//             console.log(res)
//             return res.data.admin
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                console.log('is admin response', res);
                return res.data.admin;
            } catch (error) {
                console.error('Error fetching admin status:', error);
                throw error; // Rethrow the error to indicate that the query failed.
            }
        }
    });
    return [isAdmin, isAdminLoading];
}

export default useAdmin